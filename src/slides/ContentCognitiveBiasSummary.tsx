import SubjectMainScreen from '../components/SubjectMainScreen';

const ContentCognitiveBiasSummary: React.FC = () => {
    return (
        <SubjectMainScreen
            titleContent="הטייה קוגניטיבית מספר 4 - תוכן"
            content={
                <p>
וזו הטיית התוכן, בה אנחנו מושפעים מהמסר והנושא עצמו, לא רק מהמבנה הלוגי: 
תוכן שתואם את תפיסת העולם שלנו הוא קל לעיבוד, ותוכן שסותר את תפיסתנו מעורר מורכבות ופחות קל לעיבוד.
                </p>
            }
        />
    );
};

export default ContentCognitiveBiasSummary;
