import React, { useState, useEffect, useRef } from 'react';

const CognitiveBiasIntro: React.FC = () => {
    const [showCard, setShowCard] = useState(false);
    const diamondRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [clipPath, setClipPath] = useState<string>('polygon(0 0, 0 0, 0 0, 0 0)');

    useEffect(() => {
        const timer = setTimeout(() => setShowCard(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Compute clip-path for the white text layer based on diamond position relative to title
    useEffect(() => {
        const updateClip = () => {
            const diamond = diamondRef.current;
            const title = titleRef.current;
            if (!diamond || !title) return;

            const dRect = diamond.getBoundingClientRect();
            const tRect = title.getBoundingClientRect();

            // Diamond center relative to title
            const cx = dRect.left + dRect.width / 2 - tRect.left;
            const cy = dRect.top + dRect.height / 2 - tRect.top;
            // Half-diagonal of the rotated square (visible diamond size)
            const half = dRect.width / 2;

            const toPercent = (x: number, y: number) =>
                `${((x / tRect.width) * 100).toFixed(1)}% ${((y / tRect.height) * 100).toFixed(1)}%`;

            setClipPath(
                `polygon(${toPercent(cx, cy - half)}, ${toPercent(cx + half, cy)}, ${toPercent(cx, cy + half)}, ${toPercent(cx - half, cy)})`
            );
        };

        updateClip();
        window.addEventListener('resize', updateClip);
        return () => window.removeEventListener('resize', updateClip);
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: '#f0f9ff' }}>
            {/* Decorative cloud shapes */}
            <div
                className="absolute rounded-[100px] opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]"
                style={{
                    left: '-14%',
                    top: '10%',
                    width: '64vw',
                    height: '22vh',
                    backgroundColor: 'rgba(255,255,255,0.45)',
                }}
            />
            <div
                className="absolute rounded-[100px] opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]"
                style={{
                    right: '-10%',
                    top: '49%',
                    width: '73vw',
                    height: '28vh',
                    backgroundColor: 'rgba(255,255,255,0.35)',
                }}
            />
            <div
                className="absolute rounded-[100px] opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]"
                style={{
                    right: '-15%',
                    bottom: '5%',
                    width: '64vw',
                    height: '22vh',
                    backgroundColor: 'rgba(255,255,255,0.45)',
                }}
            />
            <div
                className="absolute rounded-[100px] opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]"
                style={{
                    left: '-21%',
                    bottom: '10%',
                    width: '64vw',
                    height: '22vh',
                    backgroundColor: 'rgba(255,255,255,0.45)',
                }}
            />

            {/* Blue diamond */}
            <div
                ref={diamondRef}
                className="absolute bg-secondary opacity-0 animate-[diamondIn_0.8s_ease-out_0.5s_forwards]"
                style={{
                    width: '13vw',
                    height: '13vw',
                    right: '22%',
                    top: '22%',
                    transform: 'rotate(45deg)',
                }}
            />

            {/* Title - dark blue base layer */}
            <h1
                ref={titleRef}
                className="absolute font-ploni-bold text-primary leading-[0.75] opacity-0 animate-[fadeSlideRight_1s_ease-out_0.8s_forwards]"
                style={{
                    fontSize: '10vw',
                    right: '5%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    textAlign: 'right',
                }}
                dir="rtl"
            >
                ובהקשר בטחוני
            </h1>

            {/* Title - white layer clipped to diamond shape */}
            <h1
                className="absolute font-ploni-bold text-white leading-[0.75] opacity-0 animate-[fadeSlideRight_1s_ease-out_0.8s_forwards]"
                style={{
                    fontSize: '10vw',
                    right: '5%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    textAlign: 'right',
                    clipPath,
                    zIndex: 2,
                }}
                dir="rtl"
            >
                ובהקשר בטחוני
            </h1>

            {/* White card - slides in from left */}
            <div
                className="absolute bg-white rounded-[30px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    width: '90vw',
                    height: '62vh',
                    top: '25%',
                    left: showCard ? '5%' : '-95%',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                    zIndex: 10,
                }}
            >
                <div
                    className={`h-full flex flex-col justify-center px-[4vw] py-[3vw] transition-opacity duration-700 ${showCard ? 'opacity-100 delay-500' : 'opacity-0'}`}
                    dir="rtl"
                >
                    <p className="text-black-text leading-[1.8]" style={{ fontSize: '1.87vw' }}>
                        <span className="font-notoSansHebrew-bold" style={{ fontSize: '1.87vw' }}>
                            &quot;קוגניציה&quot;
                        </span>
                        <span className="font-notoSansHebrew-regular">
                            {' '}
                            היא שם כללי ליכולות של המוח הקשורות ברכישת ידע, עיבוד מידע, ויישומו.
                        </span>
                    </p>
                    <p className="text-black-text leading-[1.8] mt-[0.8vw]" style={{ fontSize: '1.87vw' }}>
                        <span className="font-notoSansHebrew-regular">
                            המערכת הקוגניטיבית של בני האדם היא מפותחת ביחס לחיות אחרות, היא התפתחה
                            בצורה מיטבית עבור הישרדותנו בטבע ולכן היא מאוד יעילה. אבל מה לעשות?{' '}
                        </span>
                        <span className="font-notoSansHebrew-bold" style={{ fontSize: '1.87vw' }}>
                            היא גם לא תמיד מאוד מדויקת.
                        </span>
                    </p>
                    <p
                        className="font-notoSansHebrew-regular text-black-text leading-[1.8] mt-[0.8vw]"
                        style={{ fontSize: '1.87vw' }}
                    >
                        היכולת שלנו להסיק מסקנות מוטה – אנחנו עושים כל מיני טעויות בהסקה, בהיגיון,
                        או בקבלת ההחלטות שלנו.
                    </p>
                    <p className="text-black-text leading-[1.8] mt-[0.8vw]" style={{ fontSize: '1.87vw' }}>
                        <span className="font-notoSansHebrew-bold" style={{ fontSize: '1.87vw' }}>
                            אלה טעויות עקביות שרובנו הגדול (אם לא כולנו) נופלים בהן פעם אחר פעם.
                            ננסה ללמוד על ההטיות המרכזיות, ככה שאולי בפעם הבאה שתיתקלו בהן, תהיו
                            יותר מודעים אליהן ואולי תצליחו להימנע מהן.
                        </span>
                    </p>
                </div>
            </div>

            {/* Scroll arrow up */}
            <div
                className="absolute left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_0.6s_ease-out_1.2s_forwards]"
                style={{ top: '12%', zIndex: 5 }}
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5199d3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </div>

            {/* Scroll arrow down */}
            <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ bottom: '3%', zIndex: 5, animation: 'fadeIn 0.6s ease-out 1.2s forwards, subtleBounce 2s ease-in-out 2.5s infinite', opacity: 0 }}
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5199d3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>
    );
};

export default CognitiveBiasIntro;
