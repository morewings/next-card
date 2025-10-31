import {
    EnvelopeIcon,
    PhoneCallIcon,
    WhatsappLogoIcon,
    TelegramLogoIcon,
    MessengerLogoIcon,
    LinkedinLogoIcon,
    GithubLogoIcon,
    FileTextIcon,
    YoutubeLogoIcon,
    StackOverflowLogoIcon,
    CalendarIcon,
    DevToLogoIcon,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
// import image from '@/card-image.jpg?cardImage';

export const config: Config = {
    // Set your or company name
    title: 'Patrick Bateman',
    // Add a brief description to display below the name
    bio: 'Specialist in mergers and acquisitions',
    // Select a background style
    background: 'demo',
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
    headerLinks: [
        {
            title: 'Email',
            id: 'email',
            url: 'mailto:user@example.com',
            icon: EnvelopeIcon,
        },
        {
            title: 'Call',
            id: 'phone',
            url: 'tel:+491234567890',
            icon: PhoneCallIcon,
        },
        {
            title: 'Whatsapp',
            id: 'whatsapp',
            url: 'https://wa.me/491234567890',
            icon: WhatsappLogoIcon,
        },
        {
            title: 'Telegram',
            id: 'telegram',
            url: 'https://t.me/userName',
            icon: TelegramLogoIcon,
        },
        {
            title: 'Messenger',
            id: 'meta-messenger',
            url: 'http://m.me/PAGE-NAME?text=Hello%20and%20Welcome',
            icon: MessengerLogoIcon,
        },
    ],
    // Set main links
    mainLinks: [
        {
            id: 'cv',
            title: 'Download CV',
            url: 'https://example.com',
            icon: FileTextIcon,
        },
        {
            id: 'calendar',
            title: 'Book a call with me',
            url: 'https://example.com',
            icon: CalendarIcon,
        },
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/user-name',
            icon: GithubLogoIcon,
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/userName/',
            icon: LinkedinLogoIcon,
        },
        {
            id: 'youtube',
            title: 'Youtube channel',
            url: 'https://www.youtube.com/@user-name',
            icon: YoutubeLogoIcon,
        },
        {
            id: 'stackoverflow',
            title: 'Stack Overflow profile',
            url: 'https://example.com',
            icon: StackOverflowLogoIcon,
        },
        {
            id: 'devto',
            title: 'Dev.to articles',
            url: 'https://dev.to/user-name',
            icon: DevToLogoIcon,
        },
    ],
    vCard: {
        firstName: 'Patrick',
        lastName: 'Bateman',
        organization: 'Pierce & Pierce',
        title: 'Vice President',
        birthday: new Date(1961, 9, 23),
        workPhone: '+1 212 555 6342',
        email: 'patrick@psycho.us',
        // Enable to display contact as a company
        // isOrganization: true,
    },
};
