import React from 'react'
import { Box, Button, Grid, GridItem, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import { useGet } from '../../hooks/useGet'
const url=`https://growup.onrender.com/orders`
const Cart = () => {
  const { isLoading, products , serverError } = useGet(url);

  console.log(products);
  return (
    <div>



    </div>
  )
}

export default Cart