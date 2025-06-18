'use server'

import { print } from 'graphql'
import { fetchGraphQL } from '../fetchGraphQL'
import { SignUpFormState } from '../types/formState'
import { signUpFormSchema } from '../zodSchemas/signUpFormSchema'
import { CREATE_USER_MUTATION } from '../gqlQueries'
import { redirect } from 'next/navigation'

export async function signUp(state: SignUpFormState, formData: FormData): Promise<SignUpFormState> {
    const validatedFields = signUpFormSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedFields.success) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    console.log('Validated fields:', validatedFields.data)

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
