import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Shipped from "./Shipped";
import Pending from "./Pending";
import Completed from "./Completed";
import axios from "axios";
import Return from "./Return";
import Swal from "sweetalert2";
const Orders = () => {
  const [userDetails, setUserDetails] = useState([]);
   
  const GetUserOrderDetails = () => {
     axios.get(
      `https://courageous-cow-beret.cyclic.app/order`,{
        headers : {
          "Content-Type" : "application/json"
        }
      }
    ).then((res)=>{
      console.log(res.data)
      setUserDetails(res.data )
    })
    // setUserDetails(res );
    // console.log(res);
    // return res.data;
  };
  useEffect(() => {
    GetUserOrderDetails();
  }, []);

  return (
    <Box
      color={"black"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      // bg={"#0c0e1f"}
      bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"  
    >
       <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'
        margin={"auto"}
        textAlign={"center"}
      >
        Customers
      </Text>
      <Text color={"pink.700"} textAlign={"center"} >List of Orders</Text>
      <Box mt={"30px"} w={"100%"} color={"pink.700"} fontWeight={"bold"}>
        <Tabs>
          <TabList borderBottom={"1px solid gray"}>
            <Tab
              fontSize={{ base: "12px", md: "15px" }}
              padding={{ base: "7px", sm: "18px", md: "20px" }}
              _selected={{
                borderBottom: "4px solid #00b5b8",
                color: "#00b5b8",
                borderRadius: "3px",
              }}
            >
              PENDING
            </Tab>
            <Tab
              fontSize={{ base: "12px", md: "15px" }}
              padding={{ base: "7px", sm: "18px", md: "20px" }}
              _selected={{
                borderBottom: "4px solid #00b5b8",
                color: "#00b5b8",
                borderRadius: "3px",
              }}
            >
              SHIPPED
            </Tab>
            <Tab
              fontSize={{ base: "12px", md: "15px" }}
              padding={{ base: "7px", sm: "18px", md: "20px" }}
              _selected={{
                borderBottom: "4px solid #00b5b8",
                color: "#00b5b8",
                borderRadius: "3px",
              }}
            >
              COMPLETED
            </Tab>
            <Tab
              fontSize={{ base: "12px", md: "15px" }}
              padding={{ base: "7px", sm: "18px", md: "20px" }}
              _selected={{
                borderBottom: "4px solid #00b5b8",
                color: "#00b5b8",
                borderRadius: "3px",
              }}
            >
              RETURNS
            </Tab>
          </TabList>
          {/* ``````````````````````````````````````` Tab Panels````````````````````````````````` */}
          <TabPanels>
            <TabPanel p={0} mt={4}>
              <Pending
                userDetails={userDetails}
                GetUserOrderDetails={GetUserOrderDetails}
              />
            </TabPanel>
            <TabPanel p={0} mt={4}>
              <Shipped
                userDetails={userDetails}
                GetUserOrderDetails={GetUserOrderDetails}
              />
            </TabPanel>
            <TabPanel p={0} mt={4}>
              <Completed
                userDetails={userDetails}
                GetUserOrderDetails={GetUserOrderDetails}
              />
            </TabPanel>
            <TabPanel p={0} mt={4}>
              <Return
                userDetails={userDetails}
                GetUserOrderDetails={GetUserOrderDetails}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Orders;
