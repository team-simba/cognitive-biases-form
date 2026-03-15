import { useSelector } from 'react-redux';

import Background from '../components/Background';
import Card from '../components/Card';
import RightSmallCircleAnimation from '../components/RightSmallCircleAnimation';
import TitleSideLine from '../components/TitleSideLine';
import VotingChart from '../components/VotingChart/VotingChart';
import { buildMysteryVotesData } from '../data/information-source';

import type { RootState } from '../store/store';
import type { MysteryValues, VoteItem } from '../types/vote';

interface MysteryBiasProps {
    mystery: MysteryValues;
}

const MysteryBias: React.FC<MysteryBiasProps> = ({ mystery }) => {
    const myVote = useSelector((state: RootState) => state.guessNumber.expectedAttack);
    const votes: VoteItem[] = buildMysteryVotesData(mystery, myVote);

    return (
        <Background>
            <div className="flex flex-col w-full h-screen padding-page g-1">
                <TitleSideLine text="הטייה קוגניטיבית מספר 6 - הטיית המסתורין" />
                <Card
                    width="w-[94.48vw]"
                    className="flex justify-center font-notoSansHebrew-regular"
                >
                    <span className="text-[1.88vw]">
                        מקורות חשאיים נתפסים כיותר ״מעניינים״ או כמכילים מידע יותר ערכי ומהימן.
                        <br />
                        אומנם מידע מערוצים חשאיים הוא חשוב, אבל יש לנו נטייה לתת לו משקל יתר כי היה
                        קשה יותר להשיג אותו.
                        <br />
                        תראו מה משכנע את רוב האנשים, ועל מה הם מסתכלים הכי הרבה זמן:
                    </span>
                </Card>
                <div className="w-[63.54vw] mx-auto">
                    <VotingChart votes={votes} barSize={120} showPercentage={true}></VotingChart>
                </div>
            </div>
            <RightSmallCircleAnimation />
        </Background>
    );
};

export default MysteryBias;
