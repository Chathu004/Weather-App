import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [whether, setWeather] = useState({
    name: 'Name',
    region: 'Region',
    country: 'Country',
    data_Location: 'Date & Location',
    temp: 'Temp',
    cloudy: 'Cloudy',
    img:''
  });

  useEffect(()=>{
    const searchBtn = document.getElementById('searchbtn');
    searchBtn.addEventListener('click', () => {
      const searchVal = document.getElementById('searchtxt').value;
      const requestOptions = {
        method: 'GET'
      };

      console.log('Search value:',searchVal);

      
      fetch(`http://api.weatherapi.com/v1/current.json?key=7d654de21f8c45d4a6933257242502&q=${searchVal}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          setWeather({
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            data_Location: data.location.localtime,
            temp: data.current.temp_c + 'C',
            cloudy: data.current.condition.text,
            img: data.current.condition.icon
          });
        })
        .catch(error => console.log('error', error));
    });
  }, []);


 
  return (
    <>
      <div>
        <header>
          <nav>
            <div className="nav-links" id="navLnks">
              {/* <i className="fa fa-times" onClick={hideMenu}></i> */}
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="#current-weather">CURRNENT</a></li>


              </ul>
            </div>
            {/* <i className="fa fa-bars" onClick={showMenu}></i> */}
          </nav>
          <h1 className="title">🌍<b>Weather</b> Forecast</h1>

          <div className="user-interface">
            <input type="text" id="searchtxt" placeholder="Enter location" />
            <button id="searchbtn">Search</button>

          </div>

        </header>

        <section id="current-weather">
          <h1 className="heders">Current Weather🍃</h1>
          <div>

            <h1 id="name">{whether.name}</h1>
            <h1 id="region">{whether.region}</h1>
            <h1 id="country">{whether.country}</h1>
            <h1 id="time">{whether.data_Location}</h1>
            <h1 id="temp">{whether.temp}</h1>
            <h1 id="cloudy">{whether.cloudy}</h1>
            <img id="img" src={whether.img} alt="" />


          </div>

        </section>

      </div>
    </>
  )
}

export default App
