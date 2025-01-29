import {waitFor, renderHook} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {useTemplateName} from './useTemplateName';
import {getTemplateName} from './getTemplateName';

jest.mock('./getTemplateName', () => ({
    __esModule: true,
    getRandom: jest.fn(),
}));

let client: QueryClient;

const response = 6;

describe('features > templateName > useTemplateName', () => {
    beforeEach(() => {
        client = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
        });
        jest.mocked(getTemplateName).mockReset();
    });

    it('handles successful request', async () => {
        jest.mocked(getTemplateName).mockImplementationOnce(() =>
            Promise.resolve(response)
        );

        const {result} = renderHook(() => useTemplateName(), {
            wrapper: ({children}) => (
                <QueryClientProvider client={client}>{children}</QueryClientProvider>
            ),
        });

        // expect pristine state
        expect(result.current.isPending).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.isRefetching).toBe(false);
        expect(result.current.isSuccess).toBe(false);
        expect(result.current.data).toBe(undefined);
        expect(result.current.error).toBe(null);

        // expect success state
        await waitFor(() => expect(result.current.isPending).toBe(false));
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toBe(response);
    });

    it('handles rejected request', async () => {
        jest.mocked(getTemplateName).mockImplementationOnce(() =>
            Promise.reject(new Error('foo'))
        );

        const {result} = renderHook(() => useTemplateName(), {
            wrapper: ({children}) => (
                <QueryClientProvider client={client}>{children}</QueryClientProvider>
            ),
        });

        // expect pristine state
        expect(result.current.isPending).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.isRefetching).toBe(false);
        expect(result.current.isSuccess).toBe(false);
        expect(result.current.data).toBe(undefined);

        // expect error state
        await waitFor(() => expect(result.current.isPending).toBe(false));
        expect(result.current.isError).toBe(true);
        expect(result.current.error).toEqual(new Error('foo'));
    });
});
