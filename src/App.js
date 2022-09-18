import React from "react";
import "./index.css";
import {useFormik} from "formik";

// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
    const formik = useFormik({
      initialValues: {
        emailField: '',
        pswField: ''
      },
      onSubmit: values => {
        console.log('form:', values);
      },
      validate: values => {
        let errors = {};
        if(!values.emailField) errors.emailField = 'Field Required';
        if(!values.pswField) errors.pswField = 'Field Required';
        return errors;
      }
    });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        
        {formik.errors.emailField ? <div style={{color: 'red'}}> {formik.errors.emailField}</div>: null}

        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        
        {formik.errors.pswField ? <div style={{color: 'red'}}> {formik.errors.pswField}</div>: null}

        <div>
        <button id="submitBtn" type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
