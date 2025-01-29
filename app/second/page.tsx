import type {Metadata} from 'next';
import {Fragment} from 'react';

import {NavHeader} from '@/src/layout/NavHeader';

export default function SecondPage() {
    return (
        <Fragment>
            <NavHeader />
            <main>
                <p>Boring second page. Use to test global state and routes behavior.</p>
            </main>
        </Fragment>
    );
}

export const metadata: Metadata = {
    title: 'Second page',
};
