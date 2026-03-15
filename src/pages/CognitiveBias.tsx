import BottomLeftMan from '../assets/cognitiveBias/bottom-left-man.svg';
import Ellipse from '../assets/cognitiveBias/ellipse.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import CognitiveBiasComposition from '../components/CognitiveBiasComposition';
import TitleSideLine from '../components/TitleSideLine';

const CognitiveBias: React.FC = () => {
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="הטיה קוגנטיבית" />
                <Card width="w-[94.479vw]" className="z-10">
                    <p className="font-notoSansHebrew-regular leading-[2.3vw]">
                        <span className="font-notoSansHebrew-bold">"קוגניציה" </span>
                        היא שם ליכולות המוח שלנו לרכוש ידע, לעבד מידע ולהשתמש בו.
                        <br />
                        המערכת הקוגניטיבית שלנו התפתחה כדי לעזור לנו לשרוד – ולכן היא יעילה מאוד,
                        אבל לא תמיד מדויקת.
                        <br />
                        <br />
                        <span className="font-notoSansHebrew-semiBold">
                            הטיה קוגניטיבית היא קיצור דרך מחשבתי, שבעקבתו רובנו חוזרים על טעויות
                            בהסקה, בהגיון ובקבלת החלטות.
                        </span>
                        <br />
                        "אנחנו בטוחים הרבה יותר ממה שיש לנו הצדקה להיות בטוחים." - דניאל כנהמן, חתן
                        פרס נובל
                        <br />
                        <br />
                        בלומדה נלמד על ההטיות המרכזיות – כדי שבפעם הבאה שתיתקלו בהן, תוכלו
                        <span className="font-notoSansHebrew-semiBold">
                            &nbsp;לזהות אותן ואולי גם להימנע מהן.
                        </span>
                    </p>
                </Card>
            </div>
            <img src={Ellipse} className="absolute left-0 top-[0.62vw] h-[43.36vh]" />
            <CognitiveBiasComposition />
            <img src={BottomLeftMan} className="absolute bottom-0 left-[84vw]" />
        </Background>
    );
};

export default CognitiveBias;
