import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import CartPage from "./components/CartPage"
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductDetail from "./components/ProductDetail"
import ProdctListPage from "./components/ProductListPage"
import RegisterForm from "./components/RegisterForm"
import RegisterForm2 from "./components/RegisterForm2"


function App() {
  console.log("app running...")

  const cartJSONObj = localStorage.getItem('myCart')
  // console.log(cartJSONObj)
  const cartObj = JSON.parse(cartJSONObj)

  const [cart, setCart] = useState(cartObj||{})

  // console.log('cart is having : ',cart)

  function handleAddToCartChange(productId,productQuantity){
    // console.log("am clicked!")
    setCart((prevCart)=>{
      // console.log('in prevCart ',prevCart)
      // console.log([productId],productQuantity)
      const prevQuantity = cart[productId]||0
      const newCart = {...prevCart,[productId]:prevQuantity+productQuantity}
      localStorage.setItem('myCart',JSON.stringify(newCart))
      return newCart
    })
  }

  const totalProductsQuantity=Object.keys(cart).reduce((previous,current)=>{
    // console.log('previous is : ',previous)
    return previous+cart[current]
  },0)

  return (
  <div className="bg-primary-200 max-w-lg mx-auto border px-10 py-7">
    {/* <Header totalProductsQuantity={totalProductsQuantity} />
    <Routes>
      <Route index element={<ProdctListPage/>}></Route>
      <Route path="/products/:id/" element={<ProductDetail onAddToCart={handleAddToCartChange} />}></Route>
      <Route path="/cart" element={<CartPage cart={cart} />}></Route>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>    
    <Footer
      year={2022}
      name="TryCasuals" 
    /> */}
    {/* <RegisterForm /> */}
    <RegisterForm2 />
  </div>
  )
}

export default App
