import React from "react";
import './styles.css';
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { add } from "../Components/Redux/MovieSlice";
import { useDispatch } from "react-redux";

 const Movies =({Users})=>{

    // const {id}=useParams();
    // const singleItem = Users.filter(x=>x.id===id)
    // const singleProduct = singleItem[0]
    // const dispatch = useDispatch();
    // const handleAdd=(singleProduct)=>{
    //     dispatch(add(singleProduct))

    // }


     return(
         <>

         <div className="title"><h3>
             EXPLORE MOVIES
         </h3>
         <div className="movies">
         <div className="movies-container">
         


{
Users.filter((item, index) => index < 25).map((item) => (
    // Users.filter(x => x.id < 25 && x.title.toLowerCase().includes(filter)).map((item) => (

    <div key={item.id} className='movie'>
        <div className='movie-container'>
            <img className='movie-img' src={item.image} />
           
        </div>
            <div className='movie-rating'>{item.imDbRating}</div>
            <div className="movie-title">{item.title}</div>
            <Link to={`/${item.id}`}><button className="button-31">Details</button></Link>
            {/* <button className="button-31" onClick={()=>handleAdd(singleProduct)}>Add to Watchlist</button> */}

       

    </div>
))}

</div>
</div>
</div>
         </>
     )

 }
 export default Movies;