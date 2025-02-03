import type {ReactNode} from 'react';
import {GoogleAnalytics} from '@next/third-parties/google';
import {Rubik} from 'next/font/google';

import 'the-new-css-reset/css/reset.css';
import {config} from '@/config';

const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
});

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning className={rubik.className}>
            <head>
                <meta name="apple-mobile-web-app-title" content="MyWebSite" />
                <meta 
                    name="description" 
                    content={`${config.title}: ${config.description}`} />
                <title>{config.title}</title>
            </head>
            <body>{children}</body>
            {config.gaId && <GoogleAnalytics gaId={config.gaId} />}
        </html>
    );
}
