import {render} from 'vitest-browser-react';

import {Container} from './Container';

describe('Container', () => {
    test('renders children', async () => {
        const children = 'foo';
        const {getByText} = await render(<Container>{children}</Container>);
        await expect.element(getByText(children)).toBeInTheDocument();
    });
});
