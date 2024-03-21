import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Loader2 className="text-white animate-spin" size={100} />
        </div>
    )
}