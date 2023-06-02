'use client'

import { useState } from 'react'
import Atropos from 'atropos/react'
import 'atropos/css'
import localFont from 'next/font/local'

import retroFund from '../public/assets/retroFund.jpg'

const myFont = localFont({
  src: '../public/fonts/Italianno-Regular.ttf',
  variable: '--font-clasic'
})

export default function Home() {
  const [result, setResult] = useState<string | undefined>(
    'El éxito de tu aplicación no se mide por la cantidad de líneas de código que escribas, sino por el impacto que ésta tenga en la vida de quienes la utilizan. ¡Sigue adelante!'
  )

  const [loading, setLoading] = useState(false)

  const generatePhraseAI = () => {
    setLoading(true)
    fetch('/api/phrase')
      .then(response => response.json())
      .then(res => {
        setResult(res.phrase)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setResult('Error...')
        console.log(err)
      })
  }

  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen p-24'>
        <div id='app' className='w-3/4 h-96'>
          <Atropos className='w-full h-full'>
            <div
              style={{
                backgroundImage: `url(${retroFund.src})`
              }}
              className='w-full h-full flex justify-center items-center'
            >
              <h2
                data-atropos-offset='5'
                className={`${myFont.variable} text-center font-clasic first-letter:text-7xl bottom-8 mb-3 text-6xl  text-black`}
              >
                {loading ? 'Writing...' : result}
              </h2>
            </div>
          </Atropos>
        </div>
        <button
          className='mt-8 text-gray-700 border border-gray-700 p-2 rounded-2xl'
          onClick={generatePhraseAI}
        >
          Generate Phrase
        </button>
      </main>
    </>
  )
}
