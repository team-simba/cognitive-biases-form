import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';
import SecurityContext from '../components/SecurityContext';

import type { StepComponent } from '../types/step';

interface OctoberContextProps extends StepComponent {
    onAdvance?: () => void;
}

const OctoberContext: React.FC<OctoberContextProps> = ({ step, onAdvance }) => {
    return (
        <>
            {step === 1 && (
                <AnimatedDiamondText text="ובהקשר ה-7.10" onComplete={onAdvance} />
            )}
            {step === 2 && (
                <SecurityContext
                    titleType="TitleSideLine"
                    title="בהקשר ה-7.10"
                    content={
                        <p>
                            <span className="font-notoSansHebrew-bold">
                                איך זה קשור באחד התפקידים החשובים של אמ"ן?
                            </span>
                            <br />
                            משימתו של המודיעין היא
                            <span className="font-notoSansHebrew-bold"> להתריע מפני מלחמה, </span>
                            אבל כבר פה ייתכן שיש לנו
                            <span className="font-notoSansHebrew-bold"> הטיית תוכן </span>
                            בגלל שנאת הפסד.
                            <br />
                            ההתמקדות
                            <span className="font-notoSansHebrew-bold"> במניעת השלילי </span>
                            - התרעה על מלחמה, פיגועים והתחממות - עשויה לגרום לנו "לקחת את הסיכון",
                            גם
                            <br />
                            אם הוא קלוש, שיהיה בסדר.
                            <br />
                            בגלל הניסוח במונחי הפסד, נעדיף
                            <span className="font-notoSansHebrew-bold"> לחשוב בצורה חיובית </span>
                            ולהמר על זה שהדברים הרעים לא יקרו, מאשר לפעול
                            <br />
                            <span className="font-notoSansHebrew-bold"> ואולי להחריף את המצב </span>
                            (ויכול להיות שגם ככה לא יקרה כלום).
                        </p>
                    }
                />
            )}
        </>
    );
};

export default OctoberContext;
