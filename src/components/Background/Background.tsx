import type {FC, ReactNode} from 'react';
import classNames from 'classnames';

import {config} from '@/config';
import type {Config} from '@/types';
import {Backgrounds} from '@/types';

import classes from './Background.module.css';

export type Props = {
    children?: ReactNode;
    background?: Config['background'];
};

export const Background: FC<Props> = ({children, background = config.background}) => {
    const getRandomBg = () => {
        const bgList = Object.values(Backgrounds);
        return bgList[Math.floor(Math.random() * bgList.length)];
    };
    return (
        <div
            className={classNames(classes.background, {
                [classes.rainbow]: background === Backgrounds.rainbow,
                [classes.fresh]: background === Backgrounds.fresh,
                [classes.strict]: background === Backgrounds.strict,
                [classes.bold]: background === Backgrounds.bold,
                [classes.gradient]: background === Backgrounds.gradient,
                [classes[getRandomBg()]]: background === 'random',
            })}>
            {children}
        </div>
    );
};
