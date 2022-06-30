import React, { useState, useEffect } from 'react';


const SearchBar = (props)=>{
    const [videoSearch, setVideoSearch] = useState("")

    function handleSubmit(event){
        event.preventDefault();
       
        props.songSearch(videoSearch)
        console.log(videoSearch)

    }
return(
<form onSubmit={handleSubmit}>
<div>
    <input type='text' value={videoSearch} onChange={(event)=> setVideoSearch(event.target.value)}/>
    <button type='submit'>Search</button>
</div>
<SearchBar videoSearch={videoSearch}/>
</form>

    )
}
export default SearchBar
