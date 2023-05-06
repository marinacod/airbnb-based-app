import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate, Link} from "react-router-dom";
import { Paper } from '@mui/material';

import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';


export default function LabelBottomNavigation() {
  const [value, setValue] = useState('home');
  const [bottomNavDisplay, setBottomNavDisplay] = useState()

  let navigate  = useNavigate();

  function handleClickSearch() {
      navigate("/search");
  }
  function handleClickHome() {
      navigate("/");
  }


  const matches = useMediaQuery(
    json2mq({
      maxWidth: 900,
    }),
  );
  
  useEffect(() => {
      matches ? setBottomNavDisplay("flex") : setBottomNavDisplay('none')
  }, [matches])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, display: bottomNavDisplay}} elevation={10}>
        <BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
            label="Explorar"
            value="explore"
            icon={<SearchOutlinedIcon 
            onClick={handleClickSearch}
            />}
        />
        <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
            onClick={handleClickHome}
        />
        <BottomNavigationAction
            label="LogIn"
            value="login"
            icon={<AccountCircleOutlinedIcon />}
        />
        </BottomNavigation>
    </Paper>
  );
}