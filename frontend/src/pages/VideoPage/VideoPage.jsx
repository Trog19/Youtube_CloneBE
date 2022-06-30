import React, {useEffect, useState} from "react";
import VideoPlayer from "../../components/VideoPlayer"
import axios from "axios";

const VideoPage = (props) => {
    const[videos, setVideos]= useState([])
    useEffect(() => {
 
    const fetchVideos =async()=>{
      try { 
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0") 
        setVideos(response.data);
        console.log(response.data) 
      }
     catch (error) {
        console.log(error.response.data);
      }
    }
fetchVideos();
  }, []);
  
  
  
  
  return (
    <div> 
        <h1>Hello from video player</h1>
        <VideoPlayer/>
    </div>
  
  );
};

export default VideoPage;