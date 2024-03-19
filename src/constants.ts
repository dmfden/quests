import localFont from 'next/font/local';
import { IMenuItems } from './types';

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

