import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';
import SecurityContext from '../components/SecurityContext';

import type { StepComponent } from '../types/step';

const AnchoringSecuritySection: React.FC<StepComponent> = ({ step }) => {
    return (
        <>
            {step === 1 && <AnimatedDiamondText text="ובהקשר בטחוני" />}
            {step === 2 && (
                <SecurityContext
                    titleType="TitleSideLine"
                    title="עיגון בהקשר בטחוני"
                    content={
                        <p>
                            ביולי 25 נשיא ארה&quot;ב דונלד טראמפ דרש הסכם הפסקת אש בעזה, והוא מחכה
                            שישראל ועזה יסכימו לתנאים
                            <br />
                            הדרושים להשלמת ההסכם ל-60 יום.
                            <br />
                            <span className="font-notoSansHebrew-bold">למה זוהי דוגמה לעיגון?</span>
                            <br />
                            גם אם תהיה חריגה מ־60 יום (מטה או מעלה) היא לא תהיה חריגה של חודש, סביר
                            שהיא תהיה של 10 ימים למשל.
                        </p>
                    }
                />
            )}
        </>
    );
};

export default AnchoringSecuritySection;
