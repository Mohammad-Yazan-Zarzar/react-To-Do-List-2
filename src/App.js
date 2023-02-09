// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Home from './components/Home';
// import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';

// import WeatherCard from './components/WeatherCard';
// import Form from './components/Form';
function App() {
  // const [weather,setWeather]= useState('')
  // const [api,setApi]=useState('u')
  return (
    // <Container>
    //   <div className="App">
        
    //     {/* <h1>Yazan</h1> */}
    //     <WeatherCard weather={weather} api={api} setApi={setApi}/>
    //     <Form weather={weather} setWeather={setWeather} api={api} setApi={setApi} ></Form>
        
    //   </div>
    // </Container>
    <Container >
      
      <Home></Home>

    </Container>
    
  );
}

export default App;
