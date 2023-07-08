import React from "react";
import Navigation from "../Components/Navigation";
import { Link, useParams } from "react-router-dom";
import './card.css';
import { add } from "../Components/Redux/MovieSlice";
import { useDispatch } from "react-redux";
import { Grid, Paper, Stack, Typography, Button, } from "@mui/material";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


const Card = ({ Users }) => {
  const { id } = useParams();
  const singleItem = Users.filter(x => x.id === id)
  const singleProduct = singleItem[0]
  const dispatch = useDispatch();
  const handleAdd = (singleProduct) => {
    dispatch(add(singleProduct))

  }
  const paperStyle={padding:'30px 20px', width:'1200px', margin:'25px auto', height:'90vh', backgroundColor:'black'}
  const typeStyle={
    color:'yellow'
  }
  const paperStyle2={padding:'30px 20px', width:'800px', margin:'25px auto', height:'50vh',}
  const imgStyle={width:'100%', height:'100%'}
  const btn ={width:'fit-content'}

  return (
    <>

      <div className='productPage'>
        <Navigation />
      </div>
      <Paper elevation={20} style={paperStyle}>
      <Grid container>
     <Grid container justifyContent="space-between" direction="row" >
      <Grid >
        <Stack spacing={0.5} direction="column" alignItems="center" marginLeft={10}> 
          <Typography style ={typeStyle} variant="h3">{singleProduct.title}</Typography>
          <Typography style ={typeStyle} variant="h5">{singleProduct.year}</Typography>
        </Stack>
        </Grid>
        <Grid >
        <Stack spacing={0.5} direction="column" alignItems="center" marginRight={10} >
            <Typography style ={typeStyle} variant="h5">IMDb Rating</Typography>
            <Stack spacing={5} direction='row'>
            <StarBorderPurple500Icon style ={typeStyle} fontSize="large" />
            <Typography style ={typeStyle} variant="h5">
              {singleProduct.imDbRating}/10</Typography>
              </Stack>

          </Stack>
        </Grid>
        </Grid>
        </Grid><hr/>
        <Paper elevation={10} style={paperStyle2}>
          <img  style ={imgStyle} src={singleProduct.image}/>
        </Paper>
       <Grid align = 'center'><Link to='/Watchlist' style={{ textDecoration: 'none' }}><Button variant="contained" style = {btn} onClick={()=>handleAdd(singleProduct)} >
  Add To Watchlist
</Button></Link> </Grid> 
        

</Paper>



    
      {/* <section className="single-product">
        <div className="section-center single-product-center">
          <img src={singleProduct.image} className="single-product-img img" alt=""/>
          <article className="single-product-info">
            <div>
              <h1 style={{color:'yellow',}} className="single-product-title">{singleProduct.title}</h1>
              <p className="single-product-company text-slanted">by {singleProduct.crew}</p>
              <p className="single-product-price" style={{color:"yellow"}}>Year - {singleProduct.year}</p>
              
              <p className="single-product-desc">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
              <button className="btn btn-success" onClick={()=>handleAdd(singleProduct)}>
             Add To Watchlist
              </button>
        
            </div>
          </article>
        </div>
      </section> */}
    </>
  )

}

export default Card;