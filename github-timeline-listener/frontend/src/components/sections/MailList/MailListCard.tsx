import React from 'react'

const MailListCard = () => {
  return (
    <div className='border mb-1 py-2 px-3 rounded-2xl'>
      <div className='flex items-center justify-start gap-2'>

        <div className='h-10 w-10 mt-1 rounded-full self-start bg-red-500'>
        </div>
        <div className='flex flex-col'>
          <div className='text-sm tracking-tight text-zinc-700'>Julicern/usehooks-ts</div>
          <div className='text-base font-semibold  text-zinc-800'>Started watching this repository</div>
          <div className='flex gap-1 text-xs items-center text-zinc-500'>
            <div>@adex-hub</div>
            <div className='h-1 w-1 bg-zinc-400 self-center rounded-full' />
            <div>4 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailListCard