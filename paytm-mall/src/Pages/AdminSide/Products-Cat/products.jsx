import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductItems from "./products-item";
import axios from "axios";

const Products = () => {
  const toast = useToast();
  const [datas, setDatas] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [discount,setDiscount ] = useState("");
  const [price, setPrice] = useState(0);
  const [image1, SetImage] = useState("");
  const [mid, msetId] = useState("");
 
  
  // `````````````````````Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, discount ,
     price,
    image1 ) => {
    setDiscount(discount)
    setPrice(price);
    SetImage(image1);
    msetId(id);
    onOpen();
  };
  //```````````````````````````Update-Listings``````````````````````````` `

  const handleGetData = () => {
    axios
      .get(
        `https://growup.onrender.com/fashion`
      )
      .then((res) => { 
         console.log(res)
        setDatas(res.data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetData();
  }, [ ]);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://growup.onrender.com/fashion/${id}`
      )
      .then((res) => { 
        Swal.fire("Good job!", "Deleted Successfully", "success");
      })
      .catch((err) =>  Swal.fire(
        "Error",
        "Something went wrong. Please try after sometime",
        "error"
      ));
  };
 
  //```````````````````````````````````````````````````````````` submit modal data`````````````````````````````
  // product_name,
  //  product_price,
  //  product_img,
  const handleSubmitModalDetails = () => {
    let dataToSend = {
       discount : +discount,
       price: +price,
       image1 : image1,
    };

    axios
      .patch(
        `https://growup.onrender.com/fashion/${mid}`,
        dataToSend
      )
      .then((res) => {
        handleGetData();
        Swal.fire("Good job!", "Update Successfull", "success");
      })
      .catch((res) => {
        toast({
          title: "Invalid Request",
          status: "Error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

 
  return (
    <Box
    color= "pink.600"
    fontWeight={"bold"}
    bgGradient='linear(to-l, blue.100, pink.100)' 
    minH={"100vh"}
    mt={{ base: "60px", md: "0px" }}
    padding={"20px"}
    
  >
    <Heading>Products</Heading>
    <Text color={"#00b5b8"}>List of Products</Text>
  

      {/* all products append */}

      <Box>
        <SimpleGrid gap={5}>
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"left"}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            padding={"10px"}
            mt={"20px"}
          >
            <Box
              width={"6%"}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>Discount</Text>
            </Box>
             
            <Box
              width={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>IMAGE</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "27%", lg: "25%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>PRODUCTS</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "7%", lg: "8%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>PRICE</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>CATEGORY</Text>
            </Box>
            <Box
              w={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>REMOVE </Text>
            </Box>
          </Box>
          {datas.map((el, i) => (
            <ProductItems
              key={el.id}
              i={i}
              {...el}
              handleDelete={handleDelete}
              handleOpenDetails={handleOpenDetails}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Modal
         
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent  color= "pink.600"
        fontWeight={"bold"}
        bgGradient='linear(to-l, blue.100, pink.100)'  >
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image1}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image1}
                onChange={(e) => {
                  SetImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                
              </Input>
              <Text mt={"10px"}>Discount :- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={discount}
                onChange={(e) => {
                  setDiscount(e.target.value);
                  console.log(e.target.value);
                }}
              >
                   
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  console.log(e.target.value);
                }}
              >
            
              </Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmitModalDetails();
                onClose();
              }}
            >
              Save
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
 
  );
};

export default Products;
