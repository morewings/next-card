'use client';

import type {FC, ReactNode, ComponentProps} from 'react';
import NextLink from 'next/link';
import classNames from 'classnames';
import {usePathname} from 'next/navigation';

import classes from './NavLink.module.css';

export type Props = ComponentProps<typeof NextLink> & {
    children?: ReactNode;
};

export const NavLink: FC<Props> = ({children, href, className}) => {
    const currentPath = usePathname();
    return (
        <NextLink
            href={href}
            className={classNames(
                classes.navLink,
                {[classes.active]: currentPath === href},
                className
            )}>
            {children}
        </NextLink>
    );
};
