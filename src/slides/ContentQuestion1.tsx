import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/LeftShapes/static.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import FloatingAnimation from '../components/FloatingAnimations';
import QuestionCard from '../components/QuestionCard';
import TitleUnderLine from '../components/TitleUnderLine';
import { elephantQuestion } from '../data/elephant-question';
import { LeftShapes } from '../data/floating-animations';
import { setElephantAnswer, setElephantAnswerTime } from '../store/userAnswersSlice';

const ContentQuestion1: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.elephantAnswer);
    const alreadyAnswered = savedAnswer !== null;

    const [answer, setAnswer] = useState<string>(
        savedAnswer === true ? 'כן' : savedAnswer === false ? 'לא' : ''
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);

    const startTime = useRef<number | null>(alreadyAnswered ? null : Date.now());

    const handleSelect = (choice: string) => {
        if (isSubmitted || isLoading) return;
        setAnswer((prev) => (prev === choice ? '' : choice));
    };

    const handleSubmit = () => {
        if (!answer || isLoading || isSubmitted) return;
        const elapsed = startTime.current !== null ? Date.now() - startTime.current : 0;
        setIsLoading(true);
        setTimeout(() => {
            dispatch(setElephantAnswer(answer === 'כן'));
            dispatch(setElephantAnswerTime(elapsed));
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="נראה אתכם הפעם..." />

                <QuestionCard
                    width="w-[50.55vw]"
                    height="h-[27.6vw]"
                    question={elephantQuestion}
                    answer={answer}
                    onSelect={handleSelect}
                />
                <div className="w-full flex justify-center mt-[2vw]">
                    <Button
                        marked={isSubmitted || alreadyAnswered}
                        loading={isLoading}
                        content="הגשה"
                        inputProvided={!!answer || alreadyAnswered}
                        onClick={handleSubmit}
                        className="shape-angled-top text-[1.67vw]"
                    />
                </div>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={LeftShapes}
                    classes="w-[30vw]"
                />
            </div>
        </Background>
    );
};

export default ContentQuestion1;
