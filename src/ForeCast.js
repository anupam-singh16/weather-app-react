import { useEffect, useState } from 'react';
// import NewWeather from './NewWeather';

function ForeCast({forecastData}) {

  const [forcast,setForcast] = useState()
   console.log("testing testing",forcast)

   let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
   let  key = "b2f77ff92c85dfe72f3fecd8b9d4b3a8"

   let value = 'noida'
    useEffect(()=>{
    fetch(
      // `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${key}`
         `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${key}`
      // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&appid=867732ff7a800d453067dcc4092de8a3`
     
      // `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&exclude=weekly&appid=b2f77ff92c85dfe72f3fecd8b9d4b3a8`
      // `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat1}&lon=${lon1}&appid=${key}`
      // `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat1}&lon=${lon1}&cnt=${5}&appid=${key}`
    )
      .then((data) => {
        return data.json();
      })
      .then((aData) => {
        setForcast(aData);
        console.log("forcastt data from weekly api", aData);
      });
    // let mapData = forcast?.list?.filter((_,i)=>{
    //   return i < 10;
    // });
    // console.log("map datadfghjkjdfhajk", mapData);
    // setItenData(mapData);
 },[])

  return (
    <>
     {/* <p>hello testing</p> */}
    {/* <p>{forcast?.list[7]?.dt_txt}</p> */}
    <h3>{days[new Date(forcast?.list[7].dt_txt).getDay()]}</h3>
    <h4>{Math.round((forcast?.list[7]?.main?.temp - 273.15).toFixed(2))}°C</h4> 
    {/* <h1>{days[new Date(forcast?.list[18].dt_txt).getDay()].slice(0,3)}</h1> */}
    {/* <h1>{days[new Date(forcast?.list[22].dt_txt).getDay()]}</h1> */}
    {/* <h1>{days[new Date(forcast?.list[29].dt_txt).getDay()]}</h1> */}
    {/* <h1>{days[new Date(forcast?.list[38].dt_txt).getDay()]}</h1> */}
    {/* <h1>{days[new Date(forcast?.list[7].dt_txt).getDay()]}</h1> */}

    </>
  )
}

export default ForeCast