import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';
import SecurityContext from '../components/SecurityContext';

import type { StepComponent } from '../types/step';

interface ClassificationSecuritySectionProps extends StepComponent {
    onAdvance?: () => void;
}

const ClassificationSecuritySection: React.FC<ClassificationSecuritySectionProps> = ({ step, onAdvance }) => {
    return (
        <>
            {step === 1 && <AnimatedDiamondText text="ובהקשר ה-7.10" onComplete={onAdvance} />}
            {step === 2 && (
                <SecurityContext
                    titleType="TitleSideLine"
                    title="קלסיפיקציה בהקשרי ה7.10"
                    content={
                        <p>
                            אנחנו נוטים&nbsp;
                            <span className="font-notoSansHebrew-bold">
                                להשליך את צורת החשיבה שלנו, הרציונל והתפיסה&nbsp;
                            </span>
                            שלנו על אנשים אחרים, ובמלחמה -&nbsp;
                            <span className="font-notoSansHebrew-bold">על האויב.</span>
                            <br />
                            ב7.10 - הנחנו שחמאס לא יתקוף את ישראל, הרי הוא ארגון קטן שכבר חווה את הכוח של
                            צה״ל ואם היינו במקומו
                            <br />
                            לא היינו מעיזים לתקוף.
                            <br />
                            <br />
                            <span className="font-notoSansHebrew-bold">
                                וזה גם מוביל אותנו להטייה הבאה..
                            </span>
                        </p>
                    }
                />
            )}
        </>
    );
};

export default ClassificationSecuritySection;
