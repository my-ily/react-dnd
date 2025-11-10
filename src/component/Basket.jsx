import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { PetCard } from './PetCard';

const PETS = [
    { id: 1, name: 'dog' },
    { id: 2, name: 'cat' },
    { id: 3, name: 'fish' },
    { id: 4, name: 'hamster' },
];

export const Basket = () => {
    const [basket, setBasket] = useState([]);

    const [{ isOver }, dropRef] = useDrop({
        accept: 'pet',
        drop: (item) =>
            setBasket((basket) =>
                !basket.find(p => p.id === item.id) ? [...basket, item] : basket
            ),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const petsContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '20px',
    };

    const basketStyle = {
        minHeight: '100px',
        padding: '10px',
        border: '2px dashed #1976d2',
        borderRadius: '10px',
        backgroundColor: isOver ? '#c8e6c9' : '#f0f0f0',
    };

    return (
        <React.Fragment>
            <div style={petsContainerStyle}>
                {PETS.map(pet => (
                    <PetCard key={pet.id} id={pet.id} name={pet.name} />
                ))}
            </div>
            <div ref={dropRef} style={basketStyle}>
                {basket.map(pet => (
                    <PetCard key={pet.id} id={pet.id} name={pet.name} />
                ))}
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    );
};
