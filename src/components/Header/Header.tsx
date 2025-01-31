'use client';

import type {FC} from 'react';
import Image from 'next/image';
import {sendGAEvent} from '@next/third-parties/google';

import {config} from '@/config';

import classes from './Header.module.css';
import image from './face.jpg';

export const Header: FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.imageContainer}>
                <Image src={image} alt={config.title} fill={true} sizes="133px" />
            </div>
            <div className={classes.title}>{config.title}</div>
            {config.bio && <div className={classes.bio}>{config.bio}</div>}
            <div className={classes.headerLinks}>
                {config.headerLinks.map(({id, url, icon: Icon, title}) => {
                    const handleClick = () => {
                        if (!!config.gaId) {
                            sendGAEvent('event', 'contact_click', {value: title});
                        }
                    };
                    return (
                        <a
                            key={id}
                            href={url}
                            className={classes.headerLink}
                            onClick={handleClick}
                            target="_blank">
                            <Icon
                                className={classes.icon}
                                weight="fill"
                                size={36}
                                alt={title}
                            />
                        </a>
                    );
                })}
            </div>
        </header>
    );
};
