import Card from './Card';

interface RotateCardProps {
    width: string;
    height: string;
    front: string;
    frontClass?: string;
    back: string;
    backClass?: string;
}

const RotateCard: React.FC<RotateCardProps> = ({
    width,
    height,
    front,
    frontClass = '',
    back,
    backClass = '',
}) => {
    return (
        <div className={`group  relative ${width} ${height}`}>
            <div className="relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <Card
                    width={width}
                    height={height}
                    className={`absolute inset-0 backface-hidden ${frontClass}`}
                >
                    {front}
                </Card>

                <Card
                    width={width}
                    height={height}
                    className={`absolute inset-0 [transform:rotateY(180deg)] text-center backface-hidden ${backClass}`}
                >
                    {back}
                </Card>
            </div>
        </div>
    );
};

export default RotateCard;
