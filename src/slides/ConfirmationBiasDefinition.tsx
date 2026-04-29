import SecurityContext from '../components/SecurityContext';

const ConfirmationBiasDefinition: React.FC = () => {
    return (
        <SecurityContext
            titleType="TitleSideLine"
            title="הטייה קוגניטיבית מספר 8 - אישוש"
            content={
                <div className="space-y-[1.2vw]">
                    <p>
                        הטיית אישוש היא הנטייה לחפש, לפרש ולזכור מידע באופן שמחזק את האמונות
                        הקיימות שלנו. כשיש לנו אמונה ראשונית, אנחנו נוטים לשים לב בעיקר לראיות
                        שתומכות בה, ולהתעלם או להמעיט בערכן של ראיות שמציעות הסבר אחר.
                    </p>
                    <p>
                        כך נוצרת תחושה שהאמונה "מוכחת", גם
                        <span className="font-notoSansHebrew-bold"> כשהמסקנה לא מתחייבת מהראיות.</span>
                    </p>
                </div>
            }
        />
    );
};

export default ConfirmationBiasDefinition;
