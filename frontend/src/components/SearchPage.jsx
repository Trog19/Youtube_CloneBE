import React, {useEffect, useState} from "react"


const[videos, setVideos] = useState([]);
const[comments, setComments] = useState([]);

useEffect(()=>{
GetVideos();
},[])

async function GetVideos(){
let resoonse = await axios.get("https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0");
setVideos(response.data);
console.log('Display videos:', resoonse.data)
}