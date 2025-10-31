import type {FC} from 'react';
import ReactGA from 'react-ga4';
import {AddressBookTabsIcon} from '@phosphor-icons/react/dist/ssr';

import {useVCardBlob} from '@/components/Header/useVCardBlob';
import {config} from '@/config';
import type {Config} from '@/types';
import image from '@/card-image.jpg';

import classes from './Header.module.css';

export type Props = {
    cardImage?: string;
    title?: Config['title'];
    bio?: Config['bio'];
    headerLinks?: Config['headerLinks'];
    gaId?: Config['gaId'];
    vCard?: Config['vCard'];
};

const placeholder = {};

export const Header: FC<Props> = ({
    cardImage = image,
    title = config.title,
    bio = config.bio,
    headerLinks = config.headerLinks,
    gaId = config.gaId,
    vCard = config.vCard,
}) => {
    const cardBlobUrl = useVCardBlob(vCard || placeholder);
    return (
        <header className={classes.header}>
            {cardImage && (
                <div className={classes.imageContainer}>
                    <img src={cardImage} alt={title} />
                </div>
            )}
            <div className={classes.title}>{title}</div>
            {bio && <div className={classes.bio}>{bio}</div>}
            {headerLinks && (
                <div className={classes.headerLinks}>
                    {headerLinks.map(({id, url, icon: Icon, title: linkTitle}) => {
                        const handleClick = () => {
                            if (gaId) {
                                ReactGA.event({
                                    category: 'navigation',
                                    action: 'button_click',
                                    label: linkTitle,
                                });
                            }
                        };
                        return (
                            <a
                                title={linkTitle}
                                key={id}
                                href={url}
                                className={classes.headerLink}
                                onClick={handleClick}
                                target="_blank"
                                rel="noreferrer">
                                <Icon aria-hidden={true} className={classes.icon} weight="fill" size={36} />
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
                                if (gaId) {
                                    // sendGAEvent('event', 'contact_click', {
                                    //     value: 'vcard',
                                    // });
                                }
                            }}
                            target="_blank"
                            rel="noreferrer">
                            <AddressBookTabsIcon aria-hidden={true} className={classes.icon} weight="fill" size={36} />
                        </a>
                    )}
                </div>
            )}
        </header>
    );
};
