import { createCollection } from './helpers/createCollection'
import { createCard } from './helpers/createCards'
import { State } from '../../index'
import { renderCards } from './helpers/renderCards'

export const renderCardsBlock = (state: State, cardsField: HTMLDivElement) => {

    cardsField.style.gridTemplateColumns = `repeat(${state.gameColumns}, 95px)`

    let gameCardsArray = createCollection(state.gameCards)

    const checkArr: string[] = []

    cardsField.innerHTML = createCard(gameCardsArray)

    setTimeout(() => {
        gameCardsArray = gameCardsArray.map(
            (elem) => (elem = elem.slice(0, 2) + 'C'),
        )
        state.gameTime = Number(new Date().getTime())

        renderCards(cardsField, gameCardsArray, checkArr, state)
    }, state.timeOut)
}
