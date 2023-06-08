import type { NextApiRequest, NextApiResponse } from 'next'
import { generatePhrase } from '@/services/phraseGenerator'
import { chatLearn } from '@/services/chatLearns'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handleConversation(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const handleConversation = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  //   console.log(req)
  const { userResponse } = req.body
  let result: string | undefined = ''
  await chatLearn(userResponse)
    .then(res => {
      result = res
    })
    .catch((error: any) => {
      res.status(400).json({
        message: error.message || 'Revise logs del servidor'
      })
    })

  return res.status(200).json({ result: result })
}
