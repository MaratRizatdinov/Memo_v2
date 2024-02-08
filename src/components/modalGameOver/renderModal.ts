import { State, appRouter } from '../..'
import { createTimeString } from '../../scripts/createTimeString'

export const renderModal = (state: State, modalElement: HTMLDivElement) => {
    const gameTime = createTimeString(state.gameTime)
    const content = `
    <div class="modal__img">
        <img src=${state.gameResult === 'win' ? '/static/images/WinImage.svg' : '/static/images/LossImage.svg'} />
    </div>
    <div class="modal__title">${state.gameResult === 'win' ? 'Вы выиграли!' : 'Вы проиграли!'}</div>
    <div class="modal__timetitle">Затраченное время:</div>
    <div class="modal__time">${gameTime}</div>
    <div class="modal__button">Играть снова</div>
    `
    modalElement.innerHTML = content

    const buttonElement = document.querySelector(
        '.modal__button',
    ) as HTMLDivElement

    buttonElement.addEventListener('click', () => {
        state.gameLevel = 1
        state.gameTime = 0
        state.page = 'selectPage'
        state.gameResult = ''
        appRouter(state)
    })
}
