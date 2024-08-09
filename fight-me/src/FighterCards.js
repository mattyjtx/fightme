import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./FighterCards.css";

function FighterCards() {
    const [people, setPeople] = useState([
        {
            name: 'scoob',
            url: 'https://en.wikipedia.org/wiki/Scooby-Doo_%28character%29#/media/File:Scooby-Doo.png'
        },
        {
            name: 'remy boyz',
            url: 'https://hero.fandom.com/wiki/Remy_(Ratatouille)?file=Remy.png'
        }
    ]);

  return (
    <div>
        <h1>Fighter cards</h1>

        <div className='fighterCards__cardContainer'>

            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default FighterCards