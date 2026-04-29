import CycleImage from '../assets/ConfirmationBias/cycle.png';

const ConfirmationBiasCycle: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f0f9ff]">
            <img src={CycleImage} alt="" className="w-full h-full object-contain" />
        </div>
    );
};

export default ConfirmationBiasCycle;
