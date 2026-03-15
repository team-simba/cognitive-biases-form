import { useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { INITIAL_DIAMOND, speed, growRate } from '../../data/diamond';

import type { DiamondPosition } from '../../types/diamond';

export const useDiamondAnimation = (text: string) => {
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    const [highlightedChars, setHighlightedChars] = useState<boolean[]>(
        Array(text.length).fill(false)
    );
    const [diamond, setDiamond] = useState<DiamondPosition>(INITIAL_DIAMOND);

    useAnimationFrame(() => {
        setDiamond((prev) => {
            const nextLeft = prev.left - speed;
            const nextSize = prev.size + growRate;

            const container = lettersRef.current[0]?.closest('div');
            const containerRect = container?.getBoundingClientRect();

            const rects = lettersRef.current.map((el) => el?.getBoundingClientRect());
            const newHighlights = rects.map((r) => {
                if (!r || !containerRect) return false;

                const diamondLeft = (nextLeft / 100) * containerRect.width + containerRect.left;
                const diamondCenter = diamondLeft + ((nextSize / 100) * containerRect.width) / 2;
                const diamondWidth = (nextSize / 100) * containerRect.width;

                return r.left < diamondCenter && r.right > diamondCenter - diamondWidth / 2;
            });

            setHighlightedChars(newHighlights);
            return { ...prev, left: nextLeft, size: nextSize };
        });
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const rects = lettersRef.current.map((el) => el?.getBoundingClientRect());
            const diamondRect = {
                left: (diamond.left / 100) * window.innerWidth,
                top: (diamond.top / 100) * window.innerHeight,
                size: (diamond.size / 100) * window.innerWidth,
            };

            const newHighlights = rects.map((r) => {
                if (!r) return false;
                const diamondX = diamondRect.left;
                const diamondWidth = diamondRect.size;
                const diamondCenter = diamondX + diamondWidth / 2;

                return r.left < diamondCenter && r.right > diamondCenter - diamondWidth / 2;
            });

            setHighlightedChars(newHighlights);
        }, 60);

        return () => clearInterval(interval);
    }, [diamond.left, diamond.size]);

    return { diamond, highlightedChars, lettersRef };
};
