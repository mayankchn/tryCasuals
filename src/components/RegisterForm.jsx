import React, { useState } from "react";
import FormButton from "./FormButton";
import FormInputError from "./FormInputError";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length > 0) {
            setFirstNameError("")
        }
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length > 0) {
            setLastNameError("")
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length > 0) {
            setEmailError("")
        }
    }

    // const handleFirstNameBlur = () => {
    //     if(firstName.length<5){
    //         setFirstNameError("first name must have at least 5 characters.")
    //     }else{
    //         setFirstNameError("")
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(firstName.length<1&&lastName.length<1&&email.length<1){
            console.log("000")
            setFirstNameError("first name")
            setLastNameError("last name")
            setEmailError("email")
            return
        }else if(firstName.length < 1 && lastName.length < 1) {
            console.log("001")
            setFirstNameError("first name")
            setLastNameError("last name")
            setEmailError("")
            return
        } else if (firstName.length < 1 && email.length < 1) {
            console.log("010")
            setFirstNameError("first name")
            setLastNameError("")
            setEmailError("email")
            return
        } else if (firstName.length < 1) {
            console.log("011")
            setFirstNameError("first name")
            setLastNameError("")
            setEmailError("")
            return
        } else if (lastName.length < 1 && email.length < 1) {
            console.log("100")
            setFirstNameError("")
            setLastNameError("last name")
            setEmailError("email")
            return
        } else if (lastName.length < 1) {
            console.log("101")
            setFirstNameError("")
            setLastNameError("last name")
            setEmailError("")
            return
        }else if(email.length<1){
            console.log("110")
            setFirstNameError("")
            setLastNameError("")
            setEmailError("email")
            return
        }else{
            console.log("you're registered successfully with data : ", firstName, lastName, email)
        }
    }

    const handleReset = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
    }

    return (
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 bg-white">
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={handleFirstNameChange}
                // onBlur={handleFirstNameBlur}
                className="indent-2 px-3 py-1 border rounded"
            />
            {firstNameError.length > 0 && <FormInputError name={firstNameError} />}
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                placeholder="last Name"
                onChange={handleLastNameChange}
                // onBlur={handleLastNameBlur}
                className="indent-2 px-3 py-1 border rounded"
            />
            {lastNameError.length > 0 && <FormInputError name={lastNameError} />}
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="email"
                onChange={handleEmailChange}
                // onBlur={handleEmailBlur}
                className="indent-2 px-3 py-1 border rounded"
            />
            {emailError.length > 0 && <FormInputError name={emailError} />}
            <div className="flex gap-2 self-right">
                <FormButton type="submit" className="bg-primary-500 text-secondary-200">SUBMIT</FormButton>
                <FormButton type="button" onClick={handleReset}>RESET</FormButton>
            </div>
        </form>
    )
}

export default RegisterForm