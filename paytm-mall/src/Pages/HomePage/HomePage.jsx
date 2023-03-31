

// import "../Style/Homepage.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../Components/Navbar";
import Carousel from '../../Components/Caraousal';
import Footer from "../../Components/Footer";
import { getProduct } from "../../Redux/HomeReducer/actions";

export const HomePage = () => {
  const dispatch=useDispatch();
  let groceryBox = document.querySelector(".grocery-container");

  const groceryPrev = () => {
    let width = groceryBox.clientWidth;
    groceryBox.scrollLeft = groceryBox.scrollLeft - width;
    // console.log(width)
  };

  const groceryNext = () => {
    let width = groceryBox.clientWidth;
    groceryBox.scrollLeft = groceryBox.scrollLeft + width;
    // console.log(width)
  };

  useEffect(()=>{
    dispatch(getProduct())
  },[])

  return (
    <>
    <Navbar></Navbar>
    <Navbar/>
      <div id='main'>
        <div className="product-container">
          <Carousel />
        </div>
        <h1>Grocery & Home Furnishing</h1>
        <div className="grocery">
          <button className="groceryprebtn" onClick={groceryPrev}>
            <h1><GrLinkPrevious /></h1>
          </button>
          <button className="grocerynextbtn" onClick={groceryNext}>
            <h1><GrLinkNext /></h1>
          </button>
          <div className="grocery-container">
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498479/1613247367528.png?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>Big Bazaar</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498482/1620737072141.png?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>Urban Ladder</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>@Home</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>More</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>More</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498485/1620737113562.png?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>@Homecentre</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498490/1610567023040.png?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>Prestige</h3>
            </div>
            <div className="grocerycard">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/498486/1610567208285.png?imwidth=414&impolicy=hq"
                alt="Bazar"
              />
              <h3>Ratnadeep</h3>
            </div>
          </div>
        </div>

        <h1>Jewellery Brands</h1>
        <Grid
          className="shops"
          templateColumns="repeat(4, 1fr)"
          templateRows="600px"
          gap={12}
        >
          <GridItem w="100%" h="10">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq"
              alt="Bazar"
            />
            <h3>Big Bazaar</h3>
          </GridItem>

          <GridItem w="100%" h="10">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq"
              alt="Bazar"
            />
            <h3>Urban Ladder</h3>
          </GridItem>

          <GridItem w="100%" h="10">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq"
              alt="Bazar"
            />
            <h3>@Home</h3>
          </GridItem>

          <GridItem w="100%" h="10">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq"
              alt="Bazar"
            />
            <h3>More</h3>
          </GridItem>
        </Grid>
        <Footer/>
        <Footer></Footer>
      </div>
    </>
  );
};


