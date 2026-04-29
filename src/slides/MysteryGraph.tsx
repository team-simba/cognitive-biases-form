import { useSelector } from 'react-redux';

import Background from '../components/Background';
import Card from '../components/Card';
import TitleSideLine from '../components/TitleSideLine';
import VotingChart from '../components/VotingChart/VotingChart';

import type { RootState } from '../store/store';
import type { VoteItem } from '../types/vote';

interface MysteryDataPoint {
    rating: 1 | 2 | 3 | 4;
    blue: number;
    green: number;
}

interface MysteryGraphProps {
    data: MysteryDataPoint[];
}

const MysteryGraph: React.FC<MysteryGraphProps> = ({ data }) => {
    const userVote = useSelector(
        (state: RootState) => state.userAnswers.mysteryCandidateRating
    );
    const secretFinding = useSelector(
        (state: RootState) => state.userAnswers.mysterySecretFinding
    );
    const userGroup: 'blue' | 'green' = secretFinding === 'positive' ? 'green' : 'blue';

    const votes: VoteItem[] = data.map((point) => ({
        category: String(point.rating),
        bars: [
            {
                name: 'blue',
                value: point.blue,
                color: '--color-blue-mid',
                pattern: 'rotateGridPattern',
            },
            {
                name: 'green',
                value: point.green,
                color: '--color-green-mid',
                pattern: 'circlePattern',
            },
        ],
        my: userVote === point.rating ? userGroup : '',
    }));

    return (
        <Background>
            <div className="flex flex-col items-center w-full min-h-screen padding-page g-1">
                <TitleSideLine
                    text="הטייה קוגניטיבית מספר 7 - מסתורין"
                    className="self-start"
                />
                <Card
                    width="w-[94.48vw]"
                    padding="p-[1.5vw]"
                    className="flex justify-center"
                >
                    <p className="font-notoSansHebrew-regular text-[1.25vw] leading-[1.8vw] text-right">
                        מקורות מידע חשאיים נתפסים לעיתים כחשובים, מעניינים או אמינים יותר.
                        <br />
                        על אף שמידע ממקורות אלו יכול להיות בעל ערך, לעיתים אנו נוטים לייחס לו משקל
                        רב יותר רק מעצם ההצגה של מידע כ&quot;סודי&quot;, גם כאשר אין לכך הצדקה
                        נוספת.
                    </p>
                </Card>

                <div className="relative w-full mt-[1vw]">
                    <div className="flex justify-end px-[3vw] mb-[1vw] gap-[2vw] font-notoSansHebrew-bold text-[1.1vw] text-black-text">
                        <div className="flex items-center gap-[0.6vw]">
                            <span>נחשף לממצא שלילי סמוי וחיובי גלוי</span>
                            <div className="w-[1.1vw] h-[1.1vw] rotate-45 bg-blue-mid" />
                        </div>
                        <div className="flex items-center gap-[0.6vw]">
                            <span>נחשף לממצא חיובי סמוי ושלילי גלוי</span>
                            <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-green-mid" />
                        </div>
                    </div>

                    <div className="w-[73.8vw] mx-auto">
                        <VotingChart
                            votes={votes}
                            barSize={50}
                            barGap={20}
                            showCategoryLabels={true}
                            showPercentage={true}
                            percentageFontSize="1.1vw"
                            fontSizeMy="1vw"
                        />
                    </div>

                    <div className="flex justify-between px-[5vw] mt-[0.5vw] font-ploni-bold text-[1.25vw] text-gray-dark">
                        <span>אי תמיכה במועמד</span>
                        <span>תמיכה במועמד</span>
                    </div>
                </div>
            </div>
        </Background>
    );
};

export default MysteryGraph;
