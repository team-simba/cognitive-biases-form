import { useState } from 'react';
import { useDispatch } from 'react-redux';

import AnimatedWarContext from '../components/AnimatedWarContext';
import Background from '../components/Background';
import Button from '../components/Button';
import TitleSideLine from '../components/TitleSideLine';
import { warOptions } from '../data/war-options-data';
import { setIntelligenceSource } from '../store/guessSlice';

export default function WarContext() {
    const dispatch = useDispatch();

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const handleSubmit = () => {
        dispatch(setIntelligenceSource(warOptions[selectedIndex].text));
    };

    return (
        <Background>
            <div className="w-full h-screen flex flex-col justify-between p-[3vw] overflow-hidden">
                <TitleSideLine text="ובהקשרי מלחמה" />

                <div className="font-notoSansHebrew-regular">
                    במלחמת העולם השנייה, איזה מקור מודיעיני שימש לדעתכם את הרוסים כאינדיקציה לתקיפה
                    אפשרית מצד גרמניה?
                </div>

                <div className="flex flex-wrap justify-center gap-[2vw] w-full max-w-[90vw] mt-[3.5vw]">
                    {warOptions.map((opt, index) => {
                        const isSelected = selectedIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => handleSelect(index)}
                                className={`group flex flex-col items-center justify-center text-center cursor-pointer
                                            transition-all duration-300
                                            ${isSelected ? 'scale-110' : ''}
                                `}
                            >
                                <opt.icon
                                    className={`transition-all duration-300
                                      max-w-[7vw] md:max-w-[9vw] sm:max-w-[14vw]
                                      h-auto aspect-square
                                      ${
                                          isSelected
                                              ? 'text-blue-mid scale-105'
                                              : 'text-[var(--color-secondary)] group-hover:text-[var(--color-blue-mid)]'
                                      }
                                  `}
                                />
                                <Button
                                    marked={false}
                                    content={opt.text}
                                    className={`w-[17.5vw] h-[7vw] transition-colors duration-300 font-notoSansHebrew-medium
                                            ${isSelected ? '!bg-blue-mid' : '!bg-secondary hover:!bg-blue-mid'}
                                            `}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="w-full flex justify-center pt-[10vw]">
                    <Button
                        marked={false}
                        inputProvided={selectedIndex !== null}
                        content="הגשה"
                        className="shape-angled-top"
                        onClick={handleSubmit}
                    />
                </div>
                <AnimatedWarContext />
            </div>
        </Background>
    );
}
