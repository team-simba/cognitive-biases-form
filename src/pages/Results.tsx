import { useSelector } from 'react-redux';

import Background from '../components/Background';
import ResultsCard from '../components/ResultsCard.tsx';
import TitleUnderLine from '../components/TitleUnderLine';

import type { RootState } from '../store/store';
import type { ResultsGrafValues } from '../types/vote';

interface ResultsProps {
    [key: string]: ResultsGrafValues;
}

const Results: React.FC<ResultsProps> = ({ answers }) => {
    const allAnswers = useSelector((state: RootState) => state.answers.allAnswers);
    const updatedAnswers = Object.fromEntries(
        Object.entries(answers).map(([key, value], index) => [
            key,
            { ...value, my: allAnswers[index] },
        ])
    ) as typeof answers;

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="התוצאות"></TitleUnderLine>
                <div className="flex gap-[3vw] justify-center">
                    <ResultsCard object={updatedAnswers.bus}>
                        <p className="text-[1.77vw] font-notoSansHebrew-regular text-right">
                            האם נרתעת משהייה
                            <br />
                            <span className="font-notoSansHebrew-bold">ליד אדם מעשן</span>
                            <br />
                            מחשש
                            <span className="font-notoSansHebrew-bold"> לבריאותך</span>?
                        </p>
                    </ResultsCard>
                    <ResultsCard object={updatedAnswers.beach}>
                        <p className="text-[1.77vw] font-notoSansHebrew-regular text-right">
                            האם נרתעת משחייה
                            <br />
                            <span className="font-notoSansHebrew-bold">בחוף ללא מציל</span>
                            <br />
                            מחשש
                            <span className="font-notoSansHebrew-bold"> לטביעה</span>?
                        </p>
                    </ResultsCard>
                    <ResultsCard object={updatedAnswers.smoking}>
                        <p className="text-[1.77vw] font-notoSansHebrew-regular text-right">
                            האם נרתעת
                            <span className="font-notoSansHebrew-bold"> מנסיעה</span>
                            <br />
                            <span className="font-notoSansHebrew-bold">באוטובוס</span>
                            <br />
                            מחשש
                            <span className="font-notoSansHebrew-bold"> לארוע טרור</span>?
                        </p>
                    </ResultsCard>
                </div>
            </div>
        </Background>
    );
};
export default Results;
