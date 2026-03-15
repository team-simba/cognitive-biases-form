import Card from './Card';

const Legend: React.FC = () => {
    return (
        <Card width="max-w-max" padding="p-4" gap="gap-1" className="text-[1.88vw]">
            <div className="flex items-center gap-2">
                <div className="w-[1.56vw] h-[1.56vw] bg-blue-light" /> A + 6 - 46%
            </div>
            <div className="flex items-center gap-2">
                <div className="w-[1.56vw] h-[1.56vw] bg-blue-medium" /> A - 34%
            </div>
            <div className="flex items-center gap-2">
                <div className="w-[1.56vw] h-[1.56vw] bg-blue-deep" /> A + D + 6 + 7 - 16%
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-[1.56vw] h-[1.56vw] bg-blue-strong" /> A + 7 - 4%
                </div>
                <span className="mr-4 bg-orange px-3 py-1 font-bold rounded text-[1.25vw] [clip-path:polygon(0%_0%,100%_0%,95%_100%,5%_100%)]">
                    התשובה הנכונה
                </span>
            </div>
        </Card>
    );
};

export default Legend;
