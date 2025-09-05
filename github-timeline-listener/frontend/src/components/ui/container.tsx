import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <div className={cn(`bg-[#232323] w-2xl py-4 px-5 rounded-2xl border border-[#313131] justify-center flex items-center relative h-auto`, className)}>{children}</div>
    )
}

export default Container