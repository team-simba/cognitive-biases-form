import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/LeftShapes/static.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { LeftShapes } from '../data/floating-animations';
import { setAvailabilityAnswer } from '../store/userAnswersSlice';

const MaleIcon: React.FC<{ selected: boolean }> = ({ selected }) => (
    <svg width="4vw" height="4vw" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '4vw', height: '4vw' }}>
        <circle cx="30" cy="30" r="28" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" />
        <circle cx="26" cy="32" r="10" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" />
        <line x1="34" y1="26" x2="44" y2="16" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="38" y1="16" x2="44" y2="16" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="44" y1="16" x2="44" y2="22" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const FemaleIcon: React.FC<{ selected: boolean }> = ({ selected }) => (
    <svg width="4vw" height="4vw" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '4vw', height: '4vw' }}>
        <circle cx="30" cy="30" r="28" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" />
        <circle cx="30" cy="24" r="10" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" />
        <line x1="30" y1="34" x2="30" y2="46" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="41" x2="36" y2="41" stroke={selected ? '#2B4C8C' : '#8FADD4'} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const AvailabilityQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const savedAnswer = useSelector((state: RootState) => state.userAnswers.availabilityAnswer);
    const alreadyAnswered = savedAnswer !== null;

    const [selected, setSelected] = useState<'male' | 'female' | null>(savedAnswer);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(alreadyAnswered);

    const handleSelect = (choice: 'male' | 'female') => {
        if (isSubmitted || isLoading) return;
        setSelected(choice);
    };

    const handleSubmit = () => {
        if (!selected || isLoading || isSubmitted) return;
        setIsLoading(true);
        setTimeout(() => {
            dispatch(setAvailabilityAnswer(selected));
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <Background>
            <div className="relative min-h-screen padding-page" dir="rtl">
                <div className="flex flex-col items-end">
                    <TitleSideLine text="המשיכו להעריך" />
                    <p className="font-notoSansHebrew-regular text-right text-[1.4vw] mt-[1.5vw] leading-[2.4vw] text-primary">
                        מבלי לחזור לרשימה, נסו להעריך: האם ברשימה היו יותר שמות של נשים או של גברים?
                    </p>
                    <p className="font-notoSansHebrew-regular text-right text-[1.2vw] mt-[0.5vw] text-primary opacity-70">
                        הערה: זה בסדר אם אינכם זוכרים! נסו רק להעריך
                    </p>
                </div>

                <div className="flex justify-center gap-[3vw] mt-[4vw]">
                    {/* Male option */}
                    <div className="flex flex-col items-center gap-[0.8vw]">
                        <MaleIcon selected={selected === 'male'} />
                        <button
                            onClick={() => handleSelect('male')}
                            disabled={isSubmitted || isLoading}
                            className={`w-[18vw] py-[2vw] rounded-[0.5vw] text-white text-[1.67vw] font-notoSansHebrew-semiBold transition-colors ${
                                selected === 'male'
                                    ? 'bg-[#2B4C8C]'
                                    : 'bg-[#5B7EC9] hover:bg-[#4A6BB5]'
                            } disabled:cursor-not-allowed`}
                        >
                            שמות של גברים
                        </button>
                    </div>

                    {/* Female option */}
                    <div className="flex flex-col items-center gap-[0.8vw]">
                        <FemaleIcon selected={selected === 'female'} />
                        <button
                            onClick={() => handleSelect('female')}
                            disabled={isSubmitted || isLoading}
                            className={`w-[18vw] py-[2vw] rounded-[0.5vw] text-white text-[1.67vw] font-notoSansHebrew-semiBold transition-colors ${
                                selected === 'female'
                                    ? 'bg-[#2B4C8C]'
                                    : 'bg-[#5B7EC9] hover:bg-[#4A6BB5]'
                            } disabled:cursor-not-allowed`}
                        >
                            שמות של נשים
                        </button>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-[3vw]">
                    <Button
                        marked={isSubmitted || alreadyAnswered}
                        loading={isLoading}
                        content="הגשה"
                        inputProvided={!!selected || alreadyAnswered}
                        onClick={handleSubmit}
                        className="shape-angled-top font-medium text-[1.67vw]"
                    />
                </div>

                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={LeftShapes}
                    classes="w-[28vw] z-10"
                />
            </div>
        </Background>
    );
};

export default AvailabilityQuestion;
