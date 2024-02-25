import { useState } from 'react'

import './App.css'

function App() {
  const [whether, setWeather] = useState({
    name: 'Name',
    region: 'Region',
    country: 'Country',
    data_Location: 'Date & Location',
    temp: 'Temperature',
    cloudy: 'Cloudy',
    img:''
  });

 
  return (
    <>
      <div>
        <header>
          <nav>
            <div class="nav-links" id="navLnks">
              <i class="fa fa-times" onclick="hideMenu()"></i>
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="#current-weather">CURRNENT</a></li>


              </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
          </nav>
          <h1 class="title">🌍<b>Weather</b> Forecast</h1>

          <div class="user-interface">
            <input type="text" id="searchtxt" placeholder="Enter location" />
            <button id="searchbtn">Search</button>

          </div>

        </header>

        <section id="current-weather">
          <h1 class="heders">Current Weather🍃</h1>
          <div>

            <h1 id="name">Name</h1>
            <h1 id="region">Region</h1>
            <h1 id="country">Country</h1>
            <h1 id="time">Date & Localtime</h1>
            <h1 id="temp">Temp</h1>
            <h1 id="cloudy">Cloudy</h1>
            <img id="img" alt="" />


          </div>

        </section>

      </div>
    </>
  )
}

export default App
