'use client'
import { cn } from '@/lib/utils'
import { PropsWithChildren, useEffect, useState } from 'react'

type Props = PropsWithChildren
const DesktopNavbar = (props: Props) => {
    const [scrollY, setScrollY] = useState(0)

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const isScrolled = scrollY > 10
    const navbarClasses = cn('hidden fixed transition-colors w-full z-50 text-gray-800 top-0 md:block backdrop-blur-lg bg-white/10 border-b border-white/20', {
        'bg-white/30 shadow-lg text-gray-800': isScrolled,
    })

    return (
        <nav className={navbarClasses}>
            <div className="flex items-center px-4 py-4">{props.children}</div>
        </nav>
    )
}

export default DesktopNavbar
