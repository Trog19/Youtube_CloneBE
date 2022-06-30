import React, {useEffect, useState} from "react";
import axios from "axios";


const RelatedVideosPage = (props) => {
    const[relatedVideos, setRelatedVideos]= useState([])
    useEffect(() => {
 
    const fetchVideos =async()=>{
      try { 
        let response = await axios.get{`https://www.googleapis.com/youtube/v3/search?q=${props.videoId}&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0`}
        setRelatedVideos(response.data);
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
        <h1>HAkdmnsdnfnsd</h1>
        <RelatedVideosPage />
    </div>
  
  );
};

export default RelatedVideosPage;