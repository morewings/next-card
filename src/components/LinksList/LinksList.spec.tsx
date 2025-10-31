import {render} from 'vitest-browser-react';
import {EnvelopeIcon} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import {config} from '@/config';

import {LinksList} from './LinksList';

// jest.mock('@next/third-parties/google', () => ({
//     __esModule: true,
//     sendGAEvent: jest.fn(),
// }));

// const mockedAnalyticsFn = jest.mocked(sendGAEvent);

const mockLinks: Config['headerLinks'] = [
    {
        id: 'icon-foo',
        icon: EnvelopeIcon,
        title: 'Foo link',
        url: 'foo',
    },

    {
        id: 'icon-bar',
        icon: EnvelopeIcon,
        title: 'Bar link',
        url: 'bar',
    },
];

describe('LinksList', () => {
    test('renders', async () => {
        await render(<LinksList />);
    });

    it('renders links', async () => {
        const {getByTitle} = await render(<LinksList mainLinks={mockLinks} />);
        for (const {title} of mockLinks) {
            await expect.element(getByTitle(title)).toBeInTheDocument();
        }
    });
    //
    // it.skip('reports link clicks to Google analytics', () => {
    //     // const {getByTitle} = render(<LinksList mainLinks={mockLinks} gaId="foo" />);
    //     // expect(mockedAnalyticsFn).not.toHaveBeenCalled();
    //     // mockLinks.forEach(({title, id}) => {
    //     //     mockedAnalyticsFn.mockClear();
    //     //     fireEvent.click(getByTitle(title));
    //     //     expect(mockedAnalyticsFn).toHaveBeenCalledTimes(1);
    //     //     expect(mockedAnalyticsFn.mock.calls[0][1]).toBe('link_click');
    //     //     expect(mockedAnalyticsFn.mock.calls[0][2]).toMatchObject({value: id});
    //     // });
    // });
    //
    it('renders share link when available', async () => {
        const {getByTitle} = await render(<LinksList mainLinks={mockLinks} />);
        await expect.element(getByTitle(config.shareTitle)).toHaveLength(mockLinks.length);
    });
});
