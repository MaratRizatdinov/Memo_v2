export const createDeck = () => {
    const suits = ['S', 'H', 'D', 'C']
    const values = ['6', '7', '8', '9', 'X', 'J', 'Q', 'K', 'A']
    const deck = []
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + suit + 'O') // Последний символ обозначает статус карты- О(открытая карта), C (закрытая карта)
        }
    }
    return deck
}
