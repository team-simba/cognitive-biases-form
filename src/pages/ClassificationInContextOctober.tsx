import SecurityContext from '../components/SecurityContext';

const ClassificationInContextOctober: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleSideLine"
            title="קלסיפיקציה בהקשרי ה7.10"
            content={
                <p>
                    אנחנו נוטים&nbsp;
                    <span className="font-notoSansHebrew-bold">
                        להשליך את צורת החשיבה שלנו, הרציונל והתפיסה&nbsp;
                    </span>
                    שלנו על אנשים אחרים, ובמלחמה -&nbsp;
                    <span className="font-notoSansHebrew-bold">על האויב.</span>
                    <br />
                    ב7.10 - הנחנו שחמאס לא יתקוף את ישראל, הרי הוא ארגון קטן שכבר חווה את הכוח של
                    צה״ל ואם היינו במקומו
                    <br />
                    לא היינו מעיזים לתקוף.
                    <br />
                    <br />
                    <span className="font-notoSansHebrew-bold">
                        וזה גם מוביל אותנו להטייה הבאה..
                    </span>
                </p>
            }
        />
    );
};

export default ClassificationInContextOctober;
