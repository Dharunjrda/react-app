import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Brightness2, Brightness4 } from '@mui/icons-material';


export default function Topbar({mode, setmode}) {
    const navigate = useNavigate()
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
        <Button color="inherit" onClick={() => navigate("/portal/Home")}>Home </Button>
        <Button color="inherit" onClick={() => navigate("/portal/AddMovie")}>AddMovie </Button>
        <Button color="inherit" onClick={() => navigate("/portal/Movie")}>Movies </Button>

        <Button
          style= {{marginLeft: "60%"}}
          startIcon={mode==="light"? <Brightness4/> : <Brightness4/>}
          color="inherit"
          onClick={() => setmode(mode==="light"?"dark" : "light")}>
        </Button>
        <Button color="inherit" onClick={()=> navigate("/portal/Login")}>Login </Button>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}
