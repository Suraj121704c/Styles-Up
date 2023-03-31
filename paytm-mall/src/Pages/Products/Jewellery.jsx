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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getJewellery } from "../../Redux/ProductReducer/action";

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
    },
  };

  useEffect(() => {
    dispatch(getJewellery(obj));
  }, [location.search]);

  // console.log(jewellery)

  return (
    <div>
      <div>
        <Flex m="0" px="2%">
          <Box w="18%" m={0}>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                Category
              </Text>
              <Checkbox
                colorScheme="green"
                value={"jewellary"}
                onChange={handleCategory}
              >
                jewellary
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"lahenga"}
                onChange={handleCategory}
              >
                lahenga
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"kurtas"}
                onChange={handleCategory}
              >
                kurtas
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"kurti"}
                onChange={handleCategory}
              >
                kurti
              </Checkbox>
            </VStack>
            <label>Brand</label>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                Brands
              </Text>
              <Checkbox
                colorScheme="green"
                value={"Vighnaharta"}
                onChange={handleBrand}
              >
                Vighnaharta
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Mahi"}
                onChange={handleBrand}
              >
                Mahi
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Efulgenz"}
                onChange={handleBrand}
              >
                Efulgenz
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Rajkanya"}
                onChange={handleBrand}
              >
                Rajkanya
              </Checkbox>

              <Checkbox
                colorScheme="green"
                value={"SILVER SHINE"}
                onChange={handleBrand}
              >
                SILVER SHINE
              </Checkbox>

              <Checkbox
                colorScheme="green"
                value={"HAPPY STONING"}
                onChange={handleBrand}
              >
                HAPPY STONING
              </Checkbox>

              <Checkbox
                colorScheme="green"
                value={"SAINOOR"}
                onChange={handleBrand}
              >
                SAINOOR
              </Checkbox>
            </VStack>
            <label>Ratings</label>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                Ratings
              </Text>
              <Checkbox
                colorScheme="green"
                value={"4.3"}
                onChange={handleRating}
              >
                2⋆⋆ and above
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"4.6"}
                onChange={handleRating}
              >
                3⋆⋆⋆ and above
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"4.7"}
                onChange={handleRating}
              >
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
              <Text>STYLISH FASHION</Text>
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
              {jewellery.length > 0 &&
                jewellery.map((el) => (
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
            <Center marginTop={"10px"}>
              <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
                Previous
              </Button>
              <Button>{page}</Button>
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            </Center>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default Jewellery;
