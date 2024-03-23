import { IQuest } from '@/types';

const API_URL: string = 'http://localhost:3001/quests';

export async function getAllQuests(): Promise<IQuest[] | undefined> {
    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

