import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import FormalLogicQuestionComponent from '../components/FormalLogicQuestionComponent';
import { FontClasses } from '../types/fonts';
import { setFormalLogicAnswer } from '../store/userAnswersSlice';

const FormalLogicQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.formalLogicAnswer);
    const alreadyAnswered = savedAnswer !== null;

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);

    const cardsContent = ['D', '6', '7', 'A'];

    const handleSubmit = (answers: string[]) => {
        if (isLoading || isSubmitted) return;
        setIsLoading(true);
        setTimeout(() => {
            dispatch(setFormalLogicAnswer(answers));
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <FormalLogicQuestionComponent
            intro="מולכם ארבעה קלפים. על כל קלף יש מספר בצד אחד ואות באנגלית בצד השני."
            cardsContent={cardsContent}
            cardsFontWeight={FontClasses.big}
            legality="אם על צד אחד של הקלף יש אות ניקוד (AEIOU), אז בצד השני יש מספר זוגי."
            savedAnswer={savedAnswer}
            onSubmit={handleSubmit}
            marked={isSubmitted || alreadyAnswered}
            loading={isLoading}
        />
    );
};

export default FormalLogicQuestion;
