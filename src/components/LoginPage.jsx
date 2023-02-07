import { useFormik } from "formik";
import React from "react";
import FormButton from "./FormButton";
import * as Yup from "yup"

const LoginPage = () => {

    // console.log('Yup ', Yup.object().shape())

    const callApi = () => {
        console.log("form data submitted...")
    }

    const LoginSchema = Yup.object().shape({
        name:Yup.string().min(2,"too short!").max(30,"too long!").required("required!"),
        password:Yup.string().min(8,"too short!").max(15,"too long!").required('required!'),
        email:Yup.string().email("Invalid emial!").required('required!')
    })

    const {handleSubmit,errors,touched,handleChange,values,handleBlur,dirty,isValid} = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema:LoginSchema,
        onSubmit : callApi
    })

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 max-w-xs mx-auto bg-white rounded border items-center py-5">
                <h1 className="font-bold text-primary-900 text-2xl">Login to tryCasuals</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="sr-only">Name : </label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="indent-2 px-2 py-1 border rounded"
                    />
                    {touched.name && errors.name && <div className="text-primary-500 font-sm font-semibold">{errors.name}</div>}
                    <label htmlFor="email" className="sr-only">Email : </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="indent-2 px-2 py-1 border rounded"
                    />
                    { touched.email && errors.email && <div className="text-primary-500 font-sm font-semibold">{errors.email}</div>}
                    <label htmlFor="password" className="sr-only">Password : </label>
                    <input 
                    id="password"
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="password"
                    className="indent-2 px-2 py-1 border rounded"
                    />
                    {touched.password && errors.password && <div className="text-primary-500 font-sm font-semibold">{errors.password}</div>}
                    <div className="flex gap-2 border self-end">
                    <FormButton className="bg-primary-500 disabled:bg-primary-200" type="submit" disabled={!dirty || !isValid}>
                        SUBMIT
                    </FormButton>
                    <FormButton className="bg-primary-500" type="button">
                        RESET
                    </FormButton>
                </div>
                </div>
            </div>
        </form>
    )
}

export default LoginPage