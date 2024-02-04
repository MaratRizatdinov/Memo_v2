export const gamePage = (state) => {
    const appEl = document.getElementById('app')
    console.log(state)
    const pageContent = `
        <div> Игра уровень ${state.gameLevel}</div>
    `
    appEl.innerHTML = pageContent
}
