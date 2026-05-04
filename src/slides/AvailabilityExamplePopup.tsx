import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 476:17569
const AvailabilityExamplePopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="דוגמה מחיי היום יום" onClose={onAdvance}>
        <p style={{ margin: 0 }}>
            נהגים רבים מרגישים ש&ldquo;תמיד&rdquo; כשהם בוחרים נתיב בכביש מהיר או בפקק -
            דווקא הנתיב שלהם נעשה האיטי יותר. הרגעים האלה בולטים ומתסכלים ולכן קל מאוד
            להיזכר בהם. לעומת זאת, הפעמים שבהן הנתיב שלהם דווקא התקדם מהר יותר כמעט ולא
            נשארות בזיכרון. לכן נוצרת תחושה שהדבר קורה לעיתים קרובות, למרות שבפועל זה לא
            בהכרח נכון.
        </p>
    </PopupCard>
);

export default AvailabilityExamplePopup;
