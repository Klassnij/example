'use client'

import { useActionState } from 'react'
import { signup } from '@/app/actions/signup'

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signup, undefined)

  return (
    <form action={formAction} className="mx-auto max-w-sm space-y-4 p-6">
      <div>
        <label htmlFor="name">Имя</label>
        <input id="name" name="name" placeholder="Имя" />
        {state?.errors?.name && (
          <p className="text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="you@example.com" />
        {state?.errors?.email && (
          <p className="text-red-600">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input id="password" name="password" type="password" />
        {state?.errors?.password && (
          <div className="text-red-600">
            <p>Пароль должен:</p>
            <ul className="list-disc pl-5">
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {state?.message && (
        <p aria-live="polite" className="text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {pending ? 'Регистрация…' : 'Зарегистрироваться'}
      </button>
    </form>
  )
}
