import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';

interface OctoberAnimationProps {
    onAdvance?: () => void;
    isFirstVisit?: boolean;
}

const OctoberAnimation: React.FC<OctoberAnimationProps> = ({ onAdvance, isFirstVisit }) => {
    return (
        <AnimatedDiamondText
            text="ובהקשר בטחוני"
            onComplete={isFirstVisit ? onAdvance : undefined}
        />
    );
};

export default OctoberAnimation;
