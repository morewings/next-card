'use client';

import type {FC} from 'react';
import Image from 'next/image';
import {sendGAEvent} from '@next/third-parties/google';

import {config} from '@/config';
import type {Config} from '@/types';

import classes from './Header.module.css';

export type Props = {
    cardImage?: Config['cardImage'];
    title?: Config['title'];
    bio?: Config['bio'];
    headerLinks?: Config['headerLinks'];
    gaId?: Config['gaId'];
};

export const Header: FC<Props> = ({
    cardImage = config.cardImage,
    title = config.title,
    bio = config.bio,
    headerLinks = config.headerLinks,
    gaId = config.gaId,
}) => {
    return (
        <header className={classes.header}>
            {cardImage && (
                <div className={classes.imageContainer}>
                    <Image src={cardImage} alt={title} fill={true} sizes="133px" />
                </div>
            )}
            <div className={classes.title}>{title}</div>
            {bio && <div className={classes.bio}>{bio}</div>}
            {headerLinks && (
                <div className={classes.headerLinks}>
                    {headerLinks.map(({id, url, icon: Icon, title: linkTitle}) => {
                        const handleClick = () => {
                            if (!!gaId) {
                                sendGAEvent('event', 'contact_click', {value: id});
                            }
                        };
                        return (
                            <a
                                title={linkTitle}
                                key={id}
                                href={url}
                                className={classes.headerLink}
                                onClick={handleClick}
                                target="_blank">
                                <Icon
                                    aria-hidden={true}
                                    className={classes.icon}
                                    weight="fill"
                                    size={36}
                                />
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
};
