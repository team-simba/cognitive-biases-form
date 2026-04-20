import React, { useState } from 'react';

import FormalLogicCardImage from '../assets/formal-logic-card.png';

interface CardProps {
    content: string;
    fontSize: string;
    onClick?: () => void;
    disable?: boolean;
    initialSelected?: boolean;
}

const FormalLogicCard: React.FC<CardProps> = ({ content, fontSize, onClick, disable, initialSelected = false }) => {
    const [rotated, setRotated] = useState(initialSelected);
    const [bright, setBright] = useState(initialSelected);

    const handleClick = () => {
        if (disable) return;
        setRotated(!rotated);
        setBright(!bright);
        if (onClick) onClick();
    };
    return (
        <div
            onClick={handleClick}
            className={`
            transition-transform duration-500
            w-[11.7vw]
            ${!disable ? 'hover:brightness-200 cursor-pointer' : ''}
            ${bright ? 'brightness-200' : 'brightness-100'}
            ${rotated ? 'rotate-[10deg]' : 'rotate-0'}
        `}
        >
            <img
                src={FormalLogicCardImage}
                alt="Card Image"
                className={`
                    card-shadow
                    transition-all duration-500
            `}
            />
            <p
                className={`
            absolute inset-0 flex items-center justify-center
            text-white text-center
            pointer-events-none ${fontSize}
        `}
            >
                {content}
            </p>
        </div>
    );
};

export default FormalLogicCard;
