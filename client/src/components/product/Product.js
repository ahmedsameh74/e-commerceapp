/* eslint-disable-next-line */
import React from "react";
import GalleryData from "../../Data/Data";
import Producat from "./Producat";

const Product = ()=>{
    const fetchData = GalleryData.map((soloitem)=>{
        return(
            
                <Producat  id={soloitem.id} img={soloitem.img} text={soloitem.text}
               price= {soloitem.price} title={soloitem.title}/>
           
        )
    })
    return(
        
    <section className="gallerybox">
        <div className="container">
            <div className="row">
                <div className="heading">
                    <h2>Our Producats</h2>
                    <p>summer collection new modern designsummer collection new modern design.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {fetchData}
                </div>
            </div>
        </div>
    </section>
 
 


    )
}
export default Product