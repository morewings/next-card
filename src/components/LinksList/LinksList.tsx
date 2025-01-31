'use client';

import type {FC, MouseEvent} from 'react';
import {Export} from '@phosphor-icons/react/dist/ssr';
import {sendGAEvent} from '@next/third-parties/google';

import {config} from '@/config';

import classes from './LinksList.module.css';
import {useCanShare} from './useCanShare';

export const LinksList: FC = () => {
    const canShare = useCanShare();
    return (
        <div className={classes.wrapper}>
            <div className={classes.list}>
                {config.mainLinks.map(({url, id, title, icon: Icon}) => {
                    const handleShare = async (event: MouseEvent) => {
                        event.preventDefault();
                        if (typeof window !== undefined) {
                            try {
                                await navigator?.share?.({title, url});
                            } catch (_) {
                                console.warn('Sharing API disabled.');
                            }
                        }
                    };

                    const handleClick = () => {
                        if (!!config.gaId) {
                            sendGAEvent('event', 'link_click', {value: title});
                        }
                    };

                    return (
                        <a
                            className={classes.link}
                            onClick={handleClick}
                            key={id}
                            href={url}
                            target="_blank"
                            title={title}>
                            <div className={classes.iconWrapper}>
                                {Icon && (
                                    <Icon
                                        weight="fill"
                                        size={36}
                                        alt={id}
                                        aria-hidden={true}
                                    />
                                )}
                            </div>
                            <div className={classes.title}>{title}</div>
                            <button
                                className={classes.share}
                                onClick={handleShare}
                                disabled={!canShare}>
                                <Export weight="regular" size={36} alt="Share" />
                            </button>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
