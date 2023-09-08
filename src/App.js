import { useState } from 'react';
import './App.css'
import Search from './component/search';
import Weather from './component/weather';
import Forecast from './component/forecast'



function App() {
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecast, setForecast] = useState("");
  
const change= (search) =>{
  const api_key=process.env.REACT_APP_API_KEY
  
  const city=search.location.name;
  setCurrentWeather(search)

  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=5&aqi=no&alerts=no`)
  .then(response=>response.json())
  .then( data => {
    setForecast(data)
  })

}

console.log(currentWeather)
console.log(forecast) 


  return (
    <div className="App">
     <Search change={change} />
     {currentWeather && <Weather currentWeather={currentWeather} />}
     {forecast && <Forecast forecast={forecast} />}
    </div>
  );

  }
export default App;
