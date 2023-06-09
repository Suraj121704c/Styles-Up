import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlineStars } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../../Redux/AuthReducer/action";
import { getJewellery } from "../../Redux/ProductReducer/action";
import Navbar2 from "../../Components/Navbar2";
import { Footer2 } from "../../Components/Fotter2";
import axios from "axios";

export const SingleUserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const Jewellary = useSelector((store) => {
    return store.electronicsReducer.Jewellery;
  });

  console.log(Jewellary);
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`https://hilarious-erin-shift.cyclic.app/fashion/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // "image1": "https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWEFULGENZ-LATARCH54956C731614D/1562710392040_0..jpg?imwidth=282&impolicy=hq",
  // "Brand": "Efulgenz",
  // "title": "Alloy Pink Layered Necklace",
  // "price": 960,
  // "MRP": "3000",
  // "discount": "-68%",
  // "id": 3,
  // "Category": "jewellary",
  // "rating": 4.7,
  // "image2": "https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWPIAH-FASHIONPIAH1056980DAD3A6F1/6.jpg?imwidth=282&impolicy=hq",
  // "image3": "https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWGOLD-STAR-NOFEMN2982599156F3E/1562703106002_0..jpg?imwidth=282&impolicy=hq"
  // console.log(data)

  const handleAdd = () => {
    const cartData = {
      image1: data.image1,
      Brand: data.Brand,
      title: data.title,
      price: data.price,
      MRP: data.MRP,
      Category: data.Category,
      rating: data.rating,
      quantitiy: 1,
    };
    dispatch(addToCart(cartData));
    toast({
      title: "Product Added",
      description: `Product has been added successfully`,
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <>
      <Navbar2 />
      <div>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          w="100%"
          mt="30px">
          <Box p="20px" display="flex" h="450px" bg="white">
            <Image
              border="1px solid gray"
              src={data.image1}
              alt="image"
              w="80px"
              h="80px"
            />
            <Image
              className="hoverToIncreaseWidth"
              mt="70px"
              ml={{ base: "10px", sm: "20px", md: "70px", lg: "80px" }}
              src={data.image1}
              alt="image"
              w="200px"
              h="300px"
            />
          </Box>
          <Box align="left" bg="white" p="10px">
            <Text fontSize="2xl" as="b">
              {data.title}
            </Text>
            <br />
            <Text fontSize="lg" as="b">
              Brand: {data.brand}
            </Text>
            <br />
            <Text fontSize="sm" as="mark">
              {data.Category}
            </Text>

            <Box display="flex">
              <Text as="b" fontSize="xl">
                Original-Price:{" "}
              </Text>
              <Text
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="20px"
                bg="red"
                borderRadius="2px"
                color="white"
                fontSize="xl"
                width="120px"
                as="b">
                {" "}
                ₹{data.MRP}
              </Text>
            </Box>
            <Box mt="10px" display="flex">
              <Text as="b" fontSize="xl">
                Discounted-Price:{" "}
              </Text>
              <Text
                fontSize="xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="20px"
                bg="green"
                borderRadius="2px"
                color="white"
                width="120px"
                as="b">
                {" "}
                ₹{data.price}
              </Text>
            </Box>
            <Text fontSize="xs" color="gray">
              inclusive of all Taxes
            </Text>
            <Box mt="60px">
              <Button
                className="addtocart"
                color="white"
                m="10px"
                background="#ef4e28"
                variant="solid"
                w="70%"
                onClick={handleAdd}>
                {" "}
                ADD TO CART
              </Button>
            </Box>
          </Box>
          <Box
            bg="#f4f4f4"
            m="40px"
            p="20px"
            borderRadius="8px"
            border="1px solid gray"
            align="left"
            w={{ base: "260px", sm: "250px", md: "200px", lg: "max-content" }}
            h={{
              base: "250px",
              sm: "300px",
              md: "max-content",
              lg: "max-content",
            }}>
            <Text p="10px">Top Selling Products on Tales & Stories</Text>
            <hr />
            <Text p="10px">More Products</Text>
            <hr />
            <Text p="10px">Best sellers & Top Offers on Tales & Stories</Text>
          </Box>
        </SimpleGrid>
        {/* <===============2nd section===========================> */}
        <SimpleGrid
          mt={{ base: "-30px", sm: "-20px", md: "50px", lg: "50px" }}
          className="spp_foot"
          columns={{ base: 1, md: 4, lg: 4 }}
          w="100%"
          gap="10"
          p="5px">
          <GridItem w="100%">
            <Box align="center">
              <AiOutlineHeart size="20px" />
            </Box>

            <Text fontSize="md" color="gray" as="b">
              24*7 Help
            </Text>
            <Text fontSize="xs" color="gray">
              Need Help? Click Here. You can also talk to us on 0120 4606060 to
              resolve your query.
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Box align="center">
              <VscWorkspaceTrusted size="20px" />
            </Box>
            <Text fontSize="md" color="gray" as="b">
              Paytm Trust
            </Text>
            <Text fontSize="xs" color="gray">
              Your money is yours! All refunds come with no question asked
              guarantee.
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Box align="center">
              <MdOutlineStars size="20px" />
            </Box>
            <Text fontSize="md" color="gray" as="b">
              100% Assurance
            </Text>
            <Text fontSize="xs" color="gray">
              At Paytm, we provide 100% assurance. If you have any issue, your
              money is immediately refunded. Sit back and enjoy your shopping.
            </Text>
          </GridItem>
          <GridItem w="100%" mt={{ base: "20px", lg: "0px" }}>
            <Box align="center">
              <BsFillCartCheckFill size="20px" />
            </Box>
            <Text fontSize="md" color="gray" as="b">
              {" "}
              Paytm Mall Promise
            </Text>
            <Text fontSize="xs" color="gray">
              Products with this tag are quality checked, and shipped the same
              day from certified warehouses. So you get the right product,
              faster.
            </Text>
          </GridItem>
        </SimpleGrid>
      </div>
      {/* <Footer2 /> */}
    </>
  );
};
