interface Pictures {
    S: [string, string]
    H: [string, string]
    D: [string, string]
    C: [string, string]
}

const suitPictures: Pictures = {
    S: ['./static/images/Spades.svg', './static/images/SpadesBig.svg'],
    H: ['./static/images/Hearts.svg', './static/images/HeartsBig.svg'],
    D: ['./static/images/Diamonds.svg', './static/images/DiamondsBig.svg'],
    C: ['./static/images/Clubs.svg', './static/images/ClubsBig.svg'],
}

export const createCard = (gameCardsArray: string[]) => {
    let content = ''
    let index = 0
    for (let key of gameCardsArray) {
        let [value, suit, status] = key.split('')
        if (status === 'C') {
            content =
                content +
                `<div class="game__card card__close" data-index =${index} data-id =${key} ></div>`
        } else {
            content =
                content +
                `<div class="game__card card__open" data-index =${index} data-id =${key} >
                <div class="card__top">
                    <div class="card__value">${value === 'X' ? '10' : value}</div>
                    <img class="card__suit" src=${suitPictures[suit as keyof Pictures][0]} />
                </div>
                <div class="card__center">
                    <img src=${suitPictures[suit as keyof Pictures][1]} />
                </div>
                <div class="card__bottom">
                    <div class="card__value">${value === 'X' ? '10' : value}</div>
                    <img class="card__suit" src=${suitPictures[suit as keyof Pictures][0]} />
                </div>                
            </div>`
        }
        index++
    }

    return content
}
