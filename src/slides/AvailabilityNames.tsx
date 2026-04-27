import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/LeftShapes/static.svg';
import Background from '../components/Background';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { LeftShapes } from '../data/floating-animations';
import { setAvailabilityListShown } from '../store/userAnswersSlice';

type NameEntry = { name: string; isABoy: boolean; isACelebrity: boolean };

const NAME_LISTS: NameEntry[][] = [
    // List 0 — more males, but includes famous female names (e.g. גל גדות, נינט טייב, רותם סלע)
    [
        { name: ' עומר אדם', isABoy: true, isACelebrity: true },
        { name: ' הדס ארבל', isABoy: false, isACelebrity: false },
        { name: ' גיא ביטון', isABoy: true, isACelebrity: false },
        { name: ' גל גדות', isABoy: false, isACelebrity: true },
        { name: ' יואב כהן', isABoy: true, isACelebrity: false },
        { name: ' נינט טייב', isABoy: false, isACelebrity: true },
        { name: ' עופר כהן', isABoy: true, isACelebrity: false },
        { name: ' רותם סלע', isABoy: false, isACelebrity: true },
        { name: ' אלון נצר', isABoy: true, isACelebrity: false },
        { name: ' נועה קירל', isABoy: false, isACelebrity: true },
        { name: ' איתן שלו', isABoy: true, isACelebrity: false },
        { name: ' תמר רגב', isABoy: false, isACelebrity: false },
        { name: ' אסי עזר', isABoy: true, isACelebrity: true },
        { name: ' גלעד אביתר', isABoy: true, isACelebrity: false },
    ],
    // List 1 — placeholder list (replace with intended second list)
    [
        { name: ' עדן חסון', isABoy: true, isACelebrity: true },
        { name: ' נועה טננבאום', isABoy: false, isACelebrity: false },
        { name: ' גיא ביטון', isABoy: true, isACelebrity: false },
        { name: ' נינט טייב', isABoy: false, isACelebrity: true },
        { name: ' גלית טלר', isABoy: false, isACelebrity: false },
        { name: ' עופר כהן', isABoy: true, isACelebrity: false },
        { name: ' אסי עזר', isABoy: true, isACelebrity: true },
        { name: ' טליה שמעוני', isABoy: false, isACelebrity: false },
        { name: ' מאיה שלום', isABoy: false, isACelebrity: false },
        { name: ' עומר אדם', isABoy: true, isACelebrity: true },
        { name: ' תמר רגב', isABoy: false, isACelebrity: false },
        { name: ' איתן שלו', isABoy: true, isACelebrity: false },
        { name: ' שירה הדרי', isABoy: false, isACelebrity: false },
        { name: ' הדס ארבל', isABoy: false, isACelebrity: false },
        { name: ' גל גדות', isABoy: false, isACelebrity: true },
        { name: ' ערן זהבי', isABoy: true, isACelebrity: true },
        { name: ' אלון נצר', isABoy: true, isACelebrity: false },
    ],
];

const AvailabilityNames: React.FC = () => {
    const dispatch = useDispatch();
    const savedListShown = useSelector((state: RootState) => state.userAnswers.availabilityListShown);
    const availabilityAnswer = useSelector((state: RootState) => state.userAnswers.availabilityAnswer);
    const isAnswered = availabilityAnswer !== null;

    useEffect(() => {
        if (savedListShown === null) {
            const listIndex = Math.random() < 0.5 ? 0 : 1;
            dispatch(setAvailabilityListShown(listIndex as 0 | 1));
        }
    }, []);

    const listIndex = savedListShown ?? 0;
    const names = NAME_LISTS[listIndex];

    return (
        <Background>
            <div className="relative min-h-screen padding-page" dir="rtl">
                <div className="flex flex-col text-right">
                    <TitleSideLine text="רשימת שמות" />
                    <p className="font-notoSansHebrew-bold text-[1.7vw] mt-[1vw] mr-[2vw] leading-[2.2vw] text-primary">
                        לפניכם רשימה של שמות,
                        <br />
                        קראו אותה פעם אחת ועברו לשקופית הבאה:
                    </p>
                </div>
                <div className="relative mt-[3vw] grid grid-cols-5 gap-[1vw] px-[2vw] z-10">
                    {names.map(({ name, isABoy, isACelebrity }) => (
                        <div
                            key={name}
                            className={`bg-white rounded-[0.8vw] flex items-center justify-center py-[1.1vw] px-[0.8vw] text-[1.4vw] shadow-sm ${
                                isAnswered ? (isABoy ? 'text-[#0053AD]' : 'text-[#9A0090]') : 'text-primary'
                            } ${
                                isAnswered && isACelebrity ? 'font-notoSansHebrew-medium' : 'font-notoSansHebrew-regular'
                            }`}
                        >
                            {name}
                        </div>
                    ))}
                </div>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={LeftShapes}
                    classes="w-[28vw] z-0"
                />
            </div>
        </Background>
    );
};

export default AvailabilityNames;
