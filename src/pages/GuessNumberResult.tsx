import { useSelector } from 'react-redux';

import FullDashedCircle from '../assets/ColorfulShapesFrame/full-dashed-circle.svg';
import Background from '../components/Background';
import ColorfulShapesFrame from '../components/ColorfulShapesFrame';

import type { RootState } from '../store/store';

const GuessNumberResult: React.FC = () => {
    const fortuneWheelNumber = useSelector((state: RootState) => state.guessNumber.fortuneWheel);

    return (
        <Background>
            <div className="absolute w-[26.25vw] h-[13.85vw] top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <span className="font-ploni-bold text-[20vw] leading-[100%] tracking-normal text-center text-primary number">
                    {fortuneWheelNumber}!
                </span>
            </div>
            <div className="relative flex justify-center h-screen">
                <img
                    src={FullDashedCircle}
                    className="absolute w-[60vw] h-[69vw] animate-spin-smooth"
                />
                <ColorfulShapesFrame></ColorfulShapesFrame>
            </div>
        </Background>
    );
};

export default GuessNumberResult;
