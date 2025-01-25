import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFlashMessage } from "./FlashMessageStore";
import { useJwt } from "./UserStore";
import * as Yup from "yup";
import { Formik, ErrorMessage, Form, Field } from "formik";

export default function Profile() {
  const { showMessage } = useFlashMessage();
  const { getJwt } = useJwt();
  const [initialValues, setInitialValues] = useState({});

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
}
