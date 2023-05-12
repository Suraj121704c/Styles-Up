import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";

export default function Payment() {
  return (
    <>
      <Navbar2 />
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text">
          200
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Payment SuccessFull
        </Text>
        <Text color={"gray.500"} mb={6}>
          Thanks for Shopping with us...
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid">
          <Link to="/">GO TO HOME</Link>
        </Button>
      </Box>
    </>
  );
}

//    <Button></Button>
