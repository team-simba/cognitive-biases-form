interface SkewButtonProps {
    text: string;
    selected: string | null;
    onSelect: (choice: string) => void;
}

const SkewButton: React.FC<SkewButtonProps> = ({ text, selected, onSelect }) => {
    const isSelected = selected === text;

    return (
        <div
            className={`relative inline-block ${
                isSelected ? 'drop-shadow-primary' : 'drop-shadow-dark'
            }`}
        >
            <button
                onClick={() => onSelect(text)}
                className={`
                shape-trapeze
                flex justify-center items-center relative
                w-[8.59vw] h-[3.39vw]
                text-white font-medium text-[1.67vw]
                transition-all duration-300
                cursor-pointer
          ${
              isSelected
                  ? 'bg-blue-mid rotate-[-3deg]'
                  : 'bg-secondary hover:bg-blue-mid  hover:h-[2.71vw] rotate-[3deg]'
          }`}
            >
                {text}
            </button>
        </div>
    );
};

export default SkewButton;
