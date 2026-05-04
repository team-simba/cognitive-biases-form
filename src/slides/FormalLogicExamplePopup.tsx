import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 209:21505
const FormalLogicExamplePopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="דוגמה מחיי היום יום" onClose={onAdvance}>
        <p style={{ margin: 0 }}>אם יורד גשם הכביש יהיה רטוב.</p>
        <p style={{ margin: 0 }}>
            אבל אם קמת בבוקר, יצאת לרחוב וראית שהכביש רטוב, לא תוכל להסיק בוודאות שירד
            גשם בלילה - אולי שטפו את הרחוב, אולי השכן שטף את המרפסת וכן הלאה.
        </p>
    </PopupCard>
);

export default FormalLogicExamplePopup;
