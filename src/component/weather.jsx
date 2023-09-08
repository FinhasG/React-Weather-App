

const weather = ({currentWeather}) => {
  return (
    <div className='display'>
                {/*<img className='image' src="u.jpeg"/>*/}
                <img className='image' src={currentWeather.current.condition.icon} />
                <div className="data">
                    <h3>Today</h3>
                    <h1 className="winfo">{currentWeather.location.name}</h1>
                    <h3 className="welement">
                        Temperature : {currentWeather.current.temp_c}°C 
                    </h3>
                    <h3 className="welement">
                        {currentWeather.current.condition.text}
                    </h3>
                </div>
            </div>
  )
  
}

export default weather