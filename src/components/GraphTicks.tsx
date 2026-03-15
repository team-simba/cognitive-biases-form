interface Tick {
    x: number;
    y: number;
    payload: object;
}

const XTick = ({ x, y, payload }: Tick) => (
    <text
        x={x}
        y={y + 20}
        textAnchor="middle"
        fill="var(--color-gray-dark)"
        className="text-[1.46vw] font-bold"
    >
        {payload.value}
    </text>
);

export default XTick;
