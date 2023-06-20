
import Que from './components/Que';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import Result from './components/Result';

function App() {
const [input, setInput] = useState("");
const [temp,setTemp] = useState("");
const [description,setDescription] = useState("");
const [icon,setIcon] = useState("");



const findWeather = async()=>{
  const apikey = '40852577b9a7f408684da7f3b4ee0238';
  const unit= 'metric';
  const url='https://api.openweathermap.org/data/2.5/weather?q=' + input + "&appid=" + apikey
 + "&units=" + unit;
 const response = await axios.get(url);
 const temp = response.data.main.temp;
 const weatherDescription = response.data.weather[0].description;
 const icon = await response.data.weather[0].icon;
 const imageUrl = 'https://openweathermap.org/img/wn/'
+ icon + '@2x.png' ;
setTemp(temp);
setDescription(weatherDescription);
setIcon(imageUrl);
setInput("");
}

  return (
    <div className="App">
      {temp ==="" ? (
      <Que input={input} setInput={setInput} findWeather={findWeather}/>
      ) : (
      <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)}
    </div>
  );
}

export default App;



//import npm install @material-ui/core --force
//OpenWeather App -get key
// npm install axios  communicate with APIs easily