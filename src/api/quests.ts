import { IQuest } from '@/types';

const API_URL: string = 'http://localhost:3001/quests';

export async function getAllQuests(): Promise<IQuest[]> {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
    throw new Error('Logic error, this will never be reached.');
}

