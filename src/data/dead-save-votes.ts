import type { DeadSaveValues, VoteItem, PlanVotes } from '../types/vote';

export const buildDeadSaveVotesData = (
    dead: DeadSaveValues,
    save: DeadSaveValues,
    myVotes: PlanVotes
): VoteItem[][] => [
    [
        {
            category: '',
            bars: [
                {
                    name: 'תכנית ב׳',
                    value: dead.bProgram,
                    color: '--color-blue-mid',
                    label: 'סיכוי של 1/3 שלא ימות אף אחד,\nסיכוי של 2/3 שימותו 600',
                    pattern: 'rotateGridPattern',
                },
                {
                    name: 'תכנית א׳',
                    value: dead.aProgram,
                    color: '--color-green-mid',
                    label: '400 איש ימותו',
                    pattern: 'circlePattern',
                },
            ],
            my: myVotes[1],
        },
    ],
    [
        {
            category: '',
            bars: [
                {
                    name: 'תכנית ב׳',
                    value: save.bProgram,
                    color: '--color-blue-mid',
                    label: 'סיכוי של 1/3 להציל 600,\nסיכוי של 2/3 להציל 0',
                    pattern: 'rotateGridPattern',
                },
                {
                    name: 'תכנית א׳',
                    value: save.aProgram,
                    color: '--color-green-mid',
                    label: '200 איש ינצלו',
                    pattern: 'circlePattern',
                },
            ],
            my: myVotes[0],
        },
    ],
];

export const buildDeadSaveSummaryVotesData = (summary: DeadSaveValues): VoteItem[] => [
    {
        category: '',
        bars: [
            {
                name: 'דילמה ב׳\n תכנית ב׳',
                value: summary.bProgram,
                color: '--color-blue-mid',
                label: 'סיכוי של 1/3 שלא ימות אף אחד,\nסיכוי של 2/3 שימותו 600',
                pattern: 'rotateGridPattern',
            },
            {
                name: 'דילמה א׳\nתכנית א׳',
                value: summary.aProgram,
                color: '--color-green-mid',
                label: '200 איש ינצלו',
                pattern: 'circlePattern',
            },
        ],
        my: summary.my,
    },
];
