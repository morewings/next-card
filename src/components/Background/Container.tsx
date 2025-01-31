import type {FC, ReactNode} from 'react';

import classes from './Container.module.css';

export const Container: FC<{children?: ReactNode}> = ({children}) => {
    return <div className={classes.container}>{children}</div>;
};
