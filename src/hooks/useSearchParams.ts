import {useEffect, useState} from 'react';

export const useSearchParams = () => {
    const [queryString, setQueryString] = useState('');
    useEffect(() => {
        setQueryString(window.location.search);
    }, []);
    const searchParams = new URLSearchParams(queryString);
    return {queryString, searchParams};
};
