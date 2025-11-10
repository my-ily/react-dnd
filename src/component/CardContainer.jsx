import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableCard from './DraggableCard';

function CardContainer() {
  const [container, setContainer] = useState([]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'card',
    drop: (item) =>
      setContainer((container) =>
        !container.find((p) => p.id === item.id)
          ? [...container, item]
          : container
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

const cardContainer = {
  minHeight: '300px',
  width: '620px',
  padding: '16px',
  border: '2px dashed #4f46e5', 
  borderRadius: '16px',
  backgroundColor: isOver ? '#e0f7fa' : '#f9fafb', 
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  marginLeft:'28%',
  marginTop:'6%'
};

  return (
   <div ref={dropRef} style={cardContainer}>
    {container.map((card) => (
      <DraggableCard key={card.id} card={card} />
    ))}
    {isOver && (
      <div
        style={{
          color: '#4f46e5',
          fontWeight: 'bold',
          fontSize: '16px',
          marginTop: '10px',
        }}
      >
        Drop Here!
      </div>
    )}
  </div>
  );
}

export default CardContainer;
