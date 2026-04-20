import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import curveText from '../assets/clickOnWheel.svg';
import FullDashedCircle from '../assets/ColorfulShapesFrame/full-dashed-circle.svg';
import pulleyNumbers from '../assets/pulleyNumbers.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import ColorfulShapesFrame from '../components/ColorfulShapesFrame';
import TitleUnderLine from '../components/TitleUnderLine';
import { setFortuneWheel } from '../store/userAnswersSlice';

import type { RootState } from '../store/store';

const getTargetAngle = (num: number) => {
    const degreesPerNumber = 360 / 100;
    const startOffset = -5.3;
    return (num * degreesPerNumber + startOffset + 360) % 360;
};

const AnchoringWheel: React.FC = () => {
    const dispatch = useDispatch();
    const fortuneWheelNumber = useSelector((state: RootState) => state.userAnswers.fortuneWheel);

    const [step, setStep] = useState<1 | 2>(1);
    const [rotation, setRotation] = useState(() =>
        fortuneWheelNumber !== null ? getTargetAngle(fortuneWheelNumber) : 0,
    );
    const [isSpinning, setIsSpinning] = useState(false);
    const chosenRef = useRef<15 | 65 | null>(null);

    const alreadyPlayed = fortuneWheelNumber !== null;

    const spinWheel = () => {
        if (isSpinning || alreadyPlayed) return;
        setIsSpinning(true);

        const possibleStops: (15 | 65)[] = [15, 65];
        const chosen = possibleStops[Math.floor(Math.random() * possibleStops.length)];
        chosenRef.current = chosen;

        const targetAngle = getTargetAngle(chosen);
        const extraSpins = 4 * 360;
        const finalAngle = extraSpins + targetAngle;

        setRotation(finalAngle);

        // After spin ends (4s) → wait 0.5s → show step 2
        setTimeout(() => {
            setIsSpinning(false);
            setRotation(targetAngle);

            setTimeout(() => {
                setStep(2);
                dispatch(setFortuneWheel(chosen));
            }, 500);
        }, 3800);
    };

    // Step 2: Number reveal with dashed circle and colorful shapes
    if (step === 2) {
        const displayNumber = chosenRef.current ?? fortuneWheelNumber;
        return (
            <Background>
                <div className="absolute w-[26.25vw] h-[13.85vw] top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span className="font-ploni-bold text-[20vw] leading-[100%] tracking-normal text-center text-primary number">
                        {displayNumber}!
                    </span>
                </div>
                <div className="relative flex justify-center h-screen">
                    <img
                        src={FullDashedCircle}
                        className="absolute w-[60vw] h-[69vw] animate-spin-smooth"
                    />
                    <ColorfulShapesFrame />
                </div>
            </Background>
        );
    }

    // Step 1: Wheel (first visit = spinnable, return visit = static with result beside it)
    return (
        <Background>
            <div className="space-y-5 fixed inset-0 overflow-hidden padding-page mt-12">
                <TitleUnderLine text="נתחיל בניחושים" />
                <div className="flex items-start gap-4 h-screen">
                    <Card width={'w-[35vw]'} className={'flex-shrink-0'}>
                        <div className="font-notoSansHebrew-regular">
                            <p>
                                זכרו את המספר שייצא בגלגל המזל, 
                                <br/>
                                זה חשוב להמשך.
                            </p>
                        </div>
                    </Card>
                    <div className="left-16 flex flex-col items-center relative self-end translate-y-[-10vw]">
                    <span className="absolute top-[-200px] font-ploni-bold text-[15vw] leading-[100%] tracking-normal text-center text-primary">
                        {alreadyPlayed && fortuneWheelNumber+"!"}
                    </span>
                            <img src={curveText} alt="לחצו על הגלגל כדי לסובב אותו" className={`${alreadyPlayed ? "opacity-0" : ""} w-[600px]`}/>
                        <div
                            className="absolute top-[4vw] w-0 h-0 z-10
                                      border-l-[1.2vw] border-l-transparent
                                      border-r-[1.2vw] border-r-transparent
                                      border-t-[4.5vw] border-t-green-mid
                                      drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
                        ></div>

                        <div
                            className={`relative overflow-hidden w-[57vw] h-[29vw] rounded-t-full ${!alreadyPlayed ? 'cursor-pointer' : ''}`}
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
