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
                <meta name="apple-mobile-web-app-title" content={config.title} />
                <meta name="og:title" content={config.title} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={config.cardImage?.src} />
                <meta name="og:description" content={`${config.title}: ${config.bio}`} />
                <meta name="description" content={`${config.title}: ${config.bio}`} />
                <title>{config.title}</title>
            </head>
            <body>{children}</body>
            {config.gaId && <GoogleAnalytics gaId={config.gaId} />}
        </html>
    );
}
