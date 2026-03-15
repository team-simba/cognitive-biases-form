import StaticBackground from '../assets/RightShapes/small-circle.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import VotingChart from '../components/VotingChart/VotingChart';
import { buildDeadSaveSummaryVotesData } from '../data/dead-save-votes';
import { RightShapes } from '../data/floating-animations';

import type { DeadSaveValues, VoteItem } from '../types/vote';

interface WhatHappenedHereSummaryProps {
    summary: DeadSaveValues;
}

const WhatHappenedHereSummary: React.FC<WhatHappenedHereSummaryProps> = ({ summary }) => {
    const votes: VoteItem[] = buildDeadSaveSummaryVotesData(summary);
    return (
        <Background>
            <div className="flex flex-col w-full h-screen padding-page g-1">
                <TitleSideLine text="מה קרה פה?" />
                <div className="flex">
                    <Card width="w-[55.21vw]" className="flex justify-center">
                        <p className="font-notoSansHebrew-regular">
                            כשהשאלה מנוסחת במונחי רווח, אנחנו לא רוצים להסתכן ומעדיפים לבחור
                            בתוכניות הבטוחה, אבל כשמנסחים אותה
                            <br />
                            במונחי הפסד דווקא נעדיף להסתכן, בשביל הסיכוי כן להרוויח.
                            <br /> <br />
                            <span className="font-notoSansHebrew-bold">
                                &nbsp; שינוי של ניסוח מביא להיפוך של תוצאות!
                            </span>
                            <br /> <br />
                            זה רלוונטי להמון סיטואציות, בין היתר בבתי משפט. אפילו השופטים המנוסים
                            ביותר לפעמים נופלים להטיית ניסוח.
                        </p>
                    </Card>
                    <div className="w-[30.05vw] m-[auto]">
                        <VotingChart
                            votes={votes}
                            barSize={window.innerWidth < 1640 ? 120 : 140}
                            barGap={window.innerWidth < 1640 ? 80 : 100}
                            showPercentage={true}
                            percentageFontSize="1.25vw"
                        />
                    </div>
                </div>
            </div>
            <FloatingAnimation
                staticBackground={StaticBackground}
                shapes={RightShapes}
                right={true}
            />
        </Background>
    );
};

export default WhatHappenedHereSummary;
