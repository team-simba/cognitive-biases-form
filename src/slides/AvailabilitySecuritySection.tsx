import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';
import SecurityContext from '../components/SecurityContext';

import type { StepComponent } from '../types/step';

interface AvailabilitySecuritySectionProps extends StepComponent {
    onAdvance?: () => void;
}

const AvailabilitySecuritySection: React.FC<AvailabilitySecuritySectionProps> = ({ step, onAdvance }) => {
    return (
        <>
            {step === 1 && <AnimatedDiamondText text="ובהקשר בטחוני" onComplete={onAdvance} />}
            {step === 2 && (
                <SecurityContext
                    titleType="TitleUnderLine"
                    title="זמינות בהקשר בטחוני"
                    content={
                        <p>לאחר פיגועי 11 בספטמבר 2001, רבים בארצות הברית חששו לטוס. התקשורת הייתה מלאה בדיווחים, תמונות וניתוחים של האירועים, דבר שהעצים מאוד את תחושת הסיכון הקשורה לטיסות.
                        עקב הפחד אנשים רבים בחרו לנסוע ברכב במקום לטוס. למרות שמבחינה סטטיסטית נסיעה ברכב מסוכנת הרבה יותר מטיסה.
                        
                        <p className="font-notoSansHebrew-bold">דוגמה זו ממחישה את הטיית הזמינות: </p>כאשר אירוע מסוים זוכה לחשיפה תקשורתית רחבה, הוא נתפס כשכיח יותר, גם אם בפועל השכיחות האמתית נמוכה יותר. במקביל, סיכונים שכיחים יותר אך פחות מסוקרים - נוטים להיתפס כפחות משמעותיים.                        
                        </p>
                    }
                />
            )}
        </>
    );
};

export default AvailabilitySecuritySection;
