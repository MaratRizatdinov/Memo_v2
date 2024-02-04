import { selectPage } from './components/selectPage.js'
import { gamePage } from './components/gamePage.js'

const state = {
    page: 'selectPage',
    gameLevel: 1,
}

export const appRouter = (state) => {
    if (state.page === 'selectPage') {
        selectPage(state)
    } else if (state.page === 'gamePage') {
        gamePage(state)
    }
}
appRouter(state)
