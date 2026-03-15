import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/store';

interface ComponentItem {
    name: string;
    props?: Record<string, unknown>;
}

interface SlideShowProps {
    components: ComponentItem[];
}

const SlideShow: React.FC<SlideShowProps> = () => {
    const [index, setIndex] = useState<number>(0);

    const cigar = { yesValue: 60, noValue: 40 };
    const elephant = { yesValue: 80, noValue: 20 };

    const mystery = { yomint: 50, cominte: 20, osint: 20, noMatter: 10 };

    const answers = {
        bus: { noValue: 70, yesValue: 30 },
        beach: { noValue: 70, yesValue: 30 },
        smoking: { noValue: 70, yesValue: 30 },
    };

    const dead = { bProgram: 78, aProgram: 22 };
    const save = { bProgram: 28, aProgram: 72 };
    const summary = { bProgram: 78, aProgram: 72 };

    const RANGE = 100;
    const SCALE = 850;
    const VARIANCE = 100;

    const createData = (center: number): { number: number; votes: number }[] =>
        Array.from({ length: RANGE }, (_, i) => {
            const x = i + 1;
            const gaussianValue = Math.exp(-Math.pow(x - center, 2) / (2 * VARIANCE)) * SCALE;
            return { number: x, votes: Math.round(gaussianValue) };
        });

    const data = createData(50);
    const data15 = createData(35);
    const data65 = createData(45);

    const slides = [
        { name: 'StartCognitiveBias', screenNum: '1' },
        { name: 'CognitiveBias', screenNum: '4' },
        { name: 'GuessPage', screenNum: '6' },
        { name: 'GuessNumberResult', screenNum: '7' },
        { name: 'ContinueGuessing', screenNum: '9' },
        {
            name: 'CognitiveBiasView',
            props: { dataFor15: data15, dataFor65: data65, step: 1 },
            screenNum: '10',
        },
        {
            name: 'CognitiveBiasView',
            props: { dataFor15: data15, dataFor65: data65, step: 2 },
            screenNum: '67',
        },
        { name: 'CognitiveBiasView', props: { step: 3 }, screenNum: '68' },
        { name: 'SecurityAnchoringSection', props: { step: 1 }, screenNum: '12' },
        { name: 'SecurityAnchoringSection', props: { step: 2 }, screenNum: '12' },
        { name: 'QuestionsSection', screenNum: '13' },
        { name: 'Results', props: { answers }, screenNum: '69' },
        { name: 'CognitiveBiasAvailability', screenNum: '15' },
        { name: 'Availability', props: { step: 1 }, screenNum: '19ג' },
        { name: 'Availability', props: { step: 2 }, screenNum: '19ג' },
        { name: 'SeeYouAgain', screenNum: '20' },
        { name: 'LittleDifferently', screenNum: '21' },
        {
            name: 'ContentCognitiveBias',
            props: { elephant: elephant, cigar: cigar },
            screenNum: '24',
        },
        { name: 'ContentCognitiveBiasSummary', screenNum: '25' },
        { name: 'LittleWarmUP', screenNum: '26' },
        { name: 'CognitiveBiasLogic', screenNum: '28' },
        { name: 'FirstFormalLogicQuestion', screenNum: '29' },
        { name: 'ResultGraph', props: { percentage: 80 }, screenNum: '30' },
        { name: 'CognitiveBiasLogic2', screenNum: '31' },
        { name: 'MovieInCinemaQuestion', screenNum: '32' },
        { name: 'MovieInCinemaResult', screenNum: '33' },
        { name: 'OctoberAnimation', screenNum: '19' },
        { name: 'LogicInContextOctober', screenNum: '35' },
        { name: 'MoreTilt', screenNum: '36' },
        {
            name: 'ResultsGraph2',
            props: { data: data },
            screenNum: '37',
        },
        { name: 'CognitiveBiasClassification', screenNum: '38' },
        { name: 'WarContext', screenNum: '40' },
        { name: 'WarContextsAnswer', screenNum: '41' },
        { name: 'OctoberAnimation', screenNum: '42' },
        { name: 'ClassificationInContextOctober', screenNum: '43' },
        { name: 'PrimeMinister', screenNum: '44' },
        { name: 'MysteryBias', props: { mystery: mystery }, screenNum: '45' },
        { name: 'ConfirmationBiasAns', props: { step: 1 }, screenNum: '46' },
        { name: 'ConfirmationBiasAns', props: { step: 2 }, screenNum: '47' },
        { name: 'ConfirmationBias', screenNum: '48' },
        { name: 'OctoberAnimation', screenNum: '19' },
        { name: 'Conception', screenNum: '71' },
        { name: 'DecisionMaking', screenNum: '50' },
        { name: 'PrimeMinisterDisease', screenNum: '51' },
        { name: 'TryAgain', screenNum: '52' },
        { name: 'WhatHappenedHere', props: { dead: dead, save: save }, screenNum: '53' },
        { name: 'WhatHappenedHereSummary', props: { summary: summary }, screenNum: '54' },
        { name: 'OctoberContext', props: { step: 1 }, screenNum: '19' },
        { name: 'OctoberContext', props: { step: 2 }, screenNum: '55' },
        { name: 'IntermediateMessage', screenNum: '58' },
        { name: 'EndPage', screenNum: '60' },
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                setIndex((prev) => (prev + 1 < slides.length ? prev + 1 : 0));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slides.length]);

    const CurrentComponent = lazy(() => import(`../pages/${slides[index].name}`));

    const currentProps = slides[index].props || {};

    return (
        <Provider store={store}>
            <div className="w-full h-screen flex items-center justify-center bg-gray-100">
                <Suspense fallback={<div className="text-gray-500">טוען...</div>}>
                    <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                        <CurrentComponent {...currentProps} />
                    </div>
                </Suspense>
            </div>
        </Provider>
    );
};

export default SlideShow;
