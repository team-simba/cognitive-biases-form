import { useDispatch, useSelector } from 'react-redux';

import DiseaseDecision from '../components/DiseaseDecision';
import { setPrimeMinisterDiseaseChoice } from '../store/userAnswersSlice';

import type { RootState } from '../store/store';

const PrimeMinisterDisease: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector(
        (state: RootState) => state.userAnswers.primeMinisterDiseaseChoice
    );

    return (
        <DiseaseDecision
            title="אתם ראש הממשלה עכשיו!"
            planA="200 איש ינצלו"
            planB="סיכוי של 1/3 להציל 600,
    סיכוי של 2/3 להציל 0"
            savedAnswer={savedAnswer}
            onSubmit={(choice) => dispatch(setPrimeMinisterDiseaseChoice(choice))}
        />
    );
};

export default PrimeMinisterDisease;
