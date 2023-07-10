import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Chart() {
  const [apiData, setApiData] = useState();
    let  days  =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const [data, setData] = useState({
    labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    // labels: apiData?.list[0]?.dt_txt,
    datasets: [
      {
        label: "Temprature Data",
        // data: apiData?.list
        //   ?.map((item) => item?.main?.temp)
        //   .filter((item, i) => i <= 7),
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "pink",
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

   useEffect(()=>{
    
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=28.5847&lon=77.3159&appid=b2f77ff92c85dfe72f3fecd8b9d4b3a8&units=metric`
  )
    .then((data) => {
      return data.json();
    })
    .then((AData) => {
      setApiData(AData);
      console.log("Chart api data",AData)
    });
  },[])


  return (
    <div className="App" style={{ width: "800px", height: "800px" }}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Chart;
