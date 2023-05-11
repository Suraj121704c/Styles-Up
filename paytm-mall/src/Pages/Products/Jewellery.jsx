import React, { useEffect, useState } from "react";
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
  Spinner,
  CircularProgress,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Card,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getJewellery } from "../../Redux/ProductReducer/action";
import { Footer2 } from "../../Components/Fotter2";
import Navbar2 from "../../Components/Navbar2";
import Navbar3 from "../../Components/Navbar3";

const Jewellery = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const jewellery = useSelector((store) => {
    return store.electronicsReducer.Jewellery;
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);
  const initialCategory = searchParams.get("Category");
  const [Category, setCategory] = useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const initialBrand = searchParams.getAll("Brand");
  const [Brand, setBrand] = useState(initialBrand || []);
  const initialRating = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialRating || []);
  const { isLoading, isError } = useSelector(
    (store) => store.electronicsReducer
  );

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

  const handleBrand = (e) => {
    let newBrand = [...Brand];
    const value = e.target.value;
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleRating = (e) => {
    let newRating = [...rating];
    const value = e.target.value;
    if (newRating.includes(value)) {
      newRating = newRating.filter((el) => el !== value);
    } else {
      newRating.push(value);
    }
    setRating(newRating);
  };

  useEffect(() => {
    let params = {};
    page && (params.page = page);
    order && (params.order = order);
    Category && (params.Category = Category);
    Brand && (params.Brand = Brand);
    rating && (params.rating = rating);
    setSearchParams(params);
  }, [page, order, Category, Brand, rating]);

  let obj = {
    params: {
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      Category: searchParams.getAll("Category"),
      Brand: searchParams.getAll("Brand"),
      rating: searchParams.getAll("rating"),
      q: searchParams.get("q"),
    },
  };

  useEffect(() => {
    dispatch(getJewellery(obj));
  }, [location.search]);

  // console.log(jewellery)

  return (
    <>
    <Navbar2 />
      <div>
        <div>
          <Flex m="0" px="2%">
            <Box w="18%" m={0}>
              <VStack overflow={"none"} alignItems="flex-start">
                <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                  Category
                </Text>
                <Checkbox
                  colorScheme="green"
                  value={"jewellary"}
                  onChange={handleCategory}>
                  jewell
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={"lahenga"}
                  onChange={handleCategory}>
                  lahnga wears
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={"kurtas"}
                  onChange={handleCategory}>
                  kurtas
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={"kurti"}
                  onChange={handleCategory}>
                  kurti
                </Checkbox>
              </VStack>
              <VStack alignItems="flex-start">
                <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                  Brands
                </Text>
                <Checkbox
                  colorScheme="green"
                  value={"Vighnaharta"}
                  onChange={handleBrand}
                  fontSize={[3, 7, 10]}>
                  Vighn aharta
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={"Mahi"}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}
                  onChange={handleBrand}>
                  Mahi
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={"Efulgenz"}
                  onChange={handleBrand}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}>
                  Eful genz
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={"Rajkanya"}
                  onChange={handleBrand}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}>
                  Raj kanya
                </Checkbox>

                <Checkbox
                  colorScheme="green"
                  value={"SILVER SHINE"}
                  onChange={handleBrand}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}>
                  silver shine
                </Checkbox>

                <Checkbox
                  colorScheme="green"
                  value={"HAPPY STONING"}
                  onChange={handleBrand}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}>
                  happy stoin
                </Checkbox>

                <Checkbox
                  colorScheme="green"
                  value={"SAINOOR"}
                  onChange={handleBrand}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}>
                  sainoor
                </Checkbox>
              </VStack>
              <VStack
                fontSize={{ base: "10px", md: "12px", lg: "20px" }}
                alignItems="flex-start">
                <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                  Ratings
                </Text>
                <Checkbox
                  colorScheme="green"
                  value={4.3}
                  onChange={handleRating}>
                  3⋆⋆ and above
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value={4.7}
                  onChange={handleRating}>
                  4⋆⋆⋆⋆ and above
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
              }}>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                p="5px"
                bg="none"
                borderColor="none">
                <Text>STYLISH FASHION</Text>
                <Flex>
                  <Flex alignItems="center">
                    {/* <TbArrowsUpDown color="green" fontWeight="bold" /> */}
                    <Text fontWeight="bold" color="#E9967A">
                      SortBy
                    </Text>
                  </Flex>
                  <Select
                    border="2px"
                    borderRadius="3px"
                    borderColor="black"
                    ml="4px"
                    p="0px"
                    onChange={handleSort}>
                    <option value="">Sort By Price</option>
                    <option value="asc">Price : low to high</option>
                    <option value="desc">Price : high to low</option>
                  </Select>
                </Flex>
              </Flex>
              <Grid
                gap={2}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}>
                {jewellery.length === 0 ? (
                  <Center>
                    {" "}
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Center>
                ) : (
                  jewellery.map((el) => (
                    <Link to={`/products/${el.id}`} key={el.id}>
                      {/* <Box
                        p="1"
                        h="17rem"
                        boxShadow= "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                        rounded="md"
                        marginLeft={"3"}
                        marginTop={"5"}
                        >
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
                      </Box> */}
                      <Card
                        maxW="sm"
                        boxShadow="#E9967A 0px 5px 15px"
                        marginLeft={"5"}
                        marginTop={"5"}>
                        <CardBody>
                          <Image
                            src={el.image1}
                            alt="Green double couch with wooden legs"
                            borderRadius="10%"
                            height={"300px"}
                            boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md">{el.Brand}</Heading>
                            <Text>{el.title.slice(0, 30)}</Text>
                            <Text color="blue.600" fontSize="2xl">
                              ₹{el.price}
                            </Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    </Link>
                  ))
                )}
              </Grid>
              <Center marginTop={"20px"} marginBottom={"20px"}>
                <Button
                  onClick={() => setPage(page - 1)}
                  isDisabled={page === 1}
                  boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                  variant="solid"
                  colorScheme="#E9967A"
                  color={"black"}>
                  Previous
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                  variant="solid"
                  colorScheme="#E9967A"
                  color={"black"}>
                  {page}
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => setPage(page + 1)}
                  boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                  variant="solid"
                  colorScheme="#E9967A"
                  color={"black"}>
                  Next
                </Button>
              </Center>
            </Box>
          </Flex>
        </div>
      </div>
      {/* <Footer2 /> */}
    </>
  );
};

export default Jewellery;
