import Background from '../components/Background';
import Card from '../components/Card';
import TitleSideLine from '../components/TitleSideLine';
import WarCircleComposition from '../components/WarCircleComposition';
import WarStep from '../components/WarStep';

const WarContextAnswer: React.FC = () => {
    return (
        <Background>
            <div className="flex flex-col px-[5vw] padding-page">
                <div className="flex justify-between">
                    <div className="flex flex-col g-1">
                        <TitleSideLine text="ובהקשרי מלחמה" />
                        <p className="font-notoSansHebrew-regular  mb-[2vw]">
                            הרוסים למודי הקור עקבו לראות האם יש&nbsp;
                            <span className="font-notoSansHebrew-bold">
                                ייצור מוגבר של מעילים בגרמניה.
                            </span>
                            &nbsp; למה?
                        </p>
                    </div>
                    <WarCircleComposition></WarCircleComposition>
                </div>
                <div className="font-notoSansHebrew-regular flex flex-wrap justify-between gap-[1vw] mb-[2vw]">
                    <WarStep text="יותר מעילים" />
                    <WarStep text="יותר שחיטת כבשים" />
                    <WarStep text="יותר בשר כבשים" />
                    <WarStep text="היצע הבשר עולה" />
                    <WarStep text="מחיר בשר הכבשים בירידה" isBold />
                </div>
                <Card width="w-[90.97vw]" height="h-[20.74vh" gap="g-0">
                    <p className="font-notoSansHebrew-regular">
                        מה הייתה <span className="font-notoSansHebrew-bold">הטעות</span> בהנחה של
                        הרוסים?
                        <br />
                        הם הניחו שהגרמנים חושבים כמוהם - שצריך לצייד את הצבא בציוד חורף כי מלחמה עם
                        רוסיה הענקית תיקח חודשים רבים.
                    </p>
                </Card>
            </div>
        </Background>
    );
};

export default WarContextAnswer;
