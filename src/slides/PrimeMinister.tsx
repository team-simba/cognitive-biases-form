import { useState } from 'react';

import Background from '../components/Background';
import Button from '../components/Button';
import WarCirclePrimeMinister from '../components/PrimeMinisterComposition';
import RotateCard from '../components/RotateCard';
import SkewButton from '../components/SkewButton';
import TitleSideLine from '../components/TitleSideLine';
import VoteButtons from '../components/VoteButtons';
import { informationSources } from '../data/information-source';

const PrimeMinister: React.FC = () => {
    const [voteAnswer, setVoteAnswer] = useState<string>('');
    const [srcAnswer, setSrcAnswer] = useState<string>('');

    const handleSelectVote = (choice: string) => {
        setVoteAnswer((prev) => (prev === choice ? '' : choice));
    };

    const handleSelectSrc = (choice: string) => {
        setSrcAnswer((prev) => (prev === choice ? '' : choice));
    };

    const handleSubmit = () => {
        if (voteAnswer === '' || srcAnswer === '') return;
    };

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <WarCirclePrimeMinister></WarCirclePrimeMinister>
                <TitleSideLine text="ההטייה הבאה - אתם ראש הממשלה" />
                <p className=" text-[1.88vw] font-notoSansHebrew-regular">
                    <span className="font-notoSansHebrew-semiBold">עליך להחליט </span>
                    האם מדינה א׳ תתקוף, יש ברשותך מספר מקורות מידע:
                </p>
                <div className="font-notoSansHebrew-regular flex g-1 ">
                    {informationSources.map((i) => (
                        <RotateCard
                            width="w-[30.52vw]"
                            height="h-[15.63vw]"
                            front={i.name}
                            frontClass="flex items-center justify-center text-[1.88vw] font-notoSansHebrew-bold"
                            back={i.description}
                            backClass="flex items-center justify-center text-[1.88vw]"
                        />
                    ))}
                </div>
                <div className="flex g-2 text-[1.8vw] font-notoSansHebrew-semiBold">
                    <div className="flex flex-col g-1">
                        <span>האם לדעתך הולכת להיות מתקפה?</span>
                        <VoteButtons
                            answer={voteAnswer}
                            className="g-1"
                            onSelect={handleSelectVote}
                        />
                    </div>
                    <div className="flex flex-col g-1">
                        <span>יש מקור ששכנע אותך במיוחד?</span>
                        <div className="flex g-1">
                            <SkewButton text="לא" selected={srcAnswer} onSelect={handleSelectSrc} />
                            {informationSources.map((i) => (
                                <SkewButton
                                    text={i.name}
                                    selected={srcAnswer}
                                    onSelect={handleSelectSrc}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-[2vw]">
                    <Button
                        marked={false}
                        content="הגשה"
                        inputProvided={srcAnswer !== '' && voteAnswer != ''}
                        onClick={handleSubmit}
                        className="shape-angled-top"
                    />
                </div>
            </div>
        </Background>
    );
};

export default PrimeMinister;
