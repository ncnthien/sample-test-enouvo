export default function WeatherFinder() {
  return (
    <div className="weather-data w-[90%] items-center mt-50">
      <section className="grid grid-cols-6 gap-1 justify-center items-center">
        <input
          type="text"
          className="col-start-2 col-span-3 p-2 h-[45px] mr-12 bg-slate-100 rounded-sm"
          placeholder="Dallas"
        />
        <button className="bg-green-600 text-white w-[100px] rounded-sm">
          Search
        </button>
      </section>
      <section className="mt-20 layout-row align-items-center justify-content-center">
        <div className="card weather-details outlined"></div>
      </section>
    </div>
  );
}
