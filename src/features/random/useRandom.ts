import {useQuery} from '@tanstack/react-query';

import {getRandom} from './getRandom';

export const useRandom = () => {
    const {isPending, isError, data, error, refetch, isSuccess, isRefetching} = useQuery({
        queryKey: ['random'],
        queryFn: getRandom,
    });
    return {isPending, isError, data, error, refetch, isSuccess, isRefetching};
};
