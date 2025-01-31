import type {Icon} from '@phosphor-icons/react';

export type Link = {
    title: string;
    id: string;
    url: string;
    icon?: Icon;
};

export type HeaderLink = Link & {
    icon: Icon;
};

export enum Backgrounds {
    fresh = 'fresh',
    strict = 'strict',
    bold = 'bold',
    gradient = 'gradient',
    rainbow = 'rainbow',
}

export type Config = {
    title: string;
    bio?: string;
    background: keyof typeof Backgrounds;
    gaId?: string;
    headerLinks: HeaderLink[];
    mainLinks: Link[];
};
