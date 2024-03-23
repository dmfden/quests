import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IQuest } from './types';
import { stat } from 'fs';

interface IStore {
    quests: IQuest[];
    filter: string;
}

type Actions = {
    setQuests: (cards: IQuest[]) => void;
    setFilter: (filter: string) => void;
    getFilteredQuests: (filter: string) => IQuest[];
};

export const useAppStore = create<IStore & Actions>()(
    immer((set, get) => ({
        quests: [],
        filter: 'all',
        setQuests: (cards: IQuest[]) =>
            set((state) => {
                state.quests = cards;
            }),
        setFilter: (filter: string) =>
            set((state) => {
                state.filter = filter;
            }),
        getFilteredQuests: (filter: string) => {
            const stateQuests = get().quests;
            if (filter === 'all') {
                return [...stateQuests];
            }
            return stateQuests.filter((quest) => quest.type === filter);
        },
    }))
);

export default useAppStore;

