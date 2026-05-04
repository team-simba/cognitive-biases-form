import { motion } from 'framer-motion';

interface ProgressStep {
    line1: string;
    line2?: string;
}

interface SummaryProgressBarProps {
    currentStep: number; // 0-indexed
    steps?: ProgressStep[];
}

const DEFAULT_STEPS: ProgressStep[] = [
    { line1: 'ניסוח' },
    { line1: 'לסיכום' },
    { line1: 'מה אפשר', line2: 'לעשות' },
    { line1: 'הערה', line2: 'אחרונה' },
];

// Figma reference (frame 209:25478) at 1920px viewport:
//   square 35.231 × 30.917 px,  gap 67 px,  bar top 54 px,  label 12 px
//   colors: future #c8c8c8 gray,  active / line / label / completed-fill #5199d3
const SQUARE_W_VW = 1.84;
const SQUARE_H_VW = 1.61;
const STEP_GAP_VW = 3.49;
const SECONDARY = '#5199d3';
const GRAY = '#c8c8c8';

type SquareState = 'completed' | 'active' | 'future';

// Pentagon "flag" SVG path (rectangle 35.231 × 30.917 with diagonal cut at top-left).
// Coordinates kept inside a 0.6px stroke inset so the outline doesn't clip.
const FLAG_OUTLINE_D =
    'M 6.5 0.6 L 34.6 0.6 L 34.6 30.3 L 0.6 30.3 L 0.6 6.5 Z';
// Tiny "L" inside the cut corner — the visible fold line.
const FOLD_DETAIL_D = 'M 6.5 0.6 L 6.5 6.5 L 0.6 6.5';

const Square: React.FC<{ state: SquareState; stepNumber: number }> = ({
    state,
    stepNumber,
}) => {
    const outlineColor = state === 'future' ? GRAY : SECONDARY;
    const isCompleted = state === 'completed';

    return (
        <div
            className="relative"
            style={{
                width: `${SQUARE_W_VW}vw`,
                height: `${SQUARE_H_VW}vw`,
            }}
        >
            {/* Flag outline + folded-corner detail (shown when not completed) */}
            <motion.svg
                viewBox="0 0 35.231 30.917"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{ opacity: isCompleted ? 0 : 1 }}
                transition={{ duration: 0.25, delay: isCompleted ? 0 : 0.25 }}
            >
                <motion.path
                    d={FLAG_OUTLINE_D}
                    fill="white"
                    strokeWidth={1.1}
                    strokeLinejoin="round"
                    initial={false}
                    animate={{ stroke: outlineColor }}
                    transition={{ duration: 0.3 }}
                />
                <motion.path
                    d={FOLD_DETAIL_D}
                    fill="none"
                    strokeWidth={1.1}
                    strokeLinejoin="round"
                    initial={false}
                    animate={{ stroke: outlineColor }}
                    transition={{ duration: 0.3 }}
                />
            </motion.svg>

            {/* Step number in the top-left of the flag */}
            <motion.span
                className="absolute font-notoSansHebrew-medium leading-none select-none pointer-events-none"
                style={{
                    fontSize: '0.62vw',
                    top: '0.16vw',
                    left: '0.36vw',
                }}
                initial={false}
                animate={{
                    opacity: isCompleted ? 0 : 1,
                    color: outlineColor,
                }}
                transition={{
                    duration: 0.25,
                    delay: isCompleted ? 0 : 0.25,
                }}
            >
                {stepNumber}
            </motion.span>

            {/* Filled rounded square with white check — "rises" from the bottom on completion */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{ transformOrigin: 'bottom center' }}
                initial={false}
                animate={{ scaleY: isCompleted ? 1 : 0 }}
                transition={{
                    duration: 0.55,
                    ease: [0.65, 0, 0.35, 1],
                }}
            >
                <svg
                    viewBox="0 0 35.231 30.917"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <rect
                        x="0"
                        y="0"
                        width="35.231"
                        height="30.917"
                        rx="2.5"
                        ry="2.5"
                        fill={SECONDARY}
                    />
                    <motion.path
                        d="M 10 15.5 L 15 20 L 25 10.5"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={false}
                        animate={{ pathLength: isCompleted ? 1 : 0 }}
                        transition={{
                            duration: 0.35,
                            delay: isCompleted ? 0.4 : 0,
                            ease: 'easeOut',
                        }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};

const SummaryProgressBar: React.FC<SummaryProgressBarProps> = ({
    currentStep,
    steps = DEFAULT_STEPS,
}) => {
    // Slot ordering matches Figma "שלב N" reference:
    //   leftmost  = highest-numbered future step
    //   rightmost = step 1
    //   active occupies the slot for `currentStep`
    const slotIndices: number[] = [];
    for (let i = steps.length - 1; i > currentStep; i--) slotIndices.push(i);
    slotIndices.push(currentStep);
    for (let i = currentStep - 1; i >= 0; i--) slotIndices.push(i);

    return (
        <div
            className="absolute z-30 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ top: '5vh' }}
            dir="ltr"
        >
            <div
                className="relative flex items-start"
                style={{ gap: `${STEP_GAP_VW}vw` }}
            >
                {/* Connecting horizontal line behind the squares */}
                <div
                    className="absolute"
                    style={{
                        left: `${SQUARE_W_VW / 2}vw`,
                        right: `${SQUARE_W_VW / 2}vw`,
                        top: `${SQUARE_H_VW / 2}vw`,
                        height: 1,
                        backgroundColor: SECONDARY,
                    }}
                />

                {slotIndices.map((idx) => {
                    const step = steps[idx];
                    const state: SquareState =
                        idx < currentStep
                            ? 'completed'
                            : idx === currentStep
                              ? 'active'
                              : 'future';

                    return (
                        <div
                            key={idx}
                            className="relative flex flex-col items-center"
                            style={{ width: `${SQUARE_W_VW}vw` }}
                        >
                            <Square state={state} stepNumber={idx + 1} />
                            <span
                                className="font-notoSansHebrew-medium text-center whitespace-nowrap"
                                style={{
                                    color: SECONDARY,
                                    fontSize: '0.625vw',
                                    lineHeight: 1.15,
                                    marginTop: '0.45vw',
                                }}
                                dir="rtl"
                            >
                                {step.line1}
                                {step.line2 && (
                                    <>
                                        <br />
                                        {step.line2}
                                    </>
                                )}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SummaryProgressBar;
