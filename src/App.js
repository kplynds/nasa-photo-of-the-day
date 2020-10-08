import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/Title"
import Photo from "./components/Photo"
import Explanation from "./components/Explanation"

function App() {
  const [nasaData, setNasaData] = useState({ })
  console.log(nasaData)
  useEffect(() => {
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7duWQyqbeI2nNOpv5rFTJbIFbNwrcEwbduPImYDY")
      .then(res => {
        console.log(res.data.date)
        setNasaData(res.data)    
      })
      .catch(err => {
        console.log(err)
      })
  }
  , [])  
  return (
    <div className="App">
      <Title titleData = {nasaData.title}/>
      <Photo photoData = {nasaData.url} />
      <Explanation explanationData = {nasaData.explanation} />
    </div>
  );
  
}

export default App;
