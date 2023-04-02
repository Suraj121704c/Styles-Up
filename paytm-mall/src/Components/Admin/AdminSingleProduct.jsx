import { Box, Center, Heading, Text, Stack, Image, IconButton, Flex, useToast, Progress, ButtonGroup, Button, FormControl, FormLabel, Input, SimpleGrid, Td, Tr, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, useDisclosure } from '@chakra-ui/react';
 
import React, { useState } from 'react';
 
 
const SingleProduct = ({ product ,  handleEdit,
  handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [editable, setEditable] = useState(false);
  const [editValue, setEditValue] = useState("");
  
 
 
  return (
    <Tr>
      <Td color={"white"} ><Image src={product.img} alt={product.description} boxSize='90px' borderRadius='full' fontSize={26} /></Td>
      <Td>{product.brand}</Td>
      <Td>{product.originalPrice}</Td>
      <Td>{product.category}</Td>
      <Td  >{product.discountPrice}</Td>
      {/* <Td color={"black"} ><IconButton aria-label='Edit Product' icon={<FiEdit />} /></Td> */}
      <Td isNumeric>
        {editable ? (
          <>
            <Input
              placeholder="Enter the new Amount"
              w={"auto"}
              type={"number"}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => {
                handleEdit(product.id, editValue);
              }}
            >
              {/* <MdDone /> */}
              done
            </Button>
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setEditable(false)}
            >
              {/* <GrClose /> */}
              close
            </Button>
          </>
        ) : (
          <Box>
            ₹{(product.discountPrice)}
            /-{" "}
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setEditable(true)}
            >
              {/* <MdOutlineEdit /> */}
              done
            </Button>
          </Box>
        )}
      </Td>
      <Td color={"black"}>
        <Center>
          <Button mt={4} onClick={onOpen} colorScheme={"red"}>
            Remove
          </Button>
        </Center>


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
              <Button colorScheme={"red"} onClick={handleDelete}>
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