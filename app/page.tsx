'use client'

import Atropos from 'atropos/react'
import 'atropos/css'
import localFont from 'next/font/local'

import retroFund from '../public/assets/retroFund.jpg'
import { UseGeneratePhraseAI } from '@/hooks/UseGeneratePhraseAI'

const myFont = localFont({
  src: '../public/fonts/Italianno-Regular.ttf',
  variable: '--font-clasic'
})

export default function Home() {
  const { loading, result, generatePhraseAI } = UseGeneratePhraseAI()

  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen p-24 max-md:p-4'>
        <div id='app' className='w-3/4 max-lg:w-full h-96 max-md:w-full '>
          <Atropos className='w-full h-full'>
            <div
              style={{
                backgroundImage: `url(${retroFund.src})`
              }}
              className='w-full h-full flex justify-center items-center px-10'
            >
              <h2
                data-atropos-offset='5'
                className={`${myFont.variable} text-center font-clasic first-letter:text-7xl bottom-8 mb-3 text-6xl max-lg:text-5xl max-md:text-4xl text-black`}
              >
                {loading ? 'Writing...' : result}
              </h2>
            </div>
          </Atropos>
        </div>
        <button
          className={`mt-8 text-gray-700 border border-gray-700 text-5xl  max-md:text-3xl p-2 rounded-2xl ${myFont.variable} font-clasic`}
          onClick={generatePhraseAI}
        >
          Generate Phrase
        </button>
      </main>
    </>
  )
}
