import {renderHook} from '@testing-library/react';

import * as newState from '@/src/state';

import {Actions} from './actionTypes';
import {Provider} from './Provider';
import {useIncrementTemplateName} from './useIncrementTemplateName';

const dispatchMock = jest.fn();

jest.mock('@/src/state', () => ({
    __esModule: true,
    ...jest.requireActual('@/src/state'),
}));

jest.spyOn(newState, 'useDispatch').mockReturnValue(dispatchMock);

describe('features > templateName > useIncrementTemplateName', () => {
    const initialState = {
        value: 6 as const,
    };
    beforeEach(() => {
        dispatchMock.mockClear();
    });
    it('returns function', () => {
        const {result} = renderHook(() => useIncrementTemplateName(), {
            wrapper: ({children}) => (
                <Provider initialState={initialState}>{children}</Provider>
            ),
        });

        expect(result.current).toBeInstanceOf(Function);
    });

    it('increments templateName value by 1 each time', () => {
        const {result} = renderHook(() => useIncrementTemplateName(), {
            wrapper: ({children}) => (
                <Provider initialState={initialState}>{children}</Provider>
            ),
        });
        result.current();
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock.mock.calls[0][0]).toEqual({
            type: Actions.INCREMENT_TEMPLATE_NAME,
            value: initialState.value + 1,
        });
    });
});
