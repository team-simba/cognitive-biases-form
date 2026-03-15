import { motion } from 'framer-motion';

import TrunkImage from '../../assets/ImagesForLittleWarmUp/elephant-trunk.png';

interface TailAnimationProps {
    isActive: boolean;
}

const TailAnimationOnLoad: React.FC<TailAnimationProps> = ({ isActive }) => {
    return (
        <div className="absolute bottom-[0vh] left-[2vw] w-[38.879vw] h-[36.16vh] pt-[2vh] overflow-hidden">
            <motion.img
                src={TrunkImage}
                alt="Elephant trunk"
                loading="lazy"
                draggable={false}
                className="absolute bottom-[-2vh] left-0 w-full h-full"
                style={{ willChange: 'transform', transformOrigin: 'bottom center' }}
                animate={isActive ? { rotate: [0, 4, 0, -4, 0] } : { rotate: 0 }}
                transition={
                    isActive
                        ? { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
                        : { undefined }
                }
            />
        </div>
    );
};

export default TailAnimationOnLoad;
