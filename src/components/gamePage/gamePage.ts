import { appRouter, State } from '../../index'
import { renderCardsBlock } from './renderCardsBlock'
import { renderModal } from '../modalGameOver/renderModal'
import { createTimeString } from '../../scripts/createTimeString'

export const gamePage = (state: State) => {
    const appEl = document.getElementById('app') as HTMLDivElement

    //-----------------------------------------------------------------------

    const pageContent = `
    
                <div class="game__container">             
                    <div class="game__header">
                        <div class="game__timer">
                            <div class="game__timertitle">
                                <div class="game__timerdesc">min</div>
                                <div class="game__timerdesc">sec</div>
                            </div>
                            <div class="game__tablo">${createTimeString(0)}</div>
                        </div>
                        <div class="game__button">Начать заново</div>
                    </div>
                    <div class="game__cards"></div>
                </div>
                <div class="modal"><div>  
     `

    appEl.innerHTML = pageContent

    //-------------------------------------------------------------------

    const containerEl = document.querySelector(
        '.game__container',
    ) as HTMLDivElement

    const modalElement = document.querySelector('.modal') as HTMLDivElement

    const tabloElement = document.querySelector(
        '.game__tablo',
    ) as HTMLDivElement

    if (state.gameLevel === 4) {
        containerEl.style.opacity = '0.5'
        modalElement.style.display = 'flex'
        renderModal(state, modalElement)
    } else {
        containerEl.style.opacity = '1'
        modalElement.style.display = 'none'
        setTimeout(() => {
            const start = Number(new Date().getTime())
            setInterval(() => {
                const date = Number(new Date().getTime())
                tabloElement.textContent = createTimeString(date - start)
            }, 1000)
        }, state.timeOut)
    }

    //-------------------------------------------------------------------

    const cardsField = document.querySelector('.game__cards') as HTMLDivElement

    renderCardsBlock(state, cardsField)

    //---------------------------------------------------------------------

    const buttonElement = document.querySelector(
        '.game__button',
    ) as HTMLDivElement

    buttonElement.addEventListener('click', () => {
        state.gameLevel = 1
        state.page = 'selectPage'
        appRouter(state)
    })
}
