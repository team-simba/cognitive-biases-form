import SubjectMainScreen from '../components/SubjectMainScreen';

const CognitiveBiasClassification: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 5 - קלסיפיקציה"
            content={
                <p>
                    אנחנו מקטלגים בראשנו דברים לפי קטגוריות.
                    <br />
                    אם דבר אחד מזכיר לנו דבר אחר בקטגוריה מסוימת, נשייך גם אותו לאותה הקטגוריה.
                    <br />
                    במקרה הזה - התיאור של מנחם מתאים&nbsp;
                    <span className="font-notoSansHebrew-bold">לשרברב סטריאוטיפי </span>
                    ולכן, אם מנחם מתאים לתיאור של שרברב, אז יש יותר סיכוי שהוא שרברב.
                    <br />
                    אנו <span className="font-notoSansHebrew-bold">מתעלמים מהידע שלנו</span>
                    &nbsp;בהסתברות בסיסית, בעקבות תיאור הדמות, למרות שהתיאור לא משנה את הסטטיסטיקה
                    שניתנת בתחילת השאלה.
                </p>
            }
        />
    );
};

export default CognitiveBiasClassification;
