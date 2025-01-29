import React from 'react';
import {renderHook} from '@testing-library/react';

import {useCountValue} from './useCountValue';
import {Provider} from './Provider';

describe('features > counter > useCountValue', () => {
    const initialState = {
        value: 6 as const,
    };

    it('returns count value', () => {
        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useCountValue(), {
            wrapper: ({children}) => (
                <Provider initialState={initialState}>{children}</Provider>
            ),
        });
        expect(result.current).toBe(initialState.value);
    });
});
