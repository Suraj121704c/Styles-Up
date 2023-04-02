import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress, Box, Grid} from '@chakra-ui/react'
 import {FiEdit, FiUserX} from 'react-icons/fi';
import SingleProduct from './AdminSingleProduct';
 
 
import { deleteProduct, getProducts, updateProduct } from '../../Redux/Admin/actions';

const ManageProducts = () => {
  const { isLoading, isError, products } = useSelector(store => store.AdminReducer );
  const dispatch = useDispatch();
  const toast = useToast();
  const [Data, setData] = useState(products)
  useEffect(() => {
    dispatch(getProducts) 
  }, [])
  console.log(products)

  const handleEdit =   (id , editValue ) => {
    // console.log("id:", id);
     dispatch(updateProduct(id, editValue)).then(()=> {
      dispatch(getProducts()) 
     })
       
   const  editProduct=products.map((item,id)=>(
      item.id===id ? {...item, price :  editValue } : item 
   ))

   setData(editProduct);
    toast({
      title: "Price Added Successfully.",
      description: "Price is edited successfully",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };
 

  const handleDelete = (id) => {
    try {
      dispatch(deleteProduct(id));
      toast({
        title: 'Product Deleted',
        description: `Product has been deleted successfully`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `Product has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }
 
  return (
    <Box ml={[5,10,40]} w={[500,900,1500]} bg={"blue.900"} >
      <Heading size={'md'} color={"white"}>Manage Products</Heading>
 
      {
      isLoading ? <CircularProgress 
        alignItems={"center"}
        m={300}
      isIndeterminate color='green.300' /> : 

      isError  ? <h2>Error Occured while getting product list</h2> : 
  
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
              {Data?.map(product=>( 
                  <SingleProduct key={product.id} 
                  product={product}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  />
               ))}
            </Tbody>
          </Table>
        </TableContainer>
          }
    </Box >
  )
}

export default ManageProducts;