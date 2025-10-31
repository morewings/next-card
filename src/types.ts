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
    rastafari = 'rastafari',
    sunset = 'sunset',
    elegant = 'elegant',
    selenium = 'selenium',
    evening = 'evening',
    optimistic = 'optimistic',
    mesh = 'mesh',
    demo = 'demo',
}

export type VCard = {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    organization?: string;
    title?: string;
    workPhone?: string;
    birthday?: Date;
    email?: string;
    isOrganization?: boolean;
    note?: string;
};

export type Config = {
    title: string;
    bio?: string;
    background: keyof typeof Backgrounds;
    gaId?: string;
    shareTitle: string;
    headerLinks?: HeaderLink[];
    mainLinks: Link[];
    vCard?: VCard;
};
