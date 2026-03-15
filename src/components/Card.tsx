import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    width?: string;
    height?: string;
    padding?: string;
    gap?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    width = 'w-[90vw]',
    height = 'h-auto',
    padding = 'p-[2vw]',
    gap = 'gap-[1vw]',
    className = '',
}) => {
    return (
        <div
            className={`
        bg-white
        flex flex-col
        opacity-100
        rounded-[2vw]
        shadow-[0_1vw_2vw_rgba(0,0,0,0.1)]
        ${width} ${height}
        ${padding} ${gap}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
