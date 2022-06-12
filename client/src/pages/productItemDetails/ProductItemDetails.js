/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ProductItemDetails.css";
import {

  useParams
} from "react-router-dom";


function ProductItemDetails() {
  const [data, setData] = useState([]);
  const [feed, setFeed]= useState([]);
  const [userFeed, setUserFeed]= useState([]);
  const {user}= useAuthContext();
  const [feedBack, setfeedBack]= useState(null);
  let { id } = useParams();
  console.log(user.userId);
 // console.log(feed);
 //onsole.log(user);
 // console.log(id);
   
const  handelSubmit= (e)=>{
   e.preventDefault();
   setfeedBack(feed);
   console.log(feedBack);
   apiPost();
}


  useEffect(() => {
    apiGet();
    apiGetFeedBck();
   // apiPost();
  }, []);


  

  const apiGet = async () => {


    await fetch(`${Base_URL}/product/items/item/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setData(json.data);
      });


  };

  const apiGetFeedBck = async () => {


    await fetch(`${Base_URL}/feedback/${user.userId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
       setUserFeed(json.userFeed);
      });


  };
  const apiPost = async () => {
    await fetch(`${Base_URL}/feedback/store`,{method:"POST",body:JSON.stringify({feedback:feedBack,user_id:user.userId, item_id:id}),headers: { "Content-Type": "application/json" },})
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      if(json.success ==="Feedback added successfully"){
           console.log("success");
      }else{
        console.log("error");
      }
        setFeed(json.feed);
      });

     
  };

  // Products();

  return (
    <>
      <div className="show-category">
        <h2 className="secTitle">PRODUCT ITEM DETAILS</h2>
        <hr />
        <div className="container">
          <div className="detailsContainer">
            <div className="detailsContainerSec1">
              <h5 className="itemDetailStyle">SKU      :  <span style={{ color: "#165BAA" }}>{data.sku}</span></h5>
              <h5 className="itemDetailStyle">COLOR    :  <span style={{ color: "#165BAA" }}>{data.color}</span></h5>
              <h5 className="itemDetailStyle">SIZE     :  <span style={{ color: "#165BAA" }}>{data.size}</span></h5>
              <h5 className="itemDetailStyle">PRICE    :  <span style={{ color: "#165BAA" }}>{data.price}</span></h5>
              <h5 className="itemDetailStyle">QUANTITY :  <span style={{ color: "#165BAA" }}>{data.qty}</span></h5>
            </div>
            <div className="detailsContainerSec2">
              <h5>Add QUANTITY</h5>
              
  <div class="input-group">
  <span className="input-group-text"></span>
  {/* <textarea className="form-control" aria-label="With textarea"></textarea> */}
  <input  onChange= {(e)=>setFeed(e.target.value)} type="text" class="form-control" id="specificSizeInputName" placeholder="write quantity"/>
</div>
<hr></hr>
<div>
<i class="fa-solid fa-cart-circle-arrow-up"></i>
<button type="button" className="btn btn-outline-dark px-4 py-2">Add To Cart</button>
</div>
            </div>
          </div>

          <h2 className="secTitle">Feedbacks</h2>
          <form class="row gx-3 gy-2 align-items-center" onSubmit={handelSubmit}>
   <div class="col-sm-6">
    <label class="visually-hidden" for="specificSizeInputName">your feedback</label>
    <textarea onChange= {(e)=>setFeed(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
    {/* <input  onChange= {(e)=>setFeed(e.target.value)} type="text" class="form-control" id="specificSizeInputName" placeholder="write somthing"/> */}
  </div>
  <div class="col-sm-3">
   <button type="button" className="btn btn-dark px-4 py-2"> submit</button>
  </div>
 
 
</form>
          <hr />
          {/* <h5 style={{marginTop:40,marginBottom:40}} className="secTitle">Feedbacks of customer will add here</h5> */}
          <p style={{marginTop:40,marginBottom:40}}> </p>
          <h4 className="secTitle">ITEM IMAGES</h4>
          <hr />
          <div className="row">
            <div className="heading">

              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image1} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image2} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image3} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image4} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetails;
