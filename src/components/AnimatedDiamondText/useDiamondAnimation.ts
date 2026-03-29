import { useAnimationFrame } from 'framer-motion';
import { useState } from 'react';

import { INITIAL_DIAMOND, speed, growRate } from '../../data/diamond';

import type { DiamondPosition } from '../../types/diamond';

export const useDiamondAnimation = (
    diamondElRef: React.RefObject<HTMLDivElement | null>,
    textRef: React.RefObject<HTMLDivElement | null>,
    whiteTextRef: React.RefObject<HTMLDivElement | null>
) => {
    const [diamond, setDiamond] = useState<DiamondPosition>(INITIAL_DIAMOND);

    useAnimationFrame(() => {
        setDiamond((prev) => ({
            ...prev,
            left: prev.left - speed,
            size: prev.size + growRate,
        }));

        // Update clip-path on the white text layer to match diamond position
        const diamondEl = diamondElRef.current;
        const textEl = textRef.current;
        const whiteEl = whiteTextRef.current;
        if (!diamondEl || !textEl || !whiteEl) return;

        const dRect = diamondEl.getBoundingClientRect();
        const tRect = textEl.getBoundingClientRect();

        // Diamond center relative to text element
        const cx = dRect.left + dRect.width / 2 - tRect.left;
        const cy = dRect.top + dRect.height / 2 - tRect.top;
        // After 45deg rotation, getBoundingClientRect width = side * √2,
        // so width/2 gives the half-diagonal (center to vertex distance)
        const half = dRect.width / 2;

        const toP = (x: number, y: number) =>
            `${((x / tRect.width) * 100).toFixed(1)}% ${((y / tRect.height) * 100).toFixed(1)}%`;

        whiteEl.style.clipPath = `polygon(${toP(cx, cy - half)}, ${toP(cx + half, cy)}, ${toP(cx, cy + half)}, ${toP(cx - half, cy)})`;
    });

    return { diamond };
};
