import DiseaseDecision from '../components/DiseaseDecision';

const TryAgain: React.FC = () => {
    return (
        <DiseaseDecision
            className="font-notoSansHebrew-bold"
            title="בואו ננסה שוב"
            planA="400 איש ימותו"
            planB="סיכוי של 1/3 שלא ימות אף אחד, סיכוי של 2/3 שימותו 600"
        />
    );
};

export default TryAgain;
