import { useState } from 'react';
import { useDispatch } from 'react-redux';

import curveText from '../assets/clickOnWheel.svg';
import pulleyNumbers from '../assets/pulleyNumbers.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import TitleUnderLine from '../components/TitleUnderLine';
import { setFortuneWheel } from '../store/guessSlice';

const AnchoringWheel: React.FC = () => {
    const dispatch = useDispatch();
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    const spinWheel = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        const possibleStops = [15, 65];
        const chosen = possibleStops[Math.floor(Math.random() * possibleStops.length)];
        const degreesPerNumber = 360 / 100;
        const startOffset = -5.3;
        const targetAngle = (chosen * degreesPerNumber + startOffset + 360) % 360;
        const extraSpins = 4 * 360;
        const finalAngle = extraSpins + targetAngle;

        setRotation(finalAngle);

        setTimeout(() => {
            setIsSpinning(false);
            dispatch(setFortuneWheel(chosen));
            setRotation(targetAngle);
        }, 4000);
    };

    return (
        <Background>
            <div className="space-y-5 fixed inset-0 overflow-hidden padding-page">
                <TitleUnderLine text="נתחיל בניחושים" />
                <div className="flex items-start gap-4 h-screen">
                    <Card width={'w-[40vw]'} className={'flex-shrink-0'}>
                        <div className="font-notoSansHebrew-regular">
                            <p>
                                איזה מספר ייצא בגלגל המזל?
                                <br />
                                <span className="font-notoSansHebrew-bold">זכרו את המספר </span>
                                שיצא, זה חשוב להמשך.
                            </p>
                        </div>
                    </Card>
                    <div className=" left-16 flex flex-col items-center relative self-end translate-y-[-10vw]">
                        <img src={curveText} alt="לחצו על הגלגל כדי לסובב אותו" />
                        <div
                            className="absolute top-[4vw] w-0 h-0 z-10
                                      border-l-[1.2vw] border-l-transparent
                                      border-r-[1.2vw] border-r-transparent
                                      border-t-[4.5vw] border-t-green-mid
                                      drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
                        ></div>

                        <div
                            className="relative overflow-hidden w-[57vw] h-[29vw] rounded-t-full cursor-pointer"
                            onClick={spinWheel}
                        >
                            <img
                                src={pulleyNumbers}
                                alt="גלגל"
                                className="absolute bottom-[-28vw] left-0 w-[61vw] transform-gpu"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transition: isSpinning
                                        ? 'transform 4s cubic-bezier(0.25, 1, 0.3, 1)'
                                        : 'none',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );
};

export default AnchoringWheel;
