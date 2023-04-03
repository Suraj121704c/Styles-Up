
import { Box, Button, Heading,} from '@chakra-ui/react';
 
import {Link} from "react-router-dom"
import Navbar2 from '../Components/Navbar2';
import { Footer2 } from '../Components/Fotter2';

export default function Payment() {
  return (
    <>
    <Navbar2 />
    <Box textAlign="center" py={10} px={6} display="flex" flexDir={"column"} alignItems="center" >
 
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Payment Success
      </Heading>
      <Button><Link to="/">GO TO HOME</Link></Button>
    </Box>
    </>
  );

}


