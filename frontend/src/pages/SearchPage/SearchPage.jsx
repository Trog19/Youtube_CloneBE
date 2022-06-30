import React, {useEffect, useState} from "react"
import axios from "axios";
import SearchBar from "../../components/SearchBar";


const SearchPage = (props) => {
    const [videoSearch, setVideoSearch] = useState("")

    const fetchVideos =async()=>{
        try { 
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoSearch}&type=video&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0`) 
          setVideoSearch(response.data);
          console.log(response.data) 
        }
       catch (error) {
          console.log(error.response.data);
        }
      }
  fetchVideos();

    function handleSubmit(event){
        event.preventDefault();
       
        props.videoSearch(videoSearch)
        console.log(videoSearch)
    }
    return ( 
        <div>
        <h1>SearchBar</h1>
        <SearchBar/>
       </div>

     );
}
 
export default SearchPage;