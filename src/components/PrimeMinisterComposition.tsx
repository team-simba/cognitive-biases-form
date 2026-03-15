import BlueRect from '../assets/ImagesForAnimations/BlueRect.svg';
import CircleDashed from '../assets/ImagesForAnimations/CircleDashed.svg';
import GreenCircle from '../assets/ImagesForAnimations/GreenCircle.svg';
import Triangle from '../assets/ImagesForAnimations/Polygon.svg';
import OrangeRect from '../assets/ImagesForAnimations/Rectangle.svg';
import YellowCircle from '../assets/ImagesForAnimations/YellowCircle.svg';

const WarCirclePrimeMinister: React.FC = () => {
    return (
        <div className="overflow-hidden pointer-events-none select-none">
            <div className="absolute top-[-190px] left-[-100px] w-[25vw]">
                <img src={CircleDashed} className="animate-spin-smooth" />
                <div className="absolute inset-0">
                    <img
                        src={BlueRect}
                        className="absolute w-[3vw] bottom-[22px] right-[28px] animate-blue-rect"
                    />
                    <img
                        src={OrangeRect}
                        className="absolute w-[3.3vw] top-[235px] right-[-18px] animate-orange-rect"
                    />
                    <img
                        src={YellowCircle}
                        className="absolute w-[1vw] top-[310px] right-[-20px] animate-yellow-circle"
                    />
                    <img
                        src={GreenCircle}
                        className="absolute w-[2vw] top-[275px] right-[70px] animate-yellow-circle"
                    />
                    <img
                        src={Triangle}
                        className="absolute w-[1.5vw] top-[170px] right-[-3px] animate-blue-rect"
                    />
                </div>
            </div>
        </div>
    );
};

export default WarCirclePrimeMinister;
