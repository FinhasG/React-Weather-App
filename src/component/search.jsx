import { useState, useEffect } from 'react';

function Search({ change }) {
    const [search, setSearch] = useState();
    const [city, setCity] = useState('');
    const api_Key = process.env.REACT_APP_API_KEY;


    const onChange = (e) => {
        e.preventDefault()

        if (e.key === 'Enter')
        {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${api_Key}&q=${city}&aqi=no`)
                .then(response => response.json())
                .then(data => {
                    change(data)

                })
                .catch(err => window.alert("Enter Valid City"))
        }
        
    }

    return (
        <div className="search">
            <div >
                <input type="text"
                    placeholder="Enter City"
                    name="city"
                    value={search}
                    onChange={e => setCity(e.target.value)}
                    onKeyUp={onChange}
                />

            </div>
        </div>
    )
}

export default Search


