import BlueRect from '../assets/ImagesForAnimations/BlueRect.svg';
import GreenCircle from '../assets/ImagesForAnimations/GreenCircle.svg';
import CircleDashed from '../assets/ImagesForAnimations/MediumCircle.svg';
import OrangeRect from '../assets/ImagesForAnimations/OrangeTrapezoidDownwards.svg';
import Triangle from '../assets/ImagesForAnimations/Polygon.svg';
import YellowCircle from '../assets/ImagesForAnimations/YellowCircle.svg';

const CognitiveBiasComposition: React.FC = () => {
    return (
        <div className="absolute right-[-2.6vw] top-[59.8vh]">
            <img src={CircleDashed} className="animate-spin-smooth" />
            <img
                src={BlueRect}
                className="absolute w-[3vw] top-[170px] right-[440px] animate-blue-rect"
            />
            <img
                src={OrangeRect}
                className="absolute w-[3.3vw] top-[288px] right-[420px] animate-orange-rect"
            />
            <img
                src={YellowCircle}
                className="absolute w-[1vw] top-[250px] right-[500px] animate-yellow-circle"
            />
            <img
                src={GreenCircle}
                className="absolute w-[2vw] top-[230px] right-[390px] animate-yellow-circle"
            />
            <img
                src={Triangle}
                className="absolute w-[1.5vw] top-[36vh] right-[22vw] animate-blue-rect"
            />
        </div>
    );
};

export default CognitiveBiasComposition;
