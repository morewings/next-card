'use client';

import React, {useCallback} from 'react';

import {useRandom} from '@/src/features/random';

import classes from './TemplateName.module.css';

export const TemplateName = () => {
    /** Loading state of random.org request from Redux store */
    const {isPending, isError, data, isSuccess, refetch, isRefetching} = useRandom();

    /** Define pristine state condition, when user didn't do any actions */
    const isPristine = !isPending && !isError && !isSuccess;

    const handleClick = useCallback(() => {
        refetch();
    }, [refetch]);

    return (
        <div className={classes.random}>
            <h2 className={classes.header}>Async Random</h2>
            <button
                disabled={isPending || isRefetching}
                className={classes.button}
                type="button"
                onClick={handleClick}>
                Get random number
            </button>
            {isPristine && <div>Click the button to get random number</div>}
            {isPending && <div>Getting number</div>}
            {isSuccess && (
                <div>
                    Number from random.org: <strong>{data}</strong>
                </div>
            )}
            {isError && <div>Ups...</div>}
        </div>
    );
};
