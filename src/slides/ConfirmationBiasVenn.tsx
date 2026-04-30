import VennImage from '../assets/ConfirmationBias/venn.png';

const ConfirmationBiasVenn: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f0f9ff]">
            <img src={VennImage} alt="" className="w-full h-full object-contain" />
        </div>
    );
};

export default ConfirmationBiasVenn;
