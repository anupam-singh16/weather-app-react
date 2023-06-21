import "./style.css"
 import {useEffect, useState} from "react"



function Weather() {

     const [api, setApi] = useState();
    //  let cityName = ""
    const [search1,setSearch1] = useState("noida")
   
    // console.log(search1,"search");
     const apiKey = "f56f24967aaf51182d1d4df628297c6d";
    //  const apiURL = 

   const apiCall =()=>{
  
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search1 + "&appid=" + apiKey)
       .then((data)=>{
        return data.json();
       }).then((aData)=>{
           setApi(aData);
           console.log("hdafh dhcfgderrrrrd dsgh hfdsgbh",aData);
       })
    }

    useEffect(()=>{
        apiCall()
    },[])
    // apiCall()

 
    const searchFunc =()=>{
        apiCall()
        setSearch1("")
    }

  return (
    <div className='container' >
      <div className='weather' >
         <div className='search'>
            <input type='text' placeholder='Enter The City Name' onChange={(e)=>setSearch1(e.target.value)} />
             <button onClick={searchFunc}><img width={20}  height={17} src="https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/search-260.png"  alt='' /></button>
         </div>

         <div className="winfo">
             <img alt="" width={150}  src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
             <h1>Country {api?.sys?.country}</h1>
             <h1>City {api?.name}</h1>
             <h1>Temp {Math.floor(((api?.main?.temp)- 273.15).toFixed(2))}°C</h1>  
             
               <div className="details" >
                  <div className="col" >
                        <img src=""  alt="" />
                     <div className="humidity">
                      <p>Speed {api?.wind?.speed} KM/PH </p>
                       {/* <p>humdity</p> */}
                     </div>
                  </div>
               </div>

               <div className="col" >
                        <img src="" alt=""  />
                   <div className="wind" >
                   {/* <p>{api?.list[3].wind.speed}km/h</p>
                   <p>{api?.list[3].wind.deg} wind</p>
                   <p>{api?.list[0].main.temp_max} Max Temp </p> */}

                   </div>
                  
                  </div>
               </div>
         </div>

      </div>
    // </div>
    )
    
}

export default Weather