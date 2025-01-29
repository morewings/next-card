import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {CounterProvider} from '@/src/features/counter';

const queryClient = new QueryClient();

export const providerConfig = [
    [QueryClientProvider, {client: queryClient}],
    CounterProvider,
];
