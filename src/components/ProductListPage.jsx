import React from "react"
import { useState } from "react"
import { getProducts } from "../api"
import Loading from "./Loading"
import ProdctList from "./ProductList"

function ProdctListPage() {

    const [query, setQuery] = useState("")
    const [sort, setSort] = useState("default")
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useState(() => {
        console.log("product list page running...")
        const p = getProducts()
        p.then((products) => {
            setProducts(products)
            setLoading(false)
        })
    }, [])

    const filtData = products.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1
    })

    function handleQuery(event) {
        setQuery(event.target.value)
    }

    function handleSort(event) {
        setSort(event.target.value)
    }

    if (sort === "name") {
        filtData.sort((x, y) => {
            return x.title < y.title ? -1 : 1;
        })
    }
    if (sort === "L2H") {
        filtData.sort((x, y) => {
            return x.price - y.price;
        })
    }
    if (sort === "H2L") {
        filtData.sort((x, y) => {
            return y.price - x.price;
        })
    }

    if(loading){
        return <Loading />
    }

    return (
        <div className="max-w-6xl mx-auto border bg-white px-3 py-2 sm:px-7 sm:py-5 my-5">
            <div className="flex gap-2 w-11/12 mx-auto justify-between">
                <select
                    value={sort}
                    className="border indent-2 rounded py-2 "
                    onChange={handleSort}>
                    <option value="default">default sort</option>
                    <option value="name">name</option>
                    <option value="L2H">price:low to high</option>
                    <option value="H2L">price:high to low</option>
                </select>
                <input
                    type="text"
                    className="border indent-2 py-2 w-40 rounded"
                    placeholder="search by title"
                    value={query}
                    onChange={handleQuery}
                />
            </div>
            {filtData.length > 0 ? <ProdctList filtData={filtData} /> : <div className="border my-10 pt-10 h-screen mx-auto text-2xl text-secondary-500 flex justify-center">No results for "{query}".Try checking your spelling or use more general terms</div>}
        </div>
    )
}
export default ProdctListPage