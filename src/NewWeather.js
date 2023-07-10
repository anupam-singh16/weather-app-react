import React from "react";
import moment from "moment";
import "./newStyle.css";
import Chart from "./Chart";

import Option from "./option";
// import "./style.css";
import { useEffect, useState } from "react";
import { Cities } from "./Cities";
import ForeCast from "./ForeCast";

import { Line } from "react-chartjs-2";
// import {Bar} from "react-chartjs-2"
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';

// const options = {
//     indexAxis: "y",
//     element:{
//         bar:{
//             borderWidth:2,
//         }
//     },
//     responsive:true,
//     plugins:{
//         legend:{
//             position:"left"
//         },
//         display:true,
//         title:{
//             text:"Chat.js horizontal Bar chart"
//         },
//     },
// };

function NewWeather({ apiData }) {
  const xValues = [10, 14, 8, 9, 9, 9, 10, 11, 14, 14, 15];
  const yValues = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const data = {
    type: "line",
    data: {
      labels: yValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: xValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  };

  const [api, setApi] = useState();
  const [forcast, setForcast] = useState();
  console.log("forecasdt new data",forcast);
  // const [weather,setWeather] = useState()
  // const [search1, setSearch1] = useState();
  const [value, setValue] = useState("");
  const [details, setDetails] = useState();
  const [image, setImage] = useState({});
  const [showWeather, setShowWeather] = useState(true);
  const [forcast1, setForecast1] = useState(false);
  // console.log("string fy data",data?.lat);
  const [itemData, setItenData] = useState([]);
  const [Id, setId] = useState();
  const [activeTab,setActiveTab] = useState("a")
  // console.log("id", Id);

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: "",
      lon: "",
    },
  });
    let  key = "b2f77ff92c85dfe72f3fecd8b9d4b3a8"
  //   let sunrise = new Date(api?.sys?.sunrise*1000)
  //   let rise = new Date(sunrise*1000)
  //   console.log("rise data ",sunrise);
  // const [newLocation,setNewLocation] = useState({coordinates1:{lat:"",lon:""}});
  //   var back30Days=moment().subtract(30, 'days').format("dddd, MMMM Do YYYY, h:mm:ss p");

  //   console.log('back30Days --> ' + back30Days);

  // console.log("new loacitojsd",newLocation);
  // navigator.geolocation.getCurrentPosition((position) => {
  //   setNewLocation( coordinates1: {
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude,
  //   });
  // });
  // let key = "867732ff7a800d453067dcc4092de8a3";
  //   let    lon ="77.320361"
  //    let  lat = "28.575839"
  // console.log("location",location);
  // setWeather(api?.weather?.main)
  const dateBuilder = () => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dates = new Date();
    let day = days[dates.getDay()];
    let date = dates.getDate();
    let month = months[dates.getMonth()];
    let year = dates.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let lat1 = location?.coordinates?.lat;
  let lon1 = location?.coordinates?.lon;
  // console.log("lats",lat1,lon1);
  // let lat1 = "28.7041";
  // let lon1 = "77.1025"

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
    } else {
      // console.log();
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);
  //   let cnt = 5
  //   let apiKe = "51babb9efa1b99cda9f6946309bbb57f";
//   useEffect(() => {
//     fetch(
//       // `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${key}`
//           `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&exclude=weekly&appid=${key}`
//       // `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat1}&lon=${lon1}&appid=${key}`
//       // `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat1}&lon=${lon1}&cnt=${5}&appid=${key}`
//     )
//       .then((data) => {
//         return data.json();
//       })
//       .then((aData) => {
//         setForcast(aData);
//         // console.log("forcastt data fro apai ", aData);
//       });
//   }, []);

 useEffect(()=>{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&appid=${key}`
    // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&appid=867732ff7a800d453067dcc4092de8a3&units=metric`
    //  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&exclude=current,minutely,hourly,alerts&appid=f56f24967aaf51182d1d4df628297c6d`
   
   
    )
  .then((data)=>{
    return data.json();
  }).then((aData)=>{
    setForcast(aData);
  })
 },[value,lat1,lon1])


  useEffect(() => {
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
    let mapData = forcast?.list?.filter((_,i)=>{
      return i < 10;
    });
    console.log("map datadfghjkjdfhajk", mapData);
    setItenData(mapData);
  },[value]);
  // console.log();
  //   useEffect(() => {
  function locationCall() {
    wther()
    setForecast1(false);
    setValue("");
    // locationCall();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lon1}&q=${value}&appid=${key}`
    )
      .then((data) => {
        return data.json();
      })
      .then((aData) => {
        setApi(aData);
        // console.log("Api} data", aData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  //   }, [lat1, lon1]);

  const ref = React.createRef();

  const handleClick = () =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  
    const [cld, setCld] = useState([]);
  //  useEffect(() => {
  function wther() {

    // let cloud = cld.toString();
    //  console.log("cld data nadhf",cld);
     setCld(api?.weather?.map((item) => item?.main));
     let stringData = "clear"
    //  console.log("clouds data from the ",stringData);
    //  let a =cld.toString()

    switch (stringData) {
      case "Clear":
        setImage({ src : "clear-sky.png" ,alt:""});
        break;
      case "Clouds":
        setImage({ src: "sun.png", alt: "" });
        break;
      case "Rain":
        setImage({ src: "cloudy.png", alt: "" });
        break;
      case "Haze":
        setImage({ src:"fog.png",alt:"" });
        break;
      case "Mist":
        setImage({ src :"fogs.png" ,alt:"" });
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
        setImage({ src:"clear-sky.png", alt:"" });
    }
  }
  //   },[value,lat1,lon1]);

  const apiCall = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        value +
        "&appid=" +
        key
    )
      .then((data) => {
        return data.json();
      })
      .then((aData) => {
        setApi(aData);
        console.log("Search Api Data", aData);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  const searchFunc = (valu) => {
    // valu.preventDefault();
    apiCall();
    wther();
    // setSearch1("");
    setValue(valu);
    // console.log(searchTerm);
  };

  const filterData = (event) => {
    // wther();
    setForecast1(false);
    setValue(event.target.value);
    // console.log(value);
  };

  const showData = () => {
    setShowWeather(true);
  };

  const forecastFnc = (i,n) => {
    setId(i);
    setForecast1(true);
    setActiveTab(n)
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="input-con">
          <button onClick={locationCall} className="btn">
            <img src="loc.png" width={20} height={17} />
          </button>
          <input
            value={value}
            type="text"
            placeholder="Enter The City Name"
            onChange={filterData}
          />
          <button className="btn" onClick={() => searchFunc(value)}>
            <img
              width={20}
              height={17}
              src="https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg"
              alt=""
            />
          </button>
        </div>
        <div className="dropwon">
          <div className="dropdown-content">
            {Cities?.filter((item) => {
              const searchTerm = value.toLowerCase();
              const name = item.name.toLowerCase();

              return (
                searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              );
            }).map((item, i) => {
              return (
                <>
                  <div key={i} onClick={() => searchFunc(item.name)}>
                    {item.name} {item.state}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <ForeCast> */}

        <div className="forcast">
          {/* <p> */}
          {/* <Carousel> */}
          {  forcast?.list?.map((item,i) => {
            return (
              <div className={activeTab  === "forecast"  && i === Id ? "active" : ""} onClick={() => forecastFnc(i,"forecast")}>
                <p>
                 <h3>{days[new Date(item?.dt_txt).getDay()].slice(0,3)}</h3><br></br>{Math.round((item?.main?.temp - 273.15).toFixed(2))}°C
             
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} width={50}/>
                </p>

              </div>
            );
          })}
          {/* <div className="sub-forcast">
            <p>sunday</p>
            <p>{forcast?.list?.main?.temp}</p>

            <img src="sun.png" width={35} />
          </div> */}

          <div className="sub-forcast">
            {/* <p>sunday</p> */}
            <p><ForeCast/></p>

            <img src="sun.png" width={35} />
          </div><div className="sub-forcast">
            <p>sunday</p>
            <p>29* 21*</p>

            <img src="sun.png" width={35} />
          </div><div className="sub-forcast">
            <p>sunday</p>
            <p>29* 21*</p>

            <img src="sun.png" width={35} />
          </div>

          {/* <div className="sub-forcast">
              <p>sunday</p>
              <p>29* 21* </p>
              <img src="sun.png" width={35} />
            </div>
            <div className="sub-forcast">
              <p>sunday</p>
              <p>29* 21*</p>
              <img src="sun.png" width={35} />
            </div> */}
        </div>
        {/* </ForeCast> */}
        {/* <div className="all-data-con"  > */}
        {!forcast1 ? (
          <div className="all-data-con">
            <div className="weather-info">
              <h1 className="temp">
                {Math.round((api?.main?.temp - 273.15).toFixed(2))}°C
                <img src={image.src} className="img" width={50} />
                {/* <img src={`http://openweathermap.org/img/wn/${api?.weather[0]?.map((item)=>item?.icon)}@2x.png`} width={50} /> */}

              </h1>
              <h3 className="city">{api?.name}</h3>
              <div className="sunrise-con">
                {/* <Chart /> */}
              </div>
            </div>

            <div className="pressure-humidity">
              <div>
                <p>Pressure</p>
                <p>{api?.main?.pressure} Hpa</p>
              </div>

              <div>
                <p>{api?.main?.humidity} %</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className="sunrise-con">
              <div>
                <p>sunrise</p>
                <p>{moment(api?.sys?.sunrise * 1000).format("HH:mm a")}</p>
              </div>

              <div>
                <p>sunset</p>
                <p>{moment(api?.sys?.sunset * 1000).format("HH:mm a")}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="all-data-con">
            <div className="weather-info">
              <h1 className="temp">
                {Math.round(
                  (forcast?.list[Id]?.main?.temp - 273.15).toFixed(2)
                )}
                °C
                <img src="sun.png" className="img" width={50} />
                {/* <img src={`http://openweathermap.org/img/wn/${forcast?.list?.map((item,i)=>item?.weather[0]?.icon)}@2x.png`} width={50} /> */}

              </h1>
              <div className="sunrise-con">
                {/* <Chart /> */}
              </div>
            </div>

            <div className="pressure-humidity">
              <div>
                <p>Pressure</p>
                <p>{forcast?.list[Id]?.main?.pressure} Hpa</p>
              </div>

              <div>
                <p>Humidity</p>
                <p>{forcast?.list[Id]?.main?.humidity} %</p>
              </div>
            </div>

            <div className="sunrise-con">
              <div>
                <p>sunrise</p>
                <p>
                <p>{moment(api?.sys?.sunrise * 1000).format("HH:mm a")}</p>

                  {/* {moment(forcast?.list[Id]?.main?.sunrise * 1000).format("HH:mm a")} */}
                </p>
              </div>

              <div>
                <p>sunset</p>
                <p>
                <p>{moment(api?.sys?.sunset * 1000).format("HH:mm a")}</p>

                  {/* {moment(forcast?.list[Id]?.sunset * 1000).format("HH:mm a")} */}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* </div> */}
      </div>
    </div>
  );
}

export default NewWeather;
