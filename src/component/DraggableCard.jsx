import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableCard({ card }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'card',
    item: { id: card.id, name: card.name ,img:card.img },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const style = {
    opacity: isDragging ? 0.5 : 1,
    padding: '10px',
    margin: '5px',
    border: '1px solid black',
    cursor: 'grab',
    display: 'inline-block',
    background: '#eee',
  };

  return (
 <div
  className="bg-white w-48 h-64 rounded-lg text-center shadow-md flex flex-col items-center justify-center p-3"
  ref={dragRef}
  style={style}
>
  <span className="text-lg font-semibold text-gray-700 mb-4 capitalize tracking-wide">
    {card.name}
  </span>
  <img
    src={card.img}
    alt={card.name}
    width={400}
    className="object-contain"
  />
</div>

  );
}

export default DraggableCard;
