import { motion } from 'framer-motion';

import Background from '../Background';
import { renderTextWithNumbers } from './renderTextWithNumbers';
import { useDiamondAnimation } from './useDiamondAnimation';

interface AnimatedDiamondTextProps {
    text: string;
}

const AnimatedDiamondText: React.FC<AnimatedDiamondTextProps> = ({ text }) => {
    const { diamond, highlightedChars, lettersRef } = useDiamondAnimation(text);

    return (
        <Background>
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute bg-[color:var(--color-secondary)] opacity-100 rounded-[0.3vw]"
                    style={{
                        width: `${diamond.size}vw`,
                        height: `${diamond.size}vw`,
                        top: `${diamond.top}vh`,
                        left: `${diamond.left}vw`,
                        transform: `rotate(${diamond.angle}deg)`,
                        willChange: 'transform, width, height, top, left',
                    }}
                />
                <div
                    className={`
                        relative select-none pointer-events-none font-ploni-bold
                        text-[color:var(--color-primary)] leading-[1.1]
                        text-[9.8vw]
                    `}
                >
                    {renderTextWithNumbers(text, lettersRef, highlightedChars)}
                </div>
            </div>
        </Background>
    );
};

export default AnimatedDiamondText;
