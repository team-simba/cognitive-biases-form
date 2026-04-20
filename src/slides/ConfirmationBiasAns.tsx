import BgTop from '../assets/ConfirmationBias/BgTop.png';
import EvidenceIcon from '../assets/ConfirmationBias/EvidenceIcon.svg';
import HandsIcon from '../assets/ConfirmationBias/HandsIcon.svg';
import lightIcon from '../assets/ConfirmationBias/lightIcon.svg';
import SearchIcon from '../assets/ConfirmationBias/SearchIcon.svg';
import BgConfirmationBias from '../components/BgConfirmationBias';
import ConfirmationBiasCard from '../components/ConfirmationBiasCard';

import type { StepComponent } from '../types/step';

interface ConfirmationBiasAnsProps {
    step: StepComponent;
}

const ConfirmationBiasAns: React.FC<ConfirmationBiasAnsProps> = ({ step }) => {
    return (
        <BgConfirmationBias>
            {step === 1 && (
                <img src={BgTop} alt="top bg-img" className="fixed left-0 top-[-4vw] w-[20vw]" />
            )}
            <div className="flex flex-col gap-[1vw] text-[1.875vw] text-right">
                <p>
                    לכולנו יש אמונות. זה לא חייב להיות משהו גדול.
                    <br />
                    אמונה גם יכולה להיות משהו ממש יום-יומי - למשל למשל רוני מאמינה שדני, חבר שלה
                    לקורס, מאוהב בה.
                    <br />
                    יכולים לחשוב למה זה יכול להיות בעייתי?
                    <br />
                    <span className="font-notoSansHebrew-bold"> בואו ננסה להבין...</span>
                </p>
                {step === 2 && (
                    <div className="flex justify-center flex-row gap-[1.5vw]">
                        <ConfirmationBiasCard
                            icon={HandsIcon}
                            title={'אמונה'}
                            text={'רוני מאמינה שדני מאוהב בה'}
                        ></ConfirmationBiasCard>
                        <ConfirmationBiasCard
                            icon={SearchIcon}
                            title={'חיפוש אחר ראיות'}
                            text={'רוני לא ממש בטוחה, תאשש את המחשבה עם עוד מידע'}
                        ></ConfirmationBiasCard>
                        <ConfirmationBiasCard
                            icon={EvidenceIcon}
                            title={'ראיות'}
                            text={'היום דני חייך לרוני, ישב לידה בחד"א, הסתכל עליה וגם נגע לה בכתף'}
                        ></ConfirmationBiasCard>
                        <ConfirmationBiasCard
                            icon={lightIcon}
                            title={'הסקת מסקנות'}
                            text={'זאת באמת התנהגות של מישהו מאוהב!'}
                        ></ConfirmationBiasCard>
                    </div>
                )}
            </div>
        </BgConfirmationBias>
    );
};

export default ConfirmationBiasAns;
