# JWT Auth Fullstack

Простое приложение для демонстрации аутентификации
Backend на Go с JWT, PostgreSQL, Docker и документацией через Swagger

Frontend на React с использованием tanstack-query, zustand, react-router и версткой с помощью TailwindCss + shadUI

## Запуск

### Backend

```bash
cd backend
```

```bash
docker compose -f docker-compose.yml up --build
```

#### Swagger

После запуска API-документация будет доступна по адресу:

- http://localhost:8000/swagger/index.html

### Frontend

```bash
cd ../frontend
```

```bash
npm i
```

```bash
npm run vite
```

Фронт будет доступен по адресу: http://localhost:5173

---

### Функциональность

- Регистрация пользователя
- Авторизация с получением accessToken и refreshToken
- Хранение токенов в Zustand store (Persist)
- Проверка защищённых маршрутов
- Обновление токенов
- Выход (logout) с очисткой токенов

### Заметки

- Конфигурация базы данных и другие параметры задаются через .env и backend/configs/config.yml
