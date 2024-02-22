import React from "react";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-[500px] h-[250px] bg-card shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-xl font-Montserrat text-c_color">
                    {weatherData.name},{weatherData.sys.country}
                  </p>
                  <p className="font-Montserrat text-c_color">{weatherData.weather[0].description}</p>
                </div>
                <div>
                  <h1 className="text-6xl font-Montserrat font-semibold text-c_color">
                    {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt=""
                  className="w-[120px]"
                />
              </div>

              <div>
                {weatherData.name !== undefined ? (
                  <div className="flex flex-col justify-evenly my-4 gap-y-2 mx-auto text-xs">
                    <div className="flex justify-between gap-x-8">
                      <p className="font-Montserrat text-c_color">Feels Like</p>
                      <p className="font-bold w-20 font-Montserrat text-c_color">
                        {weatherData.main.feels_like.toFixed()} °C
                      </p>
                    </div>

                    
               

                    <div className="flex flex-col justify-evenly gap-y-2 mx-auto text-xs">
                      <div className="flex justify-between gap-x-8">
                        {" "}
                        <p className=" font-Montserrat text-c_color">Humidity</p>
                        <p className="font-bold w-20 font-Montserrat text-c_color">
                          {weatherData.main.humidity} %
                        </p>
                      </div>


                      <div className="flex justify-between gap-x-8">
                      <p className="font-Montserra text-c_color">Feels Like</p>
                      <p className="font-bold w-20 font-Montserrat text-c_color">
                        {weatherData.wind.speed.toFixed()} KPH
                      </p>
                    </div>

                      
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
