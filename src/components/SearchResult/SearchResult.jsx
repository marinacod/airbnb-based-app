import React from 'react'
import './SearchResult.css'
import { FavoriteBorder, Star } from '@mui/icons-material'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
  return (
    <div className='searchResult'>
        <img src={img} alt=""/>
        <FavoriteBorder className='searchResult__heart'/>
        <div className='searchResult__info'>
            <div className="searchResult__infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>
            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                    <Star className='searchResult__star'/>
                    <span><b>{star}</b></span>
                </div>
                <div className="searchResult__price">
                    <p>{price}</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>

    </div>
  )
}


export default SearchResult
