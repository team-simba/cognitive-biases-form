import { motion } from 'framer-motion';

import ElephantImage from '../../assets/ImagesForLittleWarmUp/elephant.svg';

const ElephantReveal: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.img
                src={ElephantImage}
                alt="Elephant illustration"
                loading="lazy"
                draggable={false}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="h-[65vh] w-[44vw] mt-[20vh]"
            />
        </div>
    );
};

export default ElephantReveal;
