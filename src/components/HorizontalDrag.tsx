import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DragRectangle from '../assets/ImagesForMoreTilt/drag-rectangle.svg';
import { setPlumber } from '../store/guessSlice';

const HorizontalDrag: React.FC = () => {
    const dispatch = useDispatch();

    const [percent, setPercent] = useState<number>(0);
    const [positionVW, setPositionVW] = useState<number>(10);
    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLImageElement>(null);
    const isDragging = useRef(false);
    const dragOffset = useRef(0);

    const MIN_POSITION_VW = 10;
    const MAX_POSITION_VW = 80;

    const handlePointerMove = useCallback((event: PointerEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left - dragOffset.current;
        const positionPercent = (mouseX / rect.width) * 100;
        const clamped = Math.max(MIN_POSITION_VW, Math.min(positionPercent, MAX_POSITION_VW));
        setPositionVW(clamped);
    }, []);

    const handlePointerUp = useCallback(() => {
        if (isDragging.current) {
            isDragging.current = false;
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        }
    }, [handlePointerMove]);

    const handlePointerDown = useCallback(
        (event: React.PointerEvent<HTMLImageElement>) => {
            if (!containerRef.current || !dragRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const currentPositionPx = (positionVW / 100) * rect.width;
            dragOffset.current = mouseX - currentPositionPx;
            isDragging.current = true;

            document.addEventListener('pointermove', handlePointerMove);
            document.addEventListener('pointerup', handlePointerUp);
        },
        [handlePointerMove, handlePointerUp, positionVW]
    );

    useEffect(() => {
        const newPercent = Math.round(
            ((positionVW - MIN_POSITION_VW) / (MAX_POSITION_VW - MIN_POSITION_VW)) * 100
        );
        setPercent(newPercent);
        dispatch(setPlumber(percent));
    }, [positionVW]);

    return (
        <div ref={containerRef} className="relative select-none">
            <div className="absolute left-[21vw] top-[57vh] w-[90vw] h-[0.4vw] bg-anchor rounded-full mb-[10vw] z-0">
                <div
                    style={{ left: `${positionVW}%` }}
                    className="absolute bottom-0 cursor-pointer -translate-x-1/2 flex flex-col justify-center items-center select-none"
                >
                    <img
                        ref={dragRef}
                        src={DragRectangle}
                        className="rounded-[1vw] h-[4vw] select-none"
                        draggable={false}
                        onPointerDown={handlePointerDown}
                    />
                    <span className="absolute left-[-3vw] inset-0 flex items-center justify-center text-[1.8vw] bottom-[3.5vh] pointer-events-none">
                        {percent}
                    </span>
                    <div className="relative w-[0.4vw] h-[1.7vw] bg-anchor" />
                    <div className="absolute rounded-full bg-anchor w-[1.05vw] h-[1.05vw] top-[10.05vh]" />
                </div>
            </div>
        </div>
    );
};

export default HorizontalDrag;
