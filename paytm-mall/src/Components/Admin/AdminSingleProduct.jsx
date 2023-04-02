import { Box, Center, Heading, Text, Stack, Image, IconButton, Flex, useToast, Progress, ButtonGroup, Button, FormControl, FormLabel, Input, SimpleGrid, Td, Tr, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, useDisclosure } from '@chakra-ui/react';
 
import React, { useState } from 'react';
import {FiEdit, FiUserX} from 'react-icons/fi';
import { useDispatch } from 'react-redux';
 
// import { deleteProduct, updateProduct } from '../../Redux/Admin/actions';

const SingleProduct = ({product}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  // const dispatch = useDispatch();
  // const [showEdit, setShowEdit] = useState(false);
  // const toast = useToast();


  // const formChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   formRef.current[name] = value;
  // }

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   try {
  //     dispatch(updateProduct(formRef.current));
  //     toast(
  //       {
  //         title: 'Product Updated',
  //         description: `${formRef.current.description} has been updated successfully.`,
  //         status: 'success',
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //   } catch (error) {
  //     toast(
  //       {
  //         title: 'Error white editing',
  //         description: `${formRef.current.description} has not edit.`,
  //         status: 'success',
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //   }
  //   setShowEdit(false)
  // }

  // const handleDelete = () => {
  //   try {
  //     dispatch(deleteProduct(product.id));
  //     toast({
  //       title: 'Product Deleted',
  //       description: `${product.description} has been deleted successfully`,
  //       status: 'success',
  //       duration: 4000,
  //       isClosable: true,
  //     })
  //   } catch (error) {
  //     toast({
  //       title: 'Error while deleting',
  //       description: `${product.description} has not deleted`,
  //       status: 'error',
  //       duration: 4000,
  //       isClosable: true,
  //     })
  //   }
  // }



  // if (showEdit) return editFunc();

  return (
  <Tr>  
    <Td  color={"white"} ><Image src={product.img} alt={product.description} boxSize='90px' borderRadius='full' fontSize={26} /></Td>
    <Td>{product.brand}</Td>
    <Td>{product.originalPrice}</Td>
    <Td>{product.category}</Td>
    <Td  >{product.discountPrice}</Td>
    <Td color={"black"} ><IconButton aria-label='Edit Product' icon={<FiEdit />} /></Td>
    <Td color={"black"}><IconButton aria-label='Delete database'    icon={<FiUserX />} />
   
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Item!!!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure, You want to delete the Item?</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme={"red"} >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Td>
 </Tr>
  )
}

export default SingleProduct;