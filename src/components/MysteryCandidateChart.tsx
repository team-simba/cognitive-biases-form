import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface MysteryDataPoint {
    rating: 1 | 2 | 3 | 4;
    blue: number;
    green: number;
}

interface MysteryCandidateChartProps {
    data: MysteryDataPoint[];
    yourVote?: 1 | 2 | 3 | 4 | null;
    voteGroup?: 'blue' | 'green';
}

const RatingTick = ({ x, y, payload }: { x: number; y: number; payload: { value: number } }) => (
    <text
        x={x}
        y={y + 22}
        textAnchor="middle"
        fill="var(--color-gray-dark)"
        className="text-[1.46vw] font-bold"
    >
        {payload.value}
    </text>
);

const VoteMarker = ({
    x,
    width,
    payload,
    yourVote,
    voteGroup,
}: {
    x?: number;
    width?: number;
    payload?: MysteryDataPoint;
    yourVote: 1 | 2 | 3 | 4 | null;
    voteGroup: 'blue' | 'green';
}) => {
    if (yourVote == null || !payload || payload.rating !== yourVote) return null;
    const cx = (x ?? 0) + (width ?? 0) / 2;
    const fillColor = voteGroup === 'green' ? 'var(--color-green-mid)' : 'var(--color-blue-mid)';
    return (
        <g transform={`translate(${cx}, 0)`}>
            <text
                x={0}
                y={18}
                textAnchor="middle"
                fontSize="20"
                className="font-notoSansHebrew-semiBold"
                fill="var(--color-gray-dark)"
            >
                ההצבעה שלך
            </text>
            <polygon points="-10,28 10,28 0,46" fill={fillColor} />
        </g>
    );
};

const MysteryCandidateChart: React.FC<MysteryCandidateChartProps> = ({
    data,
    yourVote = null,
    voteGroup = 'blue',
}) => {
    return (
        <div
            className="relative w-full h-full rounded-xl overflow-hidden"
            role="img"
            aria-label="תרשים תמיכה במועמד לפי קבוצת חשיפה"
            style={{ pointerEvents: 'none' }}
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 60, right: 40, left: 40, bottom: 40 }}>
                    <XAxis
                        dataKey="rating"
                        type="category"
                        tick={(props) => <RatingTick {...props} />}
                        axisLine={{ stroke: 'var(--color-gray-dark)', strokeWidth: 2 }}
                        tickLine={false}
                        interval={0}
                    />
                    <YAxis
                        tick={false}
                        axisLine={{ stroke: 'var(--color-gray-dark)', strokeWidth: 2 }}
                    />
                    <Bar
                        dataKey="blue"
                        fill="var(--color-blue-mid)"
                        fillOpacity={0.85}
                        isAnimationActive={false}
                        label={
                            voteGroup === 'blue'
                                ? (props) => (
                                    <VoteMarker
                                        {...(props as { x: number; y: number; width: number; payload: MysteryDataPoint })}
                                        yourVote={yourVote}
                                        voteGroup="blue"
                                    />
                                )
                                : undefined
                        }
                    />
                    <Bar
                        dataKey="green"
                        fill="var(--color-green-mid)"
                        fillOpacity={0.85}
                        isAnimationActive={false}
                        label={
                            voteGroup === 'green'
                                ? (props) => (
                                    <VoteMarker
                                        {...(props as { x: number; y: number; width: number; payload: MysteryDataPoint })}
                                        yourVote={yourVote}
                                        voteGroup="green"
                                    />
                                )
                                : undefined
                        }
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MysteryCandidateChart;
