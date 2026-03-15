const PieChart: React.FC = () => {
    return (
        <div className="relative w-[32.94vw] h-[32.94vw] rounded-full overflow-hidden">
            <div className="bg-conic-blue absolute w-full h-full rounded-full" />
            <div className="absolute top-[40%] right-[25%] text-[1.67vw] font-bold">A 6</div>
            <div className="absolute top-[30%] left-[25%] text-[1.67vw] font-bold">A</div>
            <div className="absolute bottom-[18%] left-[25%] text-[1.67vw] font-bold">A D 6 7</div>
            <div className="absolute bottom-[6%] right-[41%] text-[1.67vw] font-bold">A 7</div>
        </div>
    );
};

export default PieChart;
