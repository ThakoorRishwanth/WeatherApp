import React, { useEffect, useState } from 'react'
import axios from 'axios'
import'./css/style.css'

export const TempApp = () => {
    const [data, setData] = useState([])
    
    const [name, setName] = useState("")
    
    const ApiData = `https://api.openweathermap.org/data/2.5/weather?q=${name}&lat=57&lon=-2.15&appid=7db04a91d57d3403e3a20d38bcd1bd1b&units=metric`
    
    const fetchData = async(urll)=>{
    try{
    let res = await axios.get(urll);
    setData({...data, celcius:res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed}) 
    console.log(res.data)
    }
    catch(err){
    console.log(err)
    }
}


// useEffect(()=>{
//     fetchData(ApiData)
// },[])



const handleClick=()=>{
    if(name !== ""){
        fetchData(ApiData)
    }
}

return (
    <>
    <h1 className='head'>Weather App</h1>
    <div className='cont'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Search' onChange={(e)=>setName(e.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>
            <div className='winfo'>
                <h1>{data.celcius}°c</h1>
                <h2>{data.name}</h2>
                <div className='colM'>
                <div className='col'>
                    <p>{data.humidity}%</p>
                    <p>Humidity</p>
                </div>
                <div className='col'>
                    <p>{data.speed} km/h</p>
                    <p>Wind</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

