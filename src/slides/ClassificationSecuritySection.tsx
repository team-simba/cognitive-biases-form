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
חמאס מתנהל לעיתים כמו ממשל מאורגן: מפעיל מנגנונים אזרחיים, מנהל שירותים בסיסיים, גובה מיסים ושומר על שגרה מסוימת. בגלל הדמיון הזה קל לשייך אותו לקטגוריית “ממשל”, ומכאן להסיק שהוא יפעל כמו ממשל “רציונלי” - יעדיף יציבות ויימנע מצעדים קיצוניים שעלולים לסכן את שליטתו.

ב־7.10 חלק מההערכות הניחו שחמאס לא יתקוף, בדיוק מתוך השיוך הזה. זו דוגמה לאופן שבו קטלוג מוקדם יכול להוביל לפרשנות שגויה של כוונות, כשבפועל ההיגיון שמניע את הצד השני עשוי להיות אחר.

                        </p>
                    }
                />
            )}
        </>
    );
};

export default ClassificationSecuritySection;
