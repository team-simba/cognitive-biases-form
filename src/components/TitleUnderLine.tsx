import React from 'react';

type TitleUnderLineProps = {
    text: string;
    className?: string;
};

const TitleUnderLine: React.FC<TitleUnderLineProps> = ({ text, className = '' }) => {
    return (
        <div className={className}>
            <div
                className="
            font-ploni-bold text-[4.3vw] text-primary leading-tight"
            >
                {text}
            </div>
            <div className="inline-block w-[16.82vw] h-[0.68vw] bg-secondary"></div>
        </div>
    );
};

export default TitleUnderLine;
