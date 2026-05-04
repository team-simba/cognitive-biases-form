import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 209:24466
const MirrorExamplePopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="דוגמה מחיי היום יום" onClose={onAdvance}>
        <p style={{ margin: 0 }}>
            בקבוצת חברים לאחת הבנות יש יום הולדת. היא ביישנית, לא אוהבת תשומת לב, ונהנת
            ממעגל חברים קטן. אחד החברים רוצה לעשות לה מסיבת הפתעה גדולה, עם הרבה אנשים
            ולצלם הכל.
        </p>
        <p style={{ margin: 0 }}>
            כשנאמר לו שלא בטוח שהיא תהנה, הוא משיב: &ldquo;אבל מסיבות הפתעה זה כיף - אם
            אני הייתי במקומה הייתי ממש מתרגש מזה, יהיה בסדר היא תזרום&rdquo;
        </p>
    </PopupCard>
);

export default MirrorExamplePopup;
