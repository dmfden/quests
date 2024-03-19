import { IGameCard } from '@/types';

interface IQuests extends IGameCard {
    description: string;
    coverImg: string;
    type: string;
    duration: number;
}

const API_URL: string = 'http://localhost:3001/quests';

export async function getAllQuests(): Promise<IQuests[]> {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
    throw new Error('Logic error, this will never be reached.');
}

