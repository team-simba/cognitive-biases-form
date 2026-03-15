import type { ResultsGrafValues, VoteItem } from '../types/vote';

export const buildCigarElephantVotesData = (
    elephant: ResultsGrafValues,
    cigar: ResultsGrafValues
): VoteItem[] => [
    {
        category: 'פיל וחדק',
        bars: [
            {
                name: 'לא',
                value: elephant.noValue,
                color: '--color-blue-mid',
                pattern: 'trianglePattern',
            },
            {
                name: 'כן',
                value: elephant.yesValue,
                color: '--color-blue-mid',
                pattern: 'diamondPattern',
            },
        ],
        my: elephant.my,
    },
    {
        category: 'סיגריות',
        bars: [
            {
                name: 'לא',
                value: cigar.noValue,
                color: '--color-green-mid',
                pattern: 'trianglePattern',
            },
            {
                name: 'כן',
                value: cigar.yesValue,
                color: '--color-green-mid',
                pattern: 'diamondPattern',
            },
        ],
        my: cigar.my,
    },
];
