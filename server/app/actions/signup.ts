'use server'

import { redirect } from 'next/navigation'
import { SignupFormSchema, type FormState } from '@/app/lib/definitions'

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, password } = validatedFields.data

  try {
    // await db.user.create({ data: { name, email, password: await hash(password) } })
  } catch (e) {
    return { message: 'Не удалось создать пользователя. Попробуйте ещё раз.' }
  }

  redirect('/dashboard')
}
