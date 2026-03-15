import cigar from '../assets/cigar.svg';

import type { Question } from '../types/question';

export const cigarQuestion: Question = {
    text: (
        <>
            נתון עולם שבו:
            <br />
            כל מה שממכר הוא יקר.
            <br />
            חלק מהסיגריות זולות.
            <br />
            <span className="font-notoSansHebrew-bold whitespace-nowrap">
                האם אפשר להגיד על סמך הנתונים שיש סיגריות שאינן ממכרות?
            </span>
        </>
    ),
    icon: cigar,
};
