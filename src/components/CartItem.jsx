import React, { memo } from "react";
import {RxCrossCircled} from "react-icons/rx"

const CartItem = ({imgUrl,title,price,quantity}) => {
    return (
        <div className="flex flex-col gap-1 border text-secondary-500 text-sm lg:flex lg:flex-row lg:items-center">
            <div className="text-3xl border px-3 py-2 lg:w-1/6 lg:border-none">
                <RxCrossCircled></RxCrossCircled>
            </div>
            <div className="w-20 h-20 px-3 py-2 flex mx-auto sm:hidden lg:block lg:w-1/6 lg:border-none">
                <img src={imgUrl} alt="" className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="border px-3 py-2 flex justify-between lg:w-1/2 lg:border-none">
                <span className="font-semibold lg:hidden">Product : </span><span>{title}</span>
            </div>
            <div className="border px-3 py-2 flex justify-between lg:w-1/6 lg:border-none">
                <span className="font-semibold lg:hidden">Price : </span><span>${price}</span>
            </div>
            <div className="border px-3 py-2 flex justify-between lg:w-1/6 lg:border-none">
                <span className="font-semibold lg:hidden">Quantity : </span><span>{quantity}</span>
            </div>
            <div className="border px-3 py-2 flex justify-between lg:w-1/6 lg:border-none">
                <span className="font-semibold lg:hidden">Subtotal : </span><span>{quantity}</span>
            </div>
        </div>
    )
}
export default memo(CartItem)