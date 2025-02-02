'use client';

import type {FC} from 'react';
import Image from 'next/image';
import {sendGAEvent} from '@next/third-parties/google';
import {AddressBookTabs} from '@phosphor-icons/react/dist/ssr';

import {useVCardBlob} from '@/src/components/Header/useVCardBlob';
import {config} from '@/config';
import type {Config} from '@/types';

import classes from './Header.module.css';

export type Props = {
    cardImage?: Config['cardImage'];
    title?: Config['title'];
    bio?: Config['bio'];
    headerLinks?: Config['headerLinks'];
    gaId?: Config['gaId'];
    vCard?: Config['vCard'];
};

const placeholder = {};

export const Header: FC<Props> = ({
    cardImage = config.cardImage,
    title = config.title,
    bio = config.bio,
    headerLinks = config.headerLinks,
    gaId = config.gaId,
    vCard = config.vCard,
}) => {
    const cardBlobUrl = useVCardBlob(vCard || placeholder, cardImage?.src);
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
                    {vCard && (
                        <a
                            download="vcard.vcf"
                            title="vCard"
                            key="vCard"
                            href={cardBlobUrl}
                            className={classes.headerLink}
                            onClick={() => {
                                if (!!gaId) {
                                    sendGAEvent('event', 'contact_click', {
                                        value: 'vcard',
                                    });
                                }
                            }}
                            target="_blank">
                            <AddressBookTabs
                                aria-hidden={true}
                                className={classes.icon}
                                weight="fill"
                                size={36}
                            />
                        </a>
                    )}
                </div>
            )}
        </header>
    );
};
