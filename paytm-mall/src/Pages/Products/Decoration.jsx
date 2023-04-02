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
import { getDecoration } from "../../Redux/ProductReducer/action";
import { Footer2 } from "../../Components/Fotter2";
import Navbar2 from "../../Components/Navbar2";

const Decoration = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const decoration = useSelector((store) => {
    return store.electronicsReducer.Decoration;
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);
  const initialCategory = searchParams.get("Category");
  const [Category, setCategory] = useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const initialRating = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialRating || []);

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
    page && (params.page = page);
    order && (params.order = order);
    Category && (params.Category = Category);
    rating && (params.rating = rating);
    setSearchParams(params);
  }, [page, order, Category, rating]);

  let obj = {
    params: {
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      Category: searchParams.getAll("Category"),
      rating: searchParams.getAll("rating"),
      q : searchParams.get("q")
    },
  };

  useEffect(() => {
    dispatch(getDecoration(obj));
  }, [location.search]);

  return (
    <>
      <Navbar2 />
      <div>
        <Flex m="0" px="2%">
          <Box w="18%" m={0}>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                Category
              </Text>
              <Checkbox
                colorScheme="green"
                value={"clocks"}
                onChange={handleCategory}
              >
                clocks
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Gifts"}
                onChange={handleCategory}
              >
                Gifts
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"decoration"}
                onChange={handleCategory}
              >
                decoration
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"wall_arts"}
                onChange={handleCategory}
              >
                wall_arts
              </Checkbox>
            </VStack>

            <label>Ratings</label>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                Ratings
              </Text>
              <Checkbox
                colorScheme="green"
                value={"4.5"}
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
              <Text>STYLISH DECORATION</Text>
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
              {decoration.length > 0 &&
                decoration.map((el) => (
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
                      <Text color={"grey 0.5"}>Title : {el.title}</Text>

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
              <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </Button>
              <Button>{page}</Button>
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            </Center>
          </Box>
        </Flex>
      </div>
      <Footer2 />
    </>
  );
};

export default Decoration;
