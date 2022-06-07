import React , {useState , useEffect} from 'react';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';




export default function ProductDetails() {


    const {id} =  useParams();
    const [products ,setProducts] = useState([]);
    const [loading ,setLoading] = useState(false);


    useEffect (() =>{

         
        setProductDetails();
    },[]);


    const setProductDetails = async () =>{
      //  setLoading(true);
        const response = await fetch(`http://ecommerce-app0040.herokuapp.com/api/products/${id}`).then(response => response.json())
        .then(json => {
          console.log(json.data)
          if(json.data.items == []){
            setProducts([]);
           
          }else{
           
          }
       
        })
            
   
    
   }
 



            const renderProduct =() =>{
                products.map((product)=>{
                    return(
                      
                        <h1>{product.name}</h1>
                        
                    )
                })
                
            }

  
//   const showProduct = () =>{
//       return(
//           <>
        
//           <div className='col-md-6'>
//               <img src={products.data} alt={products.title} 
//               height="400px" width="400px"/>

//           </div>
//           <div className='col-md-6'>
//               <h4 className='text-uppercase text-black-50'>
//               {product.category}
//               </h4>
//               <h1 className='display-5'>{product.title}</h1>
//               <h3 className='display-6'>{product.price}</h3>
//              <p className='load'>
//                   {product.description}
//               </p>
//               <button className='btn btn-outline-dark px-4 py-2'>
//                   Add to cart
//               </button>
//               <Link to=" "className='btn btn-dark ms-2 px-3 py-2'>
//                   Go to cart
//               </Link>

//           </div>
//           </>
//       )
//   }
      return (
    <div >
        {/* <h1> hellow</h1> */}
      <div className ="container py-6">

      <div className ="row py-4">
          {/* { <renderProduct/>} */}
          { products.map((product , index)=>{
              return(
                
        <div className='col-md-6'>
        <img key={index} src={product.product_image}
        height="200px" width="200px"/>
  
              
          <h4 key={index} className='text-uppercase text-black-50'>{product.name}</h4>
          <p className='load'>
            {product.product_disc}
          </p>
          <button className='btn btn-outline-dark px-4 py-2'>
            Add to cart
          </button>
          <Link to=" "className='btn btn-dark ms-2 px-3 py-2'>
          Go to cart
          </Link>
        
          {/* <div className ="container py-6">
          <img  src={product.items}
                      height="100px" width="100px"/>

              <div className ="row py-5">
              </div>
              </div> */}
            </div>
                
                  
              )
          })}
                </div>
          </div> 

    </div>
  )
}

