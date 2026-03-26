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
    step: 1 | 2 | 3;
    dataFor15: ChartDataPoint[];
    dataFor65: ChartDataPoint[];
}

const AnchoringGraph: React.FC<AnchoringGraphProps> = ({ step, dataFor15, dataFor65 }) => {
    const anchorNumber = useSelector((state: RootState) => state.userAnswers.fortuneWheel);
    const userVote = useSelector((state: RootState) => state.userAnswers.africanCountries);

    const config = {
        15: { data: dataFor15, majorityEstimate: 25, color: 'blue' },
        65: { data: dataFor65, majorityEstimate: 45, color: 'green' },
    } as const;

    const { data, majorityEstimate, color } = config[anchorNumber];

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
                                        המספר שקיבלת בהתחלה – לא היה סתם.&nbsp;
                                        <span className="font-notoSansHebrew-bold">
                                            הוא שימש לך כעוגן והשפיע על ההחלטה שלך
                                        </span>
                                        &nbsp;בלי ששמת לב.
                                        <br />
                                        הגרף פה מציג את התשובות של כל מי שקיבל את המספר&nbsp;
                                        {anchorNumber} (כן, כמוך) וכמעט כולם העריכו מספרים קרובים ל־
                                        {majorityEstimate}.
                                        <br />
                                        ככה עובד אפקט העיגון: מידע אקראי שנחשפנו אליו קודם, משפיע על
                                        איך שאנחנו חושבים אחר כך.
                                    </p>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <p className="text-[1.88vw] font-notoSansHebrew-regular">
                                        בניסוי, חלק מהנבדקים קיבלו את המספר&nbsp;
                                        <span className="font-notoSansHebrew-semiBold">
                                            15&nbsp;
                                        </span>
                                        וחלק את&nbsp;
                                        <span className="font-notoSansHebrew-semiBold">65</span>.
                                        <br />
                                        אלה שקיבלו 15 העריכו את התשובה סביב 25, ואלה שקיבלו 65 נתנו
                                        הערכות קרובות ל־45.
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
            {step === 3 && (
                <SubjectMainScreen
                    titleContent="הטייה קוגניטיבית מספר 1 – עיגון"
                    content={
                        <p>
                            הטיית העיגון היא הנטייה שלנו&nbsp;
                            <span className="font-notoSansHebrew-bold">
                                להישען על מספר או מידע ראשוני גם כשאין לו קשר לשאלה.
                            </span>
                            <br />
                            מעניין, לא? הוכחנו שמספר אקראי משפיע על ההיגיון שלנו. וזה רלוונטי גם
                            לתחומים אחרים, כמו כלכלה למשל!
                        </p>
                    }
                />
            )}
        </>
    );
};

export default AnchoringGraph;
