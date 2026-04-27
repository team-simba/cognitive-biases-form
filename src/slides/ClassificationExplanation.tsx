import { useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import Background from '../components/Background';
import Card from '../components/Card';
import CognitiveBiasChart from '../components/CognitiveBiasChart';
import TitleUnderLine from '../components/TitleUnderLine';

interface ChartDataPoint {
    number: number;
    votes: number;
}

const ClassificationExplanation: React.FC<ChartDataPoint[]> = ({ data }) => {
    const yourVote = useSelector((state: RootState) => state.userAnswers.plumberProbability);
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="הטייה קוגניטיבית מספר 2 - קלסיפיקציה " />
                <Card className="h-[20vh]">
                    <p className="font-notoSansHebrew-regular">אנחנו מארגנים מידע באמצעות קטגוריות ותבניות מוכרות. כשמוצג רק הנתון הסטטיסטי: 70% עורכי דין ו־30% שרברבים ההסתברות שאדם אקראי הוא שרברב היא 30%. 
אבל כשמוסיפים תיאור אישי שתואם סטריאוטיפ של שרברב, כמו במקרה של מנחם, רבים נוטים להעריך שהסיכוי גבוה יותר. 
בפועל התיאור לא משנה את הסטטיסטיקה, אלא משפיע על השיפוט: ההערכה נשענת על מידת ההתאמה לתבנית מוכרת במקום על הנתונים עצמם.



                    </p>
                </Card>
                <CognitiveBiasChart
                    data={data}
                    yourVote={yourVote}
                    reference={30}
                    color={'green'}
                    xTicks={[0, 30, 50, 70, 100]}
                />
            </div>
        </Background>
    );
};

export default ClassificationExplanation;
