import { MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import AnchorSvg from '../assets/ImagesForContinueGuessing/anchor-image.svg';
import DragRectangle from '../assets/ImagesForContinueGuessing/drag-rectangle.svg';

interface AnchorDragProps {
    onValueChange?: (value: number) => void;
}

const AnchorDrag: React.FC<AnchorDragProps> = ({ onValueChange }) => {
    const initialPosition = useMemo(() => {
        const vh = window.innerHeight;
        return Math.min(570, vh * 0.6);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);

    const [heightPercent, setHeightPercent] = useState<number>(0);
    const [anchorPosition, setAnchorPosition] = useState<number>(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const hasDragged = useRef(false);

    const TOP_POSITION_PX = 100;
    const BOTTOM_POSITION_PX = initialPosition;

    const handleMouseDown = useCallback((event: MouseEvent) => {
        event.preventDefault();
        hasDragged.current = true;
        setIsDragging(true);
    }, []);

    const handleDragEnd = useCallback(() => setIsDragging(false), []);

    const handleMouseMove = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (!isDragging || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const mouseY = event.clientY - rect.top;

            const clampedY = Math.max(TOP_POSITION_PX, Math.min(mouseY, BOTTOM_POSITION_PX));
            setAnchorPosition(clampedY);
        },
        [isDragging, BOTTOM_POSITION_PX]
    );

    const newHeightPercent = useMemo(() => {
        const span = BOTTOM_POSITION_PX - TOP_POSITION_PX;
        if (span <= 0) return 0;
        const pct = ((BOTTOM_POSITION_PX - anchorPosition) / span) * 100;
        return Math.max(0, Math.min(100, Math.round(pct)));
    }, [anchorPosition, BOTTOM_POSITION_PX]);

    useEffect(() => {
        setHeightPercent(newHeightPercent);
        if (hasDragged.current && onValueChange) {
            onValueChange(newHeightPercent);
        }
    }, [newHeightPercent, onValueChange]);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            className="relative select-none"
        >
            <img
                src={AnchorSvg}
                alt="Anchor graphic"
                className="absolute left-[25vw] top-0 h-[84vh]"
                draggable={false}
            />

            <div
                onMouseDown={handleMouseDown}
                style={{ top: `${anchorPosition}px` }}
                className="absolute left-dynamic cursor-pointer flex items-center justify-center w-[7.9vw] h-[3.8vw] -translate-y-1/2"
            >
                <img
                    src={DragRectangle}
                    alt="Draggable handle"
                    className="absolute inset-0 w-full h-full select-none [left:29.3vw] [right:auto]"
                    draggable={false}
                />

                <span className="relative z-10 text-3xl left-[28.6vw]">{heightPercent}</span>

                <div className="absolute rounded-full bg-anchor w-[1.05vw] h-[1.05vw] left-[26.85vw]" />
                <div className="absolute bg-anchor rounded-full w-[1.66vw] h-[0.41vw] left-[27.76vw]" />
            </div>
        </div>
    );
};

export default AnchorDrag;
