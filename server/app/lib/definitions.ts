import * as z from 'zod'

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: 'Имя должно содержать минимум 2 символа.' })
    .trim(),
  email: z.email({ error: 'Введите корректный email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Минимум 8 символов' })
    .regex(/[a-zA-Z]/, { error: 'Должен содержать хотя бы одну букву.' })
    .regex(/[0-9]/, { error: 'Должен содержать хотя бы одну цифру.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Должен содержать хотя бы один спецсимвол.',
    })
    .trim(),
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined
