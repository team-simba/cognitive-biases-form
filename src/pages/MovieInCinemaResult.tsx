import Background from '../components/Background';
import FormalLogicCard from '../components/FormalLogicCard';
import LeftSmallCircleAnimation from '../components/LeftSmallCircleAnimation';
import TitleSideLine from '../components/TitleSideLine';

const MovieInCinemaResult: React.FC = () => {
    const firstLineData = ['D', '6', '7', 'A'];
    const secondLineData = ['לא קנה כרטיס', 'קנה כרטיס', 'לא ראה סרט בקולנוע', 'ראה סרט בקולנוע'];

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="הטייה קוגנטיבית מספר 4 - לוגיקה פורמלית" />
                <p className="!text-[1.5vw] font-notoSansHebrew-regular">
                    נסו להתבונן קצת בשני המצבים ולהשוות ביניהם:
                    <br />
                    <span className="font-notoSansHebrew-bold">
                        אם יש על צד אחד של הקלף אות ניקוד (AEIOU), אז בצד השני יש מספר זוגי
                    </span>
                </p>
                <div className="flex flex-row gap-8 flex-wrap justify-start">
                    {firstLineData.map((content, i) => (
                        <FormalLogicCard
                            key={i}
                            content={content}
                            disable={true}
                            fontSize="text-[4.6vw] font-notoSansHebrew-bold"
                        />
                    ))}
                </div>
                <span className="!text-[1.5vw] font-notoSansHebrew-bold">
                    אם מישהו רואה סרט בקולנוע, אז הוא חייב לקנות כרטיס.
                </span>
                <div className="flex flex-row gap-8 flex-wrap justify-start">
                    {secondLineData.map((content, i) => (
                        <FormalLogicCard
                            key={i}
                            content={content}
                            disable={true}
                            fontSize="!text-[1.667vw] font-notoSansHebrew-bold"
                        />
                    ))}
                </div>
                <p className="!text-[1.5vw] font-notoSansHebrew-regular">
                    ברגע שהשאלה היא אותה שאלה, אבל מנוסחת בצורת חוק חברתי והפרתו,
                    <br />
                    אחוזי ההצלחה עולים בהרבה (כנראה שזה יותר משתלם לנו להבין כשמדובר ברמאות!).
                    <br />
                    מזכיר קצת הטייה קוגנטיבית שכבר למדנו, לא?
                </p>
            </div>
            <LeftSmallCircleAnimation />
        </Background>
    );
};

export default MovieInCinemaResult;
