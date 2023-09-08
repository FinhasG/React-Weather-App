

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'];

const Forecast = ({forecast}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
     <div className='appp'>
     {forecast.forecast.forecastday.slice(1,5).map((item, index)=>(
            <div key={index} className='forecast'>
                 <h2>{forecastDays[index]}</h2>
                 <img className='image' src={item.day.condition.icon} />
                 <h1>{item.day.avgtemp_c}°C</h1>
            </div>
        ))}
    </div>
     
   
  )
}

export default Forecast