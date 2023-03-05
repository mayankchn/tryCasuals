import { Form, Formik, useFormik } from "formik";
import React from "react";
import FormButton from "./FormButton";
import * as Yup from "yup"
import Input from "./Input";

const LoginPage = () => {

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email!").required('required!'),
        password: Yup.string().min(8, "too short!").max(15, "too long!").required('required!'),
    })

    const initialValues = {
        email: "",
        password: ""
    }

    function callApi(email,passowrd) {
        console.log("form data submitted...",email,passowrd)
    }

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values)=>callApi(values.email,values.password)}
         >
            <Form>
                <div className="flex flex-col gap-2 max-w-xs mx-auto bg-white rounded-lg border items-center py-5">
                    <h1 className="font-bold text-primary-900 text-2xl">Login to tryCasuals</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="userEmail" className="sr-only">Email : </label>
                            <Input
                                id="userEmail"
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Email"
                                className="rounded-b-none"
                            />
                            <label htmlFor="userPassword" className="sr-only">Password : </label>
                            <Input
                                id="userPassword"
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                className="rounded-t-none"
                            />
                        </div>
                        <div className="flex gap-2 self-end">
                            <FormButton className="bg-primary-500 disabled:bg-primary-200" type="submit">
                                SUBMIT
                            </FormButton>
                            <FormButton className="bg-primary-500" type="button">
                                RESET
                            </FormButton>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default LoginPage