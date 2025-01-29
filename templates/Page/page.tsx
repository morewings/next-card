import type {Metadata} from 'next';
import {Fragment} from 'react';

import {NavHeader} from '@/src/layout/NavHeader';

export default function TemplateNamePage() {
    return (
        <Fragment>
            <NavHeader />
            <main>
                <p>TemplateName content.</p>
            </main>
        </Fragment>
    );
}

export const metadata: Metadata = {
    title: 'TemplateName page',
};
