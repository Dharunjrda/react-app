import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';


export default function MovieDetails() {

    const {id} = useParams();
    const [movie,setMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://65f16cb4034bdbecc7627ec6.mockapi.io/Movie/${id}`,{
            method: "GET"
        })
        .then((data) => data.json())
        .then((mv)=> setMovie(mv));
    },[]);

    console.log(movie);

    const ratingStyles = {
        color : movie.rating >= 8.5 ? "green" : "red"
    };

  return (
    <><div>
      <iframe width="853" 
       height="480" 
       src={movie.trailer} 
       title={movie.name}
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
     </iframe>
     <div className="movie-detail-container">
        <div className="movie-spec">
            <h2 className='movie-name'>{movie.name}</h2>
            <h3 style={ratingStyles} className="movie-rating">⭐{movie.rating}</h3>
        </div>
        <p className="movie-summary">{movie.summary}</p>
     </div>

    
    </div>
     <Button variant="container" startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>Back</Button></>
  )
}
