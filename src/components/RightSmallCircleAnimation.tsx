import { motion } from 'framer-motion';

import { basicCircle, shape1, shape2, shape3 } from '../assets/SvgPathes/RightSmallCircleAnimation';
const RightSmallCircleAnimation = () => {
    return (
        <svg
            viewBox="0 0 315 229"
            className="w-[18.27vw] h-auto absolute bottom-0 right-0 floating"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d={basicCircle}
                stroke="black"
                strokeWidth="3.46577"
                strokeDasharray="6.93 11.55"
                fill="none"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: 'linear',
                }}
            />
            <motion.path
                d={shape1}
                fill="var(--color-golden-yellow)"
                animate={{
                    rotate: [0, 30, -30, 0],
                    y: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.rect
                x="118.793"
                y="200.368"
                width="23.62"
                height="24"
                fill="var(--color-blue-mid)"
                animate={{ rotate: [-150, 150] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2,
                    ease: 'easeInOut',
                }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.g
                initial={{ rotate: 0 }}
                animate={{
                    x: [0, -10, 0],
                    y: [0, -10, 0],
                    rotate: [0, 30, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            >
                <ellipse
                    cx="147.039"
                    cy="121.198"
                    rx="13.936"
                    ry="14.1862"
                    fill="var(--color-warm-red)"
                />
            </motion.g>
            <motion.rect
                x="110.0"
                y="135.0"
                width="42.0223"
                height="8.62467"
                fill="var(--color-orange)"
                animate={{
                    rotate: [-50, 50],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 1.2,
                    ease: 'linear',
                }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.rect
                x="167.0"
                y="90.654"
                width="31.6848"
                height="6.503"
                fill="var(--color-blue-mid)"
                animate={{ rotate: [-70, 70] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 1,
                    ease: 'linear',
                }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.path
                d={shape2}
                fill="var(--color-orange)"
                animate={{ rotate: [80, -80] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2,
                    ease: 'easeInOut',
                }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.path
                d={shape3}
                stroke="black"
                strokeWidth="3.68685"
                strokeLinecap="round"
                animate={{ rotate: -30 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.2,
                    ease: 'easeInOut',
                }}
            />
        </svg>
    );
};

export default RightSmallCircleAnimation;
