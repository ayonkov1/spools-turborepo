'use client'

import AuthLayout from '@/components/AuthLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '@/lib/actions/auth'
import Link from 'next/link'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const SignUpPage = () => {
    const { pending } = useFormStatus()
    const [state, action] = useActionState(signIn, undefined)

    return (
        <AuthLayout>
            <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
            <form
                action={action}
                className="space-y-5"
            >
                {!!state?.message && <div className="text-red-500 text-sm mb-4">{state.message}</div>}
                <div>
                    <Label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        defaultValue={state?.data?.email || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {!!state?.errors?.email && <div className="text-red-500 text-sm mt-1">{state.errors.email}</div>}
                </div>
                <div>
                    <Label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        defaultValue={state?.data?.password || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {!!state?.errors?.password && <div className="text-red-500 text-sm mt-1">{state.errors.password}</div>}
                </div>
                <Button
                    type="submit"
                    aria-disabled={pending}
                    className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition${pending ? ' animate-pulse' : ''}`}
                >
                    {pending ? 'Submitting...' : 'Sign In'}
                </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600 *:px-2">
                Not having an account?
                <Link
                    href="/auth/signup"
                    className="text-blue-600 hover:underline"
                >
                    Create one
                </Link>
            </p>
        </AuthLayout>
    )
}

export default SignUpPage
