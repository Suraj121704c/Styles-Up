import React, { useEffect, useState } from "react";
import css from "./Electronics.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getELectronics } from "../../Redux/ProductReducer/action";
import { Box, Button, Center, Grid, Image, Text } from "@chakra-ui/react";
import Navbar2 from "../../Components/Navbar2";
import { Footer2 } from "../../Components/Fotter2";

const Products = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const electronics = useSelector((store) => {
    return store.electronicsReducer.Electronics;
  });
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);

  const initialCategory = searchParams.getAll("Category");
  const [Category, setCategory] = useState(initialCategory || []);
  const initialRating = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialRating || []);

  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleChange = (e) => {
    let newCategory = [...Category];
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    // console.log(newCategory);
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
    // console.log(newRating);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {};
    page && (params.page = page);
    Category && (params.Category = Category);
    rating && (params.rating = rating);
    order && (params.order = order);

    setSearchParams(params);
  }, [page, Category, rating, order]);

  let obj = {
    params: {
      Category: searchParams.getAll("Category"),
      rating: searchParams.getAll("rating"),
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      q : searchParams.get("q")
    },
  };

  useEffect(() => {
    dispatch(getELectronics(obj));
  }, [location.search]);

  return (
    <>
      <Navbar2 />
      <Box>
        <Box className={css.product_main_div}>
          <Box id={css.heading}>
            <span> Home &nbsp; / &nbsp;</span>

            <span> Mobile & tablets &nbsp; / &nbsp;</span>

            <span> Electronics</span>
          </Box>

          <Box id={css.container}>
            <Box id={css.container_left}>
              <Box id={css.container_left_heading}>
                <Box>
                  <span>
                    {" "}
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                    ></i>{" "}
                  </span>
                  <span>&nbsp; Mobile, Tablets & Accessories </span>
                </Box>

                <Box>
                  <span>
                    {" "}
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                    ></i>{" "}
                  </span>
                  <span>&nbsp; Mobile </span>
                </Box>

                <Box>
                  <strong>&nbsp; &nbsp; &nbsp; Smart Phones </strong>
                </Box>
              </Box>

              <hr />

              <Box id={css.container_left_brand} marginBottom={"10px"}>
                <Box>Category</Box>

                <input
                  type="checkbox"
                  id={css.brand1}
                  name="earphone"
                  value={"earphone"}
                  onChange={handleChange}
                />
                <label for="brand1"> earphone </label>
                <br />

                <input
                  type="checkbox"
                  id={css.brand2}
                  name="hardware"
                  value={"hardware"}
                  onChange={handleChange}
                />
                <label for="brand2"> hardware </label>
                <br />

                <input
                  type="checkbox"
                  id={css.brand3}
                  name="software"
                  value={"software"}
                  onChange={handleChange}
                />
                <label for="brand3"> software </label>
                <br />

                <input
                  type="checkbox"
                  id={css.brand4}
                  name="camera"
                  value={"camera"}
                  onChange={handleChange}
                />
                <label for="brand4"> camera </label>
                <br />
              </Box>

              <hr />

              <Box id={css.container_left_ram}>
                <Box>Rating</Box>

                <input
                  type="checkbox"
                  id={css.ram1}
                  name="rate1"
                  onChange={handleRating}
                  value={"4.6"}
                />
                <label for="rate1"> 2⭐ & above </label>
                <br />

                <input
                  type="checkbox"
                  id={css.ram2}
                  name="rate2"
                  onChange={handleRating}
                  value={"4.7"}
                />
                <label for="rate2"> 3⭐ & above </label>
                <br />

                <input
                  type="checkbox"
                  id={css.ram3}
                  name="rate3"
                  onChange={handleRating}
                  value={"4.9"}
                />
                <label for="rate3"> 4⭐ & above </label>
                <br />
              </Box>
            </Box>
            <hr />

            <Box id={css.container_right}>
              <Box className={css.top_smartphones}>
                <p>
                  {" "}
                  <span className={css.smartphones_span}>Electronics</span>{" "}
                  <span className={css.product_two}>- 36 Products</span>{" "}
                </p>
                <select
                  name="sorting"
                  id={css.select_options}
                  onChange={handleSort}
                >
                  <option value={""}>Select</option>
                  <option value={"asc"}>Price : Low to High</option>
                  <option value={"desc"}>Price : High to Low</option>
                </select>
              </Box>
              <Box
                id={css.mainContainer}
                flex="1"
                p="20px"
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                }}
              >
                <Grid
                  gap={5}
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                >
                  {electronics.length > 0 &&
                    electronics.map((el) => {
                      return (
                        <Link to={`/products/${el.id}`} key={el.id}>
                          <Box p="2" h="17rem" boxShadow="md" rounded="md">
                            <Image
                              src={el.image1}
                              alt={el.description}
                              m="auto"
                              p="1"
                              rounded="md"
                              bg="white"
                              h="55%"
                              w="60%"
                            />
                            <br />
                            <Text color={"grey 0.5"}>
                              Category : {el.Category}
                            </Text>

                            <Text color={"green"}>
                              Discount : {Math.round((el.price / el.MRP) * 100)}
                              %
                            </Text>
                            <Text as={"b"} fontSize="1.2rem">
                              ₹{el.price}{" "}
                            </Text>
                            <Text as={"s"}>₹{el.MRP}</Text>
                          </Box>
                        </Link>
                      );
                    })}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>

        <Center>
          <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
            Previous
          </Button>
          <Button>{page}</Button>
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        </Center>
      </Box>
      <Footer2 />
    </>
  );
};

export default Products;
