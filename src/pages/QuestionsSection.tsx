import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Background from '../components/Background';
import Button from '../components/Button';
import QuestionCard from '../components/QuestionCard';
import TitleUnderLine from '../components/TitleUnderLine';
import { questions } from '../data/questions';
import { setAllAnswers } from '../store/answersSlice';

const QuestionsSection: React.FC = () => {
    const dispatch = useDispatch();
    const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));

    const allAnswered = answers.every((val) => val !== '');

    const handleSelect = (choice: string, index?: number) => {
        if (index === undefined) return;
        setAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[index] = prev[index] === choice ? '' : choice;
            return newAnswers;
        });
    };

    const handleSubmit = () => {
        if (!allAnswered) return;
        dispatch(setAllAnswers(answers));
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="עוד שאלות" />

                <div className="flex flex-wrap justify-center gap-8">
                    {questions.map((q, index) => (
                        <QuestionCard
                            width="w-[25.94vw]"
                            height="h-[24.27vw]"
                            index={index}
                            question={q}
                            answer={answers[index]}
                            onSelect={(choice) => handleSelect(choice, index)}
                        />
                    ))}
                </div>

                <div className="w-full flex justify-center mt-[5vw]">
                    <Button
                        marked={false}
                        content="הגשה"
                        inputProvided={allAnswered}
                        onClick={handleSubmit}
                        className="shape-angled-top text-[1.67vw]"
                    />
                </div>
            </div>
        </Background>
    );
};

export default QuestionsSection;
