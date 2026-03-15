import beach from '../assets/beach.svg';
import bus from '../assets/bus.svg';
import cigar from '../assets/cigar.svg';

import type { Question } from '../types/question';

export const questions: Question[] = [
    {
        text: (
            <p className="text-[1.771vw]">
                האם נרתעת משהייה <span className="font-notoSansHebrew-bold">ליד אדם מעשן </span>
                מחשש<span className="font-notoSansHebrew-bold"> לבריאותך</span>?
            </p>
        ),
        icon: cigar,
    },
    {
        text: (
            <p className="text-[1.771vw]">
                האם נרתעת משחייה
                <br />
                <span className="font-notoSansHebrew-bold">בחוף ללא מציל </span> מחשש
                <span className="font-notoSansHebrew-bold"> לטביעה</span>?
            </p>
        ),
        icon: beach,
    },
    {
        text: (
            <p className="text-[1.771vw]">
                האם נרתעת <span className="font-notoSansHebrew-bold">מנסיעה באוטובוס</span>
                <br />
                מחשש<span className="font-notoSansHebrew-bold"> לאירוע טרור</span>?
            </p>
        ),
        icon: bus,
    },
];
