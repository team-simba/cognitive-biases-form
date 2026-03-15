import React from 'react';

type TitleSideLineProps = {
    text: string;
    className?: string;
};

const TitleSideLine: React.FC<TitleSideLineProps> = ({ text, className = '' }) => {
    return (
        <div className={`flex items-center gap-4 m-2 ${className}`}>
            <div className="w-[0.95vw] h-[4.79vw] bg-secondary" />
            <h2 className="font-bold text-[4.3vw] text-primary leading-[6vw]">{text}</h2>
        </div>
    );
};

export default TitleSideLine;
