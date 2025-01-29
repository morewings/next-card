import type {ReactNode} from 'react';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {AppProvider} from '@/src/components/AppProvider';
import './index.css';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AppProvider>
                    {children}
                    <ReactQueryDevtools />
                </AppProvider>
            </body>
        </html>
    );
}
