import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFlashMessage } from "./FlashMessageStore";
import { useJwt } from "./UserStore";
import * as Yup from "yup";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { useLocation } from "wouter";

export default function Profile() {
  const { showMessage } = useFlashMessage();
  const { getJwt } = useJwt();
  const [initialValues, setInitialValues] = useState({});
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const token = getJwt();
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/users/me",
        {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        }
      );
      setInitialValues(response.data.user);
    };

    fetchData();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    salutation: Yup.string(),
    country: Yup.string(),
    marketingPreferences: Yup.array().of(Yup.string()),
  });

  const submitHandler = async (actions, values) => {
    try {
      const token = getJwt();

      if (!token) {
        showMessage("You must be logged in", "danger");
        actions.setSubmitting(false);
        return;
      }

      await axios.put(import.meta.env.VITE_API_URL + "/api/users/me", values, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });

      showMessage("Details updated successfully", "success");
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Error updating details: ", error);
      actions.setErrors({
        submit: error.response?.data?.message || "An error ocurred",
      });
      actions.setSubmitting(false);
    }
  };

  const deleteHandler = async () => {
    const token = getJwt();

    await axios.delete(import.meta.env.VITE_API_URL + "/api/users/me", {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    showMessage("Account deleted", "danger");
    setLocation("/");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Profile</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        enableReinitialize
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
                ></Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                ></Field>
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
                  Marketing Country
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="form-control"
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
                <div className="alert alert-danger">{formik.errors.submit}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary me-3"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Updating..." : "Update Profile"}
              </button>
              <button className="btn btn-danger" onClick={deleteHandler}>
                Delete Account
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
