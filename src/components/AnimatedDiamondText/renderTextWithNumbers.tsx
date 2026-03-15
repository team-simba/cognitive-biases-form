export const renderTextWithNumbers = (
    text: string,
    lettersRef: React.MutableRefObject<(HTMLSpanElement | null)[]>,
    highlightedChars: boolean[]
) => {
    const segments = text.match(/[\d.]+|[^\d.]+/g) || [];

    return segments.map((segment, segmentIdx) => {
        const isNumberGroup = /^[\d.]+$/.test(segment);

        return (
            <span
                key={`seg-${segmentIdx}`}
                dir={isNumberGroup ? 'ltr' : undefined}
                style={isNumberGroup ? { display: 'inline-block' } : undefined}
            >
                {[...segment].map((char, idxWithin) => {
                    const absoluteIdx = text.indexOf(segment, 0) + idxWithin;

                    return (
                        <span
                            key={`${segmentIdx}-${idxWithin}`}
                            ref={(el) => (lettersRef.current[absoluteIdx] = el)}
                            className={`inline-block transition-colors duration-75 ${
                                highlightedChars[absoluteIdx]
                                    ? 'text-white'
                                    : 'text-[color:var(--color-primary)]'
                            }`}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    );
                })}
            </span>
        );
    });
};
