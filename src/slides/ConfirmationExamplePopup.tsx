import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 216:13257
const ConfirmationExamplePopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="דוגמה מחיי היום יום" onClose={onAdvance}>
        <p style={{ margin: 0 }}>
            ברשתות חברתיות האלגוריתם לומד מה אנחנו אוהבים ומציג לנו בעיקר תוכן שמתאים
            לדעות שלנו.
        </p>
        <p style={{ margin: 0 }}>
            עם הזמן אנחנו רואים &ldquo;ראיות&rdquo; שמחזקות את דעותינו, ולכן זה מרגיש
            כאילו רוב האנשים מסכימים איתנו. כשאנחנו כמעט לא נחשפים לדעות אחרות, קל לתייג
            את מי שחושב אחרת כטועה ולפסול אותן.
        </p>
    </PopupCard>
);

export default ConfirmationExamplePopup;
