import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api";
import Loading from "./Loading";
import { ImPrevious, ImNext } from "react-icons/im"
import Error404 from "./Error404";
import { memo } from "react";

const ProductDetail = ({onAddToCart}) => {
    console.log("product detail running...")

    const [quantity, setQuantity] = useState(0)

    const id = +useParams().id

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promise = getProduct(id)
        promise.then((data) => {
            setProduct(data)
            setLoading(false)
        })
        promise.catch(() => {
            setLoading(false)
        })
    }, [id])

    const handleQuantityChange = useCallback((e)=>{
        setQuantity(+e.target.value)
    },[]) 

    function handleAddToCart(){
        onAddToCart(id,quantity)
    }

    function handleQuantityOnPrevBtn(){
        setQuantity(0)
        setLoading(true)
    }
    function handleQuantityOnNextBtn(){
        setQuantity(0)
        setLoading(true)
    }

    if (loading) {
        return <Loading />
    }

    if (!product) {
        <Error404 />
    }

    return (
        <div className="max-w-6xl mx-auto my-5 border bg-white h-screen sm:py-5 lg:py-10">
            <div className="border mx-auto text-secondary-500 text-3xl py-2 px-3 sm:flex sm:w-11/12 sm:gap-8 sm:py-5 sm:px-8">
                <Link to="/"><ImPrevious></ImPrevious></Link>
            </div>
            <div className="border mx-auto py-2 px-3 sm:flex sm:w-11/12 sm:gap-8 sm:py-5 sm:px-8">
                <div className="w-full aspect-square sm:w-1/2">
                    <img src={product.thumbnail} alt="product thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3 text-secondary-500">
                    <span className="font-bold text-3xl">{product.title}</span>
                    <span className="font-bold text-xl">${product.price}</span>
                    <span>{product.description}</span>
                    <div className="flex gap-2 items-center flex-wrap">
                        <input 
                            type="number" 
                            className="border-2 py-1 rounded w-16 text-center" placeholder={1}
                            value={quantity}
                            onChange={handleQuantityChange}
                             />
                        <button
                            className="border-2 bg-primary-500 text-white font-bold px-4 py-1 rounded uppercase"
                            onClick={handleAddToCart}
                            disabled={!quantity>0}
                        >
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <span>Category : </span><span className="text-sm text-primary-500 underline font-semibold">{product.category}</span>
                    </div>
                </div>
            </div>
            <div className="border mx-auto text-secondary-500 text-3xl flex justify-between py-2 px-3 sm:flex sm:w-11/12 sm:gap-8 sm:py-5 sm:px-8">
                <span onClick={handleQuantityOnPrevBtn}>{id > 1 && <Link to={`/products/${id - 1}`}><ImPrevious></ImPrevious></Link>}</span>
                <span onClick={handleQuantityOnNextBtn}>{id < 100 && <Link to={`/products/${id + 1}`}><ImNext></ImNext></Link>}</span>
            </div>
        </div>
    )
}
export default memo(ProductDetail)