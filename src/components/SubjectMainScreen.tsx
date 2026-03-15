import Background from './Background';
import Card from './Card';
import TitleSideLine from './TitleSideLine';
import BackgroundShapes from '../assets/content-cognitive-bias-summary.svg';

interface SubjectMainScreenProps {
    titleContent: string;
    content: React.ReactNode;
}

const SubjectMainScreen: React.FC<SubjectMainScreenProps> = ({ titleContent, content }) => {
    return (
        <Background>
            <div className="flex flex-col padding-page g-1">
                <TitleSideLine text={titleContent} />
                <Card
                    className="z-10 font-notoSansHebrew-regular leading-[2.3vw]"
                    width="w-[94.479vw]"
                >
                    {content}
                </Card>
                <img src={BackgroundShapes} className="absolute bottom-0 w-[89vw]" />
            </div>
        </Background>
    );
};

export default SubjectMainScreen;
