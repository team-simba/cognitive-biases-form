import { motion } from 'framer-motion';

import {
    basicCircle,
    shape1,
    shape2,
    shape3,
    shape4,
    shape5,
    shape6,
} from '../assets/SvgPathes/LeftSmallCircleAnimation';
const staticLines = [
    { d: 'M29.8594 181.269L8.62316 183.885', strokeWidth: 3.54892 },
    { d: 'M18.1719 172.553L20.3197 192.593', strokeWidth: 3.54892 },
    { d: 'M194.043 73.8403L184.591 93.9844', strokeWidth: 3.68685 },
    { d: 'M169.473 92.959L170.74 80.7189', strokeWidth: 3.68685 },
];
const LeftSmallCircleAnimation = () => {
    return (
        <svg
            viewBox="0 0 352 292"
            className="w-[20vw] h-auto absolute bottom-0 left-0 floating"
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
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.g
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    rotate: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                style={{ transformOrigin: 'center' }}
            >
                <ellipse
                    cx="196.021"
                    cy="225.923"
                    rx="9.48434"
                    ry="9.65463"
                    fill="var(--color-green-mid)"
                />
            </motion.g>
            <motion.rect
                x="236.953"
                y="242.368"
                width="23.62"
                height="24"
                fill="var(--color-blue-mid)"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.rect
                x="203.137"
                y="143.722"
                width="14.9235"
                height="19.3117"
                fill="var(--color-blue-mid)"
                animate={{
                    rotate: [0, 30, -30, 30],
                    y: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.path
                d={shape2}
                fill="var(--color-warm-red)"
                animate={{
                    rotate: [0, 130, -130, 0],
                    y: [0, -40, 10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: 'easeInOut',
                    delay: 0.4,
                }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.g
                initial={{ rotate: 0 }}
                animate={{
                    rotate: [0, 30, -30, 0],
                    y: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            >
                <ellipse
                    cx="248.698"
                    cy="212.656"
                    rx="6.26166"
                    ry="6"
                    fill="var(--color-golden-yellow)"
                />
            </motion.g>
            <motion.path
                d={shape3}
                fill="var(--color-orange)"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.path
                d={shape4}
                fill="var(--color-green-mid)"
                animate={{
                    x: [50, 30, 50],
                    y: [40, -10, 40],
                    rotate: [0, 40, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: 'easeInOut',
                    delay: 0.7,
                }}
            />
            <motion.path
                d={shape5}
                fill="var(--color-golden-yellow)"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            <motion.path
                d={shape6}
                fill="var(--color-blue-mid)"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    rotate: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
            />
            {staticLines.map((line, i) => (
                <path
                    key={i}
                    d={line.d}
                    stroke="black"
                    stroke-width={line.strokeWidth}
                    stroke-linecap="round"
                />
            ))}
        </svg>
    );
};

export default LeftSmallCircleAnimation;
