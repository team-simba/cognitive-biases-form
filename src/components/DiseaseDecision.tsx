import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from './Background';
import Button from './Button';
import Card from './Card';
import TitleSideLine from './TitleSideLine';
import StaticBackground from '../assets/LeftShapes/disease-decision.svg';
import FloatingAnimation from '../components/FloatingAnimations';
import { LeftShapes } from '../data/floating-animations';
import { setPlanVotes } from '../store/answersSlice';

import type { RootState } from '../store/store';

interface DiseaseDecisionProps {
    title: string;
    planA: string;
    planB: string;
}

const DiseaseDecision: React.FC<DiseaseDecisionProps> = ({ title, planA, planB }) => {
    const planVotes = useSelector((state: RootState) => state.answers.planVotes);
    const dispatch = useDispatch();
    const [choice, setChoice] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelectChoice = (selected: string) => {
        setChoice(selected);
    };

    const handleSubmit = () => {
        if (!choice || isSubmitted) return;
        setIsSubmitted(true);
        dispatch(setPlanVotes([...planVotes, choice]));
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
                        <div className="flex g-1 mt-[1vw] ">
                            <Button
                                content="תכנית א׳"
                                onClick={() => handleSelectChoice('תכנית א׳')}
                                inputProvided={true}
                                className={`shape-angled-top transition-all duration-300 ${
                                    choice === 'תכנית א׳'
                                        ? 'bg-blue-dark scale-105'
                                        : 'bg-secondary hover:bg-blue-mid'
                                }`}
                            ></Button>
                            <span className="font-notoSansHebrew-bold">{planA}</span>
                        </div>
                        <div className="flex g-1 mt-[1vw]">
                            <Button
                                content="תכנית ב׳"
                                onClick={() => handleSelectChoice('תכנית ב׳')}
                                inputProvided={true}
                                className={`shape-angled-top transition-all duration-300 ${
                                    choice === 'תכנית ב׳'
                                        ? 'bg-blue-dark scale-105'
                                        : 'bg-secondary hover:bg-blue-mid'
                                }`}
                            ></Button>
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
                    className="shape-angled-top"
                    onClick={handleSubmit}
                />
            </div>
        </Background>
    );
};

export default DiseaseDecision;
