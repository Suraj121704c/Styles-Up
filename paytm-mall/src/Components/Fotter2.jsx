import React from "react";
import { FaInstagram, FaDove, FaFacebookF } from "react-icons/fa";
import { Text, Image, Box } from "@chakra-ui/react";

export const Footer2 = () => {
  return (
    <div>
        <Box marginTop={"20px"}>
        <Box
          w="100%"
          h="auto"
          bg="#000042"
          fontFamily="sans-serif"
          pl="95px"
          pr="95px"
        >
          <Box display="flex" gap="8%">
            <Text border="1px" borderColor="gray.200" w="30%"></Text>
            <Text border="1px" borderColor="gray.200" w="30%"></Text>
            <Text border="1px" borderColor="gray.200" w="30%"></Text>
          </Box>
          <Box display="flex" mb="2%">
            <Box
              display="flex"
              fontFamily="sans-serif"
              w="60%"
              mt="2%"
              gap="20%"
            >
              <Box>
                <Text color="#F4F4F4" fontSize="20px" mb="3%">
                  Services
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  Store Locator
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  Enter My Power
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  Buying Guide
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  Frame Size
                </Text>
              </Box>
              <Box>
                <Text color="#F4F4F4" fontSize="20px" mb="3%">
                  About Us
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  We Are Hiring
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  Refer & Earn
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  About Us
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  Lenskart Coupons
                </Text>
              </Box>
              <Box>
                <Text color="#F4F4F4" fontSize="20px" mb="3%">
                  Help
                </Text>
                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">
                  FAQ's
                </Text>
              </Box>
            </Box>
            <Box h="30%" w="25%" bg="" mt="2%" ml="14%">
              <Box display="flex" flexDirection="column" p="5%">
                <Box display="flex" flexDirection="row" gap="2%" bg="" pl="18%">
                  <Image src="https://static.lenskart.com/media/desktop/img/play-store.svg"></Image>
                  <Image src="https://static.lenskart.com/media/desktop/img/app-store.svg"></Image>
                </Box>

                <Box
                  color="#FCFCFC"
                  fontSize="14px"
                  fontFamily=""
                  mt="5%"
                  bg=""
                >
                  <Text ml="12">Download Lenskart App to buy</Text>
                  <Text ml="4%">Eyeglasses, Sunglasses and Contact Lenses</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box border="1px" borderColor="gray.200" w="100%"></Box>
          <Box display="flex" gap="16%" mt="2%" cursor="pointer">
            <Box
              color="#FFFFFF"
              fontSize="14px"
              display="flex"
              bg=""
              w="40%"
              gap="8%"
            >
              <Box>T & C</Box>
              <Box>Privacy</Box>
              <Box>Desclaimer</Box>
            </Box>
            <Box
              color="#FFFFFF"
              display="flex"
              bg=""
              w="30%"
              gap="10%"
              ml="13%"
              pl="10%"
            >
              <Box fontSize="18px" fontWeight="bold">
                FOLLOW US AT
              </Box>
              <Box>
                <FaFacebookF />
              </Box>
              <Box>
                <FaInstagram />
              </Box>
              <Box>
                <FaDove />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
