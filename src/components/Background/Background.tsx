import type {FC, ReactNode} from 'react';
import classNames from 'classnames';

import {useSearchParams} from '@/hooks/useSearchParams.ts';
import {config} from '@/config';
import type {Config} from '@/types';
import {Backgrounds} from '@/types';

import classes from './Background.module.css';

export type Props = {
    children?: ReactNode;
    background?: keyof typeof Backgrounds;
};

const getBgValue = (propBg: Config['background'], paramBg?: Config['background']) => {
    if (propBg === Backgrounds.demo) {
        const isValidBg = Object.values(Backgrounds).some(background => background === paramBg);
        return isValidBg ? paramBg : Backgrounds.gradient;
    }
    return propBg;
};

export const Background: FC<Props> = ({children, background = config.background}) => {
    const {searchParams} = useSearchParams();

    const backgroundParam = searchParams?.get('background') as Config['background'];
    return (
        <div
            className={classNames(classes.background, {
                [classes.rainbow]: getBgValue(background, backgroundParam) === Backgrounds.rainbow,
                [classes.fresh]: getBgValue(background, backgroundParam) === Backgrounds.fresh,
                [classes.strict]: getBgValue(background, backgroundParam) === Backgrounds.strict,
                [classes.bold]: getBgValue(background, backgroundParam) === Backgrounds.bold,
                [classes.gradient]: getBgValue(background, backgroundParam) === Backgrounds.gradient,
                [classes.rastafari]: getBgValue(background, backgroundParam) === Backgrounds.rastafari,
                [classes.sunset]: getBgValue(background, backgroundParam) === Backgrounds.sunset,
                [classes.elegant]: getBgValue(background, backgroundParam) === Backgrounds.elegant,
                [classes.selenium]: getBgValue(background, backgroundParam) === Backgrounds.selenium,
                [classes.evening]: getBgValue(background, backgroundParam) === Backgrounds.evening,
                [classes.optimistic]: getBgValue(background, backgroundParam) === Backgrounds.optimistic,
                [classes.mesh]: getBgValue(background, backgroundParam) === Backgrounds.mesh,
            })}>
            {children}
        </div>
    );
};
