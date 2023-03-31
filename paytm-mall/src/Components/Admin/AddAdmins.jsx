import { useDispatch } from "react-redux";
import { useToast, Select, FormControl, Input, Heading, FormLabel, Button, Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { addAdmin } from "../../Redux/Admin/actions";
const initForm = {
  name: '',
  email: '',
  password: '',
  role: '',
  image: '',
  contact: ''
}

const AddAdmins = () => {
  const dispatch = useDispatch();

  const toast = useToast();
  const [form, setForm] = useState(initForm);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(addAdmin(form))
      toast({
        title: 'Admin Added',
        description: `${form.name} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.name} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }
  return (
    <Box bg={"blue.900"}  pl={80 } pr={80} w={"100%"} h={"100vh"}>
      <Heading size='md' color={"white"} >Add Admin</Heading>
      <form onSubmit={formSubmitHandler}>
        <Stack> 
        <FormControl isRequired>
          {/* If I am not giving unique id than it's showing error but it's not showing the same in AddProducts form */}
          <FormLabel m={2} color={"white"} >Admin Name</FormLabel>
          <Input m={2} type='text' name='name' id='name' background='#fff'   onChange={formChangeHandler} value={form.name} />
          <FormLabel m={2} color={"white"} >Admin Image Link</FormLabel>
          <Input m={2}  type='url' name='image' id='image' background='#fff' onChange={formChangeHandler} value={form.image} />
          <FormLabel m={2} color={"white"} >Admin Email</FormLabel>
          <Input m={2}  type='email' name='email' id='email' background='#fff' onChange={formChangeHandler} value={form.email} />
          <FormLabel  m={2} color={"white"} >Admin Contact No.</FormLabel>
          <Input m={2} type='number' name='contact' id='contact' background='#fff' onChange={formChangeHandler} value={form.contact} />
          <FormLabel m={2} color={"white"}>Admin Password</FormLabel>
          <Input type='password' name='password' id='passoword' background='#fff' onChange={formChangeHandler} value={form.password} />
          <FormLabel m={2} color={"white"}>Admin Category</FormLabel>
          {/* I can also pass defaultValue to Select */}
          <Select m={2} placeholder="Select Role" name="role" id='role' background="white" onChange={formChangeHandler}>
            <option value='Technical'>Technical</option>
            <option value='Developer'>Developer</option>
            <option value='Project Manager'>Project Manager</option>
            <option value='Sales'>Sales</option>
            <option value='Customer Executive'>Custumer Executive</option>
          </Select>
          <Button m={2} type='submit' bg={"red.400"} colorScheme='red.400' marginTop='2'color={"white"} >
            Create New Admin 
          </Button>
        </FormControl>
        </Stack>
      </form>
    </Box>)
}

export default AddAdmins;