import { useState } from 'react';

import StaticBackground from '../assets/LeftShapes/static.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import FloatingAnimation from '../components/FloatingAnimations';
import QuestionCard from '../components/QuestionCard';
import TitleUnderLine from '../components/TitleUnderLine';
import { elephantQuestion } from '../data/elephant-question';
import { LeftShapes } from '../data/floating-animations';

const SeeYouAgain: React.FC = () => {
    const [answer, setAnswer] = useState<string>('');

    const handleSelect = (choice: string) => {
        setAnswer((prev) => (prev === choice ? '' : choice));
    };

    const handleSubmit = () => {
        if (answer === '') return;
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
                        marked={false}
                        content="הגשה"
                        inputProvided={!!answer}
                        onClick={handleSubmit}
                        className="shape-angled-top text-[1.67vw]"
                    ></Button>
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

export default SeeYouAgain;
