import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
//import { BsCheck2All } from "react-icons/bs";
const ProductItems = ({
   id,
   Brand,
   title,
   discount,
   price,Category,image1,rating,handleDelete,handleOpenDetails
}) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
      cursor={"pointer"}
    >
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        textAlign={"left"}
        padding={"10px"}
      >
        <Box
          width={{ base: "10%", md: "10%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{discount}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "13%", lg: "10%" }}
          onClick={() => {
            handleOpenDetails(id, discount ,
              price,
             image1)
          }}
        >
          <Image width={"100%"} src={image1} alt={Category}></Image>
        </Box>
        <Box
          width={{ base: "10%", md: "27%", lg: "25%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(id, discount ,
              price,
             image1)
          }}
        >
          <Text>{Brand}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "8%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(id, discount ,
              price,
             image1)
          }}
        >
          <Text>$ {price}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "15%", lg: "15%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{Category}</Text>
        </Box>
        <Box w={{ base: "5%", md: "15%", lg: "10%" }} 
        onClick={()=> handleDelete(id)}
        >
           <DeleteIcon  w={6} h={7} />
        </Box>
      </Box>
      {/* ```````````````````````````````small screen ``````````````````````````````````*/}

      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        p={"10px"}
      >
        {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
        <Box
          width={{ base: "50%", sm: "40%" }}
          onClick={() => {
            handleOpenDetails(id, image1, price, title);
          }}
        >
          <Image
            width={{ base: "60%", sm: "40%" }}
            src={image1}
            alt={title}
          ></Image>
          <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
            $ {price}
          </Text>
        </Box>
        {/* ```````````````````````````````````right Div````````````````````````````` */}
        <Box
          w={{ base: "50%", sm: "60%" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
        >
          <Box>
            <Text as="b" fontSize={{ base: "13px", sm: "14px" }}>
              {Brand}
            </Text>
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              {Category}
            </Text>
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              ID- {id}
            </Text>
          </Box>

          <Button
            mt={"10px"}
            size={"sm"}
        onClick={()=> handleDelete(id)}
            
          >
               <DeleteIcon/>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItems;

