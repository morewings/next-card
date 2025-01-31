'use client';

import {useEffect, useState} from 'react';

export const useCanShare = () => {
    const [canShare, setCanShare] = useState(false);
    useEffect(() => {
        if (typeof window !== undefined) {
            setCanShare(navigator?.canShare?.({title: 'foo', url: 'foo'}));
        }
    }, []);

    return canShare;
};
