import { memo } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi"

function Header({ totalProductsQuantity }) {
    console.log('header running...')
    return (
        <div className="border bg-white p-5 lg:py-4">
            <div className="border max-w-6xl mx-auto flex items-center justify-between h-10 lg:h-16">
                <Link to="/">
                    <p className="font-bold text-4xl mb-3 self-center text-secondary-500">print</p>
                </Link>
                <Link to="/cart">
                    <div className="border flex flex-col items-center text-secondary-500 self-center">
                        <HiOutlineShoppingCart className="text-4xl"></HiOutlineShoppingCart>
                        <span className="-m-12 text-secondary-500 self-center">{totalProductsQuantity}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default memo(Header)