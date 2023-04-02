import React, { useState } from 'react'

import {
  Grid, GridItem,HStack,
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
// const url = `https://growup.onrender.com/orders`
const Cart = () => {
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0);

  const getCartItems =async ()=> {
    try {
      return axios({
       method : "get" ,
       url : `https://growup.onrender.com/orders`,
      }).then((res) =>{ 
        console.log(res.data)
        setData(res.data)})
    } catch (error) {
      console.log("err") ; 
    }
}  

const handleDelete = async (id)=>{
  return axios({
   method : "delete",
   url : `https://growup.onrender.com/orders/${id}`
  }).then(()=> getCartItems());
}

useEffect(() => {
  getCartItems()
  
}, [])

// Total
useEffect(()=>{
  let Total=0;
  data?.forEach((item)=>(
   Total+= (+item.price)*(+item.quantity)
  ))
   setTotal(Total)
   console.log(typeof Total)
},[data])

const handleQuantity=(id, quantity , val)=>{
  data.map((item, index)=> (
  item.id === id ? (quantity = quantity + val ) :  quantity 
  ))
axios.patch(`https://growup.onrender.com/orders/${id}`,{
  quantity : quantity
}).then(()=> getCartItems())
 
}
  return (
    <div>

      <Box
        display={"flex"}
        justifyContent="space-between"
        bg="#F5F7F7"
        p={"2.5%"}
        gap="20px"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          width={"65%"}
          overflowY="scroll"
          boxSize={"borderBox"}
          bg="white"
          p={"30px"}
        >
          <Box
            display="flex"
            flexDir={"row"}
            alignItems="center"
            columnGap={4}
            pb="30px"
            w="100%"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2940/2940522.png"
              w={"35px"}
            />
            <Text
              fontWeight="400"
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
            >
              <Text as={"span"}></Text> Item in your Bag
            </Text>
          </Box>

          <Grid  gap={5}>
         {
          data?.map((cart)=>(
            <GridItem key={cart.id}  m={"auto"} display = "flex" boxSizing='border-box'  >
               <HStack gap={4}> 
               <Box> 
              <Image src={cart.image1} alt="cart image" h={150} w= {150} />
              </Box>
              <Box> 
               <Text fontSize={18}>{cart.Category}</Text>
              
               <Text fontSize={15}>discount :{`${cart.price}`}</Text>
         
               {/* Buttons Quantity */}
               </Box>
               </HStack>
               <HStack gap={10}> 
               <Box ml={10}>
                 
                <Button  bg={"red.700"} isDisabled = {cart.quantity===1} onClick={()=> handleQuantity(cart.id , cart.Quantity ,  -1)}>-</Button>

                <Button isDisabled>{cart.quantity}</Button>

                <Button bg={"green.700"} 
                onClick={()=> handleQuantity(cart.id , cart.quantity , 1)}>+</Button>
                  {/* <Select  onChange ={ handleChange(cart.id, cart.Quantity, ) }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select> */}
                </Box>
                <Box>
                <Text fontSize={16}>{`₹ ${cart.price * cart.quantity}`}</Text>
                </Box>
                <Box>
                <Button onClick={()=> handleDelete(cart.id)}> Remove</Button>
                </Box>
                </ HStack>
            </GridItem>
          ))
         }
          
     </Grid>
        </Box>
        <Box
          w={{ base: "100%", sm: "80%", md: "35%" }}
          left={{ sm: 0, md: 0 }}
          display={"flex"}
          flexDir="column"
          bg="#F5F7F7"
          rowGap={"25px"}
        >
          <Box p={"20px"} bg="white">
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              columnGap={4}
              pb="10px"
              borderBottom={"1px solid black"}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
                w={"35px"}
              />
              <Text fontWeight="400" fontSize={"1rem"}>
                Delivery Address
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
              border={"1px solid black"}
              mt="15%"
            >
              <Text fontWeight="400" fontSize={"1rem"}>
                Delivery to{" "}
                <Text as={"span"} fontWeight="600">
                  431703
                </Text>
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
                Change
              </Text>
            </Box>
          </Box>
          <Box p={"20px"} bg="white">
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              columnGap={4}
              pb="10px"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/7324/7324863.png"
                w={"35px"}
              />
              <Text fontWeight="400" fontSize={"1rem"}>
                Payment Summary
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
            >
              <Text fontWeight="400" fontSize={"1rem"}>
                Bag Total
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
                ₹{total}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
            >
              <Text fontWeight="400" fontSize={"1rem"}>
                Shopping Charges
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
                Free
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
            >
              <Text fontWeight="400" fontSize={"1rem"}>
                Amount Payable : {total}
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
                ₹ {total}
              </Text>
            </Box>
            <Box>
              <Button
                width={"100%"}
                bg={"#F25B22"}
                color="white"
                fontWeight={"bold"}
                fontSize={"1rem"}
                onClick={() => onOpen()}
              >
                CHECKOUT
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>ADD NEW ADDRESS</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box style={{ display: "flex", gap: "30px" }}>
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Full Name*"

                      />
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Mobile Number*"

                      />
                    </Box>
                    <Box style={{ display: "flex", gap: "30px" }}>
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Pincode*"

                      />
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="City*"

                      />
                    </Box>
                    <Box style={{ display: "flex", gap: "30px" }}>
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="State*"

                      />
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Country*"

                      />
                    </Box>
                    <Input
                      my="2"
                      type="text"
                      required
                      placeholder="Flat No/Building , Street Name*"

                    />
                    <Input
                      my="2"
                      type="text"
                      required
                      placeholder="Area/Locality*"

                    />
                    <Input
                      my="2"
                      type="text"
                      required
                      placeholder="Landmark"

                    />
                    <Text>PS. Your information is safe with us, No spam.</Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      className="modal-add-address-btn"
                      bg={"#F25B22"}
                      color="white"
                      fontWeight={"bold"}
                      fontSize={"1rem"}
                    >
                      <Link to="/payment">PAY NOW</Link>
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* {products.map((el)=>{
      return (
          <div key={el.id}>
            
      <img src={el.image1} alt="image1" />
            </div>
    )})} */}


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


