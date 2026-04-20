import React, { useEffect, useState } from 'react';

import Background from '../components/Background';

const EndPage: React.FC = () => {
    const [hideText, setHideText] = useState(false);
    const [hideImage, setHideImage] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => setHideText(true), 6000);
        const imageTimer = setTimeout(() => setHideImage(true), 7000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(imageTimer);
        };
    }, []);

    return (
        <Background>
            <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
                <svg
                    viewBox="-150 -150 1868 1380"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`
            absolute
            origin-center
            transition-transform duration-[10000ms] ease-in-out
            ${hideImage ? 'scale-0 rotate-[720deg]' : 'scale-[0.9] rotate-0'}
          `}
                >
                    <circle
                        cx="797.165"
                        cy="540.001"
                        r="657.724"
                        transform="rotate(180 797.165 540.001)"
                        stroke="black"
                        strokeWidth="8.37376"
                        strokeDasharray="16.75 27.91"
                        fill="none"
                    />
                    <circle
                        cx="1526.07"
                        cy="863.908"
                        r="36.7714"
                        transform="rotate(-171.333 1526.07 863.908)"
                        fill="#5CA25E"
                    />
                    <circle
                        cx="39.878"
                        cy="406.164"
                        r="35.008"
                        transform="rotate(-171.333 39.878 406.164)"
                        fill="#E5BE34"
                    />
                    <circle
                        cx="157.974"
                        cy="241.234"
                        r="77.9139"
                        transform="rotate(-171.333 157.974 241.234)"
                        fill="#A72608"
                    />
                </svg>

                <div className="absolute px-4 w-full max-w-3xl text-center">
                    <p
                        className={`font-semibold text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] leading-[1.2] sm:leading-[1.1] md:leading-[1] text-primary break-words transition-opacity duration-2000 ${
                            hideText ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        הבנתם למה הידע על הטיות קוגניטיביות רלוונטי לכם, בתור תפקידנים בחיל
                        המודיעין?
                        <br />
                        <br />
                        עכשיו רק נותר לקוות שתזכרו את זה, ונוכל למנוע מקרים דומים בעתיד.
                    </p>
                </div>
            </div>
        </Background>
    );
};

export default EndPage;
