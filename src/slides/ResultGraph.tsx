import StaticBackground from '../assets/TopLeftShapes/static.svg';
import Background from '../components/Background';
import FloatingAnimation from '../components/FloatingAnimations';
import Legend from '../components/Legend';
import PieChart from '../components/PieChart';
import TitleUnderLine from '../components/TitleUnderLine';
import { TopLeftShapes } from '../data/floating-animations';

interface ResultsGraphProps {
    percentage: number;
}

const ResultsGraph: React.FC<ResultsGraphProps> = ({ percentage }) => {
    return (
        <Background>
            <FloatingAnimation
                staticBackground={StaticBackground}
                shapes={TopLeftShapes}
                top={true}
                classes="top-[-4.2vh]"
            />
            <div className="flex w-full h-screen padding-page">
                <div className="flex flex-col text-right g-1">
                    <TitleUnderLine text="גרף תוצאות" />
                    <div className="font-notoSansHebrew-regular mb-6">
                        התפלגות הבחירות של הנבדקים בניסוי מקורי:
                    </div>
                    <Legend />

                    <div className="mt-6 font-notoSansHebrew-regular ">
                        משהו לא מסתדר בזה שצריך לבחור את A ו-7, נכון?
                        <br />
                        האמת היא שרוב הנבדקים נכשלים.
                        <br />
                        אפילו בניסוי שלנו רק&nbsp;
                        <span className="font-notoSansHebrew-bold">{percentage}%</span> ענו את
                        התשובה הנכונה.
                    </div>
                </div>
                <div className="mr-[15vw] mt-[5vw]">
                    <PieChart />
                </div>
            </div>
        </Background>
    );
};

export default ResultsGraph;
