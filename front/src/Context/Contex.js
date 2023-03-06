import { createContext, useState, useEffect } from "react";
import { localStorageService } from "../service/localStorageService"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const ApiContext = createContext()

export const ApicontextProvider = (props) => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')
  const [cart, setCart] = useState([])
  const [responseProducts, setResponseProducts] = useState([])
  const products = responseProducts
  const [countProducts, setCountProducts] = useState(0)

 
  useEffect(()=>{
    const cart = localStorageService.get('cartItems')
    setCart(cart || [])
    const totalQuantity =cart ? cart.reduce((acc, item) => {
      return acc + item.quantity
    },0)
    : 0
    setCountProducts( totalQuantity )
  },[])

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------


  
  
  useEffect(() =>{
    const getProductList = () =>{
      fetch(`http://localhost:5000/api/products`)
      .then((res) => res.json())
      .then((res) => {
        const newData = res.map((item)=>{
          return { ...item, quantity: 0}
        })
        setResponseProducts(newData)
        
      }
      )
    }
    getProductList()
    
  },[])


  function obtenerEstrellas(valor) {
    if (valor < 0 || valor > 5) {
      return "Error: el valor debe estar entre 0 y 5";
    }
  
    const entero = Math.floor(valor);
    const fraccion = valor - entero;
  
   
    let estrellas = [];
    for (let i = 0; i < entero; i++) {
      estrellas.push(<FaStar />);
    }
  
    
    if (fraccion > 0.25 && fraccion <= 0.75) {
      estrellas.push(<FaStarHalfAlt />);
    }
  
    
    if (fraccion > 0.75) {
      estrellas.push(<FaStar />);
    }
  
    return estrellas;
  }
  



  return(
    <ApiContext.Provider value={{ response, products, setCart, cart, countProducts, setCountProducts, obtenerEstrellas }}>
      {props.children}
    </ApiContext.Provider>
  )
}