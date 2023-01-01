import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import CustomInput from '../CustomInput/CustomInput';
import { PatternFormat } from "react-number-format";

const FormWithFormik = () => {

    const initialValues = {
        name: '',
        surname: '',
        age: '',
        address: '',
        mobile: '',
        email: '',
        password: '',
    }

    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(3, 'Min 3 symbols')
            .max(20, 'Max 20 symbols')
            .required('Name field is requierd'),

        email: yup.string().email('Not valid email'),

        age: yup.number()
            .max(99, "Must be 99 or less")
            .min(16, "Must be at least 16")
            .required("Required"),

        //phoneNumber: yup.string().required("Required")
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                // console.log(values);
                resetForm();
            }}
        >

            {({ dirty, isValid }) => {

                return (
                    <Form>
                        <h2>Add Shipping Information</h2>

                        <CustomInput
                            type="text"
                            name="name"
                            placeholder="Name"
                        />

                        {/* <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <ErrorMessage name="name">{msg => <span className='error'>{msg}</span>}</ErrorMessage> */}
                        <CustomInput
                            type="text"
                            name="surname"
                            placeholder="Surname"
                        />
                        <Field
                            type="number"
                            name="age"
                            placeholder="Age"
                        />

                        <Field
                            type="text"
                            name="address"
                            placeholder="Address"
                        />
                        <PatternFormat
                            type="tel"
                            name="mobile"
                            placeholder="Mobile"
                            format="(###)###-##-##"
                        />

                        <Field
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage name="email">{msg => <span className='error'>{msg}</span>}</ErrorMessage>

                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                        />

                        <button disabled={!isValid} type="submit">Submit</button>
                    </Form>
                )
            }}

        </Formik>
    )
}

export default FormWithFormik;