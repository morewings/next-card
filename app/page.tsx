import type {Metadata} from 'next';
import {Fragment, Suspense} from 'react';

import {Header} from '@/src/components/Header';
import {LinksList} from '@/src/components/LinksList';
import {config} from '@/config';
import {Background, Container} from '@/src/components/Background';

export default function IndexPage() {
    return (
        <Fragment>
            <Suspense>
                <Background />
            </Suspense>
            <Container>
                <Header />
                <LinksList />
            </Container>
        </Fragment>
    );
}

export const metadata: Metadata = {
    title: config.title,
};
