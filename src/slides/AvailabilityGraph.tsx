import Background from '../components/Background';
import Card from '../components/Card';
import TitleUnderLine from '../components/TitleUnderLine';
import VotingChart from '../components/VotingChart/VotingChart';
import { buildCigarElephantVotesData } from '../data/cigar-elephent-votes';

import type { ResultsGrafValues, VoteItem } from '../types/vote';

interface VotingChartProps {
    elephant: ResultsGrafValues;
    cigar: ResultsGrafValues;
}

const ContentGraph: React.FC<VotingChartProps> = ({ elephant, cigar }) => {
    const votes: VoteItem[] = buildCigarElephantVotesData(
        { ...elephant, my: '' },
        { ...cigar, my: '' }
    );

    return (
        <Background>
            <div className="flex flex-col w-full h-screen padding-page g-1">
                <TitleUnderLine text="הטייה קוגניטיבית מספר 3 - זמינות" />
                <Card width="w-[94.48vw]" padding="p-8" className="flex justify-center">
                    <p className="font-notoSansHebrew-regular">
                    <p className="font-notoSansHebrew-bold inline">
מה היה ברשימה שראיתם?</p>&nbsp;
חלק מכם קיבלתם רשימה שבה יש יותר נשים אך היו בה יותר גברים מפורסמים וחלק מכם קיבלתם רשימה שהיו בה יותר גברים אך יותר נשים מפורסמות.
<br/><p className="font-notoSansHebrew-bold inline">מה רוב המשתתפים ענו?</p>&nbsp;
ברוב המקרים, המשתתפים נטו לבחור את המין שבו הופיעו יותר שמות מוכרים/מפורסמים - גם כשבפועל זה לא היה המין השכיח יותר ברשימה.

                    </p>
                </Card>
                <div className="w-[63.54vw] mx-auto">
                    <VotingChart
                        votes={votes}
                        fontSizeMy="1.25vw"
                        showPercentage={true}
                    ></VotingChart>
                </div>
            </div>
        </Background>
    );
};

export default ContentGraph;
