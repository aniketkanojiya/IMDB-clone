

import { Avatar, Button, Grid, Paper, TextField, Typography, } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from "react";
import { Link } from "react-router-dom";

const  SignUp= ()=>{
    const paperStyle={padding:'30px 20px', width:'400px', margin:'25px auto', height:'70vh'}
    const avatarStyle = {backgroungColor:'green'}
    const textStyle ={margin:'10px auto',}
    const btnStyle={margin:'8px auto', width:'fit-content',}
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align ='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <Typography variant="h4">Sign In</Typography>
                    {/* <Typography variant="caption">Please fill the account details</Typography> */}
                </Grid >
                
                <Grid align ='center'>
               <TextField style={textStyle}  label = 'Email' placeholder="Enter Your Email"  required /><br/>
               <TextField style={textStyle} label = 'Password' placeholder="Enter Your Password" type='password'/><br/>
            
             <Link to='/' style={{ textDecoration: 'none' }} >  <Button variant="contained" style={btnStyle}>Sign In</Button></Link>
             <Typography >
                     {/* <Link href="#" > */}
                        Forgot password ?
                {/* </Link> */}
                </Typography>
                <Typography > Do you have an account ?
                     {/* <Link href="#" > */}
                        Sign Up 
                {/* </Link> */}
                </Typography>
            </Grid>
            </Paper>
        </Grid>
    )
}
export default SignUp;