import { createDeck } from '../../../scripts/createDeck'

export const createCollection = (cardsCount: number) => {
    const shuffledDeck = createDeck().sort(() => 0.5 - Math.random())
    const gameCards = shuffledDeck.slice(0, cardsCount / 2)

    return [...gameCards, ...gameCards].sort(() => 0.5 - Math.random())
}
