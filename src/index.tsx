'use client';

import React, { useContext, useRef, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { motion, AnimatePresence } from 'framer-motion';

interface FrozenRouterProps {
    children: ReactNode;
}

const FrozenRouter: React.FC<FrozenRouterProps> = ({ children }) => {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
};

const LayoutTransitionProvider: React.FC<FrozenRouterProps> = ({ children }) => {
    const pathname = usePathname();
    const [prevPathSegments, setPrevPathSegements] = useState<string[]>([]);
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        const currentPathSegments = pathname.split('/').filter(Boolean);
        if (currentPathSegments.length > prevPathSegments.length) {
            console.log(`Moving to a subroute from ${prevPathSegments.join('/')} to ${currentPathSegments.join('/')}`);
            setEnter(true);
        } else {
            console.log(`Not moving to a subroute, or moving to a same-level route or parent route.`);
            setEnter(false);
        }

        setPrevPathSegements(currentPathSegments);
    }, [pathname]);

    return (
        <AnimatePresence mode={'wait'} initial={false}>
            <motion.div
                key={pathname}
                initial={enter ? { x: '100%', opacity: 1 } : { x: '-100%', opacity: 0 }}
                animate={enter ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                exit={enter ? { x: 0, opacity: 0 } : { x: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
};

export default LayoutTransitionProvider;
