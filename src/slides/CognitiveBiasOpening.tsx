import React from 'react';

import StartImg from '../assets/start-cognitive-bias.svg';
import Background from '../components/Background';

const CognitiveBiasOpening: React.FC = () => {
    return (
        <Background>
            <div className="flex justify-around items-center min-h-screen">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-blue-dark text-[7vw] leading-tight">
                        <span className="flex items-center justify-between gap-3">
                            <span className="leading-none font-ploni-bold">הטיות</span>
                            <span className="flex items-center gap-6 translate-y-[0.3vw]">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="w-[1.5vw] h-[1.5vw] bg-blue-semi-strong rounded-full"
                                    ></span>
                                ))}
                            </span>
                        </span>

                        <span className="block leading-none font-ploni-bold">קוגנטיביות</span>
                    </h1>
                    <div className="w-[29.6vw] h-[1.44vw] bg-secondary"></div>
                </div>
                <img
                    src={StartImg}
                    alt="Cognitive Bias Illustration"
                    className="w-[30vw] h-auto floating"
                />
            </div>
        </Background>
    );
};

export default CognitiveBiasOpening;
