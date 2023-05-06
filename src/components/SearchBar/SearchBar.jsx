import React from 'react'
import styles from './SearchBar.module.css'
import { Search } from '@mui/icons-material'

function SearchBar() {
  return (
    <div className={styles.bar}>
        <div className={styles.location}>
            <p>Localização</p>
            <input type="text" placeholder="Para onde vai?"/>
        </div>
        <div className={styles.checkIn}>
                <p>Check in</p>
            <input type="text" placeholder="Adicione datas"/>
        </div>
        <div className={styles.checkOut}>
                <p>Check out</p>
            <input type="text" placeholder="Adicione datas"/>
        </div>
        <div className={styles.guests}>
                <p>Hóspedes</p>
            <input type="text" placeholder="Hóspedes"/>
            <span className={styles.searchIcon}><Search fontSize='small' /></span>
        </div>
    </div>
  )
}

export default SearchBar