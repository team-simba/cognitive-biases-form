import type { MysteryValues, VoteItem } from '../types/vote';

interface Information {
    name: string;
    description: string;
}

export const informationSources: Information[] = [
    {
        name: 'אוסינט',
        description:
            'סוכן בנה קשר עם חיילת במשך חודשים, היא הרשתה לו לבקר אותה בלילה בבסיס סודי במרכז, הוא ראה כי הטנקים עדיין באחסון ואין היערכות מיוחדת.',
    },
    {
        name: 'קומינט',
        description:
            'בהאזנה לשיחה של מפקד חיל האוויר, הוא הורה להישאר ברמת כוננות נמוכה אך נתן פקודה להוציא גיחה סיור מעל השמיים הטרטוריאלים שלנו.',
    },
    {
        name: 'יומינט',
        description:
            'פרשנים בערוץ החדשות המרכזי: ״ישנם ריכוזי כוחות על הגבול, אנחנו בוודאי נתקוף היום או מחר, אין מנוס ממלחמה כדי להביס את האויב הציוני״',
    },
];

export const buildMysteryVotesData = (mystery: MysteryValues, myVote: string): VoteItem[] => [
    {
        category: '',
        bars: [
            {
                name: 'יומינט',
                value: mystery.yomint,
                color: '--color-dark-red',
                pattern: 'rotateGridPattern',
            },
            {
                name: 'קומינט',
                value: mystery.cominte,
                color: '--color-orange',
                pattern: 'circlePattern',
            },
            {
                name: 'אוסינט',
                value: mystery.osint,
                color: '--color-green-mid',
                pattern: 'diamondPattern',
            },
            {
                name: 'לא עניין',
                value: mystery.noMatter,
                color: '--color-blue-mid',
                pattern: 'trianglePattern',
            },
        ],
        my: myVote,
    },
];
