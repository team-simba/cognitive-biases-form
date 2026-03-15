import ArrowIcon from './Arrow';

import type { BarData } from '../../types/vote';

interface RenderBarPayload {
    index: number;
    category: string;
    my?: string;
    bars: BarData[];
}

interface RenderBarProps {
    x: number;
    y: number;
    width: number;
    height: number;
    payload: RenderBarPayload;
    showPercentage?: boolean;
    percentageFontSize?: string;
    fontSizeMy?: string;
}

export const renderBar = (props: RenderBarProps, barName: string) => {
    const { x, y, width, height, payload, showPercentage, percentageFontSize, fontSizeMy } = props;

    const isMyVote = payload.my === barName;
    const barData = payload.bars.find((b) => b.name === barName);
    const fillColor = barData?.color ? `var(${barData.color})` : 'gray';

    const patternId = barData?.pattern || 'diamondPattern';
    const percentage = barData ? `${barData.value}%` : '';
    const label = barData?.label || '';

    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill={fillColor} />
            <rect x={x} y={y} width={width} height={height} fill={`url(#${patternId})`} />
            {isMyVote && (
                <g
                    transform={`translate(${x + width / 2 - 10}, ${showPercentage ? y - 60 : y - 35})`}
                >
                    <ArrowIcon fillColor={fillColor} />

                    <text
                        x={10}
                        y={-10}
                        textAnchor="middle"
                        className={`text-[${fontSizeMy}] font-notoSansHebrew-semiBold`}
                        fill="var(--color-black-text)"
                    >
                        ההצבעה שלך
                    </text>
                </g>
            )}
            {showPercentage && barData && (
                <text
                    x={x + width / 2}
                    y={y - 10}
                    textAnchor="middle"
                    className={`font-light text-[${percentageFontSize}]`}
                >
                    {percentage}
                </text>
            )}
            {barName &&
                barName.split('\n').map((line, i) => (
                    <text
                        x={x + width / 2}
                        y={y + height / 2 + i * 30 - (barName.split('\n').length - 1) * 10}
                        textAnchor="middle"
                        className={`fill-white text-[1.67vw] ${i === 0 ? 'font-bold' : 'font-medium'} `}
                        dominantBaseline="middle"
                    >
                        {line}
                    </text>
                ))}
            {label &&
                label.split('\n').map((line, i) => (
                    <text
                        x={x + width / 2}
                        y={y + height + 20 + i * 20}
                        textAnchor="middle"
                        className="text-[1.25vw] fill-black"
                    >
                        {line}
                    </text>
                ))}
        </g>
    );
};
