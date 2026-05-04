import PopupCard from '../components/PopupCard';

interface Props {
    onAdvance?: () => void;
}

// Figma 213:12636
const MysteryExamplePopup: React.FC<Props> = ({ onAdvance }) => (
    <PopupCard title="דוגמה מחיי היום יום" onClose={onAdvance}>
        <p style={{ margin: 0 }}>
            במקום העבודה מישהו אומר שהוא &ldquo;שמע ממקור בהנהלה&rdquo; שבקרוב עומד לקרות
            שינוי גדול - למשל קיצוצים או שינוי צוותים, ומוסיף שהוא לא יכול לפרט.
        </p>
        <p style={{ margin: 0 }}>
            מהר מאוד אנשים מתחילים להילחץ, לחקור מה הולך לקרות ולשקול בכבדות את התוכניות
            העתידיות שלהם. זאת למרות שאין שום הודעה רשמית ואין סימנים ברורים בשטח למה
            שנאמר.
        </p>
    </PopupCard>
);

export default MysteryExamplePopup;
