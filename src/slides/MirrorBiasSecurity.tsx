import SecurityContext from '../components/SecurityContext';

const MirrorBiasSecurity: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleSideLine"
            title="בהקשר בטחוני"
            content={
                <div className="space-y-[1vw]">
                    <p>אנו משליכים את ההיגיון שלנו על האויב.</p>
                    <p>
                        ב7.10 - המודיעין הישראלי נשען על ההנחה שחמאס לא יתקוף את ישראל בצורה
                        משמעותית, הרי הוא ארגון קטן שכבר חווה את נחת הזרוע של מדינת ישראל במבצעים
                        קודמים,
                        <span className="font-notoSansHebrew-bold"> הוא מורתע וחסר יכולת.</span> אם
                        היינו במקומו לא היינו מעיזים לתקוף. בפועל, חמאס חושב אחרת - האמונה הדתית
                        בחשיבות שחרור פלסטין מביאה לתפיסה אחרת של המציאות ולמוטיבציה להמשיך
                        להילחם בשם האלוהים, שהוא יעזור לנצח ורק צריך להמתין להזדמנות הנכונה
                        ולרשום את נקודות התורפה של האויב.
                    </p>
                </div>
            }
        />
    );
};

export default MirrorBiasSecurity;
