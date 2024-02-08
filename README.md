# Карточная игра Memo

Карточная игра на развитие памяти.
Пользователю предлагается запомнить предлагаемые карты и впоследствии найти их на игровом поле

## Деплой проекта

    Проект задеплоен на платформе Netlify. Адрес : https://memo-cardgame.netlify.app

## Особенности

-   Игра имеет 3 уровня сложности
    -   1 уровень : угадать 3 пары на игровом поле из 6 карт
    -   1 уровень : угадать 6 пар на игровом поле из 12 карт
    -   1 уровень : угадать 9 пар на игровом поле из 18 карт
-   Пользователю дается время на запоминание карт (5 секунд)
-   По истечении 5 секунд карты переворачиваются и включается таймер
-   При клике по на любой карте она переворачивается.
    Для успешного продолжения игры ,надо найти и кликнуть на поле карту - пару для уже открытой
-   Игра продолжается до ошибки пользователя или пока все карты на поле не будут открыты
-   По окончании игры появляется окно с результатом игры и затраченным временем

## Установка проекта

1. Клонирование репозитория

`git clone https://github.com/MaratRizatdinov/Memo_v2.git`

2.  Проведите инсталляцию пакета

-   cd Memo
-   npm i

4. Запустите проект

-   npm run start

Проект будет запущен по адресу: http://localhost:8080

## Прочая информация

В проекте были использованы следующие инструменты:

-   Код написан на Typescript
-   Для форматирования кода используются Prettier и Eslint
-   Для проверки кода перед коммитом используется husky
-   Сборка осуществлена с помощью Webpack
    -   лоадеры:
        - ts-loader
        - css-loader,
    -   плагины:
        - HtmlWebpackPlugin
        - CopyPlugin
        - MiniCssExtractPlugin
        - CssMinimizerPlugin
-   Для проверки кода используются :
    -   Jest для unit тестов
    -   Cypress для E2E тестов
