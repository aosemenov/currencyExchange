# Инструкция по запуску приложения sber react app

Кодировка - UTF-8  
Табуляция - LF

## Доступные скрипты

Проект запускается из директории /sber-app/

### `npm`

Даст понять установлен ли у нас node.js
Если node.js нет - https://nodejs.org/en/download/

### `npm i`

Подтянем все библиотеки и установим зависимости из package.json

### `npm start`

Запустит проект и откроет его в браузере [http://localhost:3000]  
Все responses and requests будут отображаться в консоли


# Архитектура приложения

## API

Серверная часть проекта - [Exchange Rates API](https://openexchangerates.org/).  
Используются historical-json и currencies-json. 
Данные запрошены относительно USD, так как данная валюта является единственной базовой в free версии

## UI

Используется Material UI 
