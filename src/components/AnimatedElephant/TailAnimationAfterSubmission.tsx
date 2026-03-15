import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import TrunkImage from '../../assets/ImagesForLittleWarmUp/elephant-trunk.png';
import ElephantImage from '../../assets/ImagesForLittleWarmUp/elephant.svg';

interface TailAnimationProps {
    isActive: boolean;
}

const TailAnimationAfterSubmission: React.FC<TailAnimationProps> = ({ isActive }) => {
    const [phase, setPhase] = useState<'idle' | 'trunk' | 'elephant'>('idle');

    useEffect(() => {
        if (isActive) {
            setPhase('trunk');
            const timer = setTimeout(() => {
                setPhase('elephant');
            }, 5000);
            return () => clearTimeout(timer);
        } else {
            setPhase('idle');
        }
    }, [isActive]);

    return (
        <div className="absolute bottom-[0vh] left-[2vw] w-[38.879vw] h-[36.16vh] overflow-hidden">
            {phase === 'trunk' && (
                <motion.img
                    src={TrunkImage}
                    alt="Elephant trunk"
                    loading="lazy"
                    draggable={false}
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{ willChange: 'transform', transformOrigin: 'bottom center' }}
                    variants={{
                        inactive: { x: 0 },
                        active: { x: [0, 15, -15, 10, -10, 0] },
                    }}
                    animate={isActive ? 'active' : 'inactive'}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                />
            )}

            {phase === 'elephant' && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <motion.img
                        src={ElephantImage}
                        alt="Elephant image"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-[40vw]"
                    />
                </div>
            )}
        </div>
    );
};

export default TailAnimationAfterSubmission;
