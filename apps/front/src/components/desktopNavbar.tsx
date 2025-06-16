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
    const navbarClasses = cn('hidden fixed transition-colors w-full z-50 text-white top-0 md:block', {
        'bg-gray-900': isScrolled,
    })

    return (
        <nav className={navbarClasses}>
            <div className="flex items-center px-4 py-4">{props.children}</div>
        </nav>
    )
}

export default DesktopNavbar
