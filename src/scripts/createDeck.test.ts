/// <reference types="jest" />

import { createDeck } from './createDeck'

describe('test createDeck function', () => {
    it('first element of Deck', () => {
        expect(createDeck()[0]).toBe('6SO')
    })
    it('last element of Deck', () => {
        expect(createDeck()[35]).toBe('ACO')
    })

    it('length of Deck', () => {
        expect(createDeck()).toHaveLength(36)
    })
    it('contain any element', () => {
        expect(createDeck()).toContain('XDO')
    })
})
