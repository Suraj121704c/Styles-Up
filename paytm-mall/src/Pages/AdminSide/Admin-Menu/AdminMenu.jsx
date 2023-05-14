import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Avatar,
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import image from "./logo.png";
import { FiLogOut } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import AdminDrawer from "../AdminDrawer";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../dashboard";
import Products from "../Products-Cat/products";
import Customers from "../customers";
import AccountInfo from "../accountInfo";
import  logo from "./Diamond-lane.png"
import AddProducts from "../AddNew/AddProducts";
const AdminMenu = () => {
  const prodRef = useRef();
  const dashboardRef = useRef();
  const customerRef = useRef();
  const orderRef = useRef();
  const accountRef = useRef();
 
  const [admin, setAdmin] = useState([]);

 

  return (
    <>
      <Tabs display={"flex"}   >
        <TabList
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          w={{ md: "30%", lg: "20%" }}
          padding={"15px"}
          // backgroundColor={"black"}
          bgGradient='linear(to-l,  pink.200, blue.300)'
          color={"pink.700"}
          fontWeight={"bold"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}
        >
          <Box width={"50%"} m={"auto"} mt={0} mb={0}>
            <Image
              alt="logo"
              src={image}
            ></Image>
          </Box>

          <Box textAlign={"center"} mt={"20px"}>
            <Avatar size={"xl"} src="https://avatars.githubusercontent.com/u/111531676?v=4"></Avatar>
          </Box>
          <Box textAlign={"center"} mt={"20px"} mb={"20px"}>
            <Text>{"Hemensan"}</Text>
            <Text color={"pink.700"} fontWeight={"bold"} >{"Hemensan@admin.com"}</Text>
          </Box>

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            fontWeight={"bold"}
            _selected={{
              color: "black",
              bgGradient:'linear(to-l,  pink.800, blue.600)',
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Dashboard
          </Tab>

          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient:'linear(to-l,  pink.800, blue.600)',
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Products
          </Tab>
           <Tab
            ref={orderRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient:'linear(to-l,  pink.800, blue.600)',
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Add New Products
          </Tab>
          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient:'linear(to-l,  pink.800, blue.600)',
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Customers
          </Tab>
       
          <Box padding={"5px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={accountRef}
            mb={"5px"}
            fontWeight={"bold"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient:'linear(to-l,  pink.800, blue.600)',
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Account Info
          </Tab>
          <Link to={"/"}>
            {" "}
            <Button
            fontWeight={"bold"}
              width={"100%"}
              mt={"5px"}
              variant={"solid"}
              borderRadius={"5px"}
              colorScheme={"red"}
              _focus={{ outline: "none" }}
              border={"none"}
            >
              Logout
            </Button>
          </Link>
        </TabList>

        <TabPanels pl={{ md: "32%", lg: "21%" }}>
          <TabPanel p={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel p={0}>
            <Products />
          </TabPanel>
          <TabPanel p={0}>
            <AddProducts/>
          </TabPanel>
          <TabPanel p={0}>
            <Customers />
          </TabPanel>
    
          <TabPanel p={0}>
            <AccountInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* small screen navbars */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        bgGradient='linear(to-l,  pink.200, blue.300)'
        color={"black"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}
      >
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          // discountRef={discountRef}
          prodRef={prodRef}
        />
        <Box>
          <Menu  bgGradient='linear(to-l,  pink.200, blue.300)' >
            <MenuButton>
              <Avatar src={admin.Image} name={admin.Name}></Avatar>
            </MenuButton>
            <MenuList   border={"1px solid #27293a"}>
              <MenuItem  bgGradient='linear(to-l,  pink.200, blue.300)' >
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem  bgGradient='linear(to-l,  pink.200, blue.300)' color={"red.600"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <FiLogOut />{" "}
                  <Link to={"/"}>
                    {" "}
                    <Text ml={"20px"} fontSize={"md"}>
                      Logout
                    </Text>
                  </Link>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default AdminMenu;
