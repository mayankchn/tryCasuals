import React from "react";
import { Link } from "react-router-dom";

const EmptyCartPage = () => {
    return (
        <section className="p-5">
            <div className="container max-w-6xl mx-auto border">
                <div className="flex flex-col gap-1 items-center border h-screen justify-center">
                    <p>Your cart is currently empty.</p>
                    <Link to="/"><button className="font-semibold text-white bg-primary-500 px-2 py-1 rounded">RETURN TO SHOP</button></Link>
                </div>
            </div>
        </section>
    )
}
export default EmptyCartPage