import {
    render,
    fireEvent,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {getRandom} from '@/src/features/random/getRandom';

import {TemplateName} from './TemplateName';

jest.mock('@/src/features/random/getRandom', () => ({
    __esModule: true,
    getRandom: jest.fn(),
}));

const client = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const pristineText = 'Click the button to get random number';
const loadingText = 'Getting number';
const errorText = 'Ups...';
const response = 6;

describe('components > TemplateName', () => {
    afterEach(() => {
        jest.mocked(getRandom).mockReset();
    });

    it('handles rejected request', async () => {
        jest.mocked(getRandom).mockImplementationOnce(() =>
            Promise.reject(new Error(errorText))
        );

        const {getByRole} = render(<TemplateName />, {
            wrapper: ({children}) => (
                /* We use real store here, to get action through */
                <QueryClientProvider client={client}>{children}</QueryClientProvider>
            ),
        });

        fireEvent.click(getByRole('button'));

        /** Check initial message has changed to loading. */
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).toBeInTheDocument();

        /** Check loading message has changed to error. */
        await waitForElementToBeRemoved(() => screen.queryByText(loadingText));
        expect(screen.queryByText(errorText)).toBeInTheDocument();
    });

    it('handles successful request', async () => {
        jest.mocked(getRandom).mockImplementationOnce(() => Promise.resolve(response));

        const {getByRole} = render(<TemplateName />, {
            wrapper: ({children}) => (
                <QueryClientProvider client={client}>{children}</QueryClientProvider>
            ),
        });

        fireEvent.click(getByRole('button'));

        /** Check initial message has changed to loading. */
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).toBeInTheDocument();

        /** Check that loading message has changed to success. */
        await waitForElementToBeRemoved(() => screen.queryByText(loadingText));
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).not.toBeInTheDocument();
        expect(screen.queryByText(response)).toBeInTheDocument();
    });
});
