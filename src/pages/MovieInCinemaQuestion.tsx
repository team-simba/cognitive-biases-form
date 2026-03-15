import FormalLogicQuestion from '../components/FormalLogicQuestion';
import { FontClasses } from '../types/fonts';

const MovieInCinemaQuestion: React.FC = () => {
    const cardsContent = ['לא קנה כרטיס', 'קנה כרטיס', 'לא ראה סרט בקולנוע', 'ראה סרט בקולנוע'];

    return (
        <FormalLogicQuestion
            intro="בואו ננסה שוב עם שאלה אחרת:"
            cardsContent={cardsContent}
            cardsFontWeight={FontClasses.small}
            legality="אם מישהו רואה סרט בקולנוע, אז הוא חייב לקנות כרטיס."
        />
    );
};

export default MovieInCinemaQuestion;
