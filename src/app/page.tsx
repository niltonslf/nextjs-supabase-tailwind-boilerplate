'use client'

import {observer} from 'mobx-react-lite'

function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-5 overflow-y-auto p-6'>
      <section className='grid grid-cols-4 gap-5'>
        <div className='h-36 bg-base-300'>Null Ref</div>
        <div className='h-36 bg-base-300'>SingleBio</div>
        <div className='h-36 bg-base-300'>Coinup</div>
        <div className='h-36 bg-base-300'>Pipe</div>
      </section>

      <section className='flex w-full gap-5'>
        <div className='flex flex-1 flex-col gap-5'>
          <div className='h-32 bg-base-300'>Users in last 30 minutes</div>
          <div className='h-64 flex-1 bg-base-300'>Top sources</div>
        </div>
        <div className='h-96 flex-1 bg-base-300'>Top pages</div>
      </section>

      <section className='w-full'>
        <div className='flex h-80 w-full items-center justify-center bg-base-300'>World map</div>
      </section>
    </main>
  )
}

export default observer(Home)
