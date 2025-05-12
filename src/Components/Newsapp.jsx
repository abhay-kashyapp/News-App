import React, { useEffect, useState } from 'react'
import Card from './card';

const Newsapp = () => {

  const [search ,setSearch] = useState("india");
  const [newsData , setNewsData] = useState(null);


const API_KEY = "47fb03ba5fee4242beeb2c031ea9365c";

const getData = async() =>{
  const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`);
  const jsonData = await response.json();
  console.log(jsonData.articles);
  
  setNewsData(jsonData.articles)

}  

useEffect(()=>{
  getData()
},[])

const handleInput = (e) => {
console.log(e.target.value);
setSearch(e.target.value);
}  


const userInput = (event)=>{
setSearch(event.target.value)
}

  return (
    <div>
      
      <nav>

        <div>
          <h1>Trendy News</h1>
        </div>


        <ul style={{display:"flex",gap:"11px"}}>
          <a style={{fontWeight:600,fontSize:"17px"}}>All news</a>
          <a style= {{fontWeight:600,fontSize:"17px"}}>Trending</a>
        </ul>


        <div className='SearchBar'>
        <input type ='text' placeholder='Search News' value={search} onChange={handleInput}/> 
        <button onClick={getData}>Search</button>
        </div>

      </nav>

      <div>
        <p className='head'>Stay Update with Trendy News</p>
      </div>

     <div className='catgoryBtn'>
     <button onClick={userInput} value="sports" > Sports </button>
     <button onClick={userInput} value="politics">Politics</button>
     <button onClick={userInput} value="entertainment">Entertainment</button>
     <button onClick={userInput} value="health">Health</button>
     <button onClick={userInput} value="fitness">Fitness</button>
    </div>
    


    <div>
    {newsData?  <Card  data ={newsData}/>:null}    
    </div>

    </div>
    
  )
}

export default Newsapp;
