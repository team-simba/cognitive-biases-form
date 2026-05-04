import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 209:20943 — Wason card-task explanation
const LogicExplanationPopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="הסבר" onClose={onAdvance}>
        <p style={{ margin: 0 }}>
            <span className="font-notoSansHebrew-bold">A (אות ניקוד) – צריך להפוך:</span>{' '}
            אם בצד השני יש מספר אי־זוגי, הכלל נשבר.
        </p>
        <p style={{ margin: 0 }}>
            <span className="font-notoSansHebrew-bold">7 (אי־זוגי) – צריך להפוך:</span>{' '}
            אם בצד השני יש אות תנועה, הכלל נשבר.
        </p>
        <p style={{ margin: 0 }}>
            <span className="font-notoSansHebrew-bold">6 (זוגי) – לא חייבים להפוך</span>:
            גם אם בצד השני יש תנועה וגם אם לא, זה לא יכול להפר את הכלל.
        </p>
        <p style={{ margin: 0 }}>
            <span className="font-notoSansHebrew-bold">D (עיצור) – לא חייבים להפוך:</span>{' '}
            הכלל לא אומר שום דבר על קלפים עם עיצור, אז זה לא יכול להפר אותו.
        </p>
    </PopupCard>
);

export default LogicExplanationPopup;
