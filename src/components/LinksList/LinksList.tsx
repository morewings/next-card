'use client';

import type {FC, MouseEvent} from 'react';
import {Export} from '@phosphor-icons/react/dist/ssr';
import {sendGAEvent} from '@next/third-parties/google';

import {config} from '@/config';
import type {Config} from '@/types';

import classes from './LinksList.module.css';
import {useCanShare} from './useCanShare';

export type Props = {
    mainLinks?: Config['mainLinks'];
    gaId?: Config['gaId'];
};

export const LinksList: FC<Props> = ({
    mainLinks = config.mainLinks,
    gaId = config.gaId,
}) => {
    const canShare = useCanShare();
    return (
        <div className={classes.wrapper}>
            <div className={classes.list}>
                {mainLinks.map(({url, id, title, icon: Icon}) => {
                    const handleShare = async (event: MouseEvent) => {
                        event.preventDefault();
                        if (typeof window !== undefined) {
                            try {
                                await navigator?.share?.({
                                    title: `${config.title} ${title}`,
                                    url,
                                });
                            } catch (_) {
                                console.warn('Sharing API disabled.');
                            }
                        }
                    };

                    const handleClick = () => {
                        if (!!gaId) {
                            sendGAEvent('event', 'link_click', {value: id});
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
                                title={config.shareTitle}
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
