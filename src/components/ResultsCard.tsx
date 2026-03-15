import { ReactNode } from 'react';

import Card from './Card';
import VotingChart from './VotingChart/VotingChart';

import type { ResultsGrafValues, VoteItem } from '../types/vote';

interface ResultsCardProps {
    children: ReactNode;
    object: ResultsGrafValues;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ children, object }) => {
    const votesData: VoteItem[] = [
        {
            category: '',
            bars: [
                {
                    name: 'לא',
                    value: object.noValue,
                    color: '--color-dark-red',
                    pattern: 'rotateGridPattern',
                },
                {
                    name: 'כן',
                    value: object.yesValue,
                    color: '--color-orange',
                    pattern: 'circlePattern',
                },
            ],
            my: object.my,
        },
    ];
    return (
        <Card width="w-[25.94vw]" height="h-[56.32vh]">
            {children}
            <VotingChart
                votes={votesData}
                showCategoryLabels={false}
                showPercentage={true}
                fontSizeMy="0.833vw"
            ></VotingChart>
        </Card>
    );
};

export default ResultsCard;
