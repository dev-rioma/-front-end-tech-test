import React, {  useContext } from 'react'
import  { ApiContext } from '../../Context/Contex';
import { localStorageService } from "../../service/localStorageService";
import CartProduct from '../CartProduct/CartProduct';
import './ShoppintCart.css'

const ShoopingCart = () => {
  const { setCart, cart, countProducts, setCountProducts} = useContext(ApiContext)

  const ClearCart = () =>{
    setCart([])
    localStorageService.set('cartItems',[])
    setCountProducts(0)
  }

  return (
    <div className='container_shoppingCart'>
      <h3 className='title-shoppingCart'>Shooping Cart</h3>
      <div className='container_shoppingCart_products'>
        {cart.map((product)=>{
          return (
            <CartProduct cart={cart} setCart={setCart} key={product._id} product={product} countProducts={countProducts} setCountProducts={setCountProducts}/>
          )
        })}
      </div>
      <div className='container-shoopingCart-results'>
        <div className="container-shoopingCart-subtotal">
        <p>Subtotal: </p>
        <p>${Math.round(cart.reduce((total, product) => total + product.price* product.quantity, 0))} </p>
        </div>
        <button onClick={ClearCart} className='boton clear-btn boton'>clear cart</button>
      </div>
    </div>
  );
}

export default ShoopingCart;