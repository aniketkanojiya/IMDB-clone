import React from "react";
import Navigation from "../Components/Navigation";
import Carausel from "./Carausel";

import Movies from "./Movies";
const Home=({Users})=>{
    return(<>
    <Navigation   />
    <Carausel Users = {Users}/> 
  
    <Movies Users = {Users}/>
    </>
    )
}
export default Home;