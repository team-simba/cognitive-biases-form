import SecurityContext from '../components/SecurityContext';

const Conception: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleSideLine"
            title="ובהקשר ה7.10 - בעיית הקונספציה"
            content={
                <p>
                    הקונספציה = האמונה של ישראל היתה&nbsp;
                    <span className="font-notoSansHebrew-bold">שחמאס מורתע</span> ולכן לא יעז לתקוף
                    את ישראל.
                    <br />
                    לכן, כשחמאס ביצע תרגיל פומבי, פירשנו את התרגיל הגלוי כסחיטת הטבות ולא כהכנה
                    למתקפה, מתוך אותה הנחה
                    <br />
                    שאין לו אינטרס לתקוף.
                </p>
            }
        />
    );
};

export default Conception;
