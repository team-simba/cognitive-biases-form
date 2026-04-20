import SecurityContext from '../components/SecurityContext';

const LogicInContextOctober: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleUnderLine"
            title="לוגיקה פורמלית בהקשר ה־7.10"
            content={
                <p>
                    בהקשר של 7.10 אפשר לראות
                    <span className="font-notoSansHebrew-bold"> איך הטעות הלוגית פועלת</span> גם
                    במציאות.
                    <br />
                    אפשר היה להניח: אם הארגון נמצא בשגרה – לא תיראה פעילות חריגה.
                    <span className="font-notoSansHebrew-bold"> זו הנחה סבירה.</span>
                    <br />
                    אבל בפועל ננקטה ההנחה ההפוכה: אם לא נראתה פעילות חריגה – סימן שהארגון בשגרה.
                    <span className="font-notoSansHebrew-bold"> זו טעות.</span>
                    <br />
                    מבחינת לוגיקה פורמלית, כמו שלמדנו, הכיוון ההפוך לא בהכרח נכון.
                    <br />
                    גם מבחינה מעשית – העובדה שלא רואים פעילות חריגה לא מוכיחה שהיא לא מתקיימת.
                </p>
            }
        />
    );
};

export default LogicInContextOctober;
