import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/LeftShapes/more-tilt.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import HorizontalDrag from '../components/HorizontalDrag';
import TitleUnderLine from '../components/TitleUnderLine';
import { LeftShapes } from '../data/floating-animations';
import { setPlumberProbability } from '../store/userAnswersSlice';

const ClassificationQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.plumberProbability);
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
            dispatch(setPlumberProbability(dragValue.current!));
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <Background>
            <div className="relative min-h-screen padding-page">
                <TitleUnderLine text="סיטואציה נתונה" className={'mb-[1vw]'} />
                <Card
                    width="w-[fit]"
                    height="h-[11vw]"
                    padding="p-[2.6vw]"
                    gap="gap-[0.52vw]"
                    className="absolute justify-center items-end"
                >
                    <p className="font-notoSansHebrew-regular space-y-[0.4vw]">
                        <span>יש בחדר 100 אנשים: 70% עורכי דין, 30% שרברבים.</span>
                        <br />
                        <span>
                            מנחם הוא גבר בן 40, נשוי ללא ילדים, אוהב לעבוד עם כלים בידיים. מעט מקריח
                            ושמנמן, חייכני ואדיב.
                        </span>
                        <br />
                        <span className="font-notoSansHebrew-bold">
                            מה הסיכויים מ- 1 עד 100 אחוזים שמנחם הוא שרברב?
                        </span>
                    </p>
                </Card>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={LeftShapes}
                    classes="w-[28vw] z-10"
                />
                <HorizontalDrag
                    onValueChange={handleValueChange}
                    disabled={isSubmitted || isLoading}
                    initialValue={savedAnswer}
                />
                <div className="w-full flex justify-center pt-[36vw]">
                    <Button
                        marked={isSubmitted || alreadyAnswered}
                        loading={isLoading}
                        content="הגשה"
                        inputProvided={hasDragged || alreadyAnswered}
                        onClick={handleSubmit}
                        className="shape-angled-top text-[1.67vw]"
                    />
                </div>
            </div>
        </Background>
    );
};
export default ClassificationQuestion;
