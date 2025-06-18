'use server'

import { print } from 'graphql'
import { fetchGraphQL } from '../fetchGraphQL'
import { SignUpFormState } from '../types/formState'
import { signInFormSchema, signUpFormSchema } from '../zodSchemas/signUpFormSchema'
import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../gqlQueries'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function signUp(state: SignUpFormState, formData: FormData): Promise<SignUpFormState> {
    const validatedFields = signUpFormSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedFields.success) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
        createUserInput: {
            ...validatedFields.data,
        },
    })

    if (data.errors) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: {},
            message: 'Something went wrong.',
        }
    }

    redirect('/auth/signin')
}

export async function signIn(state: SignUpFormState, formData: FormData): Promise<SignUpFormState> {
    const validatedFields = signInFormSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedFields.success) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    const data = await fetchGraphQL(print(SIGNIN_USER_MUTATION), {
        signInInput: {
            ...validatedFields.data,
        },
    })

    if (data.errors) {
        return {
            data: Object.fromEntries(formData.entries()),
            message: 'Invalid email or password.',
        }
    }
    revalidatePath('/')
    redirect('/')
}
