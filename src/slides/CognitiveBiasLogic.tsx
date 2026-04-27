import SubjectMainScreen from '../components/SubjectMainScreen';

const CognitiveBiasLogic: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 5 - לוגיקה פורמלית"
            content={
                <p>
חוק פשוט בלוגיקה פורמלית הוא 
שאם א׳ ← אז ב׳
כלומר: בכל פעם שא׳ קורה, ב׳ חייב לקרות.
אבל מזה לא אפשר להסיק את ההפך:
אם ב׳ ← אז א׳
כי יכולות להיות עוד סיבות לכך שב׳ קרה.

הטיית הלוגיקה הפורמלית היא הנטייה שלנו לטעות ביישום של החוק הלוגי הזה בחיי היום-יום.
                </p>
            }
        />
    );
};

export default CognitiveBiasLogic;
