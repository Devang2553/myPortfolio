import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { APIURL } from "../utils/constants";

const axiosInstance = axios.create({
  baseURL: APIURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const Basic = () => (
  <Formik
    initialValues={{ email: "", password: "", name: "", message: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      const {name,email,message}=values;
      setTimeout(() => {
        axiosInstance.post('/api',{
          name,
          email,
          message
        })
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className='name'
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className='email'
          placeholder="Enter your email"
        />
        {errors.email && touched.email && errors.email}
        {/* <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password} */}

        <textarea
          name="message"
          rows="10"
          className="type-box"
          placeholder="Enter your text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        ></textarea>

        {/* <button type="submit" disabled={isSubmitting}>
          Submit
        </button> */}
        <button className="talk" disabled={isSubmitting}>
          Let's talk
        </button>
      </form>
    )}
  </Formik>
);

export default Basic;
