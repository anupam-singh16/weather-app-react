// import APiKey from "./APiKey";
import React from "react";
import Option from "./option";
import "./style.css";
import { useEffect, useState } from "react";
import  {Cities} from "./Cities";

// let Cities = require("./Cities.js")


function Weather() {
  // const {} = useGlobalContext()
  const [api, setApi] = useState({});
  // const [weather,setWeather] = useState()
  // const [search1, setSearch1] = useState();
  const [value,setValue] = useState("")
  const [details,setDetails] = useState()
  const [image,setImage] = useState({})
  const [showWeather,setShowWeather] = useState(true)
   // console.log("string fy data",data?.lat);
  const [location, setLocation] = useState({
    loaded: false,
    coordinates:{
      lat:"",
      lon:""
    }
                   
    });

    // const [newLocation,setNewLocation] = useState({coordinates1:{lat:"",lon:""}});

    // console.log("new loacitojsd",newLocation);
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setNewLocation( coordinates1: {
    //     lat: position.coords.latitude,
    //     lon: position.coords.longitude,
    //   });
    // });
    let apiKey = "f56f24967aaf51182d1d4df628297c6d";
  //   let    lon ="77.320361"
  //    let  lat = "28.575839"
  // console.log("location",location);
  // setWeather(api?.weather?.main)
  const dateBuilder = () => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let dates = new Date()
    let day = days[dates.getDay()];
    let date = dates.getDate();
    let month = months[dates.getMonth()];
    let year = dates.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  let lat1 =location?.coordinates?.lat;
  let lon1 = location?.coordinates?.lon;
  // console.log("lats",lat1,lon1);
  
//  const {weather} = api?.weather[0].main

  useEffect(()=>{
    // console.log("lonaj",longitude1);
    fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
    .then((data)=>{
         return data.json()
    }).then((aData)=>{
      setDetails(aData)
    //  console.log("geolocation data",aData);
    })
  },[])
  //  const location1 = useGeolocation();
 
// debugger;
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: error.coords.latitude,
        lon: error.coords.longitude,
      },
      error: {},
    });
  };

  useEffect(() => {
    // onError()

    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }else{
      // console.log();
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

  }, []);

  // const apiKey = "f56f24967aaf51182d1d4df628297c6d";

// console.log();
 useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lon1}&appid=f56f24967aaf51182d1d4df628297c6d`)
    .then((data)=>{
      return data.json()
    }).then((aData)=>{
      setApi(aData);
      console.log("Api data",aData);
    }).catch((error)=>{
      console.log("error",error);
    })
 },[lat1,lon1])



 const ref = React.createRef();

 const handleClick = () =>
   ref.current.scrollIntoView({
     behavior: 'smooth',
     block: 'start',
   });





 useEffect(()=>{

 
 switch (api) {
  case "Haze":
    setImage({ icon: "CLEAR_DAY" });
    break;
  case "Clouds":
    setImage({ icon: "CLOUDY" });
    break;
  case "Rain":
    setImage({ icon: "RAIN" });
    break;
  case "Snow":
    setImage({ icon: "SNOW" });
    break;
  case "Dust":
    setImage({ icon: "WIND" });
    break;
  case "Drizzle":
    setImage({ icon: "SLEET" });
    break;
  case "Fog":
    setImage({ icon: "FOG" });
    break;
  case "Smoke":
    setImage({ icon: "FOG" });
    break;
  case "Tornado":
    setImage({ icon: "WIND" });
    break;
  default:
    setImage({ icon: "CLEAR_DAY" });
}
},[])

 const apiCall = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    value +
      "&appid=" +
      apiKey
  )
    .then((data) => {
      return data.json();
    })
    .then((aData) => {
      setApi(aData);
      console.log("Search Api Data", aData);
    });
};


 useEffect(()=>{
  apiCall(); 
 },[])

  
// let query = "noida"
//   useEffect((city = "noida") => {
//   fetch(
//     // `${APiKey.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${APiKey.key}`
//     `${APiKey.base}weather?q=${
//       city != "[object Object]" ? city : query
//     }&units=metric&APPID=${APiKey.key}`
//   )
//     .then((data) => {
//       return data.json();
//     })
//     .then((aData) => {
//       // setApi(aData);
//       console.log("APi key Lat LOntitude", aData);
//     });

//     }, []);

  const searchFunc = (searchTerm) => {
    apiCall();
    // setSearch1("");
    setValue(searchTerm)
    console.log(searchTerm);
  };

  const filterData =(event)=>{
      setValue(event.target.value)
      console.log(value);
  }

  const showData=()=>{
    setShowWeather(true)
  }
  if(api !== undefined){
  return (
    
    <div className="container" >
    {/* <Option data={undefined} /> */}
      <div className="weather">
      {/* {details?.IPv4} */}
      {dateBuilder()}
      {/* <div className="show-weather"  onClick={showData} ><img width={45} src = "weather.png" alt="" /></div> */}
    { showWeather? <div className="all-data-con" >
        <div className="search">
          <input
          value={value}
            type="text"
            placeholder="Enter The City Name"
            onChange={filterData}
          />
        <div   className="dropwon" >
        <div className="dropdown-content">
        {Cities?.filter(item=>{
          const searchTerm = value.toLowerCase();
          const name = item.name.toLowerCase();
          
          return   searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
         })
         .map((item,i)=>{
          return(
            <>
              <div  key={i} onClick={()=>searchFunc(item.name)} >{item.name}      {item.state}</div>
            </>
          )
        })}
      </div>
    </div>
    
          <button onClick={()=>searchFunc(value)}>
            <img
              width={20}
              height={17}
              src="https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/search-260.png"
              alt=""
            />
          </button>
         
        </div>
  
        <div className="winfo">
          {/* <img
            alt=""
            width={40}
            src="weather.png"
          /> */}

         
          {/* <h4>{weather}</h4> */}
          <h1>Country {api?.sys?.country}</h1>
          <h4>City {api?.name}</h4>
          <h4>{api?.weather?.map((item,i)=>{
         
         return(
         <h4 key={i} >{item.main}</h4>
         )
        })}</h4>
          <div className="temp-con">
          <img src="temperature.png" width={50} 
            height={40}
          />
          </div>
          {/* feels_like */}
          <h4> {Math.round((api?.main?.temp - 273.15).toFixed(2))}°C</h4>
          <h4>
            Feels Like {Math.round((api?.main?.feels_like - 273.15).toFixed(2))}
          </h4>
          <div className="details">
            <div className="col">
              <div className="humidity">
              <img src="wind.png" alt=""
               width={25} 
            height={35}
               />

                <p> {api?.wind?.speed} m/s</p>
                {/* <p>
                  {location.loaded
                    ? JSON.stringify(location)
                    : "location data not available yet"}
                </p> */}
              </div>
                <h1>{api?.main?.temp_max}</h1>
            </div>
          </div>

          
          <div className="col">
            <img src="" alt="" />
            <div className="wind">
              <p><b>humidity</b>   {api?.main?.humidity}</p>
                   {/* <p>{api?.list[3].wind.deg} wind</p> */}
                   
            </div>
          </div>
        </div>
      </div>:""}
      <div className="forcast">
      <div className="forcast-sub-con" >
      <p>temp </p>
      <p>humidity</p>
      <p>feels like </p>
      <p>wind </p>
      {/* <p>Wednesday </p> */}
      </div>
      <div className="forcast-sub-con" ><p>Thursday</p></div>
      <div className="forcast-sub-con" ><p>Friday</p></div>
      <div className="forcast-sub-con" ><p>Saturday</p></div>
      <div className="forcast-sub-con" ><p>sunday</p></div>
      <div className="forcast-sub-con" ><p>monday</p></div>
      </div>
    </div>
    </div>
  );
      }
}

export default Weather;
