import React, { useEffect } from 'react'
import Movie from './Movie';
import { useState } from 'react';

export default function MovieList() {
    const [movie ,setMovie] = useState([]);

    const getMovie = () => {
        fetch("https://65f16cb4034bdbecc7627ec6.mockapi.io/Movie",{
            method:"GET",
        })
        .then((data) => data.json())
        .then((mvs) => setMovie(mvs));
    };
    useEffect( () => {
        getMovie();
    },
    []);

  return (
    <div className="movie-list">{
         movie.map((list,index)=>(
            <div key={index}>
                <Movie movieTake={list} getMovie={getMovie}/>
            </div>
         ))
        }
        </div>
  )
}
