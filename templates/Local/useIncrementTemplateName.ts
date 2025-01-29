import {useCallback} from 'react';

import {useDispatch} from '@/src/state';

import {Context} from './Context';
import {useTemplateNameValue} from './useTemplateNameValue';
import {Actions} from './actionTypes';

export const useIncrementTemplateName = () => {
    const dispatch = useDispatch(Context);
    const count = useTemplateNameValue();
    return useCallback(() => {
        dispatch({
            type: Actions.INCREMENT_TEMPLATE_NAME,
            value: count + 1,
        });
    }, [count, dispatch]);
};
