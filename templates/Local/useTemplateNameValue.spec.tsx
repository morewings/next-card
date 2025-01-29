import React from 'react';
import {renderHook} from '@testing-library/react';

import {useTemplateNameValue} from './useTemplateNameValue';
import {Provider} from './Provider';

describe('features > templateName > useTemplateNameValue', () => {
    const initialState = {
        value: 6 as const,
    };

    it('returns templateName value', () => {
        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useTemplateNameValue(), {
            wrapper: ({children}) => (
                <Provider initialState={initialState}>{children}</Provider>
            ),
        });
        expect(result.current).toBe(initialState.value);
    });
});
