import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext'; // Import CartContext
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useCart(); // Get login function and isLoggedIn state from context

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
  });

  useEffect(() => {
    // If the user is already logged in, redirect to the home page or desired route
    if (isLoggedIn) {
      navigate("/");
      alert("user already logged in")
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="form-container mt-5">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await axios.post('https://project-name-backend-1-5zgo.onrender.com/api/auth/login', values);
            alert(`Login successful! Token`);
            
            // Call the login function from CartContext
            login(response.data.token);
            
            // Navigate based on user role
            if (response.data.user.role === "admin") {
              navigate("/create");
            } else {
              navigate("/");
            }
          } catch (error) {
            setErrors({ email: error.response.data.message || 'Login failed' });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="field-container">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="field-container">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      <div className='d-flex justify-content-center'>
        <p>Don't have an account? <Link to={"/register"} className='mx-5'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
