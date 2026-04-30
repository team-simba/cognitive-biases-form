import Background from '../components/Background';
import Card from '../components/Card';
import TitleSideLine from '../components/TitleSideLine';

const MysteryResultsIntro: React.FC = () => {
    return (
        <Background>
            <div className="flex flex-col items-center w-full min-h-screen padding-page g-1">
                <TitleSideLine text="תוצאות" className="self-start" />

                <Card width="w-[65vw]" padding="p-[2.6vw]" className="mt-[2vw]">
                    <p
                        className="font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] text-right"
                        dir="rtl"
                    >
                        לכולכם הוצגו אותם שני פרטי מידע על אותו מועמד - אחד חיובי ואחד שלילי.
                        <br />
                        ההבדל היחיד היה התיוג של המקור:
                        <br />
                        אצל חלק מכם המידע החיובי הוצג כמידע שהגיע באופן{' '}
                        <span className="font-notoSansHebrew-bold">סמוי</span> (דיווח חשאי לאיש
                        קשר), והשלילי כמידע שהגיע באופן{' '}
                        <span className="font-notoSansHebrew-bold">גלוי</span> (פרסום בכלי תקשורת)
                        ואצל החלק השני התיוג של המידע היה הפוך.
                    </p>
                    <p
                        className="font-notoSansHebrew-bold text-black-text text-[1.25vw] leading-[2vw] text-right mt-[1vw]"
                        dir="rtl"
                    >
                        כלומר, התוכן לא השתנה - רק הדרך שבה הוצג מקור המידע.
                    </p>
                </Card>

                <p
                    className="font-notoSansHebrew-bold text-black-text text-[1.88vw] text-center mt-[6vw]"
                    dir="rtl"
                >
                    המשיכו לגרף התוצאות:
                </p>
            </div>
        </Background>
    );
};

export default MysteryResultsIntro;
