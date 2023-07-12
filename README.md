# TECH-PUB

---

<!-- <img width="1162" alt="image" src="https://github.com/Binatik/images/assets/47430210/3a87ec04-64aa-4626-9a2c-2d8830b7d632"> -->

Этот репозиторий содержит реализацию тестового задания для компании `Positive Innovations`

<!-- Посмотреть на результат можно [здесь](...). -->

## Запуск

Для запуска у вас должен быть установлен [Node.js](http://nodejs.org)

Для установки пакетов используется [npm](https://www.npmjs.com)

```bash
npm install -g npm
```

```bash
$ git clone repository # Клонирование репозитория
$ npm i # Установка зависимостей
$ npm dev # Запуск в dev  режиме
```

```js
//scripts
"dev": "vite",
"build": "tsc && vite build",
"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
```

## Возможности:

-   Открывать модальное окно/ закрывать (в разработке)
