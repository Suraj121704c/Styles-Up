import React, { useState, useEffect, useRef } from "react";
import "../Style/Navbar.css";
import { Box, Text, Image, Flex, VStack, InputGroup } from "@chakra-ui/react";
import cartbag from "../utils/cartbag.png";
import list from "../utils/list.png";
import { Link, NavLink, useSearchParams, useLocation } from "react-router-dom";
import image from "../Images/logo.png";
import menu from "../utils/menu.png";
import search from "../utils/search.png";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../Redux/Auth/actions";

const Navbar2 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initQ = searchParams.toString("q");
  const [q, setQ] = useState(initQ);

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  //const isAuth = localStorage.getItem("isAuth")|| false
  // console.log(isAuth);
  const checkScroll = () => {
    if (window.scrollY >= 70) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", checkScroll);

  // set Debouncing in input tag

  const url = `https://paytmmallserver.onrender.com/product`;
  const ref = useRef(null);
  const [debounceDiv, setDebounceDiv] = useState(false);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    fetchData(searchData);
  }, [searchData]);
  const fetchData = (searchValue) => {
    fetch(`${url}?_limit=5&q=${searchValue}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        //   console.log( " debounce data ",res);
      });
  };

  useEffect(() => {
    let params = {};
    q && (params.q = q);
    setSearchParams(params);
  }, [q]);

  window.addEventListener("click", (e) => {
    if (e.target.id !== "13") {
      setDebounceDiv(false);
    }
  });

  const handleLogout = () => {
    dispatch(setLogout);
  };
  //const [category, setCategory] = useState("");
  const initialCategory = searchParams.get("category");
  const [category, setCategory] = useState(initialCategory || "");

  const handleClick = (value) => {
    console.log(category);
    setCategory(value);
    console.log(category);
  };

  return (
    <Box>
      <Box className="paytm_mall_logo"></Box>
      <Box
        className="navbar"
        w={{ md: "100%", lg: "100%" }}
        m="auto"
        position={isSticky ? "fixed" : "static"}
        top="-7px"
        backgroundColor="white"
        zIndex="1000"
      >
        <Box
          className="navLeft"
          gap={{ base: "4px", sm: "10px", md: "15px", lg: "20px" }}
        >
          <Link to="/">
            <Image
              p="6px"
              src={image}
              alt="unique_logo"
              height={"24"}
              width={"25"}
            />
          </Link>
          <Box className="active" w={{ base: "40%", md: "18%", lg: "20%" }}>
            <Box
              className="nav_category"
              p={{ base: "1px", sm: "4px", md: "6px", lg: "8px" }}
            >
              <Image
                src={menu}
                alt=""
                color="red"
                w={{ base: "10px", md: "15px", lg: "18px" }}
              />

              <Box
                marginTop={{ base: "-6px", sm: "0px", md: "0px", lg: "0px" }}
              >
                <Text as="b" fontSize={{ base: "6px", md: "12px", lg: "14px" }}>
                  Shop By Category
                </Text>
              </Box>
            </Box>

            <Box
              className="deepmenu"
              w={{ base: "100%", sm: "130%", md: "90%", lg: "66%" }}
            >
              <ul style={{ display: "inline-block" }} />
              <Box className="first">
                <Box
                  ml="-10px"
                  h="442px"
                  mt="-20px"
                  p="20px"
                  className="localWarehouse"
                >
                  <Flex>
                    <Box>
                      <Text fontSize="sm" color="red">
                        GIFT CARDS
                      </Text>
                    </Box>

                    <Box align="left" display="flex">
                      <Box
                        h="400px"
                        bg="gray"
                        w="1px"
                        ml={{
                          base: "20px",
                          sm: "50px",
                          md: "80px",
                          lg: "100px",
                        }}
                      ></Box>
                      <VStack ml="10px" align="left">
                        <Link to={`/jewellery`}>
                          <Text
                            onClick={() => {
                              setCategory("jewellery");
                            }}
                          >
                            Jewellery
                          </Text>
                        </Link>
                        <Link to={`/glasses`}>
                          <Text
                            onClick={() => {
                              setCategory("glasses");
                            }}
                          >
                            Glasses
                          </Text>
                        </Link>
                        <Link to={`/decoration`}>
                          <Text
                            onClick={() => {
                              setCategory("decoration");
                            }}
                          >
                            Decoration
                          </Text>
                        </Link>
                        <Link to={`/electronic`}>
                          <Text
                            onClick={() => {
                              setCategory("electronic");
                            }}
                          >
                            Furniture & Electronics
                          </Text>
                        </Link>
                        <Link to="/autoMobiles">
                          <Text
                            onClick={() => {
                              setCategory("autoMobiles");
                            }}
                          >
                            Automobiles
                          </Text>
                        </Link>

                        <Link to="/beauty&health">
                          <Text>Beauty & Health</Text>
                        </Link>

                        <Link to="/travel&holidays">
                          <Text>Travel & Holidays</Text>
                        </Link>
                      </VStack>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* ==================================INPUT BOX======================================== */}

          <Box
            className="options"
            w={{ base: "50%", md: "77%", lg: "82%" }}
            p={{ base: "0px", sm: "4px", md: "4px", lg: "4px" }}
          >
            {/* use debouncing   */}
            <Box w="100%">
              <input
                w={{ base: "40%", md: "40%", lg: "100%" }}
                className="searchBar"
                type="text"
                placeholder="Search for a Product, Brand or Category"
                h="38px"
                fontSize="14px"
                onChange={(e) => setQ(e.target.value)}
                id="13"
              />
            </Box>
            <Box m="10px">
              {" "}
              <BiSearch color="red" />
            </Box>
          </Box>
        </Box>

        <Box
          className="nav_right"
          ml={{ base: "-15px" }}
          p={{ base: "0px" }}
          w={{ base: "50%", md: "40%", lg: "30%" }}
        >
          <Link to={"/orders"}>
            <Box className="order" w={{ base: "20%", md: "30%", lg: "33%" }}>
              <Image
                src={list}
                alt="order_list_logo"
                w={{ base: "10px", md: "20px", lg: "25px" }}
              />
              <Text fontSize={{ base: "6px", sm: "md", lg: "md" }}>Orders</Text>
            </Box>
          </Link>

          <Link to={"/cart"}>
            <Box className="cart" w={{ base: "20%", md: "30%", lg: "33%" }}>
              <Image
                src={cartbag}
                alt="cart_logo"
                w={{ base: "10px", md: "20px", lg: "25px" }}
              />
              <Text fontSize={{ base: "6px", md: "md", lg: "md" }}>Cart</Text>
            </Box>
          </Link>
          {isAuth ? (
            <Box className="user" w={{ base: "33%", md: "30%", lg: "33%" }}>
              <Image
                w={{ base: "10px", md: "20px", lg: "20px" }}
                src="https://lh3.googleusercontent.com/cKM952bxPmD-jF370bX__2kVdNWHevwFKTFcYyIFL1j64IyV6PCO44udzF-Zokf4FFl5tjY9n9kUZda3_KzHtoLv=w128-h128-e365-rj-sc0x00ffffff"
                alt="logout icon"
              />
              <Text
                onClick={handleLogout}
                fontSize={{ base: "6px", sm: "md", lg: "md" }}
              >
                Logout
              </Text>
            </Box>
          ) : (
            <Link to={"/login"}>
              <Box className="user" w={{ base: "33%", md: "30%", lg: "33%" }}>
                <Image
                  w={{ base: "10px", md: "20px", lg: "20px" }}
                  src="https://lh3.googleusercontent.com/cKM952bxPmD-jF370bX__2kVdNWHevwFKTFcYyIFL1j64IyV6PCO44udzF-Zokf4FFl5tjY9n9kUZda3_KzHtoLv=w128-h128-e365-rj-sc0x00ffffff"
                  alt=""
                />
                <Text fontSize={{ base: "6px", sm: "md", lg: "md" }}>
                  Login/SignUp
                </Text>
              </Box>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar2;
