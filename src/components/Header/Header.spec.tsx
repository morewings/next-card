import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Envelope} from '@phosphor-icons/react/dist/ssr';
import {sendGAEvent} from '@next/third-parties/google';

import image from '@/card-image.jpg';
import type {Config} from '@/types';

import {Header} from './Header';

jest.mock('@next/third-parties/google', () => ({
    __esModule: true,
    sendGAEvent: jest.fn(),
}));

const mockedAnalyticsFn = jest.mocked(sendGAEvent);

const mockString = 'foo';

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

describe('Header', () => {
    it('renders', () => {
        render(<Header />);
    });

    it('renders card image and assigns alt attribute', () => {
        const {getByAltText} = render(<Header cardImage={image} title={mockString} />);
        expect(getByAltText(mockString)).toBeInTheDocument();
    });

    it('renders title', () => {
        const {getByText} = render(<Header cardImage={image} title={mockString} />);
        expect(getByText(mockString)).toBeInTheDocument();
    });

    it('renders bio', () => {
        const {getByText} = render(<Header bio={mockString} />);
        expect(getByText(mockString)).toBeInTheDocument();
    });

    it('renders header links', () => {
        const {getByTitle} = render(<Header headerLinks={mockLinks} />);
        mockLinks.forEach(({title}) => {
            expect(getByTitle(title)).toBeInTheDocument();
        });
    });

    it('reports clicks to Google analytics', () => {
        const {getByTitle} = render(<Header headerLinks={mockLinks} gaId={mockString} />);
        expect(mockedAnalyticsFn).not.toHaveBeenCalled();
        mockLinks.forEach(({title}) => {
            mockedAnalyticsFn.mockClear();
            fireEvent.click(getByTitle(title));
            expect(mockedAnalyticsFn).toHaveBeenCalledTimes(1);
            expect(mockedAnalyticsFn.mock.calls[0][1]).toBe('contact_click');
            expect(mockedAnalyticsFn.mock.calls[0][2]).toMatchObject({value: title});
        });
    });
});
