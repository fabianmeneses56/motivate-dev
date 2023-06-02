import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi
} from 'openai'

const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

export async function generatePhrase() {
  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        'you are a poet who creates motivational phrases for web developers'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: 'frase motivadora para un desarrollador'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content:
        'El código es el lienzo y tú eres el artista. Escribe con pasión y crea un software que inspire al mundo.'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: 'frase motivadora para un desarrollador'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content:
        'El código es tu superpoder; úsalo para construir el futuro que imaginas.'
    }
  ]

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [...messages]
  })

  return completion.data.choices[0]?.message?.content
}
