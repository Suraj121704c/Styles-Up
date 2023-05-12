import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AccountInfo = () => {
  const [details, setDetails] = useState({
    Name: "Hemensan",
    EmailId: "hemen@gmail.com",
    Phone: "6264866332",
    Password: "hemen",
  });
  const [show, setShow] = useState(false);
 
 
  const handleClick = () => setShow(!show);
  
 
 
  return (
    <Box
      
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      // bg={"#0c0e1f"}
      bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"  
    >
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'
        margin={"auto"}
        textAlign={"center"}
      >
         Admin Account
      </Text>
      <Text color={"pink.700"} textAlign={"center"} >Admin</Text>
      <Box textAlign={"center"} mt={"30px"}>
        <Avatar
          size={"2xl"}
          src="https://avatars.githubusercontent.com/u/111531676?v=4"
          alt="admin"
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        ></Avatar>
        <SimpleGrid
          width={{ base: "90%", md: "85%", lg: "40%" }}
          m={"auto"}
          mt={"20px"}
          gap={3}
        >
          <Input color={"gray.600"} readOnly value={details.Name}></Input>
          <Input color={"gray.600"} readOnly value={details.EmailId}></Input>
          <Input color={"gray.600"} readOnly value={details.Phone}></Input>
          <InputGroup size="md">
            <Input
              color={"gray.600"}
              readOnly
              pr="4.5rem"
              type={show ? "text" : "password"}
              value={details?.Password}
            />
            <InputRightElement width="4.5rem">
              <Box onClick={handleClick} cursor={"pointer"}>
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Box>
            </InputRightElement>
          </InputGroup>
          
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AccountInfo;
