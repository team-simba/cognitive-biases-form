import GraphImage from '../assets/Mirror/graph.png';

const MirrorBiasGraph: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f0f9ff]">
            <img src={GraphImage} alt="" className="w-full h-full object-contain" />
        </div>
    );
};

export default MirrorBiasGraph;
