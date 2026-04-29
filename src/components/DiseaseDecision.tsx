import { useState } from 'react';

import Background from './Background';
import Button from './Button';
import Card from './Card';
import TitleSideLine from './TitleSideLine';
import StaticBackground from '../assets/LeftShapes/disease-decision.svg';
import FloatingAnimation from '../components/FloatingAnimations';
import { LeftShapes } from '../data/floating-animations';

type PlanChoice = 'planA' | 'planB';

interface DiseaseDecisionProps {
    title: string;
    planA: string;
    planB: string;
    savedAnswer: PlanChoice | null;
    onSubmit: (choice: PlanChoice) => void;
}

const DiseaseDecision: React.FC<DiseaseDecisionProps> = ({
    title,
    planA,
    planB,
    savedAnswer,
    onSubmit,
}) => {
    const alreadyAnswered = savedAnswer !== null;
    const [choice, setChoice] = useState<PlanChoice | null>(savedAnswer);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);

    const handleSelectChoice = (selected: PlanChoice) => {
        if (isSubmitted || isLoading) return;
        setChoice(selected);
    };

    const handleSubmit = () => {
        if (!choice || isSubmitted || isLoading) return;
        setIsLoading(true);
        setTimeout(() => {
            onSubmit(choice);
            setIsLoading(false);
            setIsSubmitted(true);
        }, 800);
    };

    const renderPlanButton = (planValue: PlanChoice, label: string) => {
        const isSelected = choice === planValue;
        const isLocked = isSubmitted || isLoading;
        return (
            <button
                onClick={() => handleSelectChoice(planValue)}
                disabled={isLocked}
                className={`
                    shape-angled-top
                    w-[9.5vw] h-[3.7vw]
                    flex items-center justify-center
                    text-white text-[1.78vw] font-medium
                    transition-all duration-200
                    ${
                        isSelected
                            ? 'bg-blue-dark scale-105 drop-shadow-primary'
                            : isLocked
                              ? 'bg-secondary opacity-60'
                              : 'bg-secondary hover:bg-blue-mid drop-shadow-dark cursor-pointer'
                    }
                    ${isLocked ? 'cursor-not-allowed' : ''}
                `}
            >
                {label}
            </button>
        );
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text={title} />
                <Card width="w-[43.44vw]" className="absolute right-[3vw] top-[11vw]">
                    <p className="text-right text-[1.78vw] w-[30.6vw] whitespace-nowrap">
                        התפרצות מחלה במדינה צפויה להרוג&nbsp;600&nbsp;איש.
                        <br />
                        <span className="font-notoSansHebrew-semiBold">בחרו בתכנית לפעולה:</span>
                    </p>
                    <div className="text-[1.78vw]">
                        <div className="flex g-1 mt-[1vw] items-center">
                            {renderPlanButton('planA', 'תכנית א׳')}
                            <span className="font-notoSansHebrew-bold">{planA}</span>
                        </div>
                        <div className="flex g-1 mt-[1vw] items-center">
                            {renderPlanButton('planB', 'תכנית ב׳')}
                            <b className="whitespace-pre-line">{planB}</b>
                        </div>
                    </div>
                </Card>
            </div>
            <FloatingAnimation
                staticBackground={StaticBackground}
                shapes={LeftShapes}
                classes="left-[-2vw] bottom-[-2vh]"
            />
            <div className="fixed bottom-[3vh] left-1/2 -translate-x-1/2">
                <Button
                    content="הגשה"
                    inputProvided={!!choice}
                    marked={isSubmitted || alreadyAnswered}
                    loading={isLoading}
                    className="shape-angled-top"
                    onClick={handleSubmit}
                />
            </div>
        </Background>
    );
};

export default DiseaseDecision;
