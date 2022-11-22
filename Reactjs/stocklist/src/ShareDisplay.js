import React, { Component, useState, useEffect } from 'react';
import './ShareDisplay.css';
function ShareDisplay(props) {
    const [gain, setGain] = useState(0);
    // setInterval(()=>{ Math.floor(Math.random() * 11) - 5},3000);

    

    useEffect(() => {
        const interval = setInterval(() => {setGain((Math.floor(Math.random() * 11) - 5))}, 1000);
        return () => {clearInterval(interval)};
    }, []);

    let classGain='';
    if(gain<0){classGain+='redColor '}
    else{classGain+=' greenColor'}
    return (
        props.stocks.map((items, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className='dark'>{items.stock}</td>
                    <td className={classGain}>{items.prevClose + (items.prevClose * gain/ 100)}</td>
                    <td className={classGain}>{items.prevClose*gain/100}</td>
                    <td className={classGain}>%{gain}</td>
                    <td className='blue'>{items.prevClose}</td>
                </tr>
            )
        })
    )
}
export default ShareDisplay;