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
                <TitleUnderLine text="הטייה קוגניטיבית מספר 3 - תוכן" />
                <Card width="w-[94.48vw]" padding="p-8" className="flex justify-center">
                    <p className="font-notoSansHebrew-regular">
                        נראה שהלך לך קל עם הפיל וחדקו… אבל כשעברנו לדבר על סיגריות — פתאום זה נהיה
                        מסובך יותר, נכון?
                        <br />
                        שתי השאלות זהות מבחינה לוגית, אבל
                        <span className="font-notoSansHebrew-bold">
                            &nbsp;התוכן שלהן שינה לגמרי את התגובה
                        </span>
                        &nbsp;שלך.
                        <br />
                        המוח שלנו מושפע מהקשר, מרגש ומהעולם שמסביב לתוכן — לא רק מההיגיון.
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
