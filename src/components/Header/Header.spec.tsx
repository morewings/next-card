import {render} from 'vitest-browser-react';
import {vi} from 'vitest';
import {EnvelopeIcon} from '@phosphor-icons/react/dist/ssr';

import image from '@/card-image.jpg';
import type {Config} from '@/types';

import {Header} from './Header';

vi.mock('@/src/components/Header/useVCardBlob', () => {
    return {
        useVCardBlob: vi.fn(),
    };
});

const mockString = 'foo';

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

describe('Header', () => {
    test('renders', async () => {
        await render(<Header />);
    });

    it('renders card image and assigns alt attribute', async () => {
        const {getByAltText} = await render(<Header cardImage={image} title={mockString} />);
        await expect.element(getByAltText(mockString)).toBeInTheDocument();
    });

    it('renders title', async () => {
        const {getByText} = await render(<Header cardImage={image} title={mockString} />);
        await expect.element(getByText(mockString)).toBeInTheDocument();
    });

    it('renders bio', async () => {
        const {getByText} = await render(<Header bio={mockString} />);
        await expect.element(getByText(mockString)).toBeInTheDocument();
    });

    it('renders header links', async () => {
        const {getByTitle} = await render(<Header headerLinks={mockLinks} />);
        for (const {title} of mockLinks) {
            await expect.element(getByTitle(title)).toBeInTheDocument();
        }
    });

    // it.skip('reports clicks to Google analytics', () => {
    //     // const {getByTitle} = render(<Header headerLinks={mockLinks} gaId={mockString} />);
    //     // expect(mockedAnalyticsFn).not.toHaveBeenCalled();
    //     // mockLinks.forEach(({id, title}) => {
    //     //     mockedAnalyticsFn.mockClear();
    //     //     fireEvent.click(getByTitle(title));
    //     //     expect(mockedAnalyticsFn).toHaveBeenCalledTimes(1);
    //     //     expect(mockedAnalyticsFn.mock.calls[0][1]).toBe('contact_click');
    //     //     expect(mockedAnalyticsFn.mock.calls[0][2]).toMatchObject({value: id});
    //     // });
    // });

    it('renders vCard link', async () => {
        const {getByTitle} = await render(<Header vCard={{firstName: 'foo'}} />);
        await expect.element(getByTitle('vCard')).toBeInTheDocument();
    });
});
