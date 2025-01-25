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

  const formValidation = Yup.object({
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
}
