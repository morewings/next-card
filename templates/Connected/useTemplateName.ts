import {useQuery} from '@tanstack/react-query';

import {getTemplateName} from './getTemplateName';

export const useTemplateName = () => {
    const {isPending, isError, data, error, refetch, isSuccess, isRefetching} = useQuery({
        queryKey: ['random'],
        queryFn: getTemplateName,
    });
    return {isPending, isError, data, error, refetch, isSuccess, isRefetching};
};
