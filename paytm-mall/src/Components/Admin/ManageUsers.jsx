import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, getCarts, getOrders, getUsersList } from '../../redux/Admin/actions';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Heading, IconButton, useToast,CircularProgress } from '@chakra-ui/react'
import { FiUserX } from 'react-icons/fi';

const ManageUsers = () => {
  const { isLoadingUserList, isErrorUserList, users,orders,carts} = useSelector(store => store.AdminReducer);
  let total=0,totalProfit=0,totalCart=0;
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (user) => {
    try {
      // dispatch(deleteUser(user.userId?user.userId:user.id));
      toast({
        title: 'User Deleted',
        description: `${user.username?user.username:user.name} has been deleted successfully`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${user.username?user.username:user.name} has not deleted`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    // dispatch(getUsersList)
    // dispatch(getOrders)
    // dispatch(getCarts)
  }, [dispatch]);

  // why my this componet is rednering 2 extra times?
  // console.log('manage uses list page rendering')
 
  const totalArray=[]
  orders.forEach((order,i)=>{
     if(!totalArray.some(obj=>obj.useremail===order.useremail)){
       const user={id:order.id,userId:order.userId,username:order.username,useremail:order.useremail,orderQuantity:1,totalOrderPrice:order.originalPrice-order.discountPrice};
       totalArray.push(user)
     }else{
       totalArray.some((obj)=>{
        obj.totalOrderPrice=obj.totalOrderPrice+(order.originalPrice-order.discountPrice);
        obj.orderQuantity=obj.orderQuantity+1;
        })
      }
     total+=order.originalPrice-order.discountPrice;
    });
  users.forEach((user)=>{
    if(!totalArray.some(obj=>obj.username===user.name))totalArray.push(user)
  })

  return (
    <div>
      <Heading size='md'>Manage Users</Heading>
      {isLoadingUserList && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorUserList && <h2>Error Occured while getting User list</h2>}
      <div> {users.length > 0 &&
        <TableContainer>
          <Table variant='striped' colorScheme='teal' size={'lg'}>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Order</Th>
                <Th>Cart</Th>
                <Th>Total</Th>
                <Th>Profit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {totalArray.map((user) => {
                console.log(user)
                totalProfit += 100;
                totalCart+=1;
                return <Tr key={user.id}>
                  <Td>{user?.username?user.username:user.name}</Td>
                  <Td >{user?.orderQuantity?user.orderQuantity:0}</Td>
                  <Td>{1}</Td>
                  <Td >₹{user?.totalOrderPrice?user.totalOrderPrice:0}</Td>
                  <Td >₹{totalProfit}</Td>
                  <Td><IconButton aria-label='Delete database' onClick={() => handleDelete(user)} icon={<FiUserX />} /></Td>
                </Tr>
              })}
            </Tbody>
            <Tfoot bg={'yellow.400'}>
              <Tr>
                <Th>Total : {users.length}</Th>
                <Th >Orders : {orders.length}</Th>
                <Th>Cart : {totalCart}</Th>
                <Th>Total : ₹{total}</Th>
                <Th>Profit : ₹{totalProfit}</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      }
      </div>
    </div>
  )
}
export default ManageUsers;
