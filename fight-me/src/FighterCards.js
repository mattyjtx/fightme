import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./FighterCards.css";

function FighterCards() {
    const [people, setPeople] = useState([
        {
            name: 'little stuart',
            url: 'https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2002/07/stuart_little_2.jpg'
        },
        {
            name: 'remy boy',
            url: 'https://ih1.redbubble.net/image.3369554001.7681/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
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
                    preventSwipe={["up", "down"]}
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