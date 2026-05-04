import SummaryDecorativeBackground from '../components/SummaryDecorativeBackground';

const SummaryWhatToDo: React.FC = () => {
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
                    מה אפשר לעשות בפועל
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
                    הצעד הראשון הוא להכיר בכך שהטיות קיימות גם אצלנו. ברגע שאנחנו מקבלים את זה,
                    קל יותר לעצור ולבדוק אם החלטה מושפעת מ&quot;אוטומט מחשבתי&quot;.
                    <br />
                    דרך נוספת היא לאמן את עצמנו לשאול מה עוד יכול להסביר את המידע - מעבר לתגובה
                    הראשונית שלנו.
                    <br />
                    כך נוכל לקבל החלטות באופן יותר שקול ואובייקטיבי.
                </p>
            </div>
        </div>
    );
};

export default SummaryWhatToDo;
