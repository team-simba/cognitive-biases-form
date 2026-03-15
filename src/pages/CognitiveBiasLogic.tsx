import SubjectMainScreen from '../components/SubjectMainScreen';

const CognitiveBiasLogic: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 4 - לוגיקה פורמלית"
            content={
                <p>
                    לוגיקה פורמלית היא &quot;תורת ההיגיון&quot;.
                    <br />
                    בעזרתה אפשר
                    <span className="font-notoSansHebrew-bold"> להסיק מסקנה משתי טענות </span>
                    (או יותר), לא משנה כמה מורכב המשפט.
                    <br />
                    כלל אחד בתורה הזאת:
                    <br />
                    <span className="font-notoSansHebrew-bold">יכול להיות ש </span>
                    - א׳ גורר ב׳ (אם אני פיל אז יש לי חדק)
                    <br />
                    <span className="font-notoSansHebrew-bold">אבל לא בהכרח </span>
                    - אם ב׳ אז א׳ (אם יש לי חדק אני לא בהכרח פיל).
                    <br />
                    <br />
                    זה לא תמיד אינטואיטיבי לנו ואנו נוטים לבלבל ולהסיק דברים לא נכונים.
                </p>
            }
        />
    );
};

export default CognitiveBiasLogic;
