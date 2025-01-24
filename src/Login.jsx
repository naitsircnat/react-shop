import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation } from "wouter";
import axios from "axios";
import { useFlashMessage } from "./FlashMessageStore";

export default function Login() {
  const { showMessage } = useFlashMessage;
  const [, setLocation] = useLocation;

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      <h2>Login</h2>
      <p>Login form</p>
    </>
  );
}
