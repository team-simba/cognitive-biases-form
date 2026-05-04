import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 476:16024 — title color is #2364aa, slightly lighter than the standard popup blue
const LossAversionDidYouKnowPopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="הידעת?" titleColor="#2364aa" onClose={onAdvance}>
        <p style={{ margin: 0 }}>
            מחקרים מצאו שההטיה הזו קיימת גם אצל חיות אחרות, למשל - ציפורים! כשיש הרבה
            אוכל בסביבה (המצב ה&ldquo;בטוח&rdquo;), הציפורים מעדיפות גמול שיקבלו{' '}
            <span className="font-notoSansHebrew-bold">בוודאות</span>, גם אם הוא קטן
            יותר. אבל כאשר יש אוכל מועט בסביבה (מצב &ldquo;מצוקה&rdquo;), הן יעדיפו{' '}
            <span className="font-notoSansHebrew-bold">להסתכן</span> עבור גמול גדול יותר.
        </p>
    </PopupCard>
);

export default LossAversionDidYouKnowPopup;
