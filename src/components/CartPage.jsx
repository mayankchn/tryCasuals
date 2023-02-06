import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../api";
import CartList from "./CartList";
import EmptyCartPage from "./EmptyCartPage";

const CartPage = ({ cart }) => {
    // console.log(cart)

    // const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const promises = Object.keys(cart).map((pid) => {
            return getProduct(pid)
        })
    
        const promise = Promise.all(promises)
    
        promise.then((responses) => {
            setProducts(responses)
        })
    },[cart]) 

    return (
        <div className="max-w-6xl mx-auto my-5 border bg-white">
            <CartList products={products} cart={cart} />
        </div>
    )
}
export default CartPage