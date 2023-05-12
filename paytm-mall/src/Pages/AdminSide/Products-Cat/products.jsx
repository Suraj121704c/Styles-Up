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
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, SetImage] = useState("");
  const [mid, msetId] = useState("");
 
  
  // `````````````````````Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, product_name,
    product_price,
    product_img ) => {
    setTitle(product_name);
    setPrice(product_price);
    SetImage(product_img);
    msetId(id);
    onOpen();
  };
  //```````````````````````````Update-Listings``````````````````````````` `

  const handleGetData = () => {
    axios
      .get(
        `https://courageous-cow-beret.cyclic.app/products`
      )
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetData();
  }, [ ]);

  //```````````````````````````````````````````````````````````` submit modal data`````````````````````````````
  // product_name,
  //  product_price,
  //  product_img,
  const handleSubmitModalDetails = (mid) => {
    let dataToSend = {
      product_name: title,
      product_price: +price,
      product_img: image,
    };

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/product/update/${mid}`,{
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`,
            "content-type" : "application/json"
          }
        },
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
    color={"pink.700"}
    fontWeight={"bold"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"      >
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Products
      </Text>
      <Text color={"#00b5b8"}>List of Products</Text>
      {/* Table of all products */}
      <Box mt={"30px"} w={"100%"}>
        <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
         
          
        </Box>

        

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
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>ID</Text>
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
            
            </Box>
         {/* map data */}
         {datas.map((el, i) => (
              <ProductItems
                key={el._id}
                i={i}
                {...el}
                handleOpenDetails={handleOpenDetails}
                
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
 
  {/* ``````````````````````````````````````````Modal`````````````````````````````````````` */}

  <Modal
      
         closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent  bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"  color={"pink.700"}>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  SetImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.image} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.details} */}
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
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmitModalDetails(mid);
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
