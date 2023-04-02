import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress, Box} from '@chakra-ui/react'
import {FiUserX} from 'react-icons/fi';
import { deleteAdmin, getAdminList } from '../../Redux/Admin/actions';
import { useGet } from '../../hooks/useGet';
const url=`https://growup.onrender.com/fashion`
// const url=`https://growup.onrender.com/orders`
const ManageAdmins = () => {
 const  { isLoading, products , serverError }=useGet(url);
   
  return (
    <Box  bg={"blue.900"}   pl={40 }  w={"100%"} h={"full"} >
      <Heading size='md' color={"white"} >Manage Orders</Heading>
      {isLoading && <CircularProgress isIndeterminate color='green.300' />}
      {serverError && <h2>Error Occured while getting Admin list</h2>}
        <div>
          { products.length > 0 && 
          <TableContainer color={"white"} >
          <Table    size={'lg'} bg={"blue.900"} >
            <Thead   >
              <Tr >
                <Th color={"white"} >id</Th>
                <Th color={"white"} >Photo</Th>
                <Th color={"white"} >Brand</Th>
                <Th color={"white"} >Price</Th>
                <Th color={"white"} >Quantity</Th>
                {/* <Th color={"white"} >Rating</Th> */}
                <Th color={"white"} >Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              { products?.map(cart =>
              <Tr key={cart.id}>
                <Td>{cart.id}</Td>
                <Td><Image src={cart.image1} alt={cart.title} boxSize='90px' borderRadius='full' fontSize={26}/></Td>
                <Td>{cart.Brand}</Td>
                <Td>{cart.price}</Td>
                {/* <Td>{cart.quantitiy}</Td> */}
                <Td>{cart.rating}</Td>
                <Td>pending</Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </Box>
  )
}
// "image1": "https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWVIGHNAHARTA-VIGH1196979EA0CDD9/1562708763888_0..jpg?imwidth=282&impolicy=hq",
// "Brand": "Vighnaharta",
// "title": "Silver Brass Ring",
// "price": 249,
// "MRP": "1163",
// "Category": "jewellary",
// "rating": 4.7,
// "quantitiy": 1,
// "id": 1
 
export default ManageAdmins;
