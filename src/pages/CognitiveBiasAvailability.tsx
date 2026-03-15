import SubjectMainScreen from '../components/SubjectMainScreen';

const CognitiveBiasAvailability: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 2 - זמינות"
            content={
                <p>
                    אנחנו נוטים לחשוב שאם יותר קל להעלות בדעתנו משהו, הוא כנראה יותר נפוץ. אבל זה לא
                    ככה במציאות.
                    <br />
                    &quot;טרור&quot; או &quot;טביעה&quot; נשמעים הרבה יותר בחדשות, סטטיסטית
                    <span className="font-notoSansHebrew-semiBold"> עישון פסיבי </span>
                    גורם להרבה יותר מקרי מוות.
                    <br />
                    זו בדיוק <span className="font-notoSansHebrew-semiBold"> הטיית זמינות</span> -
                    הגזמה בהערכת תדירות של אירועים שקל להיזכר בהם (בעיקר דרך התקשורת).
                    <br />
                    <br />
                    הידעת?
                    <br />
                    <span className="font-notoSansHebrew-semiBold">עישון פסיבי</span>
                    &nbsp;הוא הגורם למוות של כ־
                    <span className="font-notoSansHebrew-semiBold">1.3 מיליון</span> אנשים בשנה – פי
                    <span className="font-notoSansHebrew-semiBold"> 5 יותר</span> מטביעה, ופי
                    כמעט&nbsp;
                    <span className="font-notoSansHebrew-semiBold">200 יותר</span> מטרור.
                    <br />
                    <br />
                    <span className="font-notoSansHebrew-semiBold">
                        טרור נתפס כמאוד נפוץ ומסוכן
                    </span>
                    , כי כל מקרה מקבל&nbsp;
                    <span className="font-notoSansHebrew-semiBold">כיסוי תקשורתי אינטנסיבי.</span>
                </p>
            }
        />
    );
};

export default CognitiveBiasAvailability;
