import type {Metadata} from 'next';
import {Fragment} from 'react';

import {Counter} from '@/src/components/Counter';
import Random from '@/src/components/Random';
import {NavHeader} from '@/src/layout/NavHeader';

export default function IndexPage() {
    return (
        <Fragment>
            <NavHeader />
            <main>
                <Counter />
                <Random />
            </main>
        </Fragment>
    );
}

export const metadata: Metadata = {
    title: 'First page',
};
