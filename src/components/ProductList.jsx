import React from "react";
import Product from "./Product";

function ProductList({filtData}) {
    // console.log("product list running...")
    return (
        <div className="grid sm:grid-cols-3 gap-5 w-11/12 mx-auto my-7">
            {filtData.map((item) => {
                return (
                    <Product
                        key={item.id}
                        id={item.id}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                    />
                )
            })}
        </div>
    )
}

export default ProductList