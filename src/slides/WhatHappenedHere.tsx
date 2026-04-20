import Background from '../components/Background';
import Card from '../components/Card';
import TitleSideLine from '../components/TitleSideLine';
import VotingChart from '../components/VotingChart/VotingChart';
import { buildDeadSaveVotesData } from '../data/dead-save-votes';

import type { DeadSaveValues, VoteItem } from '../types/vote';

interface WhatHappenedHereProps {
    dead: DeadSaveValues;
    save: DeadSaveValues;
}

const WhatHappenedHere: React.FC<WhatHappenedHereProps> = ({ dead, save }) => {
    const votesGroup: VoteItem[][] = buildDeadSaveVotesData(dead, save, []);

    return (
        <Background>
            <div className="flex flex-col w-full h-screen padding-page g-1">
                <TitleSideLine text="מה קרה פה?" />
                <Card width="w-[96vw]" className="flex justify-center">
                    <p className="font-notoSansHebrew-regular">
                        שמים לב שאלו
                        <span className="font-notoSansHebrew-bold"> בדיוק אותן תוכניות</span>
                        ,&nbsp;בניסוח אחר?
                        <br />
                        בפעם הראשונה דברים&nbsp;
                        <span className="font-notoSansHebrew-bold">מנוסחים לחיוב </span>
                        (הצלת נפשות) ובפעם השנייה,&nbsp;
                        <span className="font-notoSansHebrew-bold">מנוסחים לשלילה </span>
                        (מוות של אנשים).
                    </p>
                </Card>
                <div className="w-[73.8vw] mx-auto flex justify-between flex-row-reverse">
                    {votesGroup.map((votes) => (
                        <VotingChart
                            votes={votes}
                            barSize={130}
                            barGap={130}
                            showPercentage={true}
                            percentageFontSize="1.25vw"
                        />
                    ))}
                </div>
            </div>
        </Background>
    );
};

export default WhatHappenedHere;
