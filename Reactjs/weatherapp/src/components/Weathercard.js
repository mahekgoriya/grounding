import React, { useState } from "react";
import "./Weathercard.css"
function Weathercard() {
    let [city, setCity] = useState("");
    let [search, setSearch] = useState("");
    let [response, setResponse] = useState(null);
    let onChangeInput = (e) => {
        search = e.target.value;
        setSearch(search);
        console.log(search);
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5b153b00b19db733f9367eae0b996ac7&units=metric`;
            const restemp = await fetch(url);
            let resjson = await restemp.json();
            console.log(resjson);
            if (resjson.cod == '404') { setResponse(null) }
            city = resjson.name;
            setCity(city);
            setResponse(await resjson.main);
            console.log(response);
            console.log(city);
        }
        fetchApi();
    }
    {
        return (
            <div className="card">
                <div className="card-body">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter city name" onChange={onChangeInput} value={search}/>
                        <label for="floatingInput">Enter City Name</label>
                    </div>
                    {/* <input type="text" onChange={onChangeInput} value={search} /> */}
                    <br />
                    <br />
                    {!response ? (<h3>No Data Found</h3>) : (
                        <div>
                            <h2>{city}</h2>
                            <br />
                            <h2>Current Temp : {response.temp}&deg; Cel</h2>
                            {/* <h4>Min : 23.0 cel  |  Max : 38.0 cel</h4> */}
                        </div>
                    )}

                </div>
            </div>
        )
    }
}
export default Weathercard;