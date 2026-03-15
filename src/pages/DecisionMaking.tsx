import StaticBackground from '../assets/LeftShapes/decision-making.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { LeftShapes } from '../data/floating-animations';

const DecisionMaking: React.FC = () => {
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="קצת על קבלת החלטות" className={'self-start'} />
                <Card width="w-[96vw] h-[19.95vw]" className="z-10">
                    <p className="font-notoSansHebrew-regular">
                        מציעים לך להטיל מטבע, אם יוצא פלי -&nbsp;
                        <span className="font-notoSansHebrew-bold">תפסיד </span>
                        10 ₪, אם יוצא עץ,&nbsp;
                        <span className="font-notoSansHebrew-bold">תקבל</span> 10 ₪.
                        <br />
                        הולך על זה?
                        <br />
                        רוב האנשים לא יסכימו לכזאת עסקה. מה שיושב מאחורי זה היא שנאת ההפסד.
                        <br />
                        בני אדם לא אוהבים להפסיד! להרוויח 10 ₪ לא משמח מספיק כמו שלהפסיד 10 ₪ מבאס
                        אותנו.
                        <br />
                        <br />
                        <span className="font-notoSansHebrew-bold">
                            בואו ננסה להרגיש את זה קצת.
                        </span>
                    </p>
                </Card>
            </div>
            <FloatingAnimation staticBackground={StaticBackground} shapes={LeftShapes} />
        </Background>
    );
};

export default DecisionMaking;
