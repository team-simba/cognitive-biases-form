import { useDispatch, useSelector } from 'react-redux';

import Background from '../components/Background';
import Card from '../components/Card';
import TitleSideLine from '../components/TitleSideLine';
import VotingChart from '../components/VotingChart/VotingChart';
import { setLossAversionAccept } from '../store/userAnswersSlice';

import type { RootState } from '../store/store';
import type { VoteItem } from '../types/vote';

const REJECT_PERCENT = 38;
const ACCEPT_PERCENT = 72;

const LossAversion: React.FC = () => {
    const dispatch = useDispatch();
    const accepted = useSelector(
        (state: RootState) => state.userAnswers.lossAversionAccept
    );
    const showResults = accepted !== null;

    const handleChoose = (choice: boolean) => {
        if (showResults) return;
        dispatch(setLossAversionAccept(choice));
    };

    const renderChoiceButton = (value: boolean, label: string) => {
        const isSelected = accepted === value;
        const isDimmed = showResults && !isSelected;
        return (
            <button
                key={label}
                disabled={showResults}
                onClick={() => handleChoose(value)}
                className={`
                    w-[8.9vw] h-[3.4vw]
                    flex items-center justify-center
                    text-white text-[1.55vw] font-medium
                    transition-all duration-200
                    ${
                        isSelected
                            ? 'bg-blue-mid drop-shadow-primary rotate-[-5deg]'
                            : 'bg-secondary drop-shadow-dark hover:bg-blue-mid cursor-pointer'
                    }
                    ${isDimmed ? 'cursor-not-allowed opacity-80' : ''}
                    ${showResults && isSelected ? 'cursor-not-allowed' : ''}
                `}
            >
                {label}
            </button>
        );
    };

    const questionCard = (
        <Card width="w-full" padding="p-[2vw]" gap="gap-[1.5vw]">
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
    );

    if (!showResults) {
        return (
            <Background>
                <div className="flex flex-col padding-page g-1">
                    <TitleSideLine text="שנאת הפסד" className="self-start" />
                    <div className="flex justify-center mt-[3vw]">
                        <div className="w-[55vw]">{questionCard}</div>
                    </div>
                </div>
            </Background>
        );
    }

    const myBarName =
        accepted === true ? 'מסכימים' : accepted === false ? 'לא מסכימים' : '';

    const votes: VoteItem[] = [
        {
            category: '',
            bars: [
                {
                    name: 'לא מסכימים',
                    value: REJECT_PERCENT,
                    color: '--color-blue-mid',
                    label: 'לא מסכימים\nלהצעה',
                    pattern: 'rotateGridPattern',
                },
                {
                    name: 'מסכימים',
                    value: ACCEPT_PERCENT,
                    color: '--color-green-mid',
                    label: 'מסכימים\nלהצעה',
                    pattern: 'circlePattern',
                },
            ],
            my: myBarName,
        },
    ];

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="שנאת הפסד" className="self-start" />

                <div className="flex items-start gap-[2vw] mt-[2vw] px-[3vw]">
                    <div className="flex-shrink-0 w-[26vw]">
                        <VotingChart
                            votes={votes}
                            barSize={90}
                            barGap={60}
                            showCategoryLabels={false}
                            showPercentage={true}
                            percentageFontSize="1.25vw"
                            fontSizeMy="1vw"
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-[1.5vw]">
                        {questionCard}

                        <Card width="w-full" padding="p-[2vw]">
                            <p
                                className="font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] text-right"
                                dir="rtl"
                            >
                                רבים נוטים לסרב להצעה כזו, למרות שהרווח וההפסד האפשריים שווים. תופעה
                                זו נקראת שנאת הפסד.
                                <br />
                                בני אדם נוטים לחוות הפסד כמשמעותי יותר מרווח באותו גודל. כלומר,
                                ההשפעה השלילית של הפסד 100 ₪ חזקה יותר מהתחושה החיובית של רווח של
                                100 ₪.
                            </p>
                            <p
                                className="font-notoSansHebrew-bold text-black-text text-[1.25vw] text-right mt-[0.5vw]"
                                dir="rtl"
                            >
                                כעת ננסה להמחיש את התחושה הזו.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </Background>
    );
};

export default LossAversion;
