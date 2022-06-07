import axios from './axios';
import React, { useEffect, useState } from 'react'
import requests from './request'
import './Banner.css'


const base_url = "http://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie,setMovies] = useState([])

    useEffect(() => {
      async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            .then((request) => {
              const p =request.data.results[ Math.floor(Math.random()*(request.data.results.length-1))];
              setMovies(p)
              return request;
            })
            .catch(error =>{
              console.log(error.response)
            })
        }
    fetchData();

    }, [base_url])
    // console.log(movie)

    const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

  return (
    <header className='banner' 
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("${base_url}${movie.backdrop_path}")`,
        backgroundPosition: "center center",
    }} 
    >
        <div className='banner_content'>
        <h1 className='banner_title' >
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_button">
            <button className="banner_buttons">Play</button>
            <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_description"> {truncate(movie?.overview, 150)} </h1>
        </div>
    </header>
  )
}

export default Banner