import { AreaChart, Area, XAxis, YAxis, Label, ResponsiveContainer, ReferenceLine } from 'recharts';

import XTick from './GraphTicks';
import blueArrowIcon from '../assets/blue-arrow-down.svg';
import greenArrowIcon from '../assets/green-arrow-down.svg';
import Patterns from './VotingChart/Patterns';

interface LabelViewBox {
    x: number;
    y: number;
    width?: number;
    height?: number;
}

interface CognitiveBiasChartProps {
    data: { number: number; votes: number }[];
    yourVote: number;
    reference: number;
    color: 'blue' | 'green';
    arrowIconColor?: 'blue' | 'green';
    xTicks?: number[];
}

const CognitiveBiasChart: React.FC<CognitiveBiasChartProps> = ({
    data,
    yourVote,
    reference,
    color = 'green',
    arrowIconColor = 'green',
    xTicks = [0, 25, 45, 65, 100],
}) => {
    const mainColor = `var(--color-${color}-mid)`;
    const gradientId = `color${color.toUpperCase()}`;
    const patternId = `pattern-${color}`;
    return (
        <div
            className="relative w-full h-[45vh] min-h-[320px] rounded-xl overflow-hidden"
            role="img"
            aria-label={`תרשים המציג את התפלגות ההצבעות עבור עוגן ${reference}, כולל הצבעת המשתמש בערך ${yourVote}`}
        >
            <div className="relative h-full z-10 px-[2vw] py-[2vh]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 20, right: 40, left: 40, bottom: 70 }}>
                        <defs>
                            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="15%" stopColor={mainColor} stopOpacity={1} />
                                <stop offset="86%" stopColor={mainColor} stopOpacity={0.15} />
                            </linearGradient>
                            <Patterns />
                        </defs>

                        <XAxis
                            dataKey="number"
                            domain={[0, 100]}
                            ticks={xTicks}
                            tick={<XTick />}
                            axisLine={{ stroke: 'var(--color-gray-dark)' }}
                            tickLine={false}
                        >
                            <Label
                                value="מספר שהוערך"
                                position="insideBottomRight"
                                offset={80}
                                fill="var(--color-gray-dark)"
                                className="text-[1.46vw] font-ploni-bold"
                                style={{
                                    transform: 'translate(-2vw, -1vh)',
                                    textAnchor: 'end',
                                }}
                            />
                        </XAxis>

                        <YAxis tick={false}>
                            <Label
                                value="מספר המצביעים"
                                angle={-90}
                                position="center"
                                offset={-15}
                                fill="var(--color-gray-dark)"
                                className="text-[1.46vw] font-ploni-bold"
                            />
                        </YAxis>
                        <Area
                            type="monotone"
                            dataKey="votes"
                            stroke={mainColor}
                            strokeWidth={3.4}
                            fill={`url(#${gradientId})`}
                            fillOpacity={0.8}
                            isAnimationActive={false}
                        />
                        <Area
                            type="monotone"
                            dataKey="votes"
                            stroke="none"
                            fill={`url(#${patternId})`}
                            fillOpacity={0.3}
                        />

                        <ReferenceLine x={reference} stroke={mainColor} strokeDasharray="30 20" />
                        <ReferenceLine
                            x={yourVote}
                            stroke="none"
                            label={({ viewBox }) => {
                                if (!viewBox) return null;
                                const { x, y, width = 0 } = viewBox as LabelViewBox;
                                return (
                                    <g transform={`translate(${x + width / 2 - 10}, ${y})`}>
                                        <image
                                            href={
                                                arrowIconColor === 'green'
                                                    ? greenArrowIcon
                                                    : blueArrowIcon
                                            }
                                            width="1.26vw"
                                            height="1.54vw"
                                        />
                                        <text
                                            x={10}
                                            y={-5}
                                            textAnchor="middle"
                                            fontSize="20"
                                            className="font-notoSansHebrew-semiBold"
                                        >
                                            ההצבעה שלך
                                        </text>
                                    </g>
                                );
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CognitiveBiasChart;
