import React from "react";

const FormInputError = ({name}) => {
    return (
        <div className="text-primary-200 text-sm font-semibold">Please enter a {name}</div>
    )
}
export default FormInputError