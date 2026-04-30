import SecurityContext from '../components/SecurityContext';

const ConfirmationBiasIntro: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleSideLine"
            title="הטייה קוגניטיבית מספר 8 - אישוש"
            content={
                <div className="space-y-[1.5vw]">
                    <p>
                        לכולנו יש אמונות מוקדמות וזה טבעי. הבעיה מתחילה כשאנחנו מחפשים ומפרשים
                        מידע כך שיחזק את מה שכבר החלטנו.
                    </p>
                    <p>
                        <span className="font-notoSansHebrew-bold">לדוגמה: </span>
                        שירי משוכנעת שהמנהלת שלה לא מעריכה אותה.
                        <br />
                        מאותו רגע, היא שמה לב בעיקר לדברים שתומכים בזה, ומתעלמת או מסבירה מחדש
                        דברים שסותרים.
                    </p>
                    <p>נראה איך זה עובד בפועל:</p>
                </div>
            }
        />
    );
};

export default ConfirmationBiasIntro;
