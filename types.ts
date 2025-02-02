import type {Icon} from '@phosphor-icons/react';
import type {StaticImageData} from 'next/image';

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
};

export type Config = {
    title: string;
    bio?: string;
    background: keyof typeof Backgrounds;
    gaId?: string;
    shareTitle: string;
    cardImage?: StaticImageData;
    headerLinks?: HeaderLink[];
    mainLinks: Link[];
    vCard?: VCard;
};
