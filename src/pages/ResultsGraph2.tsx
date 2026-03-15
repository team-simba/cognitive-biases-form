import { useSelector } from 'react-redux';

import Background from '../components/Background';
import Card from '../components/Card';
import CognitiveBiasChart from '../components/CognitiveBiasChart';
import TitleUnderLine from '../components/TitleUnderLine';

import type { RootState } from '../store/store';

interface ChartDataPoint {
    number: number;
    votes: number;
}

const ResultsGraph2: React.FC<ChartDataPoint[]> = ({ data }) => {
    const yourVote = useSelector((state: RootState) => state.guessNumber.plumber);
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="גרף תוצאות" />
                <Card className="h-[20vh]">
                    <p className="font-notoSansHebrew-regular">
                        <span className="font-notoSansHebrew-bold">נפלתם פה?</span>
                        <br />
                        <span className="font-notoSansHebrew-bold">כשהציגו רק את הנתון </span>
                        "70% עורכי דין, 30% שרברבים" – הרוב הגדול של האנשים יגידו שהסיכוי שיצא שרברב
                        הוא 30%, אבל ברגע
                        <span className="font-notoSansHebrew-bold"> שמציגים את התיאור של מנחם</span>
                        , פתאום נבדקים אומרים שהסיכוי הוא 50%.
                    </p>
                </Card>
                <CognitiveBiasChart
                    data={data}
                    yourVote={yourVote}
                    reference={70}
                    color={'green'}
                    ArrowIconColor={'green'}
                    xTicks={[0, 30, 50, 70, 100]}
                />
            </div>
        </Background>
    );
};

export default ResultsGraph2;
