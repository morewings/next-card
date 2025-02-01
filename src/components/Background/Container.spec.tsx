import React from 'react';
import {render} from '@testing-library/react';

import {Container} from './Container';

describe('Container', () => {
    it('renders children', () => {
        const children = 'foo';
        const {getByText} = render(<Container>{children}</Container>);
        expect(getByText(children)).toBeInTheDocument();
    });
});
