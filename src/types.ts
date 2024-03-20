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
    id: number;
    title: string;
    peopleCount: number[];
    level: string;
    previewImg: string;
}

export interface IQuest extends IGameCard {
    description: string;
    coverImg: string;
    type: string;
    duration: number;
}

export interface ITEXTUA {
    [key: string]: string;
}
