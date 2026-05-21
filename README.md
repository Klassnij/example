# example

Next.js 16 example showing **Server Actions** with **Zod** form validation and the `useActionState` hook.

## Structure

```
example/
└── server/             # Next.js 16 App Router project
    └── app/
        ├── actions/
        │   └── signup.ts        # 'use server' action with Zod validation
        ├── lib/
        │   └── definitions.ts   # Zod schema + FormState type
        └── signup/
            └── page.tsx         # Client form using useActionState
```

## Stack

- Next.js 16.2.6 (App Router, Turbopack)
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- Zod 4 (form validation)
- ESLint 9 with `eslint-config-next`

## Run

```bash
cd server
npm install
npm run dev
```

Open:
- http://localhost:3000/ — landing
- http://localhost:3000/signup — signup form with Zod validation
