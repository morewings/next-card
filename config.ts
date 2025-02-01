import {
    Envelope,
    PhoneCall,
    WhatsappLogo,
    TelegramLogo,
    MessengerLogo,
    LinkedinLogo,
    GithubLogo,
    FileText,
    YoutubeLogo,
    StackOverflowLogo,
    Calendar,
    DevToLogo,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import image from '@/card-image.jpg';

export const config: Config = {
    title: 'Patrick Bateman',
    bio: 'Specialist in mergers and acquisitions',
    background: 'gradient',
    cardImage: image,
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    shareTitle: 'Share link',
    headerLinks: [
        {
            title: 'Email',
            id: 'email',
            url: 'mailto:user@example.com',
            icon: Envelope,
        },
        {
            title: 'Call',
            id: 'phone',
            url: 'tel:+491234567890',
            icon: PhoneCall,
        },
        {
            title: 'Whatsapp',
            id: 'whatsapp',
            url: 'https://wa.me/491234567890',
            icon: WhatsappLogo,
        },
        {
            title: 'Telegram',
            id: 'telegram',
            url: 'https://t.me/userName',
            icon: TelegramLogo,
        },
        {
            title: 'Messenger',
            id: 'meta-messenger',
            url: 'http://m.me/PAGE-NAME?text=Hello%20and%20Welcome',
            icon: MessengerLogo,
        },
    ],
    mainLinks: [
        {
            id: 'cv',
            title: 'Download CV',
            url: 'https://example.com',
            icon: FileText,
        },
        {
            id: 'calendar',
            title: 'Book a call with me',
            url: 'https://example.com',
            icon: Calendar,
        },
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/user-name',
            icon: GithubLogo,
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/userName/',
            icon: LinkedinLogo,
        },
        {
            id: 'youtube',
            title: 'Youtube channel',
            url: 'https://www.youtube.com/@user-name',
            icon: YoutubeLogo,
        },
        {
            id: 'stackoverflow',
            title: 'Stack Overflow profile',
            url: 'https://example.com',
            icon: StackOverflowLogo,
        },
        {
            id: 'devto',
            title: 'Dev.to articles',
            url: 'https://dev.to/user-name',
            icon: DevToLogo,
        },
    ],
};
