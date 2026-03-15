import SubjectMainScreen from '../components/SubjectMainScreen';

const ContentCognitiveBiasSummary: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 3 - תוכן"
            content={
                <p>
                    שהמידע מרגיש נכון או&nbsp;
                    <span className="font-notoSansHebrew-bold">מסתדר עם תפיסת העולם </span>
                    שלנו — אנחנו נוטים
                    <span className="font-notoSansHebrew-bold"> להסכים </span>איתו.
                    <br />
                    וכשהוא נוגע&nbsp;
                    <span className="font-notoSansHebrew-bold">לנושא פחות נעים </span>
                    או מורכב, אנחנו פתאום
                    <span className="font-notoSansHebrew-bold"> מהססים </span>או טועים.
                </p>
            }
        />
    );
};

export default ContentCognitiveBiasSummary;
