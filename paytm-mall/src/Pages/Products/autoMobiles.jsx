import React, { useEffect } from "react";
import {
  Box,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Switch,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getAuto } from "../../Redux/ProductReducer/action";

export const AutoMobiles = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const auto = useSelector((store) => {
    return store.electronicsReducer.Auto;
  });
  const initialCategory = searchParams.get("Category");
  const [Category, setCategory] = useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const initialRating = searchParams.getAll("discount");
  const [discount, setDiscount] = useState(initialRating || []);

  const handleRating = (e) => {
    let newDiscount = [...discount];
    const value = e.target.value;
    if (newDiscount.includes(value)) {
      newDiscount = newDiscount.filter((el) => el !== value);
    } else {
      newDiscount.push(value);
    }
    setDiscount(newDiscount);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  const handleCategory = (e) => {
    let newCategory = [...Category];
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {};
    order && (params.order = order);
    Category && (params.Category = Category);
    discount && (params.discount = discount);
    setSearchParams(params);
  }, [order, Category, discount]);

  let obj = {
    params: {
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      Category: searchParams.getAll("Category"),
      discount: searchParams.getAll("discount"),
    },
  };

  useEffect(() => {
    dispatch(getAuto(obj));
  }, [location.search]);

  return (
    <div>
      {" "}
      <Flex m="0" px="2%">
        <Box w="18%" m={0}>
          <VStack mb="20px" alignItems="flex-start">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              Category
            </Text>
            <Checkbox
              colorScheme="green"
              value={"automotives"}
              onChange={handleCategory}
            >
              automotives
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value={"cars"}
              onChange={handleCategory}
            >
              cars
            </Checkbox>
          </VStack>

          <label>Discount</label>
          <VStack mb="20px" alignItems="flex-start">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              Discount
            </Text>
            <Checkbox
              colorScheme="green"
              value={"-33%"}
<<<<<<< HEAD

              onChange={handleRating}
            >
=======
              onChange={handleRating}>
>>>>>>> main
              Above 20 to 40%
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value={"-40%"}
              onChange={handleRating}
            >
              Above 40 to 60%
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value={"-75%"}
              onChange={handleRating}
            >
              Above 60 to 80%
            </Checkbox>
          </VStack>
        </Box>

        <Box
          overflow="scroll"
          w="100%"
          borderLeft="1px solid"
          borderColor="gray.300"
          textAlign={"center"}
          m={0}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            p="5px"
            bg="#e2e8f0"
            border="1px"
            borderColor="gray.400"
          >
            <Text>AUTOMOBILE PARTS</Text>
            <Flex>
              <Flex alignItems="center">
                {/* <TbArrowsUpDown color="green" fontWeight="bold" /> */}
                <Text fontWeight="bold" color="green">
                  SortBy
                </Text>
              </Flex>
              <Select
                border="2px"
                borderRadius="3px"
                borderColor="black"
                ml="4px"
                p="0px"
                onChange={handleSort}
              >
                <option value="">Sort By Price</option>
                <option value="asc">Price : low to high</option>
                <option value="desc">Price : high to low</option>
              </Select>
            </Flex>
          </Flex>
          <Grid
            gap={5}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            {auto.length > 0 &&
              auto.map((el) => (
                <Link to={`/products/${el.id}`} key={el.id}>
                  <Box p="2" h="17rem" boxShadow="md" rounded="md">
                    <Image
                      src={el.image1}
                      alt={el.Brand}
                      m="auto"
                      p="1"
                      rounded="md"
                      bg="white"
                      h="55%"
                      w="60%"
                    />
                    <br />
                    <Text color={"grey 0.5"}>Title : {el.Brand}</Text>

                    <Text color={"green"}>
                      Discount : {Math.round((el.price / el.MRP) * 100)}%
                    </Text>
                    <Text as={"b"} fontSize="1.2rem">
                      ₹{el.price}{" "}
                    </Text>
                    <Text as={"s"}>₹{el.MRP}</Text>
                  </Box>
                </Link>
              ))}
          </Grid>
        </Box>
      </Flex>
    </div>
  );
};
