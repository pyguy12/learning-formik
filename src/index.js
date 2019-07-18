import React from "react";
import ReactDOM from "react-dom";
// import withFormik and Yup
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

// Formik injects a lot of props into your component. Here, we're destructuring the value prop.
// Formik also gives us handleChange which is what we use instead of writing our own onChange handler. You have to have handleChange to make your form writable.
// We are also given a handleSubmit function we can pass to our onSubmit listeners. However, we do have to write the middleware for it ourselves down in our withFormik function object that's passed into it.
const App = ({ values }) => {
  return (
    // The Form component is provided by Formik and it doesn't need you to pass in handleSubmit to it. It'll use your handleSubmit function as if we passed it in.
    // Same is true for the Field component, we don't need to pass in the value or onChange handler anymore.
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button>Submit</button>
    </Form>
  );
};

// Making formik component
const FormikApp = withFormik({
  // mapPropsToValues maps whats returned in the object from the function to the values property which is then mapped to the props of our original component.
  // mapPropsToValues can also be passed props which in this case we have destructured. The prop we passed in was an email prop in the FormikApp component in our render method below.
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      // This 'email' key is the same as the name attribute for our input.
      email: email || "",
      password: password || "",
      newsletter: newsletter || true,
      plan: plan || "free"
    };
  },
  // The first parameter is the values that are returned from the form inputs.
  handleSubmit(values) {
    console.log(values);
  }
})(App);

// We're actually rendering our whatever is returned from the function that's returned from withFormik.
ReactDOM.render(<FormikApp />, document.querySelector("#root"));
