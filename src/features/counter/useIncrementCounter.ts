import {useCallback} from 'react';

import {useDispatch} from '@/src/state';

import {Context} from './Context';
import {useCountValue} from './useCountValue';
import {Actions} from './actionTypes';

export const useIncrementCounter = () => {
    const dispatch = useDispatch(Context);
    const count = useCountValue();
    return useCallback(() => {
        dispatch({
            type: Actions.INCREMENT_COUNTER,
            value: count + 1,
        });
    }, [count, dispatch]);
};
