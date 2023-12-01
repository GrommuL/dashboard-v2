
# Пет-проект Dashboard

Dashboard - информационная панель, по аренде домов. 


## Реализованно

- Переключение языка
- Переключение темы
- Создание, удаление, редактирование домов, броней, пользователей.
- Фильтрация и сортировка (Api side, Client side)
- Пагинация
- Pre-fetching данных
- Авторизация и регистрация пользователя
- Реализация компонентов при помощи паттернов Compound component и Render prop


## Технологии использованные на проекте

- React
- Tanstack React Query
- Typescript
- SCSS - модули
- React Hook Form
- Zod
- Axios
- Recharts
- Webpack
## Деплой проекта

 - **Получение данных осуществляется с помощью Json-Server.** 
 - **Загрузка может занять больше времени чем хотелось бы.**
 
 - [Netlify](https://rad-twilight-51a602.netlify.app)
 - [Render](https://dashboard-project-choh.onrender.com)


## Для запуска проекта локально

Версии:

```bash
  node: v18.17.0
  npm: v9.8.1
```

Frontend часть:

```bash
  git clone https://github.com/GrommuL/dashboard-v2.git
```

Установка зависимостей:

```bash
  npm install
```


Запуск проекта:

```bash
  npm run start
```

Backend:

```bash
  git clone https://github.com/GrommuL/dashboard-backend.git
```

Установка зависимостей:

```bash
  npm install
```


Запуск проекта:

```bash
  npm run dev
```

## Environment Variables

Для запуска проекта в режиме разработке, необходимо создать файл `.env.development`

`BASE_URL = http://localhost:3001/` или порт, который Вы установите на backend 


