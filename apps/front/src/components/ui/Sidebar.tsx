'use client'

import { cn } from '@/lib/utils'
import { PropsWithChildren, ReactNode, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type Props = PropsWithChildren<{
    triggerIcon: ReactNode
    triggerClassName?: string
}>

const Sidebar = (props: Props) => {
    const [show, setShow] = useState(false)
    const ref = useRef<HTMLDivElement>(null!)

    useOnClickOutside(ref, () => setShow(false))

    return (
        <>
            <button
                className={cn(props.triggerClassName, { '-left-full': show })}
                onClick={() => setShow((prev) => !prev)}
            >
                {props.triggerIcon}
            </button>

            <div
                ref={ref}
                className={cn(
                    'fixed top-0 left-0 z-30 h-full w-64 shadow-xl rounded-r-2xl transition-transform duration-300 ease-in-out',
                    {
                        '-translate-x-full': !show,
                        'translate-x-0': show,
                    },
                    // Glassmorphism base
                    'backdrop-blur-2xl bg-gradient-to-br from-white/60 via-white/30 to-blue-200/40 border-r border-white/30',
                )}
                style={{
                    minHeight: '100vh',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    borderRight: '1px solid rgba(255,255,255,0.18)',
                }}
            >
                <button
                    className={cn(
                        props.triggerClassName,
                        'backdrop-blur-md bg-white/40 border border-white/30 shadow-lg rounded-xl p-2 transition-colors duration-200 hover:bg-white/60 hover:shadow-xl',
                        { '-left-full': show },
                    )}
                    onClick={() => setShow((prev) => !prev)}
                >
                    {props.triggerIcon}
                </button>
                {props.children}
            </div>
        </>
    )
}

export default Sidebar
