import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

const AnchoringExamplePopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="דוגמה מחיי היום יום" onClose={onAdvance}>
        <p style={{ margin: 0 }}>אתם רוצים להזמין מלון לחופשה.</p>
        <p style={{ margin: 0 }}>
            באתר כתוב שיש מבצע - המחיר המקורי הוא 1,200 ש&quot;ח ללילה ועכשיו הוא 900 ש&quot;ח.
        </p>
        <p style={{ margin: 0 }}>
            במקרה הזה ה-1,200 נהיה עוגן. אז 900 מרגיש כמו עסקה טובה. למרות שאם לא הייתם
            יודעים מה המחיר המקורי, הייתם יכולים לחשוב ש-900 יקר ולא שווה לכם
        </p>
    </PopupCard>
);

export default AnchoringExamplePopup;
