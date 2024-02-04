import { appRouter } from '../index.js'
export const selectPage = (state) => {
    const appEl = document.getElementById('app')

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
            state.gameLevel = event.target.textContent
            console.log(state.gameLevel)
        })
    }

    //-------------------------------------

    const buttonElement = document.querySelector('.select__button')

    buttonElement.addEventListener('click', () => {
        console.log(`Переход на страницу игры. Уровень ${state.gameLevel}`)
        state.page = 'gamePage'
        appRouter(state)
    })
}
