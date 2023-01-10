import axios from "axios";

export function getProducts(){
    return axios.get("https://dummyjson.com/products/").then((response)=>{
        return response.data.products
    })
}

export function getProduct(id){
    return axios.get("https://dummyjson.com/products/"+ id).then((response)=>{
        return response.data
    })
}