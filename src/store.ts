import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { IQuest } from './types';

interface IStore {
    quests: IQuest[];
    filter: string;
}

type Actions = {
    setQuests: (cards: IQuest[]) => void;
    setFilter: (filter: string) => void;
};

export const useAppStore = create<IStore & Actions>()(
    immer((set) => ({
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
    }))
);

export default useAppStore;

