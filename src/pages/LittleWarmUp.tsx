import { useState, useEffect } from 'react';

import ElephantReveal from '../components/AnimatedElephant/ElephantReveal';
import TailAnimationAfterSubmission from '../components/AnimatedElephant/TailAnimationAfterSubmission';
import TailAnimationOnLoad from '../components/AnimatedElephant/TailAnimationOnLoad';
import Background from '../components/Background';
import Button from '../components/Button';
import Card from '../components/Card';
import TitleUnderLine from '../components/TitleUnderLine';

enum AnimationStage {
    Animating = 'animating',
    Submitting = 'submitting',
    ShowElephant = 'showElephant',
}

const LittleWarmUP: React.FC = () => {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Animating);
    const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);

    const handleSelect = (animal: string) => setSelectedAnimal(animal);

    const handleSubmit = () => {
        if (!selectedAnimal) return;
        setStage(AnimationStage.Submitting);
    };
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (stage === AnimationStage.Submitting) {
            timer = setTimeout(() => {
                setStage(AnimationStage.ShowElephant);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [stage]);

    const animals = [
        { name: 'פיל', shape: 'shape-slant-left' },
        { name: 'זיקית', shape: 'shape-angled-top' },
        { name: 'תמנון', shape: 'shape-slant-left' },
        { name: 'חתול', shape: 'shape-angled-top' },
    ];

    const showButtons = stage === AnimationStage.Animating || stage === AnimationStage.Submitting;

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleUnderLine text="קצת חימום לשאלה הבאה" />

                <Card width="w-fit" padding="p-[2.3vw]" gap="gap-[0.52vw]">
                    <p className="font-notoSansHebrew-regular">
                        {stage === AnimationStage.ShowElephant
                            ? 'החיה שהסתתרה היא פיל!'
                            : 'איזו חיה מסתתרת באנימציה הבאה ?'}
                    </p>

                    {showButtons && (
                        <div className="flex gap-[1vw] mt-[1vw] transition-all duration-500">
                            {animals.map(({ name, shape }) => (
                                <Button
                                    key={name}
                                    content={name}
                                    inputProvided={true}
                                    className={`${shape} transition-all duration-300 ${
                                        selectedAnimal === name
                                            ? 'bg-blue-dark scale-105'
                                            : 'bg-secondary hover:bg-blue-mid'
                                    }`}
                                    onClick={() => handleSelect(name)}
                                />
                            ))}
                        </div>
                    )}
                </Card>
            </div>

            {stage === AnimationStage.Animating && <TailAnimationOnLoad isActive />}
            {stage === AnimationStage.Submitting && <TailAnimationAfterSubmission isActive />}
            {stage === AnimationStage.ShowElephant && <ElephantReveal />}

            {stage !== AnimationStage.ShowElephant && (
                <div className="fixed bottom-[3vh] left-1/2 -translate-x-1/2 z-[60]">
                    <Button
                        content="הגשה"
                        inputProvided={!!selectedAnimal}
                        className="shape-angled-top transition-all"
                        onClick={handleSubmit}
                    />
                </div>
            )}
        </Background>
    );
};

export default LittleWarmUP;
