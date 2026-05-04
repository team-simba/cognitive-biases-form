import { ReactNode, useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';

import Background from './Background';
import { createEntry, fetchEntry, getOrCreateUserId } from '../api/demoServer';
import { createStore } from '../store/store';
import { hydrate, userAnswersInitialState } from '../store/userAnswersSlice';

import type { AppStore } from '../store/store';

interface EntryLoaderProps {
    children: ReactNode;
}

const EntryLoader: React.FC<EntryLoaderProps> = ({ children }) => {
    const storeRef = useRef<AppStore | null>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const userId = getOrCreateUserId();
        const store = createStore(userId);
        storeRef.current = store;

        (async () => {
            const existing = await fetchEntry(userId);
            if (cancelled) return;
            if (existing) {
                store.dispatch(hydrate(existing));
            } else {
                createEntry(userId, userAnswersInitialState);
            }
            setReady(true);
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    if (!ready || !storeRef.current) {
        return (
            <Background>
                <div className="min-h-screen flex items-center justify-center">
                    <p className="font-notoSansHebrew-regular text-black-text text-[1.5vw]">
                        טוען...
                    </p>
                </div>
            </Background>
        );
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
};

export default EntryLoader;
