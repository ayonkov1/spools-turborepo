import { PropsWithChildren } from 'react'
import Sidebar from './ui/Sidebar'
import { Bars3Icon } from '@heroicons/react/16/solid'

type Props = PropsWithChildren

const MobileNavbar = (props: Props) => {
    return (
        <div className="md:hidden">
            <Sidebar
                triggerIcon={<Bars3Icon className="w-6 h-6" />}
                triggerClassName="absolute top-4 left-4 z-20 p-2 bg-white/30 backdrop-blur-md rounded-md shadow-lg hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/40"
            >
                <div>{props.children}</div>
            </Sidebar>
        </div>
    )
}

export default MobileNavbar
