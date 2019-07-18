import React from "react";
import ReactDOM from "react-dom";
// import withFormik and Yup
import { withFormik } from "formik";
import Yup from "yup";

// Formik injects a lot of props into your component. Here, we're destructuring the value prop.
// Formik also gives us handleChange which is what we use instead of writing our own onChange handler. You have to have handleChange to make your form writable.
const App = ({ values, handleChange }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        value={values.email}
        type="email"
        name="email"
        placeholder="Email"
      />
    </div>
  );
};

// Making formik component
const FormikApp = withFormik({
  // mapPropsToValues maps whats returned in the object from the function to the values property which is then mapped to the props of our original component.
  mapPropsToValues() {
    return {
      // This 'email' key is the same as the name attribute for our input.
      email: "test text"
    };
  }
})(App);

// We're actually rendering our whatever is returned from the function that's returned from withFormik.
ReactDOM.render(<FormikApp />, document.querySelector("#root"));
