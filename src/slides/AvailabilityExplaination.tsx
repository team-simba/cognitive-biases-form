import SubjectMainScreen from '../components/SubjectMainScreen';

const AvailabilityExplaination: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 3 - זמינות"
            content={
                <p>
                   <p className="font-notoSansHebrew-bold">זוהי בדיוק הטיית הזמינות:</p> הנטייה שלנו להפריז בהערכת השכיחות או העוצמה של משהו רק משום שקל לנו להיזכר בו.
                   בניסוי עם רשימת השמות, שמות של מפורסמים נשלפים מהזיכרון מהר יותר. לכן המין שאליו הם משתייכים מרגיש כאילו הופיע ברשימה יותר פעמים, גם כשבפועל הספירה האמיתית מראה אחרת.
                </p>
            }
        />
    );
};

export default AvailabilityExplaination;
