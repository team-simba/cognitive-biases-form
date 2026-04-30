import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../components/Background';
import Card from '../components/Card';
import TitleSideLine from '../components/TitleSideLine';
import { setLossAversionAccept } from '../store/userAnswersSlice';

import type { RootState } from '../store/store';

interface LossAversionQuestionProps {
    onAdvance?: () => void;
}

const LossAversionQuestion: React.FC<LossAversionQuestionProps> = ({ onAdvance }) => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector(
        (state: RootState) => state.userAnswers.lossAversionAccept
    );
    const [selected, setSelected] = useState<boolean | null>(savedAnswer);
    const advancingRef = useRef(false);

    const handleChoose = (choice: boolean) => {
        if (advancingRef.current) return;
        advancingRef.current = true;
        setSelected(choice);
        dispatch(setLossAversionAccept(choice));
        setTimeout(() => onAdvance?.(), 500);
    };

    const renderChoiceButton = (value: boolean, label: string) => {
        const isSelected = selected === value;
        return (
            <button
                key={label}
                onClick={() => handleChoose(value)}
                className={`
                    w-[8.9vw] h-[3.4vw]
                    flex items-center justify-center
                    text-white text-[1.55vw] font-medium
                    transition-all duration-200
                    cursor-pointer
                    ${
                        isSelected
                            ? 'bg-blue-mid drop-shadow-primary rotate-[-5deg]'
                            : 'bg-secondary drop-shadow-dark hover:bg-blue-mid'
                    }
                `}
            >
                {label}
            </button>
        );
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="שנאת הפסד" className="self-start" />
                <div className="flex justify-center mt-[3vw]">
                    <Card width="w-[55vw]" padding="p-[2.5vw]" gap="gap-[2vw]">
                        <p
                            className="font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] text-right"
                            dir="rtl"
                        >
                            מציעים לכם להטיל מטבע: אם יצא פלי - תפסידו 100 ₪
                            <br />
                            אם יצא עץ - תרוויחו 100 ₪.
                        </p>
                        <p
                            className="font-notoSansHebrew-bold text-black-text text-[1.25vw] text-right"
                            dir="rtl"
                        >
                            האם הייתם מסכימים?
                        </p>
                        <div className="flex gap-[1.8vw] justify-end">
                            {renderChoiceButton(true, 'כן')}
                            {renderChoiceButton(false, 'לא')}
                        </div>
                    </Card>
                </div>
            </div>
        </Background>
    );
};

export default LossAversionQuestion;
