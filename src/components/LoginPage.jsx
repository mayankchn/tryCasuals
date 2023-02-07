import { useFormik } from "formik";
import React from "react";
import FormButton from "./FormButton";

const LoginPage = () => {

    const callApi = () => {
        console.log("form data submitted...")
    }

    const {handleSubmit,handleReset,handleChange,values} = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
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
                        className="indent-2 px-2 py-1 border rounded"
                    />
                    <label htmlFor="email" className="sr-only">Email : </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        className="indent-2 px-2 py-1 border rounded"
                    />
                    <label htmlFor="password" className="sr-only">Password : </label>
                    <input 
                    id="password"
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    autoComplete="password"
                    className="indent-2 px-2 py-1 border rounded"
                    />
                    <div className="flex gap-2 border self-end">
                    <FormButton className="bg-primary-500" type="submit">
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