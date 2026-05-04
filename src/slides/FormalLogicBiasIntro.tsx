// Figma 209:21244 — "הטייה קוגניטיבית מספר 5 - לוגיקה פורמלית"
// Background ambient shapes are simplified relative to the Figma comp; main
// content (title + body card) matches the layout language used by the
// summary slides.
const FormalLogicBiasIntro: React.FC = () => {
    return (
        <div
            className="bg-[#f0f9ff] relative w-full h-screen overflow-hidden"
            dir="rtl"
        >
            {/* === Light-blue ambient shapes (sit behind everything) === */}
            <div
                className="absolute flex items-center justify-center"
                style={{
                    left: '76.13vw',
                    top: '-12.24vw',
                    width: '34.92vw',
                    height: '34.92vw',
                }}
            >
                <div
                    className="bg-[#e7f6ff]"
                    style={{
                        width: '24.69vw',
                        height: '24.69vw',
                        transform: 'rotate(-45deg)',
                    }}
                />
            </div>
            <div
                className="absolute flex items-center justify-center"
                style={{
                    left: '85.54vw',
                    top: '43.39vw',
                    width: '8.05vw',
                    height: '8.05vw',
                }}
            >
                <div className="bg-[#e7f6ff] w-full h-full -rotate-90" />
            </div>

            {/* Light-blue triangle accents */}
            <svg
                className="absolute"
                style={{
                    left: '1.16vw',
                    top: '38.59vw',
                    width: '17.66vw',
                    height: '17.66vw',
                    transform: 'rotate(39.03deg)',
                }}
                viewBox="0 0 100 100"
            >
                <polygon points="50,12 92,82 8,82" fill="#e7f6ff" />
            </svg>
            <svg
                className="absolute"
                style={{
                    left: '67.86vw',
                    top: '16.51vw',
                    width: '11.46vw',
                    height: '11.46vw',
                    transform: 'rotate(-14.98deg)',
                }}
                viewBox="0 0 100 100"
            >
                <polygon points="50,12 92,82 8,82" fill="#e7f6ff" />
            </svg>
            <svg
                className="absolute"
                style={{
                    left: '44vw',
                    top: '3.96vw',
                    width: '13.04vw',
                    height: '13.04vw',
                    transform: 'rotate(35.07deg)',
                }}
                viewBox="0 0 100 100"
            >
                <polygon points="50,12 92,82 8,82" fill="#e7f6ff" />
            </svg>

            {/* Light-blue ellipses */}
            <div
                className="absolute rounded-full bg-[#e7f6ff]"
                style={{
                    left: '11.68vw',
                    top: '6.9vw',
                    width: '7.15vw',
                    height: '7.15vw',
                }}
            />
            <div
                className="absolute rounded-full bg-[#e7f6ff]"
                style={{
                    left: '41.71vw',
                    top: '43.39vw',
                    width: '17.64vw',
                    height: '17.64vw',
                }}
            />

            {/* Title — vertical accent bar to the LEFT of the heading (RTL flex: [h1, bar]) */}
            <div
                className="absolute z-10 flex items-center gap-[0.95vw]"
                style={{ right: '2.65vw', top: '8.7vw' }}
            >
                <h1 className="font-ploni-bold text-[5vw] text-primary leading-[6.77vw] whitespace-nowrap">
                    הטייה קוגניטיבית מספר 5 - לוגיקה פורמלית
                </h1>
                <div
                    className="bg-secondary"
                    style={{ width: '0.95vw', height: '4.79vw' }}
                />
            </div>

            {/* Body card — same dimensions language as the summary slides */}
            <div
                className="absolute z-10 left-1/2 -translate-x-1/2 bg-white rounded-[1.56vw] flex flex-col items-center"
                style={{
                    top: '17.03vw',
                    width: '94.48vw',
                    padding: '2.92vw',
                    boxShadow: '0 0.52vw 0.52vw rgba(0,0,0,0.1)',
                }}
            >
                <div
                    className="font-notoSansHebrew-regular text-black-text text-[1.875vw] leading-[1.4] text-right w-full"
                    dir="rtl"
                >
                    <p>חוק פשוט בלוגיקה פורמלית הוא</p>
                    <p>שאם א׳ ← אז ב׳</p>
                    <p>כלומר: בכל פעם שא׳ קורה, ב׳ חייב לקרות.</p>
                    <p>אבל מזה לא אפשר להסיק את ההפך:</p>
                    <p>אם ב׳ ← אז א׳</p>
                    <p>כי יכולות להיות עוד סיבות לכך שב׳ קרה.</p>
                    <br />
                    <p>
                        הטיית הלוגיקה הפורמלית היא הנטייה שלנו לטעות ביישום של החוק הלוגי
                        הזה בחיי היום-יום.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FormalLogicBiasIntro;
