import React, { useEffect, useState } from "react";
import axios from "axios";
import { useJwt } from "./UserStore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFlashMessage } from "./FlashMessageStore";
import * as Yup from "yup";
import { useLocation } from "wouter";
import OrderCard from "./OrderCard";

export default function Profile() {
  const { getJwt } = useJwt();
  const [initialValues, setInitialValues] = useState({});
  const { showMessage } = useFlashMessage();
  const [, setLocation] = useLocation();
  const [orders, setOrders] = useState([]);

  const token = getJwt();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInitialValues(response.data.user);
      console.log(response.data.user);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/users/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(response.data);
      console.log(response.data);
    }
    fetchOrders();
  }, []);

  const handleDeleteAccount = async () => {
    const token = getJwt();
    await axios.delete(import.meta.env.VITE_API_URL + "/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    showMessage("Account has been deleted", "danger");
    setLocation("/");
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    salutation: Yup.string(),
    marketingPreferences: Yup.array().of(Yup.string()),
    country: Yup.string(),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const token = getJwt();
      if (!token) {
        showMessage("You must be logged in to update your profile.", "error");
        actions.setSubmitting(false);
        return;
      }

      await axios.put(import.meta.env.VITE_API_URL + "/api/users/me", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showMessage("Profile updated successfully!", "success");
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      actions.setErrors({
        submit: error.response?.data?.message || "An error occurred",
      });
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <section className="container my-5">
        <h2>My Orders</h2>

        <div className="row text-center fw-bold">
          <div className="col-12 col-md-2 border p-2">Order ID</div>
          <div className="col-12 col-md-2 border p-2">Product</div>
          <div className="col-12 col-md-2 border p-2">Qty</div>
          <div className="col-12 col-md-2 border p-2">Total Price ($)</div>
          <div className="col-12 col-md-2 border p-2">Status</div>
        </div>

        {orders.map((order, index) => (
          <div className="row text-center" key={index}>
            <div className="col-12 col-md-2 border p-2">{order.id}</div>
            <div className="col-12 col-md-2 border p-2">{order.name}</div>
            <div className="col-12 col-md-2 border p-2">{order.quantity}</div>
            <div className="col-12 col-md-2 border p-2">{order.total}</div>
            <div className="col-12 col-md-2 border p-2">{order.status}</div>
          </div>
        ))}
      </section>

      <section className="container my-5">
        <h2>Edit Profile</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize // Allows form to reinitialize with fetched profile data
        >
          {function (formik) {
            return (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="salutation" className="form-label">
                    Salutation
                  </label>
                  <Field
                    as="select"
                    id="salutation"
                    name="salutation"
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Dr">Dr.</option>
                  </Field>
                  <ErrorMessage
                    name="salutation"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="marketingPreferences" className="form-label">
                    Marketing Preferences
                  </label>
                  <Field
                    as="select"
                    id="marketingPreferences"
                    name="marketingPreferences"
                    multiple
                    className="form-control"
                  >
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                  </Field>
                  <ErrorMessage
                    name="marketingPreferences"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    id="country"
                    name="country"
                  >
                    <option value="">Select Country</option>
                    <option value="sg">Singapore</option>
                    <option value="my">Malaysia</option>
                    <option value="in">Indonesia</option>
                    <option value="th">Thailand</option>
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {formik.errors.submit && (
                  <div className="alert alert-danger">
                    {formik.errors.submit}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Updating..." : "Update Profile"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>

      <section className="container my-5">
        <h2>Delete Account</h2>
        <button className="btn btn-danger" onClick={handleDeleteAccount}>
          Confirm Deletion
        </button>
      </section>
    </div>
  );
}
