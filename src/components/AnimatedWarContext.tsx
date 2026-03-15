import BlueRect from '../assets/ImagesForAnimateWarContext/BlueRect.svg';
import BlueSquare from '../assets/ImagesForAnimateWarContext/BlueSquare.svg';
import CircleDashed from '../assets/ImagesForAnimateWarContext/CircleDashed.svg';
import GreenCircle from '../assets/ImagesForAnimateWarContext/GreenCircle.svg';
import GreenRect from '../assets/ImagesForAnimateWarContext/GreenRect.svg';
import OrangeRect from '../assets/ImagesForAnimateWarContext/OrangeRect.svg';
import RedTriangle from '../assets/ImagesForAnimateWarContext/RedTriangle.svg';
import YellowCircle from '../assets/ImagesForAnimations/YellowCircle.svg';

interface Shape {
    src: string;
    className: string;
}

const shapes: Shape[] = [
    { src: YellowCircle, className: 'bottom-[11vh] right-[16vw] animate-yellow-circle' },
    { src: BlueRect, className: 'bottom-[18vh] right-[10vw] animate-blue-rect' },
    { src: OrangeRect, className: 'bottom-[4vh] right-[10vw] animate-orbit-medium' },
    { src: GreenCircle, className: 'w-[2vw] bottom-[-3.5vh] right-[10vw] animate-green-circle' },
    {
        src: BlueSquare,
        className: 'w-[5vh] h-[5vh] bottom-[-6vh] right-[17vw] rotate-[320deg] animate-blue-square',
    },
    { src: RedTriangle, className: 'w-[2vw] bottom-[4vh] right-[-4.2vw] animate-orbit-slow' },
    {
        src: GreenRect,
        className: 'w-[5vw] bottom-[12vh] right-[-7vw] rotate-[320deg] animate-orbit-medium',
    },
];

const AnimatedWarContext: React.FC = () => {
    return (
        <div className="relative">
            <img
                src={CircleDashed}
                className="absolute w-[35vw] bottom-[-60vh] right-[-14vw] animate-orbit-slow"
                alt="circle dashed"
            />
            <div className="absolute inset-0">
                {shapes.map(({ src, className }, index) => (
                    <img
                        key={index}
                        src={src}
                        className={`absolute ${className}`}
                        alt={`shape-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedWarContext;
