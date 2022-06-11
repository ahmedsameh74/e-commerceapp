import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import "./search.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Search(){
  const navigate = useNavigate();
  const navigateToProducts = () => navigate("/products");
  const navigateToCategories = () => navigate("/categories");


    const [filter, setFilter] = useState([]);
    const [categoriesdata, setCategoriesData] = useState([]);
    const [data, setData] = useState([]);
    // Const[isSearching, setIsSearching] =useState(false)

    useEffect(() => {
      //apiGet();
      apiGetCategories();
    }, []);
  
const searchText = (event) =>{
    setFilter(event.target.value);
    // useState(true)
}
let searchData = data.filter(item => {
    return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
});
// console.warn(filter);
let search= categoriesdata.filter(item => {
  return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
});
//--------------------------------------------

const apiGetCategories = async () => {
  await fetch(`${Base_URL}/categories`)
      .then((response) => response.json())
      .then((json) => {
          console.log(json.data);
          setCategoriesData([json.data[0], json.data[1]]);
      });
};

// -------------------------------------------------
    const apiGet = async () => {
      await fetch(`${Base_URL}/allproducts`)
        .then((response) => response.json())
        .then((json) => {
         // console.log(json.data[1].items[1]);
          setData(json.data);
        });
    };
  

return(
    <>
     <div className="search">
         <input type="text" 
         className="tex"
         placeholder="search..."
         onClick={apiGet}
           value={filter}
           onChange ={searchText.bind(this)}
         />
         </div> 
         <div className="category-container">

<div className="show-category"> { search.map((res) =>(
<div className="box2"> <a 
onClick={() => navigate(`/products/${res.id}`)} 
  className="btn-box">
 {res.category_name}
  
</a>
</div>
))}
</div>
</div>



  


    <div className="heading">
  
              {
            
              searchData.map((res) => (
                <div className="box">
                  <h2 className="btn-box">{res.name}</h2>
                  <img src={res.product_image}></img>
                  <p>{res.product_disc}</p>
                  <button>shop now</button>
                </div>
              ))
            }
        
            </div>
          
  </>
)

}
export default Search