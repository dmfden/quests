import { ReactNode } from 'react';

export interface IMenuItems {
    url: string;
    text: string;
}

export interface INavLink {
    href: string;
    exact: boolean;
    children: ReactNode;
}

export interface INavigation {
    navlinks: IMenuItems[];
}

export interface IGameCard {
    id: string;
    title: string;
    peopleCount: number[];
    level: string;
    previewImg: string;
}

