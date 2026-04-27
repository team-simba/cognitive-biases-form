import StaticBackground from '../assets/LeftShapes/decision-making.svg';
import Background from '../components/Background';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { LeftShapes } from '../data/floating-animations';

const MirrorQuestionIntroduction: React.FC = () => {
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="תרחיש" className="self-start" />
                <div className="z-10 px-[3vw] pt-[1vw] font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] max-w-[85vw]">
                    <p>
                        אתם עובדים על מספר משימות קצרות, סיימתם את אחת מהן לפני הזמן ונשארו 10
                        דקות. גם חבר לכיתה שלכם סיים אותה לפני הזמן.
                    </p>
                    <p className="mt-[1.5vw] font-notoSansHebrew-bold">יש לכם שתי אפשרויות:</p>
                    <p>א. להשקיע את הזמן בללטש ולבדוק שוב כדי להימנע מטעות.</p>
                    <p>ב. לשלוח כבר עכשיו ולהתקדם למשימה הבאה כדי להספיק יותר.</p>
                </div>
                <p className="z-10 mt-[6vw] text-center font-notoSansHebrew-bold text-black-text text-[1.88vw]">
                    ענו על השאלות הבאות:
                </p>
            </div>
            <FloatingAnimation staticBackground={StaticBackground} shapes={LeftShapes} />
        </Background>
    );
};

export default MirrorQuestionIntroduction;
