import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress, Box} from '@chakra-ui/react'

import {FiUserX} from 'react-icons/fi';
import { deleteAdmin, getAdminList } from '../../Redux/Admin/actions';

const ManageAdmins = () => {
  const { isLoadingAdminList, isErrorAdminList, admins } = useSelector(store => store.AdminReducer);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete =(admin) => {
    try {
      dispatch(deleteAdmin(admin.id));
      toast({
        title: 'Admin Deleted',
        description: `${admin.name} has been deleted successfully`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${admin.name} has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
   }

   useEffect(() => {
     dispatch(getAdminList)
   }, []);
   
  return (

    <Box  bg={"blue.900"}   pl={40 }  w={"100%"} h={"100vh"} >
      <Heading size='md' color={"white"} >Manage Admins</Heading>

      {isLoadingAdminList && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorAdminList && <h2>Error Occured while getting Admin list</h2>}
        <div>
          {admins.length > 0 && 
 
          <TableContainer color={"white"} >
          <Table    size={'lg'} bg={"blue.900"} >
            <Thead   >
              <Tr >
                <Th color={"white"} >Photo</Th>
                <Th color={"white"} >Name</Th>
                <Th color={"white"} >Email</Th>
                <Th color={"white"} >Contact No.</Th>
                <Th color={"white"} >Role</Th>
                <Th color={"white"} >Delete</Th>

              </Tr>
            </Thead>
            <Tbody>
              {admins.map(admin=><Tr key={admin.id}>

                <Td><Image src={admin.image} alt={admin.name} boxSize='90px' borderRadius='full' fontSize={26}/></Td>
                <Td>{admin.name}</Td>
                <Td>{admin.email}</Td>
                <Td>{admin.contact}</Td>
                <Td>{admin.role}</Td>

                <Td color={"black"}><IconButton aria-label='Delete database' onClick={()=>handleDelete(admin)} icon={<FiUserX/>}/></Td>

              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>

    </Box>

  )
}
export default ManageAdmins;
