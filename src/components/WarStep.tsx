import Arrow from '../assets/arrow-icon.svg';
import Card from '../components/Card';

interface WarStepProps {
    text: string;
    isBold?: boolean;
}

const WarStep: React.FC<WarStepProps> = ({ text, isBold = false }) => (
    <div className="flex flex-col justify-end g-0">
        {!isBold && <img src={Arrow} alt="arrow-icon" className="w-[5.52vw] self-end" />}
        <Card
            width="w-[15.99vw]"
            height="h-[14.81vh]"
            padding="p-[1.04vw] pt-[1.56vw]"
            className="flex justify-center"
        >
            <span className={`text-[1.7vw] text-center ${isBold && 'font-notoSansHebrew-bold'}`}>
                {text}
            </span>
        </Card>
    </div>
);

export default WarStep;
