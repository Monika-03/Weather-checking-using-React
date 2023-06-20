 import React from 'react';
 import './React.css'
 import { Button } from '@material-ui/core';
 
 const Result = ({temp,desc,icon,setTemp}) => {
   return (
     <div className='result'>
        <div className='result_box'>
            <h1>Temp:{temp}</h1>
            <p>{desc}</p>
            <img src={icon} alt="logo"/>
            <Button variant="contained" color="default" onClick={()=>{setTemp("")}}>Back</Button>
        </div>
       
     </div>
   );
 }
 
 export default Result;
 