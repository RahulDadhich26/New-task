"use client"

import { useState } from 'react';
import { Button } from '../ui/button'
import Container from '../ui/container'

const Scheduler = () => {
    const [selected, setSelected] = useState<'enable' | 'disable'>('enable');

    return (
        <Container className='bg-[#fdf9f0] gred grid-col-2 *:bg-white *:border *:border-zinc-300 gap-4 *:w-full *:rounded-2xl *:p-4 *:h-full'>
            <div>
                <div className='text-2xl font-semibold tracking-tight'>Daily Digest</div>
                <div className='text-sm text-zinc-500 tracking-tight'>Every day at 9:00 AM</div>
                <Button
                        className={`rounded-full ${selected === 'enable' ? 'bg-[#b1ffbe]' : ''}`}
                        variant="outline"
                        onClick={() => setSelected('enable')}
                    >
                        Enable
                    </Button>
                    <Button
                        className={`rounded-full ${selected === 'disable' ? 'bg-[#b1ffbe]' : ''}`}
                        variant="outline"
                        onClick={() => setSelected('disable')}
                    >
                        Disable
                    </Button>
            </div>
            <div>
                <div className='text-2xl font-semibold tracking-tight'>Weekly Digest</div>
                <div className='text-sm text-zinc-500 tracking-tight'>Every day at 9:00 AM</div>
                <div className='flex gap-1 mt-2'>
                    <Button
                        className={`rounded-full ${selected === 'enable' ? 'bg-[#b1ffbe]' : ''}`}
                        variant="outline"
                        onClick={() => setSelected('enable')}
                    >
                        Enable
                    </Button>
                    <Button
                        className={`rounded-full ${selected === 'disable' ? 'bg-[#b1ffbe]' : ''}`}
                        variant="outline"
                        onClick={() => setSelected('disable')}
                    >
                        Disable
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Scheduler