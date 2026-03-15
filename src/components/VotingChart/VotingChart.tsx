import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import Patterns from './Patterns';
import { renderBar } from './RenderBar';

import type { VoteItem } from '../../types/vote';

interface FlatBarData {
    category: string;
    index: number;
    my?: string;
    bars: VoteItem['bars'];
    [key: string]:
        | { value: number; color: string; pattern?: string }
        | string
        | number
        | undefined
        | VoteItem['bars'];
}

interface RenderBarProps {
    x: number;
    y: number;
    width: number;
    height: number;
    index?: number;
    payload: FlatBarData;
    fill?: string;
    showPercentage?: boolean;
    fontSizeMy?: string;
}

interface VotingChartProps {
    votes: VoteItem[];
    showCategoryLabels?: boolean;
    barSize?: number;
    barGap?: number;
    showPercentage?: boolean;
    percentageFontSize?: string;
    fontSizeMy?: string;
}

const VotingChart: React.FC<VotingChartProps> = ({
    votes,
    showCategoryLabels = true,
    barSize = 70,
    barGap = 60,
    showPercentage = false,
    percentageFontSize = '1.67vw',
    fontSizeMy = '0.833vw',
}) => {
    const flatData = votes.map((vote, index) => {
        const result: FlatBarData = {
            category: vote.category,
            index,
            my: vote.my,
            bars: vote.bars,
        };

        vote.bars.forEach((bar) => {
            result[bar.name] = {
                value: bar.value,
                color: bar.color,
                pattern: bar.pattern,
            };
        });

        return result;
    });

    const allBarNames = votes[0]?.bars.map((bar) => bar.name) || [];

    return (
        <div className="h-[22vw] w-full">
            <ResponsiveContainer height="100%">
                <BarChart data={flatData} barGap={barGap} margin={{ top: 90, bottom: 15 }}>
                    <Patterns />
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis
                        dataKey="category"
                        axisLine={{ stroke: 'var(--color-gray-dark)', strokeWidth: 2 }}
                        tickLine={false}
                        interval={0}
                        tick={
                            showCategoryLabels
                                ? ({ x, y, payload }) => (
                                      <text
                                          x={x}
                                          y={y + 15}
                                          textAnchor="middle"
                                          className="text-[1.46vw] font-bold"
                                      >
                                          {payload.value}
                                      </text>
                                  )
                                : false
                        }
                    />
                    <YAxis
                        tick={false}
                        axisLine={{ stroke: 'var(--color-gray-dark)', strokeWidth: 2 }}
                    />
                    {allBarNames.map((barName) => (
                        <Bar
                            key={barName}
                            dataKey={(d: FlatBarData) =>
                                (d[barName] as { value: number; color: string; pattern?: string })
                                    ?.value
                            }
                            barSize={barSize}
                            shape={(props) =>
                                renderBar(
                                    {
                                        ...(props as RenderBarProps),
                                        showPercentage,
                                        percentageFontSize,
                                        fontSizeMy,
                                    },
                                    barName
                                )
                            }
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VotingChart;
