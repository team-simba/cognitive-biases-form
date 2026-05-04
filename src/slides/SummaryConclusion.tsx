import SummaryDecorativeBackground from '../components/SummaryDecorativeBackground';

const SummaryConclusion: React.FC = () => {
    return (
        <div className="bg-[#f0f9ff] relative w-full h-screen overflow-hidden" dir="rtl">
            <SummaryDecorativeBackground />

            {/* Title — right-aligned with vertical accent bar */}
            <div
                className="absolute z-10 flex items-center gap-[0.95vw]"
                style={{ right: '2.65vw', top: '8.7vw' }}
            >
                <div className="bg-secondary" style={{ width: '0.95vw', height: '4.79vw' }} />
                <h1 className="font-ploni-bold text-[5vw] text-primary leading-[6.77vw] whitespace-nowrap">
                    לסיכום
                </h1>
            </div>

            {/* Summary card */}
            <div
                className="absolute z-10 left-1/2 -translate-x-1/2 bg-white rounded-[1.56vw] flex flex-col items-center"
                style={{
                    top: '17.03vw',
                    width: '94.48vw',
                    padding: '2.92vw',
                    boxShadow: '0 0.52vw 0.52vw rgba(0,0,0,0.1)',
                }}
            >
                <p className="font-notoSansHebrew-regular text-black-text text-[1.875vw] leading-[1.4] text-right w-full">
                    ראינו כמה דרכים שבהן המוח שלנו עלול להטעות אותנו. ההטיות הקוגניטיביות שהצגנו
                    הן דפוסים שמשפיעים על{' '}
                    <span className="font-notoSansHebrew-bold">כולנו</span> - בלי קשר לגיל,
                    השכלה או אינטליגנציה.
                    <br />
                    <br />
                    לכן חשוב להכיר ולזכור גם את הטיית{' '}
                    <span className="font-notoSansHebrew-bold">
                        &quot;הנקודה העיוורת&quot;
                    </span>
                    : הנטייה לזהות הטיות אצל אחרים, אבל להניח שאנחנו אובייקטיביים, חסינים
                    להטייה.
                    <br />
                    גם מודעות להטיות לא מעלימה אותן, אך היא יכולה להגביר את הרגישות שלנו
                    ולהשפיע על האופן שבו אנחנו מפרשים מידע ומקבלים החלטות.
                    <br />
                    <br />
                    <span className="font-notoSansHebrew-bold">
                        בתחומים כמו מודיעין, ההשפעה הזו עשויה להיות משמעותית במיוחד.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SummaryConclusion;
