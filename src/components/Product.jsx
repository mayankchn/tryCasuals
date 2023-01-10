import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
    // console.log("product running...")

    return (
        <Link to={`/products/${props.id}`}>
            <div className="flex flex-col gap-2 max-w-md sm:max-w-xs">
                <div className="w-full max-h-96	aspect-square sm:max-h-72">
                    <img src={props.thumbnail} alt="a coffee cup" className="w-full h-full object-cover" />
                </div>
                <span>{props.category}</span>
                <span>{props.title}</span>
                <span className="flex">
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="" className="w-3" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="" className="w-3" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="" className="w-3" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="" className="w-3" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="" className="w-3" />
                </span>
                <span>${props.price}</span>
            </div>
        </Link>
    )
}

export default Product