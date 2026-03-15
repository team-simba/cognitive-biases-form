import FullDashedCircle from '../assets/ColorfulShapesFrame/full-dashed-circle.svg';
import Background from '../components/Background';
import ColorfulShapesFrame from '../components/ColorfulShapesFrame';

const IntermediateMessage: React.FC = () => {
    return (
        <Background>
            <div className="relative flex items-center justify-center h-screen overflow-hidden shadow-md">
                <div className="text-center z-10">
                    <h2 className="text-primary font-ploni-bold text-[5.2vw] leading-[120%] tracking-normal align-middle">
                        סיימנו ללמוד על
                        <br />
                        ההטיות שלרוב
                        <br />
                        מכשילות אותנו!
                    </h2>
                </div>
                <img
                    src={FullDashedCircle}
                    className="absolute w-[69vw] h-[69vw] animate-spin-smooth"
                />
                <ColorfulShapesFrame></ColorfulShapesFrame>
            </div>
        </Background>
    );
};

export default IntermediateMessage;
