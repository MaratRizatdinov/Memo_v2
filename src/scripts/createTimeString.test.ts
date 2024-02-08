/// <reference types="jest" />
import { createTimeString } from './createTimeString'

describe('test createTimeString', () => {
    it(' return value in Zero time', () => {
        expect(createTimeString(0)).toBe('00.00')
    })
    it(' return value when time = 1 min', () => {
        expect(createTimeString(60000)).toBe('01.00')
    })
    it(' return value when time = 2 min 5 sec', () => {
        expect(createTimeString(125000)).toBe('02.05')
    })
    it(' return value when time = 15 min 5sec ', () => {
        expect(createTimeString(905000)).toBe('15.05')
    })
})
