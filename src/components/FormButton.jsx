import React from "react";

const FormButton = ({className, ...rest}) => {
    return (
        <button
            className={"text-secondary-200 font-semibold text-sm rounded px-2 py-1 "+className}
            {...rest}
        >

        </button>
    )
}
export default FormButton