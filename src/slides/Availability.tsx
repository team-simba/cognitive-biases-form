import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';
import SecurityContext from '../components/SecurityContext';

import type { StepComponent } from '../types/step';

const Availability: React.FC<StepComponent> = ({ step }) => {
    return (
        <>
            {step === 1 && <AnimatedDiamondText text="ובהקשר בטחוני" />}
            {step === 2 && (
                <SecurityContext
                    titleType="TitleUnderLine"
                    title="זמינות בהקשר בטחוני"
                    content={
                        <p>
                            בגופי הבטחון הישראלים, נוטים לחשוב שהשלטון באיראן עומד ליפול בכל רגע.
                            <br />
                            <span className="font-notoSansHebrew-bold">למה קיימת ההנחה הזאת? </span>
                            <br />
                            השידור בגופי התקשורת הציבוריים מנוהל ברובו על ידי מתנגדי משטר.
                            <br />
                            בגלל שאנו צורכים הרבה מידע מהתקשורת, אנחנו חושבים שיש הרבה מתנגדי משטר
                            שעשויים לפעול בכל רגע.
                        </p>
                    }
                />
            )}
        </>
    );
};

export default Availability;
