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
  CircularProgress,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getGlasses } from "../../Redux/ProductReducer/action";
import { Footer2 } from "../../Components/Fotter2";
import Navbar2 from "../../Components/Navbar2";

const Glasses = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const eyeGlases = useSelector((store) => {
    return store.electronicsReducer.Galsses;
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);
  const initialColor = searchParams.getAll("color");
  const [colors, setColors] = useState(initialColor || []);
  const initialShape = searchParams.getAll("shape");
  const [shape, setShape] = useState(initialShape || []);

  const initialGender = searchParams.get("order");
  const [gender, setGender] = useState(initialGender || []);
  const { isLoading ,isError } = useSelector((store)=> store.electronicsReducer )

  const handleColor = (e) => {
    let newColors = [...colors];
    const value = e.target.value;
    if (newColors.includes(value)) {
      newColors = newColors.filter((el) => el !== value);
    } else {
      newColors.push(value);
    }
    setColors(newColors);
  };

  const handleShape = (e) => {
    let newShape = [...shape];
    const value = e.target.value;
    if (newShape.includes(value)) {
      newShape = newShape.filter((el) => el !== value);
    } else {
      newShape.push(value);
    }
    setShape(newShape);
  };

  const handleGender = (e) => {
    let newGender = [...gender];
    const value = e.target.value;
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  useEffect(() => {
    let params = {};
    page && (params.page = page);
    colors && (params.colors = colors);
    shape && (params.shape = shape);
    gender && (params.gender = gender);
    setSearchParams(params);
  }, [page, colors, shape, gender]);

  let obj = {
    params: {
      _page: searchParams.get("page"),
      colors: searchParams.getAll("colors"),
      shape: searchParams.getAll("shape"),
      gender: searchParams.getAll("gender"),
      q : searchParams.get("q")
    },
  };

  useEffect(() => {
    dispatch(getGlasses(obj));
  }, [location.search]);

  // console.log(eyeGlases);
 

  return (
    <>
      <Navbar2 />
      <div>
        <Flex m="0" px="2%">
          <Box w="18%" m={0}>
            <Box my="20px">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                FRAME TYPE
              </Text>
              <Flex>
                <Image
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                  type="Full Rim"
                />
                <Image
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                  type="Half Rim"
                />
                <Image
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                  type="Rimless"
                />
              </Flex>
            </Box>
            <Box mb="20px">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                FRAME SHAPE
              </Text>
              <Grid templateColumns="repeat(3, 1fr)">
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                    type="Rectangle"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                    type="Round"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                    type="Cat Eye"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                    type="Square"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                    type="Geometric"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                    fil="wayfarer"
                    type="Wayfarer"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                    type="Aviator"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                    type="Hexago..."
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                    type="Clubmas..."
                  />
                </GridItem>
              </Grid>
            </Box>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                FRAME COLOR
              </Text>
              <Checkbox
                colorScheme="green"
                value={"Smoke"}
                onChange={handleColor}
              >
                Smoke ({285})
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Blue"}
                onChange={handleColor}
              >
                Blue ({285})
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Purple"}
                onChange={handleColor}
              >
                Purple ({285})
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Green"}
                onChange={handleColor}
              >
                Green ({285})
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Brown"}
                onChange={handleColor}
              >
                Brown ({285})
              </Checkbox>
            </VStack>
            <label>FRAMES</label>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                FRAMES
              </Text>
              <Checkbox
                colorScheme="green"
                value={"Square"}
                onChange={handleShape}
              >
                Square
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Rectangle"}
                onChange={handleShape}
              >
                Rectangle
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Wayfarer"}
                onChange={handleShape}
              >
                Wayfarer
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Round"}
                onChange={handleShape}
              >
                Round
              </Checkbox>
            </VStack>
            <label>GENDER</label>
            <VStack mb="20px" alignItems="flex-start">
              <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                Gender
              </Text>
              <Checkbox
                colorScheme="green"
                value={"Men"}
                onChange={handleGender}
              >
                Male
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Women"}
                onChange={handleGender}
              >
                Female
              </Checkbox>
              <Checkbox
                colorScheme="green"
                value={"Men,Women"}
                onChange={handleGender}
              >
                Male & Female
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
              <Text>Stylish GLASSES</Text>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr="5px" color="green">
                  VIEW FRAMES
                </Text>
                <Switch colorScheme="green" isChecked size="lg" />
                <Text ml="5px">VIEW 3D TRY ON</Text>
              </Flex>
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
                >
                  <option value="">Sort By Price</option>
                  <option value="desc">Price : low to high</option>
                  <option value="asc">Price : high to low</option>
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
              {eyeGlases.length > 0 &&
                eyeGlases.map((el) => (
                  <Link to={`/products/${el.id}`} key={el.id}>
                    <Box p="2" h="17rem" boxShadow="md" rounded="md">
                      <Image
                        src={el.imageTsrc}
                        alt={el.productRefLink}
                        m="auto"
                        p="1"
                        rounded="md"
                        bg="white"
                        h="55%"
                        w="60%"
                      />
                      <br />
                      <Text color={"grey 0.5"}>Title : {el.name}</Text>

                      <Text color={"green"}>
                        Discount : {Math.round((el.price / el.mPrice) * 100)}%
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
      <Footer2 />
    </>
  );
};

export default Glasses;
