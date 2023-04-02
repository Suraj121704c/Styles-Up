import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress, Box, Grid} from '@chakra-ui/react'
 import {FiEdit, FiUserX} from 'react-icons/fi';
import SingleProduct from './AdminSingleProduct';
// import { getProducts } from '../../Redux/Admin/actions'; 
import { useGet } from '../../hooks/useGet';

const ManageProducts = () => {
  // const { isLoading, isError, products } = useSelector(store => store.AdminReducer);
  // const dispatch = useDispatch();
  const { isLoading,  products , serverError }=useGet("https://universal-mall-api.onrender.com/products");
  // useEffect(() => {
  //   dispatch(getProducts);
  // }, [])

  console.log(products)
  return (
    <Box ml={[5,10,40]} w={[500,900,1500]} bg={"blue.900"} >
      <Heading size={'md'} color={"white"}>Manage Products</Heading>
 
      {isLoading ? <CircularProgress 
        alignItems={"center"}
        m={300}
      isIndeterminate color='green.300' /> : 

      serverError  ? <h2>Error Occured while getting product list</h2> : 
  
          <TableContainer color={"white"}  w={"100%"}>
          <Table   size={'lg'}   >
            <Thead   >
              <Tr >
                <Th color={"white"} >Photo</Th>
                <Th color={"white"} >Brand</Th>
                <Th color={"white"} >Price</Th>
                <Th color={"white"} >category</Th>
                <Th color={"white"} >discountPrice</Th>
                <Th color={"white"} >Edit</Th>
                <Th color={"white"} >Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map(product=>( 
                  <SingleProduct key={product.id} product={product}/>
               ))}
            </Tbody>
          </Table>
        </TableContainer>
          }
    </Box >
  )
}

export default ManageProducts;
