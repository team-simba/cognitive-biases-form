import FormalLogicQuestion from '../components/FormalLogicQuestion';
import { FontClasses } from '../types/fonts';

const FirstFormalLogicQuestion: React.FC = () => {
    const cardsContent = ['D', '6', '7', 'A'];

    return (
        <FormalLogicQuestion
            intro="מולכם ארבעה קלפים. על כל קלף יש מספר בצד אחד ואות באנגלית בצד השני."
            cardsContent={cardsContent}
            cardsFontWeight={FontClasses.big}
            legality="אם על צד אחד של הקלף יש אות ניקוד (AEIOU), אז בצד השני יש מספר זוגי."
        />
    );
};

export default FirstFormalLogicQuestion;
