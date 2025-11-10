import React from 'react';
import DraggableCard from './DraggableCard';

function Cards() {
const cards = [
  { 
    id: 1, 
    name: 'moon',
    img: 'https://cdn-icons-png.flaticon.com/512/2204/2204369.png' 
  },
  { 
    id: 2, 
    name: 'sun',
    img: 'https://cdn-icons-png.flaticon.com/512/1788/1788866.png' 
  },
  { 
    id: 3, 
    name: 'star',
    img: 'https://cdn-icons-png.flaticon.com/512/1985/1985836.png' 
  },
  { 
    id: 4, 
    name: 'planet',
    img: 'https://cdn-icons-png.flaticon.com/512/2647/2647423.png' 
  },
];


  return (
    <div>
      {cards.map((card) => (
        <DraggableCard key={card.id} card={card} img={cards.img || ""} />
      ))}
    </div>
  );
}

export default Cards;
