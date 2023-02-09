import React from "react"
import './Home.css'
import { Container } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";


const Home=()=>{
    const [input,setInput]= useState('');
    const [weather,setWeather]=useState('snow');
    const [temp,setTemp]=useState(15);
    const[loaderOn,setLoader]=useState('')
    const API_KEY='c397537ad5ee12b4b9895282f67e1fcb'
    const base="http://api.openweathermap.org/data/2.5/"
    let root=document.getElementById('root')
    // console.log(root)
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}%2c${country.value}&appid=${API_KEY}`)
    const search=(e)=>{
        if(e.key==='Enter'){
            console.log('Hello')
            setLoader('on')
            axios.get(`${base}weather?q=${input}&units=metric&APPID=${API_KEY}`)
            
            .then((result)=>{
                console.log(result)
                setWeather(result.data.weather[0].main)
                setTemp(result.data.main.temp)
                console.log(temp)
                if(result.data.main.temp>15){
                    console.log('bigger')
                    root.classList.add('App')
                }else{
                    root.classList.remove('App')

                }
                setInput('')
            }).finally(()=>{
                setLoader('')
             })
        }
    }  
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let month2=date.toLocaleString('default', { month: 'long' })
    // let day2=date.toLocaleString('default', { day: 'long' })
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day2=weekday[date.getDay()];
   console.log(day)
   return<div>
    
        <div className="Box">
            <input type='text'placeholder="City ..." onKeyUp={search} onChange={(e)=>{setInput(e.target.value)}} value={input}></input>
        </div>
        <div className="content">
            <div className="dateBox">
                
                <h2>{day2} {day} {month2} {year}</h2>
                {/* <h2></h2> */}
                {/* <h3>{time}</h3> */}
                <h2>{input}</h2>
            </div> 
        </div>
        <Loader loaderOn={loaderOn}></Loader>
        
        <div className="Flex">
            <div className="padding">
                <h2><span className="color">{temp} C</span></h2>
            </div>
            <div>
                <h2 className="color size">{weather}</h2>
            </div>
        </div>

        
        
        
    </div>
    
}
export default Home