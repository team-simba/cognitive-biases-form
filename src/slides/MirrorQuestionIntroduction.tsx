import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/LeftShapes/decision-making.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { LeftShapes } from '../data/floating-animations';
import {
    setMirrorClassmateChoice,
    setMirrorOwnSameChoice,
} from '../store/userAnswersSlice';

interface MirrorQuestionIntroductionProps {
    step?: 1 | 2 | 3;
}

const STEP2_OPTIONS = ['אופציה א׳', 'אופציה ב׳'] as const;
const STEP3_OPTIONS = ['כן', 'לא'] as const;

const MirrorQuestionIntroduction: React.FC<MirrorQuestionIntroductionProps> = ({ step = 1 }) => {
    const dispatch = useDispatch();
    const savedClassmate = useSelector((s: RootState) => s.userAnswers.mirrorClassmateChoice);
    const savedSame = useSelector((s: RootState) => s.userAnswers.mirrorOwnSameChoice);

    const isStep2 = step === 2;
    const isStep3 = step === 3;
    const isQuestionStep = isStep2 || isStep3;

    const savedAnswer: string | null = isStep2
        ? savedClassmate === 'א'
            ? 'אופציה א׳'
            : savedClassmate === 'ב'
              ? 'אופציה ב׳'
              : null
        : isStep3
          ? savedSame === true
              ? 'כן'
              : savedSame === false
                ? 'לא'
                : null
          : null;

    const alreadyAnswered = savedAnswer !== null;

    const [choice, setChoice] = useState<string>(savedAnswer ?? '');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);
    const [prevStep, setPrevStep] = useState(step);

    if (prevStep !== step) {
        setPrevStep(step);
        setChoice(savedAnswer ?? '');
        setIsSubmitted(alreadyAnswered);
        setIsLoading(false);
    }

    const handleSelectChoice = (selected: string) => {
        if (isSubmitted || isLoading) return;
        setChoice((prev) => (prev === selected ? '' : selected));
    };

    const handleSubmit = () => {
        if (!choice || isLoading || isSubmitted) return;
        setIsLoading(true);
        setTimeout(() => {
            if (isStep2) {
                dispatch(setMirrorClassmateChoice(choice === 'אופציה א׳' ? 'א' : 'ב'));
            } else if (isStep3) {
                dispatch(setMirrorOwnSameChoice(choice === 'כן'));
            }
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    const options = isStep2 ? STEP2_OPTIONS : STEP3_OPTIONS;
    const followUpQuestion = isStep2
        ? 'איזו אופציה אתם חושבים שהחבר לכיתה יעדיף?'
        : 'האם אתם הייתם בוחרים באותה אופציה?';

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="תרחיש" className="self-start" />
                <div className="z-10 px-[3vw] pt-[1vw] font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] max-w-[85vw]">
                    {step === 1 && (
                        <p>
                            אתם עובדים על מספר משימות קצרות, סיימתם את אחת מהן לפני הזמן ונשארו 10
                            דקות. גם חבר לכיתה שלכם סיים אותה לפני הזמן.
                        </p>
                    )}
                    <p className="mt-[1.5vw] font-notoSansHebrew-bold">יש לכם שתי אפשרויות:</p>
                    <p>א. להשקיע את הזמן בללטש ולבדוק שוב כדי להימנע מטעות.</p>
                    <p>ב. לשלוח כבר עכשיו ולהתקדם למשימה הבאה כדי להספיק יותר.</p>
                    {isQuestionStep && (
                        <p className="mt-[2vw] font-notoSansHebrew-bold">{followUpQuestion}</p>
                    )}
                </div>
                {step === 1 && (
                    <p className="z-10 mt-[6vw] text-center font-notoSansHebrew-bold text-black-text text-[1.88vw]">
                        ענו על השאלות הבאות:
                    </p>
                )}
                {isQuestionStep && (
                    <div className="z-10 mt-[4vw] flex justify-center gap-[2.5vw]">
                        {options.map((option) => {
                            const isSelected = choice === option;
                            return (
                                <div
                                    key={option}
                                    className={
                                        isSelected ? 'drop-shadow-primary' : 'drop-shadow-dark'
                                    }
                                >
                                    <button
                                        onClick={() => handleSelectChoice(option)}
                                        disabled={isSubmitted || isLoading}
                                        className={`shape-angled-top flex items-center justify-center w-[16vw] h-[5vw] text-white text-[1.88vw] font-notoSansHebrew-bold transition-all duration-300 ${
                                            isSelected
                                                ? 'bg-blue-dark scale-105'
                                                : 'bg-secondary hover:bg-blue-mid cursor-pointer'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <FloatingAnimation staticBackground={StaticBackground} shapes={LeftShapes} />
            {isQuestionStep && (
                <div className="fixed bottom-[6vh] left-1/2 -translate-x-1/2 z-20">
                    <Button
                        key={`submit-${step}`}
                        content="הגשה"
                        loading={isLoading}
                        inputProvided={!!choice || alreadyAnswered}
                        marked={isSubmitted || alreadyAnswered}
                        className="shape-angled-top text-[1.67vw]"
                        onClick={handleSubmit}
                    />
                </div>
            )}
        </Background>
    );
};

export default MirrorQuestionIntroduction;
