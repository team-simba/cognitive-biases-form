import elephant from '../assets/elephant.svg';

import type { Question } from '../types/question';

export const elephantQuestion: Question = {
    text: (
        <>
            נתון עולם שבו: <br /> דמבו הוא פיל. <br />
            לכל הפילים יש חדק.
            <br />
            <span className="font-notoSansHebrew-semiBold">
                האם אפשר להגיד על סמך הנתונים שלדמבו יש חדק?
            </span>
        </>
    ),
    icon: elephant,
};
