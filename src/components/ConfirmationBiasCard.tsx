import Card from './Card';

interface ConfirmationBiasCardProps {
    icon?: string;
    title?: string;
    text?: string;
}

const ConfirmationBiasCard: React.FC<ConfirmationBiasCardProps> = ({ icon, title, text }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={icon} alt="icon" className="mb-[1vw]" />
            <Card width={'w-[20.83vw] text-center'} height="h-[12vw]" padding={'p-[1.5vw]'}>
                <span className="font-notoSansHebrew-bold block leading-none">{title}</span>
                <span className="block leading-none">{text}</span>
            </Card>
        </div>
    );
};

export default ConfirmationBiasCard;
