import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './Register.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="form-container  mt-5">
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await axios.post('http://localhost:4002/api/auth/register', values);
            alert(response.data.message);
          } catch (error) {
            setErrors({ email: error.response.data.message || 'Registration failed' });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="field-container">
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="field-container">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="field-container">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
      <div className='d-flex justify-content-center'>
      <p>Already have an account<Link to={"/login"} className='mx-5'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
