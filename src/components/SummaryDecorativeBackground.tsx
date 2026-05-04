import { motion } from 'framer-motion';

/**
 * Shared decorative background for the first two summary slides
 * (Figma frames 476:16874 and 476:17051).
 *
 * Layout follows the Figma 1920x1080 design — converted to vw (1px ≈ 0.0521vw)
 * so the composition scales with viewport width on standard 16:9 displays.
 *
 * Animation rules (from product brief):
 *   • Dashed line-circles → continuous spin
 *   • Solid colored circles → small translation oscillation
 *   • Rectangles, polygons and light-blue background blobs → static
 */
const DashedCircle: React.FC<{
    sizeVw: number;
    leftVw: number;
    topVw: number;
    durationS?: number;
    strokeWidth?: number;
    dashArray?: string;
}> = ({ sizeVw, leftVw, topVw, durationS = 22, strokeWidth = 3.5, dashArray = '7.6 12.7' }) => (
    <svg
        className="absolute animate-spin-smooth pointer-events-none"
        style={{
            left: `${leftVw}vw`,
            top: `${topVw}vw`,
            width: `${sizeVw}vw`,
            height: `${sizeVw}vw`,
            animationDuration: `${durationS}s`,
        }}
        viewBox="0 0 100 100"
        fill="none"
    >
        <circle
            cx="50"
            cy="50"
            r="49"
            stroke="black"
            strokeWidth={(strokeWidth * 100) / (sizeVw * 19.2)}
            strokeDasharray={dashArray}
        />
    </svg>
);

const MovingCircle: React.FC<{
    sizeVw: number;
    leftVw: number;
    topVw: number;
    color: string;
    durationS?: number;
    delayS?: number;
    amplitudePx?: number;
}> = ({ sizeVw, leftVw, topVw, color, durationS = 4, delayS = 0, amplitudePx = 12 }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            left: `${leftVw}vw`,
            top: `${topVw}vw`,
            width: `${sizeVw}vw`,
            height: `${sizeVw}vw`,
            backgroundColor: color,
        }}
        animate={{
            x: [0, amplitudePx, -amplitudePx * 0.7, 0],
            y: [0, -amplitudePx * 0.8, amplitudePx, 0],
        }}
        transition={{
            repeat: Infinity,
            duration: durationS,
            ease: 'easeInOut',
            delay: delayS,
        }}
    />
);

const Triangle: React.FC<{
    sizeVw: number;
    leftVw: number;
    topVw: number;
    rotateDeg: number;
    color: string;
}> = ({ sizeVw, leftVw, topVw, rotateDeg, color }) => (
    <svg
        className="absolute pointer-events-none"
        style={{
            left: `${leftVw}vw`,
            top: `${topVw}vw`,
            width: `${sizeVw}vw`,
            height: `${sizeVw}vw`,
            transform: `rotate(${rotateDeg}deg)`,
        }}
        viewBox="0 0 100 100"
    >
        <polygon points="50,12 92,82 8,82" fill={color} />
    </svg>
);

const SummaryDecorativeBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* === Light-blue ambient shapes (very pale, mostly blend with bg) === */}
            <div
                className="absolute flex items-center justify-center"
                style={{ left: '76.13vw', top: '-12.24vw', width: '34.92vw', height: '34.92vw' }}
            >
                <div
                    className="bg-[#e7f6ff]"
                    style={{ width: '24.69vw', height: '24.69vw', transform: 'rotate(-45deg)' }}
                />
            </div>
            <div
                className="absolute flex items-center justify-center"
                style={{ left: '85.54vw', top: '43.39vw', width: '8.05vw', height: '8.05vw' }}
            >
                <div className="bg-[#e7f6ff] w-full h-full -rotate-90" />
            </div>
            <Triangle sizeVw={17.66} leftVw={1.16} topVw={38.59} rotateDeg={39.03} color="#e7f6ff" />
            <Triangle
                sizeVw={11.46}
                leftVw={67.86}
                topVw={16.51}
                rotateDeg={-14.98}
                color="#e7f6ff"
            />
            <Triangle sizeVw={13.04} leftVw={44} topVw={3.96} rotateDeg={35.07} color="#e7f6ff" />
            <div
                className="absolute rounded-full bg-[#e7f6ff]"
                style={{ left: '11.68vw', top: '6.9vw', width: '7.15vw', height: '7.15vw' }}
            />
            <div
                className="absolute rounded-full bg-[#e7f6ff]"
                style={{ left: '41.71vw', top: '43.39vw', width: '17.64vw', height: '17.64vw' }}
            />

            {/* === Bottom cluster (Group 55) === */}

            {/* Spinning dashed circles */}
            <DashedCircle sizeVw={62.25} leftVw={20.63} topVw={30.53} durationS={28} />
            <DashedCircle
                sizeVw={16.74}
                leftVw={11.33}
                topVw={30.97}
                durationS={18}
                dashArray="6 10"
            />
            <DashedCircle
                sizeVw={7.81}
                leftVw={72.85}
                topVw={31.76}
                durationS={14}
                dashArray="5 8"
            />

            {/* Moving solid circles */}
            <MovingCircle
                sizeVw={5.05}
                leftVw={49.45}
                topVw={40.48}
                color="#1f63ab"
                durationS={4.4}
            />
            <MovingCircle
                sizeVw={3.34}
                leftVw={49.11}
                topVw={30.1}
                color="#5ca25e"
                durationS={3.6}
                delayS={0.4}
            />
            <MovingCircle
                sizeVw={6.16}
                leftVw={10.42}
                topVw={36.93}
                color="#5ca25e"
                durationS={5}
                delayS={0.2}
            />
            <MovingCircle
                sizeVw={7.42}
                leftVw={24.44}
                topVw={48.42}
                color="#e5be34"
                durationS={4.8}
                delayS={0.6}
            />

            {/* Static rectangles */}
            <div
                className="absolute bg-[#1f63ab]"
                style={{
                    left: '40.37vw',
                    top: '35.73vw',
                    width: '4.99vw',
                    height: '4.99vw',
                    transform: 'rotate(-175deg)',
                }}
            />
            <div
                className="absolute bg-[#1f63ab]"
                style={{
                    left: '62.71vw',
                    top: '32.18vw',
                    width: '3.15vw',
                    height: '4.01vw',
                    transform: 'rotate(-175deg)',
                }}
            />
            <div
                className="absolute bg-[#a72608]"
                style={{
                    left: '26.07vw',
                    top: '46.36vw',
                    width: '8.82vw',
                    height: '1.8vw',
                    transform: 'rotate(162deg)',
                }}
            />
            <div
                className="absolute bg-[#1f63ab]"
                style={{
                    left: '23.17vw',
                    top: '59.16vw',
                    width: '6.65vw',
                    height: '1.36vw',
                    transform: 'rotate(162deg)',
                }}
            />

            {/* Static polygons (orange / red wedges) */}
            <svg
                className="absolute"
                style={{
                    left: '70.51vw',
                    top: '48.86vw',
                    width: '10.78vw',
                    height: '7.84vw',
                    transform: 'rotate(-161.43deg) scaleY(-1)',
                }}
                viewBox="0 0 207 150"
            >
                <polygon points="103.5,0 207,150 0,150" fill="#ea8c55" />
            </svg>
            <svg
                className="absolute"
                style={{
                    left: '69.24vw',
                    top: '54.52vw',
                    width: '21.9vw',
                    height: '11.74vw',
                    transform: 'rotate(-11.18deg) scaleY(-1)',
                }}
                viewBox="0 0 421 226"
            >
                <polygon points="210.5,0 421,226 0,226" fill="#5ca25e" />
            </svg>

            {/* Static rectangle 3 (orange wedge top center) */}
            <div
                className="absolute bg-[#ea8c55]"
                style={{
                    left: '52.4vw',
                    top: '33.2vw',
                    width: '4.46vw',
                    height: '6.39vw',
                    transform: 'rotate(-148deg)',
                }}
            />
            {/* Static rectangle 4 (orange wedge right) */}
            <div
                className="absolute bg-[#ea8c55]"
                style={{
                    left: '75.39vw',
                    top: '45.1vw',
                    width: '3.05vw',
                    height: '7.15vw',
                    transform: 'rotate(-50.39deg)',
                }}
            />
            {/* Small green/orange detail rectangles */}
            <div
                className="absolute bg-[#5ca25e]"
                style={{
                    left: '87.65vw',
                    top: '60.57vw',
                    width: '5.41vw',
                    height: '2.07vw',
                    transform: 'rotate(-8.14deg)',
                }}
            />
            <div
                className="absolute bg-[#e5be34]"
                style={{
                    left: '17.01vw',
                    top: '56.94vw',
                    width: '5.41vw',
                    height: '2.07vw',
                    transform: 'rotate(-8.14deg)',
                }}
            />
        </div>
    );
};

export default SummaryDecorativeBackground;
