import { useDispatch, useSelector } from 'react-redux';

import DiseaseDecision from '../components/DiseaseDecision';
import { setTryAgainChoice } from '../store/userAnswersSlice';

import type { RootState } from '../store/store';

const TryAgain: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.tryAgainChoice);

    return (
        <DiseaseDecision
            title="בואו ננסה שוב"
            planA="400 איש ימותו"
            planB="סיכוי של 1/3 שלא ימות אף אחד, סיכוי של 2/3 שימותו 600"
            savedAnswer={savedAnswer}
            onSubmit={(choice) => dispatch(setTryAgainChoice(choice))}
        />
    );
};

export default TryAgain;
