'use client'

import {observer} from 'mobx-react-lite'

import {SparkAreaChart} from '@tremor/react'

const chartdata = [
  {
    month: 'Jan 21',
    Performance: 4000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
  },
  {
    month: 'May 21',
    Performance: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
  },
  {
    month: 'Jul 21',
    Performance: 3490,
  },
]

function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-5 overflow-y-auto p-6'>
      <section className='grid grid-cols-4 gap-5'>
        <article className='flex h-36 flex-col rounded-lg bg-base-300 p-4'>
          <div className='flex items-start gap-2'>
            <div className='flex flex-1 items-center gap-2'>
              <div className='glass flex h-12 w-12 items-center justify-center rounded-full bg-base-100 font-bold shadow'>
                N
              </div>
              <div className='flex flex-col'>
                <h1>Null Ref</h1>
                <p className='text-xs text-base-content/50'>nullref.software</p>
              </div>
            </div>

            <div className='ml-auto flex flex-col'>
              <span className='mb-1 w-full text-right text-xs text-base-content/50'>
                Last week views
              </span>
              <SparkAreaChart
                data={chartdata}
                categories={['Performance']}
                index={'month'}
                colors={['emerald']}
                className='h-12 w-40'
              />
            </div>
          </div>
          <div className='mt-auto flex items-center gap-2'>
            <span className='badge indicator-item badge-success badge-sm shadow shadow-green-400'></span>
            Online
          </div>
        </article>
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
