import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '../store/store';

const DevStateViewer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const state = useSelector((s: RootState) => s);

    if (import.meta.env.PROD) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-800 text-white px-3 py-1 rounded text-xs font-mono opacity-70 hover:opacity-100"
            >
                {isOpen ? 'Close' : 'State'}
            </button>
            {isOpen && (
                <pre className="mt-2 bg-gray-900 text-green-400 p-4 rounded text-xs font-mono max-h-[50vh] overflow-auto min-w-[300px]">
                    {JSON.stringify(state, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default DevStateViewer;
