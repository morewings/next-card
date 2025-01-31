import type {ReactNode} from 'react';
import {Fragment} from 'react';
import {GoogleAnalytics} from '@next/third-parties/google';

import {Background, Container} from '@/src/components/Background';
import './index.css';
import {config} from '@/config';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Fragment>
                    <Background />
                    <Container>{children}</Container>
                </Fragment>
            </body>
            {config.gaId && <GoogleAnalytics gaId={config.gaId} />}
        </html>
    );
}
