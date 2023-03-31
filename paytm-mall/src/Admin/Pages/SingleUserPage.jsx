
import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import {Navbar} from "..Components/Navbar"
export const SingleUserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  if (isLoading) {
    return <div>Loading ...</div>;
  }


  
  return (
    <div>
   
   {/* <Navbar/> */}

   <Box bg='#f4f4f4'>

<Box fontSize='xl'>SingleProductPage</Box>
<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} w='100%' mt='30px'>
    <Box p='20px' display='flex' h='450px' bg='white'>
        <Image border='1px solid gray' src={productData.img} alt="image" w='80px' h='80px' />
        <Image className="hoverToIncreaseWidth" mt='70px' ml={{ base: '10px', sm: '20px', md: '70px', lg: '80px' }} src={productData.img} alt="image" w='200px' h='300px' />
    </Box>
    <Box align='left' bg='white' p='10px'>
        <Text fontSize='2xl' as='b'>{productData.description}</Text>
        <br />
        <Text fontSize='lg' as='b'>Brand: {productData.brand}</Text>
        <br />
        <Text fontSize='sm' as='mark' >{productData.category}</Text>
        <Text fontSize='xl'>Gender: {productData.gender}</Text>
        <Box display='flex'>
            <Text as='b' fontSize='xl'>Original-Price: </Text>
            <Text display='flex' justifyContent='center' alignItems='center' ml='20px' bg='red' borderRadius='2px' color='white' fontSize='xl' width='120px' as='b' > ₹{productData.originalPrice}</Text></Box>
        <Box mt='10px' display='flex'><Text as='b' fontSize='xl'>Discounted-Price: </Text>
            <Text fontSize='xl' display='flex' justifyContent='center' alignItems='center' ml='20px' bg='green' borderRadius='2px' color='white' width='120px' as='b'> ₹{productData.discountPrice}</Text>

        </Box><Text fontSize='xs' color='gray'>inclusive of all Taxes</Text>
        <Box mt='60px'>
            <Link to="/cart">
                <Button className='addtocart' color='white' m='10px' background='#ef4e28' variant='solid' w='70%' onClick={sendCart}>  Add To Cart  </Button>
            </Link>
        </Box>
    </Box>
    <Box bg='#f4f4f4' m='40px' p='20px' borderRadius='8px' border='1px solid gray' align='left' w={{ base: '260px', sm: '250px', md: '200px', lg: 'max-content' }} h={{ base: '250px', sm: '300px', md: 'max-content', lg: 'max-content' }}>
        <Text p='10px'>Top Selling Products on Tales & Stories</Text><hr />
        <Text p='10px'>More Products</Text><hr />
        <Text p='10px'>Best sellers & Top Offers on Tales & Stories</Text>
    </Box>
</SimpleGrid>

{/* =========================Footer section start here================================== */}
{/* <Footer/> */}

</Box>
    </div>
  )
}


