import DiseaseDecision from '../components/DiseaseDecision';

const PrimeMinisterDisease: React.FC = () => {
    return (
        <DiseaseDecision
            className="font-notoSansHebrew-bold"
            title="אתם ראש הממשלה עכשיו!"
            planA="200 איש ינצלו"
            planB="סיכוי של 1/3 להציל 600,
    סיכוי של 2/3 להציל 0"
        />
    );
};

export default PrimeMinisterDisease;
