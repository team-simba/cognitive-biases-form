import { motion } from 'framer-motion';

/**
 * Slide 3 — final note.
 * Layout from Figma 476:16626 (1920x1080) converted to vw.
 *
 * Animation rules:
 *   • Big dashed line-circle → spins
 *   • Solid colored circles (red / yellow / green) → small oscillating motion
 *   • Light-blue ambient blobs and triangles → static
 */
const SummaryFinalNote: React.FC = () => {
    return (
        <div className="bg-[#f0f9ff] relative w-full h-screen overflow-hidden" dir="rtl">
            {/* === Light-blue ambient shapes (very pale, sit behind everything) === */}
            <div
                className="absolute flex items-center justify-center"
                style={{ left: '76.13vw', top: '-12.24vw', width: '34.92vw', height: '34.92vw' }}
            >
                <div
                    className="bg-[#e7f6ff]"
                    style={{ width: '24.69vw', height: '24.69vw', transform: 'rotate(-45deg)' }}
                />
            </div>
            <div
                className="absolute flex items-center justify-center"
                style={{ left: '85.54vw', top: '43.39vw', width: '8.05vw', height: '8.05vw' }}
            >
                <div className="bg-[#e7f6ff] w-full h-full -rotate-90" />
            </div>

            {/* Light blue triangles */}
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

            {/* Light blue ellipses */}
            <div
                className="absolute rounded-full bg-[#e7f6ff]"
                style={{ left: '11.68vw', top: '6.9vw', width: '7.15vw', height: '7.15vw' }}
            />
            <div
                className="absolute rounded-full bg-[#e7f6ff]"
                style={{ left: '41.71vw', top: '43.39vw', width: '17.64vw', height: '17.64vw' }}
            />

            {/* === BIG DASHED CIRCLE — spins === */}
            <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-smooth pointer-events-none"
                style={{ width: '68.08vw', height: '68.08vw', animationDuration: '30s' }}
                viewBox="0 0 1307 1307"
                fill="none"
            >
                <circle
                    cx="653.5"
                    cy="653.5"
                    r="650"
                    stroke="black"
                    strokeWidth="3.8"
                    strokeDasharray="7.61 12.68"
                />
            </svg>

            {/* === SOLID COLORED CIRCLES — move === */}
            {/* Red (top-left of the dashed circle) */}
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    left: '12.09vw',
                    top: '7.94vw',
                    width: '9.25vw',
                    height: '9.25vw',
                    backgroundColor: '#a72608',
                }}
                animate={{ x: [0, 14, -10, 0], y: [0, -12, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut' }}
            />
            {/* Yellow (left, lower) */}
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    left: '8.48vw',
                    top: '23.24vw',
                    width: '4.15vw',
                    height: '4.15vw',
                    backgroundColor: '#e5be34',
                }}
                animate={{ x: [0, -10, 8, 0], y: [0, 10, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.4 }}
            />
            {/* Green (bottom-right) */}
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    left: '85.78vw',
                    top: '47.19vw',
                    width: '4.36vw',
                    height: '4.36vw',
                    backgroundColor: '#5ca25e',
                }}
                animate={{ x: [0, 10, -8, 0], y: [0, -10, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.6, ease: 'easeInOut', delay: 0.8 }}
            />

            {/* === Foreground content === */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-[1.8vw] px-[10vw]">
                <div className="flex flex-col items-center gap-[0.6vw]">
                    <h2
                        className="font-ploni-bold text-primary text-[5vw] leading-none text-center"
                        dir="rtl"
                    >
                        הערה אחרונה לסיום
                    </h2>
                    <div className="bg-secondary" style={{ width: '13.6vw', height: '0.68vw' }} />
                </div>

                <div
                    className="font-ploni-demibold text-primary text-center text-[1.875vw] leading-[1.4] whitespace-pre-wrap"
                    style={{ width: '54.7vw' }}
                    dir="rtl"
                >
                    <p>
                        בעת קריאת תחקירים על אירועים כמו 7 באוקטובר, יכולה להופיע הטיית
                        &quot;חוכמה שלאחר מעשה&quot;: התחושה ש&quot;זה היה ברור מראש&quot; או
                        &quot;איך לא ראו את זה&quot;. אך בזמן אמת, גם אתם עשויים לטעות באותם
                        התנאים בדיוק…
                    </p>
                    <br />
                    <p>
                        כדי להבין תחקיר לעומק חשוב להיזהר מהשיפוט בדיעבד ולנסות לשחזר את תנאי
                        אי־הוודאות שהיו בזמן אמת.
                    </p>
                </div>

                <button
                    type="button"
                    className="bg-green-mid text-white font-ploni-medium text-[1.6vw] shape-trapeze cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ padding: '1vw 2.5vw', marginTop: '0.5vw' }}
                >
                    חזרה לאתר תחקירים
                </button>
            </div>
        </div>
    );
};

export default SummaryFinalNote;
