import { selectPage } from './components/selectPage/selectPage'
import { gamePage } from './components/gamePage/gamePage'
import './styles/styles.css'

interface GameConfig {
    id: number
    columns: number
    cards: number
    timeOut: number
}

export interface State {
    page: string
    gameLevel: number
    gameParams: GameConfig[]
    gameColumns: number
    gameCards: number
    timeOut: number
    gameTime: number
    gameResult: string
}

const state: State = {
    page: 'selectPage',
    gameLevel: 1,
    gameParams: [
        { id: 1, columns: 3, cards: 6, timeOut: 5000 },
        { id: 2, columns: 4, cards: 12, timeOut: 5000 },
        { id: 3, columns: 6, cards: 18, timeOut: 5000 },
        { id: 4, columns: 9, cards: 36, timeOut: 0 },
    ],
    get gameColumns() {
        return this.gameParams[this.gameLevel - 1].columns
    },
    get gameCards() {
        return this.gameParams[this.gameLevel - 1].cards
    },
    get timeOut() {
        return this.gameParams[this.gameLevel - 1].timeOut
    },
    gameTime: 0,
    gameResult: '',
}

export const appRouter = (state: State) => {
    if (state.page === 'selectPage') {
        selectPage(state)
    } else if (state.page === 'gamePage') {
        gamePage(state)
    }
}
appRouter(state)
