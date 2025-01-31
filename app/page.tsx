import type {Metadata} from 'next';
import {Fragment} from 'react';

import {Header} from '@/src/components/Header';
import {LinksList} from '@/src/components/LinksList';
import {config} from '@/config';

export default function IndexPage() {
    return (
        <Fragment>
            <Header />
            <LinksList />
        </Fragment>
    );
}

export const metadata: Metadata = {
    title: config.title,
};
