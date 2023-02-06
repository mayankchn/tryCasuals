import React, { useState } from "react";
import FormButton from "./FormButton";
import FormInputError from "./FormInputError";

const RegisterForm2 = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })
    const [errors, setErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
    })

    const handleValues = (e) => {
        // console.log('e have : ',e.target)
        const { name, value } = e.target
        console.log('name : ', name)
        console.log('value : ', value)
        if (name === "firstName") {
            setValues((prevValues) => {
                return { ...prevValues, firstName: value }
            })
            if(value.length>0){
                setErrors((prevErrors)=>{
                    return {...prevErrors,  firstNameError:""}
                })
            }
        } else if (name === "lastName") {
            setValues((prevValues) => {
                return { ...prevValues, lastName: value }
            })
            if(value.length>0){
                setErrors((prevErrors)=>{
                    return {...prevErrors,  lastNameError:""}
                })
            }
        } else {
            setValues((prevValues) => {
                return { ...prevValues, email: value }
            })
            if(value.length>0){
                setErrors((prevErrors)=>{
                    return {...prevErrors,  emailError:""}
                })
            }
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.firstName.length < 1 && values.lastName.length < 1 && values.email.length < 1) {
            console.log("000")
            setErrors((prevErrors)=>{
                return {...prevErrors,firstNameError:"first name", lastNameError:"last name", emailError:"email"}
            })
            return
        } else if (values.firstName.length < 1 && values.lastName.length < 1) {
            console.log("001")
            setErrors((prevErrors)=>{
                return {...prevErrors,firstNameError:"first name", lastNameError:"last name"}
            })
            return
        } else if (values.firstName.length < 1 && values.email.length < 1) {
            console.log("010")
            setErrors((prevErrors)=>{
                return {...prevErrors,firstNameError:"first name", emailError:"email"}
            })
            return
        } else if (values.firstName.length < 1) {
            console.log("011")
            setErrors((prevErrors)=>{
                return {...prevErrors,firstNameError:"first name"}
            })
            return
        } else if (values.lastName.length < 1 && values.email.length < 1) {
            console.log("100")
            setErrors((prevErrors)=>{
                return {...prevErrors,lastNameError:"last name", emailError:"email"}
            })
            return
        } else if (values.lastName.length < 1) {
            console.log("101")
            setErrors((prevErrors)=>{
                return {...prevErrors,lastNameError:"last name"}
            })
            return
        } else if (values.email.length < 1) {
            console.log("110")
            setErrors((prevErrors)=>{
                return {...prevErrors,emailError:"email"}
            })
            return
        } else {
            console.log("you're registered successfully with data : ", values.firstName, values.lastName, values.email)
        }
    }

    const handleReset = () => {
        console.log("form reset...")
        setValues({})
    }

    return (
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 bg-white">
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName}
                placeholder="First Name"
                onChange={handleValues}
                // onBlur={handleFirstNameBlur}
                className="indent-2 px-3 py-1 border rounded"
            />
            {errors.firstNameError && <FormInputError name={errors.firstNameError} />}
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={values.lastName}
                placeholder="last Name"
                onChange={handleValues}
                // onBlur={handleLastNameBlur}
                className="indent-2 px-3 py-1 border rounded"
            />
            {errors.lastNameError && <FormInputError name={errors.lastNameError} />}
            <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                placeholder="email"
                onChange={handleValues}
                // onBlur={handleEmailBlur}
                className="indent-2 px-3 py-1 border rounded"
            />
            {errors.emailError && <FormInputError name={errors.emailError} />}
            <div className="flex gap-2 self-right">
                <FormButton type="submit" className="bg-primary-500 text-secondary-200">SUBMIT</FormButton>
                <FormButton type="button" onClick={handleReset}>RESET</FormButton>
            </div>
        </form>
    )
}

export default RegisterForm2