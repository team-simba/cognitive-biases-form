import React, { useEffect, useRef, useState } from 'react';
import { Provider, useSelector } from 'react-redux';

import DevStateViewer from './DevStateViewer';
import { store } from '../store/store';

import type { RootState } from '../store/store';

interface ComponentItem {
    name: string;
    props?: Record<string, unknown>;
    requiresAnswer?: keyof RootState['userAnswers'];
    blockNavigation?: boolean;
    autoAdvanceAfter?: number;
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

    const mysteryData: { rating: 1 | 2 | 3 | 4; blue: number; green: number }[] = [
        { rating: 1, blue: 38, green: 4 },
        { rating: 2, blue: 42, green: 12 },
        { rating: 3, blue: 15, green: 36 },
        { rating: 4, blue: 5, green: 48 },
    ];

    const subjects: Subject[] = [
        {
            name: 'הטיות קוגניטיביות',
            revealAt: 0,
            slides: [
                { name: 'CognitiveBiasOpening' },
                { name: 'CognitiveBiasVideo' },
                { name: 'CognitiveBiasDisclaimer' },
            ],
        },
        // {
        //     name: 'עיגון',

        //     revealAt: 2,
        //     slides: [
        //         { name: 'AnchoringWheel', requiresAnswer: 'fortuneWheel' },
        //         { name: 'AnchoringQuestion', requiresAnswer: 'africanCountries' },
        //         {
        //             name: 'AnchoringGraph',
        //             props: { dataFor15: data15, dataFor65: data65, step: 1 },
        //         },
        //         {
        //             name: 'AnchoringGraph',
        //             props: { dataFor15: data15, dataFor65: data65, step: 2 },
        //         },
        //         { name: 'AnchoringSecuritySection', props: { step: 1 } },
        //         { name: 'AnchoringSecuritySection', props: { step: 2 } },
        //     ],
        // },
        // {
        //     name: 'קלסיפיקציה',
        //     revealAt: 1,
        //     slides: [
        //         { name: 'ClassificationQuestion', requiresAnswer: 'plumberProbability' },
        //         { name: 'ClassificationExplanation', props: { data: data },},
        //         { name: 'ClassificationSecuritySection', props: { step: 1 } },
        //         { name: 'ClassificationSecuritySection', props: { step: 2 } },
        //     ],
        // },
        // {
        //     name: 'זמינות',
        //     revealAt: 2,
        //     slides: [
        //         { name: 'AvailabilityNames', blockNavigation: true, autoAdvanceAfter: 10000 },
        //         { name: 'AvailabilityQuestion', requiresAnswer: 'availabilityAnswer' },
        //         { name: 'AvailabilityGraph', props: { elephant: elephant, cigar: cigar }},
        //         { name: 'AvailabilityExplaination'},
        //         { name: 'AvailabilitySecuritySection', props: { step: 1 } },
        //         { name: 'AvailabilitySecuritySection', props: { step: 2 } },
        //     ],
        // },
        // {
        //     name: 'תוכן',
        //     revealAt: 2,
        //     slides: [
        //         { name: 'ContentQuestion1', requiresAnswer: 'elephantAnswer' },
        //         { name: 'ContentQuestion2', requiresAnswer: 'cigarAnswer' },
        //         {
        //             name: 'ContentGraph',
        //             props: { elephant: elephant, cigar: cigar },
        //         },
        //         { name: 'ContentCognitiveBiasSummary' },
        //     ],
        // },
        // {
        //     name: 'לוגיקה פורמלית',
        //     revealAt: 2,
        //     slides: [
        //         { name: 'CognitiveBiasLogic' },
        //         { name: 'FormalLogicQuestion', requiresAnswer: 'formalLogicAnswer' },
        //         { name: 'ResultGraph', props: { percentage: 80 } },
        //         { name: 'CognitiveBiasLogic2' },
        //         { name: 'OctoberAnimation' },
        //         { name: 'LogicInContextOctober' },
        //     ],
        // },
        {
            name: 'מראה',
            revealAt: 0,
            slides: [
                { name: 'MirrorQuestionIntroduction' },
            ],
        },
        {
            name: 'מסתורין',
            revealAt: 0,
            slides: [
                { name: 'MysteryQuestion', requiresAnswer: 'mysteryCandidateRating' },
                { name: 'MysteryResultsIntro' },
                {
                    name: 'MysteryGraph',
                    props: { data: mysteryData },
                },
            ],
        },
        {
            name: 'קבלת החלטות',
            revealAt: 0,
            slides: [
                { name: 'LossAversion', requiresAnswer: 'lossAversionAccept' },
                { name: 'PrimeMinisterDisease', requiresAnswer: 'primeMinisterDiseaseChoice' },
                { name: 'TryAgain', requiresAnswer: 'tryAgainChoice' },
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

    // blockNavigation only applies on first visit (before user has moved past this slide)
    const isFirstVisit = flatIndex >= maxFlatIndex;
    const shouldBlockNav = currentSlide.blockNavigation === true && isFirstVisit;

    const navCooldown = useRef(false);
    const navigateTo = (next: number) => {
        if (navCooldown.current) return;
        navCooldown.current = true;
        setFlatIndex(next);
        setTimeout(() => { navCooldown.current = false; }, 500);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isLocked || shouldBlockNav) return;
            if (e.key === 'ArrowRight') {
                navigateTo(Math.max(0, flatIndex - 1));
            } else if (e.key === 'ArrowLeft' || e.key === 'Enter') {
                navigateTo(Math.min(flatIndex + 1, totalSlides - 1));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [totalSlides, isLocked, flatIndex, shouldBlockNav]);

    useEffect(() => {
        if (!currentSlide.autoAdvanceAfter || !isFirstVisit) return;
        const timer = setTimeout(() => {
            navigateTo(Math.min(flatIndex + 1, totalSlides - 1));
        }, currentSlide.autoAdvanceAfter);
        return () => clearTimeout(timer);
    }, [flatIndex, currentSlide.autoAdvanceAfter, totalSlides, isFirstVisit]);

    const [loadedSlide, setLoadedSlide] = useState<{
        name: string;
        Component: React.ComponentType<any>;
    } | null>(null);

    useEffect(() => {
        let cancelled = false;
        const targetName = currentSlide.name;
        import(`../slides/${targetName}`).then((mod) => {
            if (!cancelled) setLoadedSlide({ name: targetName, Component: mod.default });
        });
        return () => { cancelled = true; };
    }, [currentSlide.name]);

    const currentProps = currentSlide.props || {};
    const onAdvance = () => navigateTo(Math.min(flatIndex + 1, totalSlides - 1));

    const handleSubjectClick = (index: number) => {
        let clickOffset = 0;
        for (let i = 0; i < index; i++) {
            clickOffset += subjects[i].slides.length;
        }
        if (isLocked || shouldBlockNav) return;
        navigateTo(clickOffset);
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
                        // Compute the flat index for this subject's first slide
                        let subjectOffset = 0;
                        for (let j = 0; j < i; j++) {
                            subjectOffset += subjects[j].slides.length;
                        }
                        const isDisabled = shouldBlockNav || !isVisited || (!isCurrent && isLocked);

                        return (
                            <button
                                key={i}
                                disabled={isDisabled}
                                onClick={(e) => {
                                    handleSubjectClick(i);
                                    (e.target as HTMLElement).blur();
                                }}
                                className={`px-3 py-1 rounded text-sm transition-colors ${
                                    isCurrent
                                        ? 'bg-blue-500 text-white cursor-not-allowed'
                                        : isDisabled
                                          ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                                }`}
                            >
                                {isRevealed ? subject.name : `הטיה מספר ${i}`}
                            </button>
                        );
                    })}
                </nav>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                        {loadedSlide && loadedSlide.name === currentSlide.name && (
                            <loadedSlide.Component {...currentProps} onAdvance={onAdvance} />
                        )}
                    </div>
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
