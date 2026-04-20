import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/store';

import StaticBackground from '../assets/LeftShapes/static.svg';
import Background from '../components/Background';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import { LeftShapes } from '../data/floating-animations';
import { setAvailabilityListShown } from '../store/userAnswersSlice';

const NAME_LISTS: string[][] = [
    // List 0 — more males, but includes famous female names (e.g. גל גדות, נינט טייב, רותם סלע)
    [
       ' עומר אדם',' הדס ארבל',' גיא ביטון',' גל גדות', 
       ' יואב כהן',' נינט טייב',' עופר כהן',' רותם סלע',' אלון נצר',' נועה קירל',' איתן שלו',' תמר רגב',' אסי עזר',
       ' גלעד אביתר'
        
    ],
    // List 1 — placeholder list (replace with intended second list)
    [
       ' עדן חסון',' נועה טננבאום',' גיא ביטון',' נינט טייב', 
       ' גלית טלר',' עופר כהן',' אסי עזר',' טליה שמעוני', 
       ' מאיה שלום',' עומר אדם',' תמר רגב',' איתן שלו', 
       ' שירה הדרי',' הדס ארבל',' גל גדות',' ערן זהבי', 
       ' אלון נצר'
        
    ],
];

const AvailabilityNames: React.FC = () => {
    const dispatch = useDispatch();
    const savedListShown = useSelector((state: RootState) => state.userAnswers.availabilityListShown);

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
                    <p className="font-notoSansHebrew-regular  text-[1.4vw] mt-[1vw] leading-[2.2vw] text-primary">
                        לפניכם רשימה של שמות
                        <br />
                        קראו אותה פעם אחת ועברו לשקופית הבאה
                    </p>
                </div>
                <div className="mt-[3vw] grid grid-cols-6 gap-[1vw] px-[2vw] z-12">
                    {names.map((name) => (
                        <div
                            key={name}
                            className="bg-white rounded-[0.8vw] flex items-center justify-center py-[1.1vw] px-[0.8vw] text-[1.4vw] font-notoSansHebrew-regular text-primary shadow-sm"
                        >
                            {name}
                        </div>
                    ))}
                </div>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={LeftShapes}
                    classes="w-[28vw] "
                />
            </div>
        </Background>
    );
};

export default AvailabilityNames;
