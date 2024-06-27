import React from 'react';

const PokeItem = ({name, url}) => {
    return (
        <li className="grid grid-cols-2 text-center text-2xl mb-1">
            <div>{name}</div>
            <div>{url}</div>
        </li>
    );
};

export default PokeItem;