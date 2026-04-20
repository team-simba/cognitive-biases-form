import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';
import SecurityContext from '../components/SecurityContext';

import type { StepComponent } from '../types/step';

interface AnchoringSecuritySectionProps extends StepComponent {
    onAdvance?: () => void;
}

const AnchoringSecuritySection: React.FC<AnchoringSecuritySectionProps> = ({ step, onAdvance }) => {
    return (
        <>
            {step === 1 && <AnimatedDiamondText text="ובהקשר בטחוני" onComplete={onAdvance} />}
            {step === 2 && (
                <SecurityContext
                    titleType="TitleSideLine"
                    title="עיגון בהקשר בטחוני"
                    content={
                        
                        <p>
                            ביולי 25 נשיא ארה&quot;ב דונלד טראמפ דרש הסכם הפסקת אש בעזה, ושהצדדים יסכימו לתנאי ההסכם.

                            <br />
                            בתוך 60 יום.
                            <br />
                            <span className="font-notoSansHebrew-bold">למה זוהי דוגמה לעיגון?</span>
                            <br />
                            גם אם תהיה חריגה מ־60 יוהצבת מסגרת זמן של 60 יום קובעת עוגן מספרי שהדיון, הציפיות וההערכות של הצדדים נעים סביבו. גם אם תהיה סטייה – היא לרוב תהיה קרובה לעוגן (למשל 50 או 70 יום), ולא רחוקה ממנו באופן קיצוני.
                        </p>
                    }
                />
            )}
        </>
    );
};

export default AnchoringSecuritySection;
