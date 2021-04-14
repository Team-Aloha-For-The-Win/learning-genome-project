//useForm.js  Custom Hook

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };


//Form.js Standard Custom form template

import React, { useState } from "react";
import { useInput } from "./useInput.js";

const Form = () => {
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");

  const resetValues = e => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={resetValues}>
      <input
        className="username-text"
        id="username"
        name="username"
        onChange={e => handleUsername(e.target.value)}
        placeholder="Username"
        type="text"
        value={username}
      />
      <input
        className="password-test"
        id="password"
        name="password"
        onChange={e => handlePassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <input
        className="email-text"
        id="email"
        name="email"
        onChange={e => handleEmail(e.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

//useForm custom hook can be used for any form application 



//alternatively I believe this holds true to this. 

//initialformvalues.js
const initialFormValues  = {
  username: "",
  password: "",
  email: "",
}


//customform.js
import React, { useState } from "react";
import { useInput } from "./useInput.js";
import initialFormValues from "./initialFormValues.js"



const CustomForm = () => {
  const [formValues, setFormValues, handleForm] = useInput(initialFormValues);


  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues)
    setFormValues(initialFormValues)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="username-text"
        id="username"
        name="username"
        onChange={e => handleForm( e.target.value )} 
        placeholder="Username"
        type="text"
        value={formValues.username}
      />
      <input
        className="password-test"
        id="password"
        name="password"
        onChange={e => handleForm(e.target.value)}
        placeholder="Password"
        type="password"
        value={formValues.password}
      />
      <input
        className="email-text"
        id="email"
        name="email"
        onChange={e => handleForm(e.target.value)}
        placeholder="Email"
        type="text"
        value={formValues.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};


//useYupValidation custom hook

//initial logic concept - untested please review

import {useState} from 'react';
import * as yup from 'yup'
import schemaValues from './schemaValues'

export const useValidation = (initialErrorValues, schemaValues) => {

const [values, setValues] = useState(initialErrorValues);


const validateChange = (e) => {
  e.persist();
  if (login) {
    //console.log(loginSchema, "login");
    yup
      .reach(schemaValues, e.target.name)
      .validate(e.target.name)
      .then((valid) => {
        //console.log(valid);
        setValues({
          ...values,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setValues({ ...values, [e.target.name]: error.errors[0] });
        console.log({ error });
      });
  }

  return [values, setValues, validateChange ]

};
}

// conditional validation snippet 

const [formErrors, setErrors] = useState(initialErrorValues)

const validateChange = (e) => {
  e.persist();
  if (login) {
    //console.log(loginSchema, "login");
    yup
      .reach(loginSchema, e.target.name)
      .validate(e.target.name)
      .then((valid) => {
        //console.log(valid);
        setErrors({
          ...formErrors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setErrors({ ...formErrors, [e.target.name]: error.errors[0] });
        console.log({ error });
      });
  } else {
    // console.log(signUpSchema, "signup");
    yup
      .reach(signUpSchema, e.target.name)

      .validate(e.target.name)
      .then((valid) => {
        //console.log(valid);
        setErrors({
          ...formErrors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setErrors({ ...formErrors, [e.target.name]: error.errors[0] });
        console.log({ error });
      });
  }
};