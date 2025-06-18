import { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">{children}</div>
        </div>
    )
}

export default AuthLayout
