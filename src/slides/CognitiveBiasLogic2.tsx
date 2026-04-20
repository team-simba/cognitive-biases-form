import StaticBackground from '../assets/RightShapes/small-circle.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { RightShapes } from '../data/floating-animations';

const CognitiveBiasLogic2: React.FC = () => {
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="הטייה קוגניטיבית מספר 4 - לוגיקה פורמלית" />
                <Card className="z-10" width="w-[96vw]">
                    <p className="font-notoSansHebrew-regular leading-[2.3vw]">
                        האינטואיציה שלנו אומרת לבדוק את ה־A (כי זו אות ניקוד) וגם את ה־6 (כי הוא
                        מספר זוגי), אבל זה לא מספיק.
                        <br />
                        ההיגיון הפורמלי מלמד אותנו שני דברים:
                        <br />
                        &nbsp; 1. צריך לבדוק שאכן מאחורי&nbsp;
                        <span className="font-notoSansHebrew-bold">אות ניקוד</span> יש מספר זוגי.
                        <br />
                        &nbsp; 2. צריך לוודא שמאחורי&nbsp;
                        <span className="font-notoSansHebrew-bold">מספר אי זוגי</span>, אין אות
                        ניקוד. אם למשל מאחורי המספר 7 הייתה אות ניקוד, החוקיות
                        <span className="block ms-[3vw]">הייתה נשברת.</span>
                        <br />
                        זה בדיוק מה שראינו קודם:
                        <br />
                        &quot;אם אני פיל אז יש לי חדק&quot;&nbsp;
                        <span className="font-notoSansHebrew-bold">לא אומר </span>
                        ש&quot;אם יש לי חדק אז אני פיל&quot;. אותו הבלבול מופיע כאן מחדש.
                        <br />
                        <br />
                        בואו ננסה את זה שוב – הפעם עם ניסוח קצת אחר, שנבדק במחקרים ונמצא שעוזר לנו
                        יותר להתמודד עם הבעיה.
                    </p>
                </Card>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={RightShapes}
                    right={true}
                    classes="right-[-1vw]"
                />
            </div>
        </Background>
    );
};

export default CognitiveBiasLogic2;
