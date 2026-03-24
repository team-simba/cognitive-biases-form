import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';

import DevStateViewer from './DevStateViewer';
import { store } from '../store/store';

import type { RootState } from '../store/store';

interface ComponentItem {
    name: string;
    props?: Record<string, unknown>;
    requiresAnswer?: keyof RootState['userAnswers'];
}

interface Subject {
    name: string;
    revealAt?: number; // slide index within subject that reveals the name in nav; omit to always show name
    slides: ComponentItem[];
}

interface SlideShowProps {
    components: ComponentItem[];
}

const SlideShowInner: React.FC = () => {
    const [flatIndex, setFlatIndex] = useState<number>(0);
    const [maxFlatIndex, setMaxFlatIndex] = useState<number>(0);

    const userAnswers = useSelector((state: RootState) => state.userAnswers);

    const cigar = { yesValue: 60, noValue: 40 };
    const elephant = { yesValue: 80, noValue: 20 };

    const mystery = { yomint: 50, cominte: 20, osint: 20, noMatter: 10 };

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

    const subjects: Subject[] = [
        {
            name: 'הטיות קוגניטיביות',
            revealAt: 0,
            slides: [
                { name: 'CognitiveBiasOpening' },
                //video
                { name: 'CognitiveBiasDisclaimer' },
            ],
        },
        {
            name: 'עיגון',

            revealAt: 3,
            slides: [
                { name: 'AnchoringWheel' },
                { name: 'AnchoringWheel2' },
                { name: 'AnchoringQuestion', requiresAnswer: 'europeanCountries' },
                {
                    name: 'AnchoringGraph',
                    props: { dataFor15: data15, dataFor65: data65, step: 1 },
                },
                {
                    name: 'AnchoringGraph',
                    props: { dataFor15: data15, dataFor65: data65, step: 2 },
                },
                { name: 'AnchoringGraph', props: { step: 3 } },
                { name: 'AnchoringSecuritySection', props: { step: 1 } },
                { name: 'AnchoringSecuritySection', props: { step: 2 } },
            ],
        },
        {
            name: 'קלסיפיקציה',
            revealAt: 1,
            slides: [
                { name: 'ClassificationQuetion' },
                { name: 'ClassificationExplanation' },
                {
                    name: 'ResultsGraph2',
                    props: { data: data },
                },
                { name: 'OctoberAnimation' },
                { name: 'ClassificationInContextOctober' },
            ],
        },
        {
            name: 'זמינות',
            revealAt: 2,
            slides: [
                { name: 'CognitiveBiasAvailability' },
                { name: 'Availability', props: { step: 1 } },
                { name: 'Availability', props: { step: 2 } },
            ],
        },
        {
            name: 'תוכן',
            revealAt: 2,
            slides: [
                { name: 'SeeYouAgain' },
                { name: 'LittleDifferently' },
                {
                    name: 'ContentCognitiveBias',
                    props: { elephant: elephant, cigar: cigar },
                },
                { name: 'ContentCognitiveBiasSummary' },
            ],
        },
        {
            name: 'לוגיקה פורמלית',
            revealAt: 2,
            slides: [
                { name: 'CognitiveBiasLogic' },
                { name: 'FirstFormalLogicQuestion' },
                { name: 'ResultGraph', props: { percentage: 80 } },
                { name: 'CognitiveBiasLogic2' },
                { name: 'OctoberAnimation' },
                { name: 'LogicInContextOctober' },
            ],
        },
        {
            name: 'אישוש',
            revealAt: 0,
            slides: [
                { name: 'PrimeMinister' },
                { name: 'MysteryBias', props: { mystery: mystery } },
                { name: 'ConfirmationBiasAns', props: { step: 1 } },
                { name: 'ConfirmationBiasAns', props: { step: 2 } },
                { name: 'ConfirmationBias' },
                { name: 'OctoberAnimation' },
                { name: 'Conception' },
            ],
        },
        {
            name: 'קבלת החלטות',
            revealAt: 0,
            slides: [
                { name: 'DecisionMaking' },
                { name: 'PrimeMinisterDisease' },
                { name: 'TryAgain' },
                { name: 'WhatHappenedHere', props: { dead: dead, save: save } },
                { name: 'WhatHappenedHereSummary', props: { summary: summary } },
                { name: 'OctoberContext', props: { step: 1 } },
                { name: 'OctoberContext', props: { step: 2 } },
            ],
        },
        {
            name: 'סיום',
            slides: [
                { name: 'IntermediateMessage' },
                { name: 'EndPage' },
            ],
        },
    ];

    const totalSlides = subjects.reduce((sum, s) => sum + s.slides.length, 0);

    // Derive subjectIndex and slideIndex from flatIndex
    let subjectIndex = 0;
    let slideIndex = flatIndex;
    for (let i = 0; i < subjects.length; i++) {
        if (slideIndex < subjects[i].slides.length) {
            subjectIndex = i;
            break;
        }
        slideIndex -= subjects[i].slides.length;
    }

    // Update max reached position
    if (flatIndex > maxFlatIndex) {
        setMaxFlatIndex(flatIndex);
    }

    // Derive visited and revealed subjects from maxFlatIndex
    const visitedSubjects = new Set<number>();
    const revealedSubjects = new Set<number>();
    let offset = 0;
    for (let i = 0; i < subjects.length; i++) {
        const subjectSlideCount = subjects[i].slides.length;
        if (maxFlatIndex >= offset) {
            visitedSubjects.add(i);
        }
        if (subjects[i].revealAt == null || maxFlatIndex >= offset + subjects[i].revealAt!) {
            revealedSubjects.add(i);
        }
        offset += subjectSlideCount;
    }

    const currentSlide = subjects[subjectIndex].slides[slideIndex];
    const isLocked = currentSlide.requiresAnswer != null
        && userAnswers[currentSlide.requiresAnswer] === null;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isLocked) return;
            if (e.key === 'ArrowRight') {
                setFlatIndex((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'ArrowLeft' || e.key === 'Enter') {
                setFlatIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [totalSlides, isLocked]);

    const CurrentComponent = lazy(() => import(`../pages/${currentSlide.name}`));
    const currentProps = currentSlide.props || {};

    const handleSubjectClick = (index: number) => {
        if (isLocked) return;
        let clickOffset = 0;
        for (let i = 0; i < index; i++) {
            clickOffset += subjects[i].slides.length;
        }
        setFlatIndex(clickOffset);
    };

    return (
        <>
            <DevStateViewer />
            <div className="w-full h-screen flex flex-col bg-gray-100">
                <nav className="flex gap-2 p-2 bg-white shadow-sm z-20" dir="rtl">
                    {subjects.map((subject, i) => {
                        const isVisited = visitedSubjects.has(i);
                        const isRevealed = revealedSubjects.has(i);
                        const isCurrent = i === subjectIndex;
                        const isDisabled = !isVisited || isLocked;

                        return (
                            <button
                                key={i}
                                disabled={isDisabled}
                                onClick={(e) => {
                                    handleSubjectClick(i);
                                    (e.target as HTMLElement).blur();
                                }}
                                className={`px-3 py-1 rounded text-sm transition-colors ${
                                    isDisabled
                                        ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                        : isCurrent
                                          ? 'bg-blue-500 text-white cursor-pointer'
                                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                                }`}
                            >
                                {isRevealed ? subject.name : `הטיה מספר ${i}`}
                            </button>
                        );
                    })}
                </nav>
                <div className="flex-1 flex items-center justify-center">
                    <Suspense fallback={<div className="text-gray-500">טוען...</div>}>
                        <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                            <CurrentComponent {...currentProps} />
                        </div>
                    </Suspense>
                </div>
            </div>
        </>
    );
};

const SlideShow: React.FC<SlideShowProps> = () => {
    return (
        <Provider store={store}>
            <SlideShowInner />
        </Provider>
    );
};

export default SlideShow;
