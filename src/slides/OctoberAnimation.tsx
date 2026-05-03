import AnimatedDiamondText from '../components/AnimatedDiamondText/AnimatedDiamondText';

interface OctoberAnimationProps {
    onAdvance?: () => void;
}

const OctoberAnimation: React.FC<OctoberAnimationProps> = ({ onAdvance }) => {
    return <AnimatedDiamondText text="ובהקשר בטחוני" onComplete={onAdvance} />;
};

export default OctoberAnimation;
