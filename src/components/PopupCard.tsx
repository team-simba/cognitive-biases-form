import React from 'react';

interface PopupCardProps {
    title: string;
    titleColor?: string; // also used for the X icon
    onClose?: () => void;
    children: React.ReactNode;
}

// Figma reference (e.g. 183:25560 "פופ אפ חיי היום יום") at 1920px viewport,
// scaled to 75% of the original.
//   width 60vw → 45vw,  padding 50 → 1.95vw,  radius 30 → 1.17vw,
//   gaps 31 / 113 → 1.21 / 4.41vw,  title 48 → 1.875vw,  body 36 → 1.41vw,
//   X icon 50×53 → 1.95×2.07vw.
const PopupCard: React.FC<PopupCardProps> = ({
    title,
    titleColor = '#104b8b',
    onClose,
    children,
}) => {
    return (
        <div
            className="bg-white flex flex-col justify-center"
            style={{
                width: '45vw',
                padding: '1.95vw',
                borderRadius: '1.17vw',
                gap: '1.21vw',
                boxShadow: '0 0.39vw 0.39vw rgba(0,0,0,0.1)',
            }}
            dir="rtl"
        >
            {/* X close button — sits in the start corner (left in RTL) */}
            <button
                type="button"
                onClick={onClose}
                className="self-start cursor-pointer bg-transparent border-0 p-0 leading-none"
                aria-label="סגור"
                style={{ width: '1.95vw', height: '2.07vw' }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                >
                    <path
                        d="M 4 4 L 20 20 M 20 4 L 4 20"
                        stroke={titleColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <div className="flex flex-col w-full" style={{ gap: '4.41vw' }}>
                <h2
                    className="font-notoSansHebrew-bold text-center w-full"
                    style={{
                        color: titleColor,
                        fontSize: '1.875vw',
                        lineHeight: 'normal',
                    }}
                >
                    {title}
                </h2>

                <div
                    className="font-notoSansHebrew-regular text-right w-full"
                    style={{
                        color: '#1a1a1a',
                        fontSize: '1.41vw',
                        lineHeight: 'normal',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PopupCard;
