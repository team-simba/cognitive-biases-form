import { useRef } from 'react';
import { motion } from 'framer-motion';

import Background from '../Background';
import { useDiamondAnimation } from './useDiamondAnimation';

interface AnimatedDiamondTextProps {
    text: string;
    onComplete?: () => void;
}

const renderText = (text: string) => {
    const segments = text.match(/[\d.]+|[^\d.]+/g) || [];
    return segments.map((segment, i) => {
        const isNumber = /^[\d.]+$/.test(segment);
        return (
            <span
                key={i}
                dir={isNumber ? 'ltr' : undefined}
                style={isNumber ? { display: 'inline-block' } : undefined}
            >
                {segment}
            </span>
        );
    });
};

const AnimatedDiamondText: React.FC<AnimatedDiamondTextProps> = ({ text, onComplete }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const whiteTextRef = useRef<HTMLDivElement>(null);
    const diamondElRef = useRef<HTMLDivElement>(null);
    const { diamond } = useDiamondAnimation(diamondElRef, textRef, whiteTextRef, onComplete);

    return (
        <Background>
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    ref={diamondElRef}
                    className="absolute bg-[color:var(--color-secondary)] rounded-[0.3vw]"
                    style={{
                        width: `${diamond.size}vw`,
                        height: `${diamond.size}vw`,
                        top: `${diamond.top}vh`,
                        left: `${diamond.left}vw`,
                        transform: `rotate(${diamond.angle}deg)`,
                        willChange: 'transform, width, height, top, left',
                    }}
                />
                <div className="relative select-none pointer-events-none">
                    {/* Dark blue base text */}
                    <div
                        ref={textRef}
                        className="font-ploni-bold text-[color:var(--color-primary)] leading-[1.1] text-[9.8vw]"
                    >
                        {renderText(text)}
                    </div>
                    {/* White text clipped to diamond shape */}
                    <div
                        ref={whiteTextRef}
                        className="absolute inset-0 font-ploni-bold text-white leading-[1.1] text-[9.8vw]"
                        style={{ clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)' }}
                    >
                        {renderText(text)}
                    </div>
                </div>
            </div>
        </Background>
    );
};

export default AnimatedDiamondText;
