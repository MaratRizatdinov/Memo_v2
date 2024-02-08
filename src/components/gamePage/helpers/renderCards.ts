import { State, appRouter } from '../../..'
import { createCard } from './createCards'

//------------------------------------------------------------------------

const isEqual = (
    [...arr]: string[],
    cards: number,
): [number, string] | false => {
    if (arr.length === cards) return [new Date().getTime(), 'win']
    if (arr.length % 2 !== 0) return false
    if (arr[arr.length - 2] === arr[arr.length - 1]) return false
    return [new Date().getTime(), 'loss']
}

//------------------------------------------------------------------------

export const renderCards = (
    cardsField: HTMLDivElement,
    gameCardsArray: string[],
    checkArr: string[],
    state: State,
) => {
    cardsField.innerHTML = createCard(gameCardsArray)
    const cardElements: NodeListOf<HTMLDivElement> =
        document.querySelectorAll('.game__card')

    for (let elem of cardElements) {
        elem.addEventListener('click', () => {
            if (!elem.dataset.index) return
            const target: string = gameCardsArray[Number(elem.dataset.index)]
            if (target.slice(-1) === 'O') return
            checkArr.push(target)
            const result: [number, string] | false = isEqual(
                checkArr,
                state.gameCards,
            )
            if (result) {
                state.gameTime = result[0] - state.gameTime
                state.gameResult = result[1]
                state.gameLevel = 4
                appRouter(state)
            }

            gameCardsArray[Number(elem.dataset.index)] =
                target.slice(0, 2) + 'O'
            renderCards(cardsField, gameCardsArray, checkArr, state)
        })
    }
}
