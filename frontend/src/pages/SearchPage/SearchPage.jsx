import React, {useEffect, useState} from "react"
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import VideoPlayer from "../../components/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const SearchPage = (props) => { 
    const [videoResults, setVideoResults]= useState([]);
    const[videoId, setVideoId]= useState([]);

    const fetchVideos =async(videoSearch="programing")=>{
        try { 
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoSearch}&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0&part=snippet`) 
          setVideoResults(response.data);
          setVideoId(response.data.items[0].id.videoId)
          console.log(response.data) 
        }
       catch (error) {
          console.log(error.response.data);
        }
      }
    return ( 
        <div>
        <SearchBar fetchVideos={fetchVideos}/>
        <VideoPlayer videoId={videoId}/> 
        <RelatedVideos videoId={videoId}/>
       </div>

     );
}
 
export default SearchPage;