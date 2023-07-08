import React from "react";
import Navigation from "../Components/Navigation";
import './styles.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Components/Redux/MovieSlice";
const  Watchlist=()=>{
    const dispatch = useDispatch();
    const items  = useSelector((state)=>state.movie)
    
    const handleRemove=(itemid) =>{
        dispatch(remove(itemid))

    }
    return(
       <>
       <Navigation/>
     
     <div className="movies">
         <div className="movies-container">
         


{
items.map((item) => (

    <div key={item.id} className='movie'>
        <div className='movie-container'>
            <img className='movie-img' src={item.image} />
           
        </div>
            <div className='movie-rating'>{item.imDbRating}</div>
            <div className="movie-title">{item.title}</div>
          <button className="button-31" onClick={()=>handleRemove(item.id)}>Remove</button>

       

    </div>
))}

</div>
</div>
 
       </>
    )
}
export default Watchlist;