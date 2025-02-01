import type {ReactNode} from 'react';
import {GoogleAnalytics} from '@next/third-parties/google';

import './index.css';
import {config} from '@/config';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="apple-mobile-web-app-title" content="MyWebSite" />
                <title>{config.title}</title>
            </head>
            <body>{children}</body>
            {config.gaId && <GoogleAnalytics gaId={config.gaId} />}
        </html>
    );
}
