import SecurityContext from '../components/SecurityContext';

const ConfirmationBiasSecurity: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleSideLine"
            title="בהקשר בטחוני"
            content={
                <div className="space-y-[1vw]">
                    <p>
                        לפני מלחמת יום הכיפורים (1973) המודיעין הישראלי היה שבוי באמונה שמדינות
                        ערב לא יפתחו במלחמה בלי עליונות אווירית.
                    </p>
                    <p>
                        כאן באה לידי ביטוי
                        <span className="font-notoSansHebrew-bold"> הטיית האישוש</span>: המנתחים
                        נטו לשים לב למידע שחיזק את ההנחה, ולפרש מידע חדש כך שיתאים לה.
                    </p>
                    <p>
                        לכן גם כשעלו סימנים מעשיים להכנות למלחמה הכוללים תנועות כוחות מאסיביות,
                        ריכוז צבא על הגבולות ודיווחים על הכנות מתקפה, במקום שיובילו לבחינה מחדש
                        של ההנחה שלהם, המודיעין "עיקם" את המציאות ופירש אותם כתרגילים בלבד, כדי
                        שהמציאות תתאים לתבנית המחשבתית לפיה מלחמה היא אינה סבירה.
                    </p>
                </div>
            }
        />
    );
};

export default ConfirmationBiasSecurity;
