import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './HomeCard.css';
import { CardActionArea } from '@mui/material';

import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';


function HomeCard({src, title, description, price}) {
  const [cardWidth, setCardWidth] = useState()


  const matches = useMediaQuery(
    json2mq({
      maxWidth: 769,
    }),
  );

  useEffect(() => {
    matches ? setCardWidth('100%') : setCardWidth(345)
}, [matches])

  return (
    <Card sx={{ 
      width: cardWidth, 
      margin:'20px',
       }}>
      <CardActionArea sx={{
        height: '100%' 
        }}>
        <CardMedia
          component="img"
          alt={title + 'imagem'}
          height='140'
          image={src}
        />
        <CardContent>
          <Typography subtitle='h3' >
            {price}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  )
}

export default HomeCard
// <div className='card'>
//     <img src={src} srcSet={src} alt="Card Image" />
//     <div className='card__info'>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <p>{price}</p>
//     </div>
// </div>