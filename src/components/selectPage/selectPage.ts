import { appRouter, State } from '../../index'

export const selectPage = (state: State) => {
    
    const appEl = document.getElementById('app') as HTMLDivElement

    const pageContent = `
        <div class="select">
          <div class="select__title">Выбери сложность</div>
          <div class="select__items">      
            <input type="radio" id="radio1" name="radios" value="radio1" checked>
            <label for="radio1" class ='select__label'>1</label>
            
            <input type="radio" id="radio2" name="radios" value="radio2">
            <label for="radio2" class ='select__label'>2</label>
            
            <input type="radio" id="radio3" name="radios" value="radio3">
            <label for="radio3" class ='select__label'>3</label>
          </div>
          <div class="select__button">Старт</div>
        </div>
        `

    appEl.innerHTML = pageContent

    //--------------------------------------

    const inputElements = document.querySelectorAll('.select__label')

    for (let elem of inputElements) {
        elem.addEventListener('click', (event) => {
            event.stopPropagation()
            const target = event.target as HTMLLabelElement

            state.gameLevel = target.textContent
                ? Number(target.textContent)
                : 1
        })
    }

    //-------------------------------------

    const buttonElement = document.querySelector('.select__button')

    buttonElement?.addEventListener('click', () => {
        state.page = 'gamePage'
        appRouter(state)
    })
}
