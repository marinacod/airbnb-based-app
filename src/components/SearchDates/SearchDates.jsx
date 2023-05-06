import React, { useState } from 'react';
import './SearchDates.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from 'react-date-range';
import { People } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function SearchDates() {
    let navigate  = useNavigate();

    function handleClick() {
        navigate("/search");
    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    
    return (
        <div className='searchDates'>
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
                months={2}
                direction="horizontal"                
            />
            <h2>
                Número de Hóspedes
                <People/>
            </h2>
            <input min={0} defaultValue={2} type='number'/>
            <Button 
                onClick={handleClick}
                variant='outlined'
            >
                Procurar um Airbnb
            </Button>

        </div>
    )
}

export default SearchDates