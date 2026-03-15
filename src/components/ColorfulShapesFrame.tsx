import BlueLeftRect from '../assets/ColorfulShapesFrame/blue-left-rect.svg';
import BlueTopRect from '../assets/ColorfulShapesFrame/blue-top-rect.svg';
import BottomOrangeRect from '../assets/ColorfulShapesFrame/bottom-orange-rect.svg';
import FullOrangeRect from '../assets/ColorfulShapesFrame/full-orange-rect.svg';
import GreenEllipse from '../assets/ColorfulShapesFrame/green-ellipse.svg';
import GreenRect from '../assets/ColorfulShapesFrame/green-rect.svg';
import LeftPlus from '../assets/ColorfulShapesFrame/left-plus.svg';
import Minus from '../assets/ColorfulShapesFrame/minus.svg';
import RedEllipse from '../assets/ColorfulShapesFrame/red-ellipse.svg';
import RedTriangular from '../assets/ColorfulShapesFrame/red-triangular.svg';
import RightBlueRect from '../assets/ColorfulShapesFrame/right-blue-rect.svg';
import RightOrangeRect from '../assets/ColorfulShapesFrame/right-orange-rect.svg';
import RightPlus from '../assets/ColorfulShapesFrame/right-plus.svg';
import Subtract from '../assets/ColorfulShapesFrame/subtract.svg';
import YellowTriangular from '../assets/ColorfulShapesFrame/yellow-triangular.svg';

const ColorfulShapesFrame: React.FC = () => {
    return (
        <div>
            <img
                src={LeftPlus}
                className="absolute bottom-[10vh] left-[17.188vw] animate-black-shape"
            />
            <img src={BlueLeftRect} className="absolute bottom-[49vh] left-0 animate-blue-rect" />
            <img
                src={YellowTriangular}
                className="absolute bottom-[49vh] left-[6vw] animate-yellow-circle"
            />
            <img
                src={RedTriangular}
                className="absolute bottom-[64vh] left-[15vw] animate-red-shape"
            />
            <img
                src={GreenRect}
                className="absolute bottom-[80vh] left-[17vw] animate-green-shape"
            />
            <img
                src={BlueTopRect}
                className="absolute bottom-[90vh] right-[24vw] animate-blue-rect"
            />
            <img
                src={Subtract}
                className="absolute bottom-[96vh] right-[17vw] animate-yellow-circle"
            />
            <img
                src={RightPlus}
                className="absolute bottom-[75vh] right-[1vw] animate-black-shape"
            />
            <img
                src={FullOrangeRect}
                className="absolute bottom-[56vh] right-[7vw] animate-orange-rect z-8"
            />
            <img
                src={RedEllipse}
                className="absolute bottom-[43vh] right-[6.7vw] animate-red-shape"
            />
            <img
                src={RightOrangeRect}
                className="absolute bottom-[25vh] right-0 animate-orange-rect"
            />
            <img
                src={RightBlueRect}
                className="absolute bottom-[20vh] right-[5.7vw] animate-blue-rect"
            />
            <img
                src={GreenEllipse}
                className="absolute bottom-[10vh] right-[18.2vw] animate-green-shape"
            />
            <img src={Minus} className="absolute bottom-[3.5vh] right-[4vw] animate-black-shape" />
            <img
                src={BottomOrangeRect}
                className="absolute bottom-0 right-[26vw] animate-orange-rect"
            />
        </div>
    );
};

export default ColorfulShapesFrame;
