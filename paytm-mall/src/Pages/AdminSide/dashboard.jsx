import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const Dashboard = () => {
  const [productData, setproductData] = useState({
    labels: ["Rings", "MangalSutra", "EarRings", "Necklace", "Bangles"],
    datasets: [
      {
        label: "Users Gained",
        data: [55, 94, 47, 55, 67],
        backgroundColor: [
          "#d297de",
          "#aef2e9",
          "#ffc4e9",
          "#70e06e",
          "#e8c4bc",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [userData, setUserData] = useState({
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Users Gained per Year",
        data: [5500, 9400, 11000, 13000, 20000],
        backgroundColor: [
          "#d297de",
          "#aef2e9",
          "#ffc4e9",
          "#70e06e",
          "#e8c4bc",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [OrderData, setOrderData] = useState({
    labels: ["Pending", "Shipped", "Completed", "Returned"],
    datasets: [
      {
        label: "Orders Details",
        data: [94, 47, 55, 3],
        backgroundColor: [
          "#d297de",
          "#aef2e9",
          "#ffc4e9",
          "#70e06e",
          "#e8c4bc",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <Box bgGradient='linear(to-l, blue.100, pink.100)' >
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        mt={{ base: 35 , md:  5, lg: 2}}
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
        textAlign={"center"}
      >
        Welcome to DashBoard
      </Text>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='3xl'
        fontWeight='extrabold'
        margin={"auto"}
        textAlign={"center"}
      >
        Product Listings
      </Text>
      <Box width={{ base: "sm", md: "xl", lg: "3xl" }} m={"auto"}>
        <Bar data={productData} />
      </Box>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='3xl'
        fontWeight='extrabold'
        margin={"auto"}
        textAlign={"center"}
      >
        Users Gained Per Year
      </Text>
      <Box width={{ base: "sm", md: "xl", lg: "3xl" }} m={"auto"}>
        <Line data={userData} />
      </Box>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='3xl'
        fontWeight='extrabold'
        textAlign={"center"}
      >
        Order Details
      </Text>
      <Box width={{ base: "sm", md: "xl", lg: "3xl" }} m={"auto"}>
        <Pie data={OrderData} />
      </Box>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='xl'
        fontWeight='extrabold'
        textAlign={"center"}
      >
        COPYRIGHT CARATLANE © 2023
      </Text>
    </Box>
  );
};

export default Dashboard;
