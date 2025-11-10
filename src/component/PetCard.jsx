import React from 'react';
import { useDrag } from 'react-dnd';
//العنصر المسحوب 
export const PetCard = ({ id, name }) => {
    //ببساطة، dragRef يربط React DnD بالـ DOM element.
    const [{ isDragging }, dragRef] = useDrag({
        type: 'pet',
        item: { id, name }
    });

    const style = {
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: isDragging ? '#ffeb3b' : '#90caf9',
        border: '2px solid #1976d2',
        borderRadius: '8px',
        cursor: 'grab',
        display: 'inline-block',
        minWidth: '60px',
        textAlign: 'center',
        fontWeight: 'bold',
        userSelect: 'none'
    };

    return (
        <div ref={dragRef} style={style}>
            {name} {isDragging && '😱'}
        </div>
    );
};
