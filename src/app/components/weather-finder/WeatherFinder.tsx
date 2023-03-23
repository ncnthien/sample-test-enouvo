import { useState } from "react";

interface Weather {
  name: string;
  weather: string;
  status: string[];
}

const getIconClassFromTemperature = (degree: string) => {
  const temperature = parseInt(degree.split(" ")[0]);
  if (temperature < 20) return "icon-cold";
  return "icon-sunny";
};

export default function WeatherFinder() {
  const [weather, setWeather] = useState<Weather | null>();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const cityName = formData.get("city");

    if (!cityName) return;

    await fetch(
      `https://jsonmock.hackerrank.com/api/weather?name=${cityName}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.data?.length === 0) {
          setWeather(null);
          return;
        }

        setWeather(data?.data?.[0]);
      });
  };

  return (
    <div className="weather-data w-[90%] items-center mt-50">
      <form
        className="grid grid-cols-6 gap-1 justify-center items-center"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="col-start-2 col-span-3 p-2 h-[45px] mr-12 bg-slate-100 rounded-sm"
          placeholder="Dallas"
          name="city"
        />
        <button
          className="bg-green-600 text-white w-[100px] rounded-sm"
          type="submit"
        >
          Search
        </button>
      </form>
      <section className="mt-20 layout-row align-items-center justify-content-center">
        {weather && (
          <div className="card weather-details outlined flex flex-row items-center gap-4 p-6">
            <i className={getIconClassFromTemperature(weather.weather)} />
            <div className="text-3xl mr-6">{weather.weather}</div>
            <div className="result-temperature">
              {weather.status.map((detail, index) => (
                <div key={`${detail} ${index}`}>{detail}</div>
              ))}
            </div>
          </div>
        )}
        {weather === null && <div className="no-result">No Results Found</div>}
      </section>
    </div>
  );
}
