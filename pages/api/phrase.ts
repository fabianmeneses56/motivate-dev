import type { NextApiRequest, NextApiResponse } from 'next'
import { generatePhrase } from '@/services/phraseGenerator'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getPhrase(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getPhrase = async (req: NextApiRequest, res: NextApiResponse) => {
  let result: string | undefined = ''
  await generatePhrase()
    .then(res => {
      result = res
    })
    .catch((error: any) => {
      res.status(400).json({
        message: error.message || 'Revise logs del servidor'
      })
    })

  return res.status(200).json({ phrase: result })
}
