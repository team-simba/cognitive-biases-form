import React, { ReactNode } from 'react';

import Background from './Background';
import RightSmallCircleAnimation from './RightSmallCircleAnimation';
import TitleSideLine from './TitleSideLine';

interface BgConfirmationBiasProps {
    children: ReactNode;
}

const BgConfirmationBias: React.FC<BgConfirmationBiasProps> = ({ children }) => {
    return (
        <Background>
            <div className="flex flex-col h-screen overflow-clip g-1 padding-page">
                <TitleSideLine text="הטייה קוגניטיבית מספר 7 – אישוש" />
                <div className="font-notoSansHebrew-regular flex-grow">{children}</div>
                <RightSmallCircleAnimation />
            </div>
        </Background>
    );
};

export default BgConfirmationBias;
