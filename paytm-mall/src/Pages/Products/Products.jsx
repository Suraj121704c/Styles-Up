import React from "react";
import css from "./Product.module.css";

const Products = () => {
  return (
    <>
      <div>
        <div className={css.product_main_div}>
          <div id={css.heading}>
            <span> Home &nbsp; / &nbsp;</span>

            <span> Mobile & tablets &nbsp; / &nbsp;</span>

            <span> Smart Phones</span>
          </div>

          <div id={css.container}>
            <div id={css.container_left}>
              <div id={css.container_left_heading}>
                <div>
                  <span>
                    {" "}
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                    ></i>{" "}
                  </span>
                  <span>&nbsp; Mobile, Tablets & Accessories </span>
                </div>

                <div>
                  <span>
                    {" "}
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                    ></i>{" "}
                  </span>
                  <span>&nbsp; Mobile </span>
                </div>

                <div>
                  <strong>&nbsp; &nbsp; &nbsp; Smart Phones </strong>
                </div>
              </div>

              <hr />

              <div id={css.container_left_price}>
                <div>Price</div>

                <div>
                  <input
                    type="range"
                    id={css.slider}
                    name="volume"
                    min="0"
                    max="150000"
                    step="100"
                  />
                </div>

                <div>
                  <span className={css.price_box}>₹150000</span>

                  <span>to</span>

                  <span className={css.price_box}>₹150000</span>
                </div>
              </div>

              <hr />

              <div id={css.container_left_brand}>
                <div>Category</div>

                <input type="checkbox" id={css.brand1} name="brand1" />
                <label for="brand1"> earphone </label>
                <br />

                <input type="checkbox" id={css.brand2} name="brand2" />
                <label for="brand2"> hardware </label>
                <br />

                <input type="checkbox" id={css.brand3} name="brand3" />
                <label for="brand3"> software </label>
                <br />

                <input type="checkbox" id={css.brand4} name="brand4" />
                <label for="brand4"> camera </label>
                <br />

              </div>

              <hr />

              <div id={css.container_left_ram}>
                <div>Discount</div>

                <input type="checkbox" id={css.ram1} name="brand1" />
                <label for="brand1"> 8GB </label>
                <br />

                <input type="checkbox" id={css.ram2} name="brand2" />
                <label for="brand2"> 6GB </label>
                <br />

                <input type="checkbox" id={css.ram3} name="brand3" />
                <label for="brand3"> 4GB </label>
                <br />

                <input type="checkbox" id={css.ram4} name="brand4" />
                <label for="brand4"> 3GB </label>
                <br />

                <input type="checkbox" id={css.ram5} name="brand5" />
                <label for="brand5"> 2GB </label>
                <br />
              </div>
            </div>

            <div id={css.container_right}>
              <div className={css.top_smartphones}>
                <p>
                  {" "}
                  <span className={css.smartphones_span}>SmartPhones</span>{" "}
                  <span className={css.product_two}>- 282 Products</span>{" "}
                </p>   
                  <select
                    name="sorting"
                    id={css.select_options}
                  >
                    <option>Select</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select>              
              </div>
              <div id={css.mainContainer}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
