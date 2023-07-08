import React, { useMemo, useState } from "react";
import './Navigation.css';
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
// const [filter, setFilter]=useState("")
// const filterItems = useMemo(()=>allItems.filter(item=>item.startsWIth(filter),[filter]))

    
    return (
        <>
            <nav>
            
            <img src='./imgs/IMDB.png' alt='imdb' className='imdb' />
            <div className="menu"><Menu/>
                
            </div>

            <div className='scarch'>
                <div className='all'>
                   <Link to="/" style={{ textDecoration: 'none' }}><div className='present-list' >HOME</div></Link>
                    <img src='./imgs/triangle.svg' alt='triangle' className='triangle' />
                </div>
              <form >
            <input placeholder="search movies" /></form>
                <button type="submit"><img src="./imgs/scarch.svg" /></button>
                
            </div> 

            <div className="pro">IMDBPro</div>
            <div className="vline"></div>
            <Link to= "/Watchlist" style={{ textDecoration: 'none', color:'white' }}  className="wlist"><img src='./imgs/whtchlist.svg' className="wl-img" />Watchlist</Link>
           <Link to='/sign' style={{ textDecoration: 'none', color:'white' }}> <div className="sin">Sign In</div></Link>
            </nav>
        
        </>
    )
}
export default Navigation;