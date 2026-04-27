import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import Background from '../components/Background';
import Button from '../components/Button';
import TitleSideLine from '../components/TitleSideLine';
import { setMysteryCandidateRating } from '../store/userAnswersSlice';

type Rating = 1 | 2 | 3 | 4;

const ratings: Rating[] = [4, 3, 2, 1];

const MysteryQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.mysteryCandidateRating);
    const alreadyAnswered = savedAnswer !== null;
    const [selected, setSelected] = useState<Rating | null>(savedAnswer);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);

    const handleSubmit = () => {
        if (selected === null || isLoading || isSubmitted) return;
        setIsLoading(true);
        setTimeout(() => {
            dispatch(setMysteryCandidateRating(selected));
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text="בחר מועמד" className="self-start" />
                <p className="z-10 px-[3vw] pt-[1vw] font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] max-w-[90vw] text-right">
                    המדינה עומדת לבחור שר ביטחון חדש. אתם מתבקשים להמליץ האם לתמוך במינוי שלו או
                    להעדיף מועמד אחר. על המועמד התקבלו שני פרטי מידע:
                </p>
                <div className="z-10 flex gap-[1.5vw] px-[3vw] mt-[1.5vw] justify-end">
                    <div className="flex-1 max-w-[42vw] bg-white/50 rounded-[1vw] shadow-[0_0.5vw_0.5vw_rgba(0,0,0,0.1)] p-[1.5vw] flex items-center">
                        <p
                            className="font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] text-right w-full"
                            dir="rtl"
                        >
                            <span className="font-notoSansHebrew-bold">ממצא שלילי:</span>
                            <br />
                            לפי דיווח שנאמר בחשאי לאחד מאנשי הקשר שלנו, בחודשים האחרונים הוא דוחף
                            לקדם מהלכים התקפיים למרות התנגדות מקצועית, מה שמעלה את הסיכון להסלמה לא
                            מתוכננת.
                        </p>
                    </div>
                    <div className="flex-1 max-w-[42vw] bg-white/50 rounded-[1vw] shadow-[0_0.5vw_0.5vw_rgba(0,0,0,0.1)] p-[1.5vw] flex items-center">
                        <p
                            className="font-notoSansHebrew-regular text-black-text text-[1.25vw] leading-[2vw] text-right w-full"
                            dir="rtl"
                        >
                            <span className="font-notoSansHebrew-bold">ממצא חיובי:</span>
                            <br />
                            לפי כתבה שפורסמה בכלי תקשורת מרכזי במדינה, במהלך השנה האחרונה הוא הוביל
                            שינוי במדיניות לאורך הגבול, ובתקופה הזו נרשמה ירידה חדה במספר התקריות
                            האלימות.
                        </p>
                    </div>
                </div>
                <p className="z-10 mt-[3vw] text-center font-notoSansHebrew-semiBold text-black-text text-[1.55vw]">
                    עד כמה הייתם ממליצים לתמוך בו?
                </p>
                <div className="z-10 flex items-center justify-center gap-[1.8vw] mt-[1.2vw]">
                    <span className="font-notoSansHebrew-regular text-black-text text-[1.35vw]">
                        לתמוך מאוד
                    </span>
                    {ratings.map((value) => {
                        const isSelected = selected === value;
                        return (
                            <button
                                key={value}
                                disabled={isSubmitted || isLoading}
                                onClick={() => setSelected(value)}
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
                                    ${isSubmitted || isLoading ? 'cursor-not-allowed' : ''}
                                `}
                            >
                                {value}
                            </button>
                        );
                    })}
                    <span className="font-notoSansHebrew-regular text-black-text text-[1.35vw]">
                        לא לתמוך בכלל
                    </span>
                </div>
                <div className="z-10 w-full flex justify-center mt-[2vw]">
                    <Button
                        marked={isSubmitted || alreadyAnswered}
                        loading={isLoading}
                        content="הגשה"
                        inputProvided={selected !== null}
                        onClick={handleSubmit}
                        className="shape-angled-top font-medium text-[1.67vw]"
                    />
                </div>
            </div>
        </Background>
    );
};

export default MysteryQuestion;
