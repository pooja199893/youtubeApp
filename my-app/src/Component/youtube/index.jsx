import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Index = () => {
    const [endpoint,setEndpoint]= useState([])
    // const [container,setContainer]=useState([])
    const getyoutube = async ()=>{

      const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/search',
        params: {query: 'cat'},
        headers: {
          'x-rapidapi-key': '5b8c0cdb17msh9ccdfcbfddb80e0p184345jsncd6dd7198950',
          'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setEndpoint(response.data.data)
        console.log(response.data,"youtube");
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
        getyoutube ()
    },[])

   
  return (

    <>
        <h1>YOUTUBE</h1>
        <input type="text" placeholder='search ...'/>
        <button type='text'>search</button>
        <div>
          {endpoint.map((item) =>(
            <div>
              <h1>TITLE</h1>
            <p>{item.title}</p>
            <p><h2>yt-ChannelTitle</h2>{item.channelTitle}</p>
            <p><h3>yt-Channelid</h3>{item.channelId}</p>
             <p><h4>yt-channelHandle</h4>{[item.channelHandle]}</p>
            
            </div>
          ))}
        </div>

    
    </>
    
  )
}

export default Index