import {useState, useEffect} from 'react';
import vCardsJS from 'vcards-js';

import type {VCard} from '@/types';

/* eslint-disable @typescript-eslint/no-unused-expressions */
export const useVCardBlob = ({
    firstName,
    lastName,
    middleName,
    title,
    email,
    organization,
    workPhone,
    birthday,
    isOrganization,
}: VCard) => {
    const [blobUrl, setBlobUrl] = useState<string>();

    useEffect(() => {
        if (typeof window !== undefined) {
            const vCard = vCardsJS();
            firstName && (vCard.firstName = firstName);
            lastName && (vCard.lastName = lastName);
            middleName && (vCard.middleName = middleName);
            organization && (vCard.organization = organization);
            title && (vCard.title = title);
            email && (vCard.email = email);
            workPhone && (vCard.workPhone = workPhone);
            birthday && (vCard.birthday = birthday);
            isOrganization && (vCard.isOrganization = true);
            window && (vCard.url = window.location.toString());
            vCard.version = '3.0';
            const blob = new Blob([vCard.getFormattedString()], {type: 'plain/text'});
            setBlobUrl(URL.createObjectURL(blob));
        }
    }, [
        birthday,
        email,
        firstName,
        isOrganization,
        lastName,
        middleName,
        organization,
        title,
        workPhone,
    ]);

    return blobUrl;
};

/* eslint-enable @typescript-eslint/no-unused-expressions */
