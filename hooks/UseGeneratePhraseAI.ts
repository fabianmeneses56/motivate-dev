import { useState } from 'react'

export const UseGeneratePhraseAI = () => {
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
      })
  }

  return { loading, result, generatePhraseAI }
}
