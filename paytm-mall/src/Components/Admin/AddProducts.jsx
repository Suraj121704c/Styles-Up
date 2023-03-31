import React, { useState } from 'react'
import { FormControl, Input, Heading, FormLabel, Button, useToast, Flex, Box, Image, Stack, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Admin/actions';
// import { addProduct } from '../../redux/Admin/actions';
const initForm = {
  description: '',
  brand: '',
  img: '',
  originalPrice: '',
  discountPrice: '',
  category: ''
}
const AddProducts = () => {
  const dispatch = useDispatch();

  const toast = useToast();

  const [form, setForm] = useState(initForm);
  const price = form.originalPrice.split('-');
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const discount = form.originalPrice - form.discountPrice;
    const discountPercent = discount / form.originalPrice * 100;
    form.originalPrice = `${form.originalPrice}-${discountPercent.toFixed(2)}%` 
    try {
      dispatch(addProduct(form))
      toast({
        title: 'Product Added',
        description: `${form.description} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.description} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }

  return (
    <Box bg={"blue.900"} pl={80 } pr={80} w={"100%"} >
      <Heading size='md' color={"white"} >Add New Product</Heading>
      <Box  >
        <form onSubmit={formSubmitHandler}>
          <Stack  >
            <FormControl isRequired>
              <FormLabel m={2} color={"white"}>Product Name</FormLabel>
              <Input m={2} type='text'
                name='description'
                background='#fff'
                onChange={formChangeHandler}
                value={form.description}
                placeholder="Enter Product Name"
              />

              <FormLabel m={2} color={"white"} > Product Brand</FormLabel>
              <Input m={2} type='text' name='brand' background='#fff' onChange={formChangeHandler}
                value={form.brand}
                placeholder="Enter Product Brand" />
              <FormLabel color={"white"} >Product Image Link</FormLabel>

              <Input m={2} type='url' name='img' background='#fff' onChange={formChangeHandler}
               value={form.img} 
               placeholder="Enter Product Image"
               />
              <FormLabel color={"white"} >Product Original Price</FormLabel>

              <Input m={2} type='number' name='originalPrice' background='#fff' 
              onChange={formChangeHandler} 
              value={form.originalPrice} 
              placeholder="Enter Product Price"
              />
              <FormLabel m={2} color={"white"} >Product Discount %</FormLabel>

              <Input m={2} type='number' name='discountPrice' background='#fff' onChange={formChangeHandler} value={form.discountPrice} 
               placeholder="Enter  Discount %"
              />
              <FormLabel color={"white"} >Product Category</FormLabel>

              <Input m={2} type='text' name='category' background='#fff'
               onChange={formChangeHandler} 
               value={form.category}
               placeholder="Enter Product Category"
              />
              <Button m={2} type='submit' colorScheme='teal' marginTop='2' color={"white"}>Add New Product</Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default AddProducts;