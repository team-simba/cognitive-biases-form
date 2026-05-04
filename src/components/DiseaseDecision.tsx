import { useState } from 'react';

import Background from './Background';
import Button from './Button';
import Card from './Card';
import SkewButton from './SkewButton';
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

    const PLAN_A_LABEL = 'תכנית א׳';
    const PLAN_B_LABEL = 'תכנית ב׳';
    const selectedLabel =
        choice === 'planA' ? PLAN_A_LABEL : choice === 'planB' ? PLAN_B_LABEL : '';

    const handleSelectLabel = (label: string) => {
        if (isSubmitted || isLoading) return;
        setChoice(label === PLAN_A_LABEL ? 'planA' : 'planB');
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
                        <div className="flex gap-10 mt-[1vw] items-center">
                            <SkewButton
                                text={PLAN_A_LABEL}
                                selected={selectedLabel}
                                onSelect={handleSelectLabel}
                            />
                            <span className="font-notoSansHebrew-bold">{planA}</span>
                        </div>
                        <div className="flex gap-10 mt-[1vw] items-center">
                            <SkewButton
                                text={PLAN_B_LABEL}
                                selected={selectedLabel}
                                onSelect={handleSelectLabel}
                            />
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
