import VoteButtons from './VoteButtons';
import Card from '../components/Card';

import type { Question } from '../types/question';

interface QuestionCardProps {
    height: string;
    width: string;
    question: Question;
    answer: string;
    index?: number;
    onSelect: (choice: string, id?: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    height,
    width,
    question,
    answer,
    index,
    onSelect,
}) => {
    return (
        <Card width={width} height={height} padding="p-[2.5vw]">
            <div className="flex flex-col gap-2">
                <img src={question.icon} alt="icon" className="w-[6.15vw] h-[6.15vw]" />
                <div className="text-[1.77vw] font-notoSansHebrew-regular">{question.text}</div>
            </div>

            <VoteButtons
                answer={answer}
                index={index}
                onSelect={(choice) => onSelect(choice, index)}
            />
        </Card>
    );
};

export default QuestionCard;
