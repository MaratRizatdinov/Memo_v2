/// <reference types="cypress" />
const timer=5000

describe('Тестируем игру Мемо', () => {
    describe('Тестируем начало игры', () => {
        it('Тестируем переход на игру 1 уровня', () => {
            cy.visit('http://localhost:8080/')
            cy.contains('Старт').click()
            cy.get('.game__card').should('have.length', 6)
        })
        it('Тестируем переход на игру 2 уровня', () => {
            cy.visit('http://localhost:8080/')
            cy.contains('2').click()
            cy.contains('Старт').click()
            cy.get('.game__card').should('have.length', 12)
        })
        it('Тестируем переход на игру 3 уровня', () => {
            cy.visit('http://localhost:8080/')
            cy.contains('3').click()
            cy.contains('Старт').click()
            cy.get('.game__card').should('have.length', 18)
        })
    })
    describe('Тестируем кнопку начать заново', () => {
        it('Возврат на страницу Select', () => {
            cy.visit('http://localhost:8080/')
            cy.contains('3').click()
            cy.contains('Старт').click()
            cy.contains('Начать заново').click()
            cy.contains('Старт')
        })
    })
    describe('Тестируем функции с задержкой времени', () => {
        it(`Счетчик через 5 секунд игры должен показывать 00.05 - на запоминание ${timer/1000} сек`, () => {
            cy.visit('http://localhost:8080/')
            cy.contains('3').click()
            cy.contains('Старт').click()
            cy.wait(timer+5000) 
            cy.get('.game__tablo').should('have.text', '00.05')
        })
        describe('При запуске все карты открыты. Через 2 секунды закрываются', () => {
            it('Первый уровень', () => {
                cy.visit('http://localhost:8080/')
                cy.contains('Старт').click()
                cy.get('.card__open').should('have.length', 6)
                cy.wait(timer)
                cy.get('.card__close').should('have.length', 6)
            })
            it('Второй уровень', () => {
                cy.visit('http://localhost:8080/')
                cy.contains('2').click()
                cy.contains('Старт').click()
                cy.get('.card__open').should('have.length', 12)
                cy.wait(timer)
                cy.get('.card__close').should('have.length', 12)
            })
            it('Третий уровень', () => {
                cy.visit('http://localhost:8080/')
                cy.contains('3').click()
                cy.contains('Старт').click()
                cy.get('.card__open').should('have.length', 18)
                cy.wait(timer)
                cy.get('.card__close').should('have.length', 18)
            })
        })
    })
    describe('Тестируем игровой процесс', () => {
        it('При нажатии на карту она должна перевернуться', () => {
            cy.visit('http://localhost:8080/')
            cy.contains('2').click()
            cy.contains('Старт').click()
            cy.wait(timer)
            cy.get('div[data-index ="0"]')
                .should('have.attr', 'class')
                .and('contain', 'card__close')
            cy.get('div[data-index ="0"]').click()
            cy.get('div[data-index ="0"]')
                .should('have.attr', 'class')
                .and('contain', 'card__open')
        })
    })
})

