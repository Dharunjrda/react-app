import React from 'react'
import Counter from './Counter';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Movie({movieTake,getMovie}) {

  const [show,setShow] = useState(true);
  const navigate = useNavigate();

  const deleteMovie = (id) =>{
   fetch(`https://65f16cb4034bdbecc7627ec6.mockapi.io/Movie/${id}`,{
    method: "DELETE",
  })
   .then(()=>getMovie())
   .then(()=>alert("This card is deleted"))
  };

  return (
    <Card className='movie-container'>

       <img className='movie-poster' src={movieTake.poster}/>
       <CardContent>
       <div className='movie-spec'>
        <h3 className='movie-name'>{movieTake.name}
          <IconButton color="primary" aria-label="Toggle-Description"  onClick={()=> setShow(!show)}>
            {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="medium"/>}
          </IconButton>

          <IconButton color="primary" aria-label="Movie-Info" onClick={()=>navigate(`/portal/view/${movieTake.id}`)}>
            <InfoIcon fontSize="medium"/>
          </IconButton>
        </h3>
        <h4 className='movie-rating'>⭐{movieTake.rating}</h4>
       </div>
       </CardContent>
       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
      <CardActions>
        <Counter/> 

        <IconButton sx={{marginLeft:"auto"}}
        aria-label="editmovie"
        onClick={()=>navigate(`/portal/edit/${movieTake.id}`)}>
          <EditIcon color="secondary"/>
        </IconButton>

        <IconButton sx={{marginLeft:"auto"}}
        aria-label="editmovie"
        onClick={()=>deleteMovie(movieTake.id)}>
          <DeleteIcon color="secondary"/>
        </IconButton>
        
      </CardActions>
    </Card>
  )
}