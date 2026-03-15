import SkewButton from './SkewButton';

interface VoteButtonsProps {
    answer: string;
    index?: number;
    className?: string;
    onSelect: (choice: string, index?: number) => void;
}

const VoteButtons: React.FC<VoteButtonsProps> = ({ answer, index, className = '', onSelect }) => {
    return (
        <div className={`flex gap-10 items-center mt-[0.6vw] ${className}`}>
            <SkewButton
                text="כן"
                selected={answer}
                onSelect={(choice) => onSelect(choice, index)}
            />
            <SkewButton
                text="לא"
                selected={answer}
                onSelect={(choice) => onSelect(choice, index)}
            />
        </div>
    );
};

export default VoteButtons;
