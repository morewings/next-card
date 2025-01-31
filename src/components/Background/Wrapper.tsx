import type {FC, ReactNode} from 'react';

export const Wrapper: FC<{children?: ReactNode}> = ({children}) => {
    return <div>{children}</div>;
};
