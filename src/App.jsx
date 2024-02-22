import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "3a8db9477230043a228e54db3e16fa83";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = (event) => {
    if (event.key ==="Enter"){
      axios.get(url).then((res) => {
        setData(res.data)
        // console.log(res.data);
      })
      setLocation("")
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-main">
        <div className="text-center p-4">
          <input
            className="font-Montserrat px-3 py-6 w-[700px] rounded-3xl border border-gray-200 text-gray-500 focus:outline-none shadow-md placeholder:text-gray-500"
            placeholder="Enter Your City"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDownCapture={searchLocation}
          />
        </div>
        <Weather weatherData = {data}/>
      </div>
    </>
  );
}

export default App;
