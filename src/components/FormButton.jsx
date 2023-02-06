import React, { memo } from "react";

const FormButton = ({ className, ...rest }) => {
    // console.log('rest',{...rest})
    return (
        <button className={"border px-2 py-1 text-xs rounded text-secondary-500 font-semibold " + className} {...rest}>

        </button>
    )
}
export default memo(FormButton)