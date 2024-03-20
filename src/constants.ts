import localFont from 'next/font/local';
import { IMenuItems, ITEXTUA } from './types';

export const raleway = localFont({
    src: [
        {
            path: './assets/fonts/raleway-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './assets/fonts/raleway-medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './assets/fonts/raleway-semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './assets/fonts/raleway-bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './assets/fonts/raleway-extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './assets/fonts/raleway-black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-raleway',
});

export const NAVLINKS: IMenuItems[] = [
    {
        url: '/',
        text: 'ігри',
    },
    {
        url: '#',
        text: 'новачкам',
    },
    {
        url: '#',
        text: 'відгуки',
    },
    {
        url: '#',
        text: 'акціі',
    },
    {
        url: '#',
        text: 'контакти',
    },
];

export const TEXTUA: ITEXTUA = {
    horror: 'жахи',
    mystic: 'Містика',
    detective: 'Детектив',
    adventures: 'Пригоди',
    'sci-fi': 'Sci-fi',
    hard: 'складний',
    medium: 'середній',
    easy: 'простий',
};

export const GAMETYPES: string[] = ['all', 'adventures', 'horror', 'mystic', 'detective', 'sci-fi'];

