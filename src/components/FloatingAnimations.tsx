type Shapes = {
    staticBackground: string;
    shapes: Array<string>;
    right?: boolean;
    classes?: string;
    top?: boolean;
};

const FloatingAnimation: React.FC<Shapes> = ({
    staticBackground,
    shapes,
    right = false,
    classes = '',
    top = false,
}) => {
    const basePosition = right ? 'right-0' : 'left-0';
    const verticalPosition = top ? '' : 'bottom-0';
    const containerClass = `absolute ${basePosition} ${verticalPosition} ${classes}`;

    return (
        <div className={containerClass}>
            <img src={staticBackground} />
            {shapes.map((shape, i) => (
                <img
                    key={i}
                    src={shape}
                    className={`${containerClass} ${top ? 'floating-top' : 'floating'}`}
                    style={{ '--animation-delay': `${i}s` }}
                />
            ))}
        </div>
    );
};

export default FloatingAnimation;
