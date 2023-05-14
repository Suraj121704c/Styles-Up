 
import React, { useState } from 'react';
import Swal from "sweetalert2";
import {
  FormControl,
  Input,
  Heading,
  FormLabel,
  Button,
  useToast,
  Flex,
  Box,
  Image,
  Stack,
  Text,
  Select
} from '@chakra-ui/react'
import axios from "axios";
const initForm = {
  title : '',
  Brand: '',
  image1 : '',
  price: '',
  discount: '',
  Category: '',
}
const categoryOptions = [
  { label: 'Jewellery', value: 'jewellery' },
  { label: 'Fashion', value: 'fashion' },
  { label: 'Home Decoration', value: 'home-decoration' },
  { label: 'Automobiles', value: 'automobiles' },
  { label: 'Electronics', value: 'electronics' },
];

const AddProducts = () => {
  const toast = useToast()

  const [form, setForm] = useState(initForm)
  const [count, setCount] = useState(50)
 
  const formChangeHandler = (e) => {
    const { name, value , type } = e.target;
    const Val=type==="number" ? Number(value) : value 
    setForm({ ...form, [name]: Val })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    try {
      axios.post(`https://growup.onrender.com/fashion/`, form )
      .then((res) => { 
        Swal.fire("Good job!", "Added Successfully", "success");
        setCount(count+1)
      })
      .catch((err) =>  Swal.fire(
        "Error",
        "Something went wrong. Please try after sometime",
        "error"
      ));
      
     
    } catch (error) {
      Swal.fire(
        "Error",
        "Something went wrong. Please try after sometime",
        "error"
      )
    }

    setForm(initForm)
  }

  return (
    <Box bgGradient="linear(to-l, blue.100, pink.100)" p={{ base: 4, md: 10 }}>
      <Heading size="md" color={'pink.600'} fontSize={{ base: 32, md: 45 }}>
        Add New Product
      </Heading>
      <Text color={'#00b5b8'}>List of Products</Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'stretch', md: 'center' }}
        justifyContent="center"
        mt={{ base: 4, md: 8 }}
      >
        <Box flex="1">
          <form onSubmit={formSubmitHandler}>
            <Stack spacing={{ base: 2, md: 4 }}>
              <FormControl isRequired>
                <FormLabel m={2} color={'red.700'}>
                  Product Name
                </FormLabel>
                <Input
                  type="text"
                  name="title"
                  bg="#fff"
                  onChange={formChangeHandler}
                  value={form.title}
                  placeholder="Enter Product Name"
                />

                <FormLabel m={2} color={'red.700'}>
                  {' '}
                  Product Brand
                </FormLabel>
                <Input
                  type="text"
                  name="Brand"
                  bg="#fff"
                  onChange={formChangeHandler}
                  value={form.Brand}
                  placeholder="Enter Product Brand"
                />
                <FormLabel color={'red.700'}>Product Image Link</FormLabel>
                <Input
                  type="text"
                  name="image1"
                  bg="#fff"
                  onChange={formChangeHandler}
                  value={form.image1}
                  placeholder="Enter Product Image"
                />
                <FormLabel color={'red.700'}>Product Original Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  bg="#fff"
                  onChange={formChangeHandler}
                  value={form.price}
                  placeholder="Enter Product Price"
                />
                <FormLabel m={2} color={'red.700'}>
                  Product Discount %
                </FormLabel>
                <Input
                  type="number"
                  name="discount"
                  bg="#fff"
                  onChange={formChangeHandler}
                  value={form.discount}
                  placeholder="Enter Discount %"
                />
                  <FormLabel color={'red.700'}>Product Category</FormLabel>
                <Select
                 type="text"
                  name="Category"
                  bg="#fff"
                  onChange={formChangeHandler}
                  value={form.Category}
                  // placeholder="Select Product Category"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                <Button
                  type="submit"
                  colorScheme="pink"
                  mt={4}
                  color="white"
                  width="100%"
                >
                  Add New Product
                </Button>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProducts;
