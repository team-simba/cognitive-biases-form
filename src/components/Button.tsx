import React, { useState } from 'react';

import Check from '../assets/ImagesForContinueGuessing/check.svg';

type ButtonProps = {
    content: string;
    inputProvided: boolean;
    marked: boolean;
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
    content,
    inputProvided,
    marked,
    className = '',
    onClick,
}: ButtonProps) => {
    const [isShaking, setIsShaking] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleClick = () => {
        if (inputProvided) {
            setHasSubmitted(!hasSubmitted);
            if (onClick) onClick();
        } else {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 300);
        }
    };

    return (
        <div
            className={`${hasSubmitted ? 'drop-shadow-primary' : 'drop-shadow-dark'}
        `}
        >
            <button
                onClick={handleClick}
                className={`
                    flex items-center justify-center gap-[0.6vw]
                    w-[9.5vw] h-[3.7vw]
                    text-white text-[1.8vw]
                    hover:bg-blue-mid
                    pb-[0.5vw]
                    cursor-pointer
                    ${className}
                    ${hasSubmitted ? 'bg-blue-mid rotate-[8deg]' : 'bg-secondary'}
                    ${isShaking ? 'animate-shake' : ''}
                `}
            >
                <span>{content}</span>
                {marked && (
                    <img
                        src={Check}
                        alt="check icon"
                        className="inline-block w-[0.9em] h-[0.9em] opacity-100 scale-100"
                    />
                )}
            </button>
        </div>
    );
};

export default Button;
