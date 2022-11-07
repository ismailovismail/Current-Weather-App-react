
import axios from 'axios'
import React, {  useEffect, useState } from 'react'

const Search = () => {
    const [info,setInfo]=useState([])
    const [search,setSearch]=useState('Baku')
    const [input,setInput]=useState('')  
      useEffect(()=>{
           
                axios 
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0ced140955eddc56f4b4165c291aa421`)
                .then((res)=>{
                    setInfo(res.data)
                    
                })
            
           
      },[search])
        let icon=null;
        let img=null
       if (typeof info.main != 'undefined') {
               if (info.weather[0].main === 'Clouds') {
                    icon ='fa-solid fa-cloud'
                    img='https://thumbs.gfycat.com/SleepyFailingEasternnewt-max-1mb.gif'
               }else if(info.weather[0].main === 'Drizzle'){
                icon = "bi bi-cloud-drizzle"
                img='https://i.gifer.com/origin/29/290b383afb7c810c0635b6662ea8660d.gif'
               }else if(info.weather[0].main === 'Rain'){
                  icon ='fa-solid fa-cloud-rain'
                  img='https://thumbs.gfycat.com/AbleClosedIndigowingedparrot-size_restricted.gif'
               }else if(info.weather[0].main === 'Snow'){
                   icon ="fa-solid fa-snowflake"
                   img='https://www.icegif.com/wp-content/uploads/snow-icegif-13.gif'
               }else{
                   icon = 'fa-solid fa-smog'
                   img='https://c.tenor.com/B-XuILOVogUAAAAC/smog-bad-air.gif'
               }
       }else{
        return (
               <div>
               <img src="https://www.musingindia.com/wp-content/uploads/loading.gif" alt="" />
              </div>
        )
       }

      let temp = (info.main.temp-273.15).toFixed(2) 
      let temp_min=(info.main.temp_min - 273.15).toFixed(2)
      let temp_max=(info.main.temp_max -273.15).toFixed(2)     
        
      const formSubmit=(e)=>{
        e.preventDefault()
        setSearch(input)
      
        
      }
     
  return (
    <>
    
        
                <div className="card text-bg-dark" style={{width:'33rem'}}>
                <img height={500} src={`${img}`} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    
                        <form onSubmit={formSubmit}>
                         <div className="input-group d-flex justify-content-center">
                         <input value={input} onChange={(e)=>setInput(e.target.value)} className='p-2' type="text" placeholder='Search'  />
                        <button className='btn btn-primary p-2' type='submit'>Search <i className='fa-solid fa-search'></i></button>
                         </div>
                        </form>
                    
                    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 bg-dark p-3 bg-opacity-50">
                    <h5 className="card-title fw-bolder" style={{fontSize:'30px'}}>{info.name}</h5>
                    <hr />
                    <i className={`${icon}`} style={{fontSize:'70px'}}></i>
                    <h1 className='fw-bolder card-title'>{info.weather[0].main}</h1>
                    <h1 className='card-title'>{temp} &deg;C</h1>
                  <p className="card-text">{temp_max} &deg;C | {temp_min} &deg;C</p>
                 
                    </div>
                </div>
              </div>
            
     


    </>
  )
}

export default Search