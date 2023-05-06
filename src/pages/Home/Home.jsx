import React, { useEffect, useState } from 'react';
import Banner from '/src/components/Banner/Banner'
import HomeCard from '/src/components/HomeCard/HomeCard'
import navCardData from '/src/data/navigationCards.json'
import './Home.css';

function Home() {
  const [navCards, setNavCards] = useState([]);
  const [hostsCards, setHostsCards] = useState([]);
  const [viewMore, setViewMore] = useState(3);
  
  useEffect(() => {
    setNavCards(navCardData);
    try {
      fetch('/data/hosts.json')
        .then(response => response.json())
        .then(data =>{
          setHostsCards(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleViewMoreClick = () => {
    viewMore == 9 ? setViewMore(3): setViewMore(viewMore + 3);
  }

  return (
    <div className='Home' >
      <Banner/>
      <div className='home__section'>
       { navCards.map((card, index) => (
          <HomeCard
           key={index + 'navCard'}
           title={card.title}
           src={card.src}
           description={card.description}
           />
        ))}
      </div>
      <div className="home__productTitle">
        <h2>Principais ofertas</h2>
        <a onClick={handleViewMoreClick}>{viewMore == 9 ? "Ver menos": "Ver mais"}</a>
      </div>
      <div className='home__section'>
          { hostsCards.slice(0, viewMore).map((card, index) => (
              <HomeCard
              key={index + 'hostCard'}
              title={card.title}
              src={card.src}
              description={card.description}
              price={card.price}
              />
            ))}
      </div>
    </div>
  )
}

export default Home