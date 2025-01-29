'use client';

import type {FC} from 'react';
import React from 'react';

import {useCountValue, useIncrementCounter} from '@/src/features/counter';

import classes from './TemplateName.module.css';

export const TemplateName: FC = () => {
    /**
     *  Get count value from Counter store. We defined selector
     *  (state => state.value) inside counter feature folder,
     *  to make component global state agnostic
     */
    const count = useCountValue();

    /** Create incrementCounter action, using custom hook from feature */
    const incrementCounter = useIncrementCounter();

    return (
        <div className={classes.templateName}>
            <h2 className={classes.header}>Sync counter</h2>
            <button className={classes.button} type="button" onClick={incrementCounter}>
                Increment by one
            </button>
            <div>
                Total value: <strong title="Total value">{count}</strong>
            </div>
        </div>
    );
};
