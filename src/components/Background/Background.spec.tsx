import React from 'react';
import {render} from '@testing-library/react';

import {Backgrounds} from '@/types';

import {Background} from './Background';

const backgroundVariants = Object.values(Backgrounds);

describe('Background', () => {
    it.each(backgroundVariants)(
        'renders different backgrounds and children',
        background => {
            const children = 'foo';
            const {getByText} = render(
                <Background background={background}>{children}</Background>
            );
            expect(getByText(children)).toBeInTheDocument();
        }
    );
});
