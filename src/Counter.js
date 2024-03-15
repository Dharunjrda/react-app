import IconButton from '@mui/material/IconButton';
import React from 'react'
import { useState } from 'react';
import Badge from '@mui/material/Badge';

export default function Counter() {
    let [like,setLike] = useState(0);
    let [dislike,setDislike] = useState(0);
  return (
    <div>
        <IconButton aria-label="Like" color="primary" onClick={()=>setLike(like + 1)}>
         <Badge badgeContent={like} color="primary">
           👍
         </Badge>     
        </IconButton>
        <IconButton aria-label="Dislike" color="error" onClick={()=>setDislike(dislike + 1)}>
         <Badge badgeContent={dislike} color="error">
           👎
         </Badge> 
        </IconButton>
    </div>
  )
}
