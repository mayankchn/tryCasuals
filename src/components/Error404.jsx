import React from "react";
import { TbError404Off } from "react-icons/tb"
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="max-w-6xl mx-auto my-5 border bg-white h-screen flex justify-center items-center">
            <div className="w-2/3 h-2/3 border justify-center bg-secondary-200 mx-auto flex flex-col text-secondary-500 items-center">
                <span className="text-7xl text-primary-500"><TbError404Off></TbError404Off></span>
                <span className="text-xs uppercase">Page not found...</span>
                <Link to="/" className="mt-5"><button className="border-2 bg-primary-500 text-white font-bold px-4 py-1 rounded uppercase">
                    Go Back
                </button></Link>
            </div>
        </div>
    )
}
export default Error404