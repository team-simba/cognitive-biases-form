import EggsIcon from '../assets/ImagesWarContext/EggsIcon';
import FarmerIcon from '../assets/ImagesWarContext/FarmerIcon';
import PeasIcon from '../assets/ImagesWarContext/PeasIcon';
import SheepIcon from '../assets/ImagesWarContext/SheepIcon';

export const warOptions = [
    { text: 'מחירי אפונה יבשה בגרמניה', icon: PeasIcon },
    { text: 'מחירי בשר כבשים בגרמניה', icon: SheepIcon },
    {
        text: (
            <>
                מחירי הביצים
                <br />
                בגרמניה
            </>
        ),
        icon: EggsIcon,
    },
    { text: 'תנועת האיכרים דרומה לפולין', icon: FarmerIcon },
];
