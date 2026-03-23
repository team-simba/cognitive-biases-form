import StaticBackground from '../assets/LeftShapes/more-tilt.svg';
import Background from '../components/Background';
import Button from '../components/Button';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import HorizontalDrag from '../components/HorizontalDrag';
import TitleUnderLine from '../components/TitleUnderLine';
import { LeftShapes } from '../data/floating-animations';

const ClassificationQuetion: React.FC = () => {
    const handleSubmit = () => {
        //TODO redux;
    };

    return (
        <Background>
            <div className="relative min-h-screen padding-page">
                <TitleUnderLine text="עוד הטיה!" className={'mb-[1vw]'} />
                <Card
                    width="w-[fit]"
                    height="h-[11vw]"
                    padding="p-[2.6vw]"
                    gap="gap-[0.52vw]"
                    className="absolute justify-center items-end"
                >
                    <p className="font-notoSansHebrew-regular space-y-[0.4vw]">
                        <span>יש בחדר 100 אנשים: 70% עורכי דין, 30% שרברבים.</span>
                        <br />
                        <span>
                            מנחם הוא גבר בן 40, נשוי ללא ילדים, אוהב לעבוד עם כלים בידיים. מעט מקריח
                            ושמנמן, חייכני ואדיב.
                        </span>
                        <br />
                        <span className="font-notoSansHebrew-bold">
                            מה הסיכויים מ- 1 עד 100 שמנחם הוא שרברב?
                        </span>
                    </p>
                </Card>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={LeftShapes}
                    classes="w-[28vw] z-10"
                />
                <HorizontalDrag />
                <div className="w-full flex justify-center pt-[30vw]">
                    <Button
                        marked={false}
                        content="הגשה"
                        inputProvided={true}
                        onClick={handleSubmit}
                        className="shape-angled-top text-[1.67vw]"
                    />
                </div>
            </div>
        </Background>
    );
};
export default ClassificationQuetion;
