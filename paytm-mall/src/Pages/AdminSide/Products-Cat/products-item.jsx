import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
//import { BsCheck2All } from "react-icons/bs";
const ProductItems = ({
  i,
  _id,
  product_name,
  product_price,
  product_img,
  product_desc,
  product_rating,
  product_type,
  user_ID,
  product_weight,
  handleToggleStatus,
  handleOpenDetails,
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
          <Text>{_id}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "13%", lg: "10%" }}
          onClick={() => {
            handleOpenDetails(_id, product_name, product_price, product_img);
          }}
        >
          <Image width={"100%"} src={product_img} alt={user_ID}></Image>
        </Box>
        <Box
          width={{ base: "10%", md: "27%", lg: "25%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(_id, product_name, product_price, product_img);
          }}
        >
          <Text>{product_name}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "8%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(_id, product_name, product_price, product_img);
          }}
        >
          <Text>$ {product_price}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "15%", lg: "15%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{product_type}</Text>
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
            handleOpenDetails(_id, product_name, product_price, product_img);
          }}
        >
          <Image
            width={{ base: "60%", sm: "40%" }}
            src={product_img}
            alt={product_img}
          ></Image>
          <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
            $ {product_price}
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
              {product_price}
            </Text>
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              {product_type}
            </Text>
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              ID- {_id}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItems;
