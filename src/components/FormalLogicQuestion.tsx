import { useState } from 'react';

import Button from './Button';
import LeftSmallCircleAnimation from './LeftSmallCircleAnimation';
import Background from '../components/Background';
import FormalLogicCard from '../components/FormalLogicCard';
import TitleSideLine from '../components/TitleSideLine';

interface FormalLogicProps {
    intro: string;
    cardsContent: Array<string>;
    cardsFontWeight: string;
    legality: string;
}

const FormalLogicQuestion: React.FC<FormalLogicProps> = ({
    intro,
    cardsContent,
    cardsFontWeight,
    legality,
}) => {
    const [answers, setAnswers] = useState<Array<string>>([]);

    const handleSelect = (choice: string) => {
        setAnswers((prev) => {
            if (prev.includes(choice)) {
                return prev.filter((item) => item !== choice);
            } else {
                return [...prev, choice];
            }
        });
    };

    const handleSubmit = () => {
        if (!answers.length) return;
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="הטייה קוגנטיבית מספר 4 - לוגיקה פורמלית" />
                <p className="font-notoSansHebrew-regular">{intro}</p>
                <div className="flex gap-[3.125vw] flex-wrap justify-center">
                    {cardsContent.map((content, i) => (
                        <FormalLogicCard
                            key={i}
                            content={content}
                            fontSize={`${cardsFontWeight} font-bold`}
                            onClick={() => handleSelect(content)}
                        />
                    ))}
                </div>
                <p className="font-notoSansHebrew-regular">
                    <span className="font-notoSansHebrew-bold">חוקיות הקלפים:</span> {legality}
                    <br />
                    <br />
                    <span className="font-notoSansHebrew-bold">
                        אילו קלפים צריך להפוך כדי לבדוק אם החוקיות שהוצעה לא מתקיימת?
                    </span>
                    <br />
                    לחצו עליהם, ואז המשיכו.
                </p>
            </div>
            <div className="fixed bottom-[3vh] left-1/2 -translate-x-1/2">
                <Button
                    content="הגשה"
                    inputProvided={answers.length > 0}
                    className="shape-angled-top"
                    onClick={handleSubmit}
                />
            </div>
            <LeftSmallCircleAnimation />
        </Background>
    );
};

export default FormalLogicQuestion;
