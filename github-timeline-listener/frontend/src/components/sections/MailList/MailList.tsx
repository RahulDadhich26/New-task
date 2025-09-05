"use client"

import Image from 'next/image'
import Container from '../../ui/container'
import { Fragment, useState, useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from '@/components/ui/separator'
import MailListCard from './MailListCard'
import { RefreshCw } from 'lucide-react'

const tags = Array.from({ length: 5 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const MailList = () => {
    // Add loading state
    const [loading, setLoading] = useState(false);
    // Add refreshTime state
    const [refreshTime, setRefreshTime] = useState(10000); // default to 10 seconds

    // Define the handleScroll function
    const handleScroll = (_event: React.UIEvent<HTMLDivElement>) => {
        // You can add scroll logic here if needed
    };

    // Define the handleManualRefresh function
    const handleManualRefresh = () => {
        setLoading(true);
        setRefreshTime(300000); // reset timer to 10 seconds on manual refresh
        // Simulate refresh logic, e.g., fetch new data
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    // Countdown effect for refreshTime
    useEffect(() => {
        if (loading) return;
        if (refreshTime <= 0) {
            handleManualRefresh();
        };
        const timer = setInterval(() => {
            setRefreshTime((prev) => (prev > 0 ? prev - 1000 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [refreshTime, loading]);

    return (
        <Container className='h-[54vh] border-2 flex flex-col'>
            <div className='w-full h-full flex justify-between items-start transition-all ease-in-out duration-300'>
                <div className='flex flex-col'>
                    <h1 className='font-semibold tracking-tight text-2xl text-[#fdf9f0]'>Email Digest Preview</h1>
                    <p className='font-normal tracking-tight text-sm text-[#fdf9f0]/60'>Here's what your GitHub Timeline Digest will look like:</p>
                </div>
                <div className='self-start flex text-zinc-500 text-sm items-center gap-2'>
                    <div>
                        Auto refresh in {Math.floor(refreshTime / 60000)}:{String(Math.floor((refreshTime % 60000) / 1000)).padStart(2, '0')}
                    </div>
                    <button
                        onClick={handleManualRefresh}
                        className='bg-white hover:bg-[#b1ffbe] p-1.5 rounded-md'
                        aria-label="Refresh feed"
                        disabled={loading}
                    >
                        <RefreshCw className='text-zinc-900' size={16} />
                    </button>
                </div>
            </div>

            {/* Loader shown when loading state is true */}
            {loading ? (
                <div className="min-h-[40vh] w-full rounded-md border flex justify-center items-center bg-[#fdf9f0]">
                    <Image
                        src="/loader/mona-loading-dark.gif"
                        alt="Loading..."
                        width={60}
                        height={60}
                        unoptimized={true}
                    />
                </div>
            ) : (
                <ScrollArea
                    className="min-h-[40vh] max-h-[40vh] w-full rounded-md border bg-[#fdf9f0]"
                    onScroll={handleScroll}
                >
                    <div className="p-4">
                        {tags.map((tag) => (
                            <Fragment key={tag}>
                                <MailListCard />
                            </Fragment>
                        ))}
                    </div>
                </ScrollArea>
            )}

            <Separator className='mt-2 mb-1 bg-zinc-600' />
            <div className='font-normal text-sm text-[#fdf9f0]/60'>Vitraga</div>
        </Container>
    )
}

export default MailList