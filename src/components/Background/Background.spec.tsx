import {render} from 'vitest-browser-react';

import {Backgrounds} from '@/types';

import {Background} from './Background';

const backgroundVariants = Object.values(Backgrounds);

describe('Background', () => {
    test.each(backgroundVariants)('renders %s', async background => {
        const children = 'foo';
        const {getByText} = await render(<Background background={background}>{children}</Background>);
        await expect.element(getByText(children)).toBeInTheDocument();
    });
});
