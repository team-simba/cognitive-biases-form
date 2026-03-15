import React, { ReactNode } from 'react';

type BackgroundProps = {
    children: ReactNode;
    imageUrl?: string;
};

const Background: React.FC<BackgroundProps> = ({
    children,
    imageUrl = '/assets/background.png',
}) => {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {children}
        </div>
    );
};

export default Background;
