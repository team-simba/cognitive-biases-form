import BgConfirmationBias from '../components/BgConfirmationBias';
import Card from '../components/Card';

const ConfirmationBias: React.FC = () => {
    return (
        <BgConfirmationBias>
            <Card width={'w-[78Vw]'} height={'h-[26vw]'}>
                <div className="text-[1.875vw] text-right">
                    <p>
                        האמונה הראשונית שלנו גורמת לנו להמשיך
                        <span className="font-notoSansHebrew-bold"> להאמין בה!</span>
                    </p>
                    <p>
                        הראיות שאנחנו מוצאים והמסקנות שאנחנו מסיקים נובעים ישירות מזה
                        <span className="font-notoSansHebrew-bold">
                            &nbsp; שיש לנו מראש את האמונה,
                        </span>
                        &nbsp; אותה אנחנו
                        <br />
                        <span className="font-notoSansHebrew-bold"> מנסים להוכיח.</span>
                    </p>
                    <p className="mt-[2vw]">
                        בדוגמא שלנו – האם חיוך בהכרח מעיד על חיבה? מבט? אולי דני הוא סתם בחור חביב?
                        אולי הוא ישב באותו שולחן של רוני כי לא היו עוד שולחנות פנויים בחד"א? אולי
                        המגע היה אגבי, סתמי, או בטעות בכלל? רוני החליטה לפרש את הכל בהתאם לאמונה
                        שלה, וכך "הוכיחה" אותה.
                        <br />
                        זה לא מאוד הגיוני, לא?
                    </p>
                </div>
            </Card>
        </BgConfirmationBias>
    );
};

export default ConfirmationBias;
