import { useState } from 'react';
import { useDispatch } from 'react-redux';

import StaticBackground from '../assets/LeftShapes/static.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import FloatingAnimation from '../components/FloatingAnimations';
import QuestionCard from '../components/QuestionCard';
import TitleUnderLine from '../components/TitleUnderLine';
import { cigarQuestion } from '../data/cigar-question';
import { LeftShapes } from '../data/floating-animations';
import { setCigar } from '../store/answersSlice';

const LittleDifferently: React.FC = () => {
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState<string>('');

    const handleSelect = (choice: string) => {
        setAnswer((prev) => (prev === choice ? '' : choice));
    };

    const handleSubmit = () => {
        if (answer === '') return;
        dispatch(setCigar(answer));
    };
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="ועכשיו קצת אחרת..." />

                <QuestionCard
                    width="w-[60vw]"
                    height="h-[27.08vw]"
                    question={cigarQuestion}
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
            </div>
            <FloatingAnimation
                staticBackground={StaticBackground}
                shapes={LeftShapes}
                classes="w-[30vw]"
            />
        </Background>
    );
};

export default LittleDifferently;
