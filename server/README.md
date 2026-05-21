Это проект на [Next.js](https://nextjs.org), сгенерированный через [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Быстрый старт

Запусти dev-сервер:

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```

Открой [http://localhost:3000](http://localhost:3000) в браузере — увидишь результат.

Начать редактирование можно с файла `app/page.tsx` — страница будет автоматически обновляться при сохранении.

В проекте используется [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) для автоматической оптимизации и загрузки [Geist](https://vercel.com/font) — нового семейства шрифтов от Vercel.

## Что есть интересного в проекте

| Путь | Что это |
|---|---|
| `app/page.tsx` | Главная страница (стартовый шаблон от create-next-app) |
| `app/signup/page.tsx` | Форма регистрации — клиентский компонент с `useActionState` |
| `app/actions/signup.ts` | Server Action с валидацией через **Zod** (`'use server'`) |
| `app/lib/definitions.ts` | Схема Zod и тип `FormState` для валидации формы |
| `app/layout.tsx` | Корневой layout, подключает Geist шрифты |
| `app/globals.css` | Глобальные стили + Tailwind CSS 4 |

## Полезные команды

```bash
npm run dev      # запуск в режиме разработки (Turbopack, hot reload)
npm run build    # production-сборка в .next/
npm run start    # запуск production-сервера (требует предварительного build)
npm run lint     # проверка кода через ESLint
```

## Стек

- **Next.js 16** — App Router, Turbopack
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Zod 4** — валидация форм
- **ESLint 9** с пресетом `eslint-config-next`

## Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs) — все возможности и API фреймворка.
- [Курс Learn Next.js](https://nextjs.org/learn) — интерактивный туториал.
- [Репозиторий Next.js на GitHub](https://github.com/vercel/next.js) — фидбэк и контрибьюшены приветствуются.

## Деплой

Самый простой способ задеплоить Next.js-приложение — через [платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.

Подробнее см. в [документации по деплою Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
