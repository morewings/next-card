import type {FC, ReactNode} from 'react';
import classNames from 'classnames';

import {config} from '@/config';
import {Backgrounds} from '@/types';

import classes from './Background.module.css';

export const Background: FC<{children?: ReactNode}> = ({children}) => {
    return (
        <div
            className={classNames(classes.background, {
                [classes.rainbow]: config.background === Backgrounds.rainbow,
                [classes.fresh]: config.background === Backgrounds.fresh,
                [classes.strict]: config.background === Backgrounds.strict,
                [classes.bold]: config.background === Backgrounds.bold,
                [classes.gradient]: config.background === Backgrounds.gradient,
            })}>
            {children}
        </div>
    );
};
