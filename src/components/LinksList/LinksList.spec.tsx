import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {sendGAEvent} from '@next/third-parties/google';
import {Envelope} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import {config} from '@/config';

import {LinksList} from './LinksList';

jest.mock('@next/third-parties/google', () => ({
    __esModule: true,
    sendGAEvent: jest.fn(),
}));

const mockedAnalyticsFn = jest.mocked(sendGAEvent);

const mockLinks: Config['headerLinks'] = [
    {
        id: 'icon-foo',
        icon: Envelope,
        title: 'Foo link',
        url: 'foo',
    },

    {
        id: 'icon-bar',
        icon: Envelope,
        title: 'Bar link',
        url: 'bar',
    },
];

describe('LinksList', () => {
    it('renders', () => {
        render(<LinksList />);
    });

    it('renders links', () => {
        const {getByTitle} = render(<LinksList mainLinks={mockLinks} />);
        mockLinks.forEach(({title}) => {
            expect(getByTitle(title)).toBeInTheDocument();
        });
    });

    it('reports link clicks to Google analytics', () => {
        const {getByTitle} = render(<LinksList mainLinks={mockLinks} gaId="foo" />);
        expect(mockedAnalyticsFn).not.toHaveBeenCalled();
        mockLinks.forEach(({title, id}) => {
            mockedAnalyticsFn.mockClear();
            fireEvent.click(getByTitle(title));
            expect(mockedAnalyticsFn).toHaveBeenCalledTimes(1);
            expect(mockedAnalyticsFn.mock.calls[0][1]).toBe('link_click');
            expect(mockedAnalyticsFn.mock.calls[0][2]).toMatchObject({value: id});
        });
    });

    it('renders share link when available', () => {
        const {getAllByTitle} = render(<LinksList mainLinks={mockLinks} />);
        expect(getAllByTitle(config.shareTitle)).toHaveLength(mockLinks.length);
    });
});
