import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/RightShapes/static.svg';
import AnchorGraphics from '../components/AnchorGraphics';
import Background from '../components/Background';
import Button from '../components/Button';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleUnderLine from '../components/TitleUnderLine';
import { RightShapes } from '../data/floating-animations';
import { setafricanCountries } from '../store/userAnswersSlice';

const AnchoringQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.africanCountries);
    const alreadyAnswered = savedAnswer !== null;
    const dragValue = useRef<number | null>(null);
    const [hasDragged, setHasDragged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);

    const handleValueChange = (value: number) => {
        dragValue.current = value;
        if (!hasDragged) setHasDragged(true);
    };

    const handleSubmit = () => {
        if (dragValue.current === null || isLoading || isSubmitted) return;
        setIsLoading(true);
        setTimeout(() => {
            dispatch(setafricanCountries(dragValue.current!));
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <Background>
            <div className="relative min-h-screen">
                <AnchorGraphics onValueChange={handleValueChange} disabled={isSubmitted || isLoading} initialValue={savedAnswer} />
                <div className="flex flex-col padding-page g-1">
                    <TitleUnderLine text="ממשיכים לנחש" />
                    <Card
                        width="w-[37.78vw]"
                        height="h-[8.6vw]"
                        padding="p-[2.6vw]"
                        gap="gap-[0.52vw]"
                        className="justify-center items-end"
                    >
                        <p className="text-right font-notoSansHebrew-regular w-[30.6vw]">
                            <span>נסו להעריך: </span>
                            <span className="font-notoSansHebrew-bold whitespace-nowrap">
                                כמה מדינות יש באירופה?
                            </span>
                            <br />
                            בחרו מספר בין 0 ל-100
                        </p>
                    </Card>
                </div>
                <div className="absolute bottom-0 w-full flex justify-center mb-[2vw]">
                    <Button
                        marked={isSubmitted || alreadyAnswered}
                        loading={isLoading}
                        content="הגשה"
                        inputProvided={hasDragged || alreadyAnswered}
                        onClick={handleSubmit}
                        className="shape-angled-top font-medium text-[1.67vw]"
                    />
                </div>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={RightShapes}
                    right={true}
                    classes="w-[40vw] h-auto"
                />
            </div>
        </Background>
    );
};

export default AnchoringQuestion;
