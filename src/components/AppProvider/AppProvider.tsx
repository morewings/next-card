'use client';

import type {FC, ReactNode, ComponentProps} from 'react';
import {OmniProvider} from 'react-omni-provider';

import {providerConfig} from './providerConfig';

export type ProviderProps = {
    children: ReactNode;
};

export const AppProvider: FC<ProviderProps> = ({children}) => {
    return (
        <OmniProvider
            // TODO: fix type
            providerConfig={
                providerConfig as ComponentProps<typeof OmniProvider>['providerConfig']
            }>
            {children}
        </OmniProvider>
    );
};
