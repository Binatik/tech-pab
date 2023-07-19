# TECH-PUB

---

Этот репозиторий содержит реализацию [по шаблону](https://inseca.tech)

Разрешается добавлять и / или изменять некоторые моменты в дизайне на усмотрение автора.

<img width="1162" alt="image" src="https://github.com/Binatik/images/assets/47430210/e187cdbd-fc6b-4bc5-b4e2-33b1c0a468cc">

Посмотреть на результат можно [здесь](https://tech-pub.netlify.app).

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

-   Открытие/закрытие модальных окон.
-   Привязка модальных окон к контенту (напримере кнопки)
-   Анимации переходов и появление / исчезновение компонентов
-   Адаптив и отзывчевость верстки
