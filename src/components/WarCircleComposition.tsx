import BlueRect from '../assets/ImagesForAnimations/BlueRect.svg';
import CircleDashed from '../assets/ImagesForAnimations/CentralCircle.svg';
import OrangeRect from '../assets/ImagesForAnimations/OrangeRect.svg';
import YellowCircle from '../assets/ImagesForAnimations/YellowCircle.svg';

const WarCircleComposition: React.FC = () => {
    return (
        <div className="relative w-[160px] h-[160px]">
            <img
                src={CircleDashed}
                className="absolute w-full h-full select-none pointer-events-none animate-spin-smooth"
            />
            <div className="absolute inset-0 animate-orbit-smooth">
                <img
                    src={YellowCircle}
                    className="absolute w-[30px] top-[-30px] left-[10px] animate-yellow-circle"
                />
                <img
                    src={BlueRect}
                    className="absolute w-[70px] bottom-[15px] left-[-30px] animate-blue-rect"
                />
                <img
                    src={OrangeRect}
                    className="absolute w-[65px] top-[15px] right-[-35px] animate-orange-rect"
                />
            </div>
        </div>
    );
};

export default WarCircleComposition;
