import React, { useState } from "react";
import { AllProduct } from "../components/AllProduct";
import "./Pages.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";

import { add, deleteItem } from "../redux/cartSlice";
const Products = () => {
  const [itemPro, setItemPro] = useState(AllProduct);
  //   console.log(itemPro);

  const item = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main_div">
        {/* <h2>Our Products</h2> */}
        <div className="map_div">
          {itemPro.map((curProd) => {
            return (
              <div className="img_div">
                <img src={curProd.img} alt="" className="image" />
                <div className="namepice">
                  <p className="titlepri">{curProd.title}</p>
                  <p className="titlepri">Price - {curProd.price}</p>
                </div>
                {item.some((val) => val.id === curProd.id) ? (
                  <Button onClick={() => dispatch(deleteItem(curProd.id))}>
                    <span className="spandel"> Delete</span>
                  </Button>
                ) : (
                  <Button onClick={() => dispatch(add(curProd))}>
                    Add to Cart
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

// itemPro.map((elemProd)=>{
//     return(
//         <>
//         <img src={elemProd.images} />
//         </>
//     )
// })
// }

//   return (
// <div className="nbbb">
//   <div className="nnn">
//     {itemPro.map((datapro) => {
//       return <img src={datapro.images} className="images" />;
//     })}
//   </div>
// </div>
