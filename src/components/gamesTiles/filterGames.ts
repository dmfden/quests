import { IQuest } from './../../types';

function filterGames(games: IQuest[], filter: string = 'all'): IQuest[] {
    if (filter === 'all') {
        return [...games];
    }
    return games.filter((game) => game.type === filter);
}

export default filterGames;
