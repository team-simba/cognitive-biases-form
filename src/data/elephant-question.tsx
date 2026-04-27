import coffee from '../assets/coffee.svg';

import type { Question } from '../types/question';

export const elephantQuestion: Question = {
    text: (
        <>
            נתון עולם שבו: <br /> כל המשקאות החמים נשתים בספל. 
            <br />
            חלק מהאנשים שותים קפה קר.
            <br />

            <span className="font-notoSansHebrew-semiBold">
לפי התרשמותכם, האם אפשר להגיד על סמך הנתונים שיש קפה שלא נשתה בספל?            </span>
        </>
    ),
    icon: coffee,
};
