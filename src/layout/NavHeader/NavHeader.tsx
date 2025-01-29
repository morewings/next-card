import React from 'react';
import type {FC} from 'react';

import {NavLink} from '@/src/layout/NavLink';

import classes from './NavHeader.module.css';

export const NavHeader: FC = () => {
    return (
        <header className={classes.navHeader}>
            <h1 className={classes.name}>Global state capable Next.js template</h1>
            <div className={classes.navigation}>
                <NavLink href="/">Main</NavLink>
                <NavLink href="/second">Second</NavLink>
            </div>
        </header>
    );
};
