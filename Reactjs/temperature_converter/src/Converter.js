import React, { Component, useEffect, useState } from 'react';
function Converter() {
    let [celsius, setCelsius] = useState(0);
    let [fehrenheit, setFehrenheit] = useState(32);
    const celsiousChange=(event)=>{
        celsius=event.target.value;
        setCelsius(event.target.value);
        if(celsius!=="")
        setFehrenheit(String((parseInt(celsius)*9/5)+32));
        else
        setFehrenheit("")
        
    }

    const fehrenheitChange=(event)=>{
        fehrenheit=event.target.value;
        setFehrenheit(event.target.value);
        if(fehrenheit!=="")
        setCelsius(String((parseInt(fehrenheit)-32)*5/9));
        else
        setCelsius("")
    }
    return (
        <>
        <h1 className='text-white mb-5'>Temperature Converter</h1>
            <div className="form-floating my-3">
                <input type="number" className="form-control" id="celsius" placeholder="Celsius" value={celsius} onChange={celsiousChange}/>
                <label htmlFor="celsius">Celsius</label>
            </div>
            <div className="form-floating my-3">
                <input type="number" className="form-control" id="fehrenheit" placeholder="Fehrenheit"value={fehrenheit} onChange={fehrenheitChange} />
                <label htmlFor="fehrenheit">Fehrenheit</label>
            </div>
        </>
    )
}
export default Converter;