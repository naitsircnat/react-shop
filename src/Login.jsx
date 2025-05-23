import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation } from "wouter";
import axios from "axios";
import { useFlashMessage } from "./FlashMessageStore";
import { useJwt } from "./UserStore";

export default function Login() {
  const { showMessage } = useFlashMessage();
  const [, setLocation] = useLocation();
  const { setJwt } = useJwt();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/api/users/login",
        values
      );
      console.log("Login successful", response.data);

      setJwt(response.data.token);

      actions.setSubmitting(false);
      showMessage("Login successful", "success");
      setLocation("/");
    } catch (error) {
      console.error("Login error:", error);
      actions.setErrors({ submit: error.response.data.message });
      actions.setSubmitting = false;
    }
  };

  return (
    <>
      <div className="container my-5" style={{ minHeight: "60vh" }}>
        <h1>Log In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {function (formik) {
            return (
              <Form>
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
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="password"
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
                  {formik.isSubmitting ? "Logging in..." : "Login"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
