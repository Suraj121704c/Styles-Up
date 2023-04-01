import React from 'react'
import { Box, Button, Grid, GridItem, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import { useGet } from '../../hooks/useGet'
const url=`https://growup.onrender.com/orders`
const Cart = () => {
  const { isLoading, products , serverError } = useGet(url);

  console.log(products);
  return (
    <div>
    {products.map((el)=>{
      return (
          <div key={el.id}>
            
      <img src={el.image1} alt="image1" />
            </div>
    )})}


    </div>
  )
}
// "image1": "https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWVIGHNAHARTA-VIGH1196979EA0CDD9/1562708763888_0..jpg?imwidth=282&impolicy=hq",
// "Brand": "Vighnaharta",
// "title": "Silver Brass Ring",
// "price": 249,
// "MRP": "1163",
// "Category": "jewellary",
// "rating": 4.7,
// "quantitiy": 1,
// "id": 1

export default Cart