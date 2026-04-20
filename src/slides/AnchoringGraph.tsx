import { useSelector } from 'react-redux';

import Background from '../components/Background';
import Card from '../components/Card';
import CognitiveBiasChart from '../components/CognitiveBiasChart';
import SubjectMainScreen from '../components/SubjectMainScreen';
import TitleSideLine from '../components/TitleSideLine';

import type { RootState } from '../store/store';

interface ChartDataPoint {
    number: number;
    votes: number;
}

interface AnchoringGraphProps {
    step: 1 | 2 ;
    dataFor15: ChartDataPoint[];
    dataFor65: ChartDataPoint[];
}

const AnchoringGraph: React.FC<AnchoringGraphProps> = ({ step, dataFor15, dataFor65 }) => {
    const anchorNumber = useSelector((state: RootState) => state.userAnswers.fortuneWheel);
    const userVote = useSelector((state: RootState) => state.userAnswers.africanCountries);

    const config = {
        15: { data: dataFor15, color: 'blue' },
        65: { data: dataFor65, color: 'green' },
    } as const;

    if (anchorNumber === null) return null;

    const { data, color } = config[anchorNumber];

    return (
        <>
            {(step === 1 || step === 2) && (
                <Background>
                    <div className="flex flex-col items-center min-h-screen g-1 padding-page">
                        <TitleSideLine
                            text="הטייה קוגניטיבית מספר 1 – עיגון"
                            className={'self-start'}
                        />
                        <Card width="w-[94.48vw]">
                            {step === 1 && (
                                <>
                                    <p className="font-notoSansHebrew-regular">
                                        <b>
                                    אז למה בכלל ביקשנו מכם להגריל מספר לפני השאלה?
                                        </b>
                                    <br/>
בחלק בו הגרלתם מספר, המספר שיצא לכם לא היה אקראי אלא נקבע מראש - חלק קיבלו 65 כמוכם וחלק קיבלו 15. 
                                    <br/>
אצל רבים, המספר שהוגרל שימש כ“עוגן” - נקודת התחלה שממנה מתחילים לחשוב ולהעריך. 
גם אם המספר עצמו לא קשור לשאלה, המוח נוטה להתייחס אליו, ולכן ההערכה עלולה להימשך לכיוונו. 

הגרף שלפניכם, מציג את התשובות של כל מי שהגריל מספר דומה לשלכם ({anchorNumber}).

                                    </p>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <p className="text-[1.88vw] font-notoSansHebrew-regular">
                                        <b>
                                    וזו בדיוק הטיית העיגון:&nbsp;
                                        </b>
                                    הנטייה להסתמך על נקודת מוצא ראשונית 
                                    (מידע או רושם ראשון) ולהתאים אליה את ההחלטות שלנו, גם כשהיא לא בהכרח רלוונטית.
איך נוכל לראות את ההטיה? לפניכם גרף ההערכות של מי שקיבלו 15 ושל מי שקיבלו 65, 
שימו לב שממוצע הנחשפים למספר הגבוה מבין ה-2, העריכו מספר גדול יותר של מדינות אפריקאיות החברות באו״ם משל הנחשפים למספר הנמוך. כך ניתן לראות את ההשפעה של מספר נפרד לשאלה על התשובה עליה.
(אגב - התשובה הנכונה לשאלה היא 54).

                                    </p>
                                </>
                            )}
                        </Card>
                        {step === 1 && (
                            <CognitiveBiasChart
                                data={data}
                                yourVote={userVote}
                                reference={anchorNumber}
                                color={color}
                                arrowIconColor={'blue'}
                            />
                        )}
                        {step === 2 && (
                            <div className="relative w-full h-[50vh]">
                                <div className="absolute w-full bottom-0 ">
                                    <CognitiveBiasChart
                                        data={config[15].data}
                                        yourVote={userVote}
                                        reference={15}
                                        color={config[15].color}
                                        arrowIconColor={'blue'}
                                        xTicks={[15, 25, 45, 65, 100]}
                                    />
                                </div>
                                <div className="absolute bottom-0 w-full">
                                    <CognitiveBiasChart
                                        data={config[65].data}
                                        yourVote={userVote}
                                        reference={65}
                                        color={config[65].color}
                                        arrowIconColor={'blue'}
                                    />
                                </div>
                                <div className="flex items-center gap-[2.5vw] text-[1.25vw] font-notoSansHebrew-bold absolute bottom-[44vh] right-10 w-full">
                                    <div className="flex items-center gap-[0.6vw]">
                                        <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-green-mid" />
                                        <span>קיבלו את המספר 65</span>
                                    </div>
                                    <div className="flex items-center gap-[0.6vw]">
                                        <div className="w-[1.1vw] h-[1.1vw] rotate-45 bg-blue-mid" />
                                        <span>קיבלו את המספר 15</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Background>
            )}
        </>
    );
};

export default AnchoringGraph;
