import React, {useEffect, useState} from "react"
import axios from "axios";
import SearchBar from "../../components/SearchBar";


const SearchPage = (props) => {
    const [search, setSearch] = useState("")

    const fetchVideos =async()=>{
        try { 
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${search}&type=video&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0`) 
          setVideos(response.data);
          console.log(response.data) 
        }
       catch (error) {
          console.log(error.response.data);
        }
      }
  fetchVideos();

    function handleSubmit(event){
        event.preventDefault();
       
        props.videoSearch(search)
        console.log(search)
    }
    return ( 
    SearchBar
     );
}
 
export default SearchPage;