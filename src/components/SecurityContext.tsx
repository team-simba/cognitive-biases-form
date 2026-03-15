import StaticBackground from '../assets/SecurityContext/static.svg';
import Background from '../components/Background';
import Card from '../components/Card';
import FloatingAnimation from '../components/FloatingAnimations';
import TitleSideLine from '../components/TitleSideLine';
import TitleUnderLine from '../components/TitleUnderLine';
import { SecurityContextElements } from '../data/floating-animations';

interface SecurityContextProps {
    titleType: 'TitleUnderLine' | 'TitleSideLine';
    title: string;
    content: React.ReactNode;
}

const SecurityContext: React.FC<SecurityContextProps> = ({ titleType, title, content }) => {
    const TitleComponent = titleType === 'TitleUnderLine' ? TitleUnderLine : TitleSideLine;

    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleComponent text={title} />
                <Card
                    className="z-10 font-notoSansHebrew-regular leading-[2.3vw]"
                    width="w-[94.479vw]"
                >
                    {content}
                </Card>
                <FloatingAnimation
                    staticBackground={StaticBackground}
                    shapes={SecurityContextElements}
                />
            </div>
        </Background>
    );
};

export default SecurityContext;
