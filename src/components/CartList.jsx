import React from "react";
import CartItem from "./CartItem";
import EmptyCartPage from "./EmptyCartPage";

const CartList = ({ products, cart }) => {
    // console.log('products ',products)
    if(products.length<1){
        return <EmptyCartPage />
    }
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-1 py-5 px-3 text-secondary-500">
            {products.length > 0 && <div className="hidden lg:flex lg:w-full lg:border lg:px-3 lg:py-2 lg:font-bold">
                <span className="w-1/6"></span>
                <span className="w-1/6"></span>
                <span className="w-1/2">Product</span>
                <span className="w-1/6">Price</span>
                <span className="w-1/6">Quantity</span>
                <span className="w-1/6">Subtotal</span>
            </div>}
            {
                products.map((product, i) => {
                    console.log("product ", product)
                    return (
                        <CartItem key={i} imgUrl={product.thumbnail} title={product.title} price={product.price} quantity={cart[product.id]} />
                    )
                })
            }
        </div>
    )
}
export default CartList