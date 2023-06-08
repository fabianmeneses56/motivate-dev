import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi
} from 'openai'

const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

export async function chatLearn(userResponse: { userResponse: string }) {
  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        'Assume you are an expert in teaching English to people from Latin America to prepare for job interviews and support in positions in the technology industry, I ask you to simulate a conversation and correct me if I say something wrong in English, to help me to pronounce better and / or how to better express certain phrases or words. The idea is that you start by introducing yourself and ask me the first question, and when I answer you give me feedback on my answer, then after the feedback you ask me another question (all this in English).important, WAIT for me to answer each question and then give me feedbacks and ask me the next question.'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        "Hello! My name is Sarah, and I'm an English language expert with experience in teaching English to individuals from Latin America. I specialize in preparing people for job interviews and supporting them in positions within the technology industry. Today, I'll be asking you some questions related to these topics to help you improve your English skills. Are you ready to begin?, Tell me about your experience working in the technology industry. What specific roles have you held, and what projects have you been involved in?"
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content:
        'I am front and developer the first project I can remember is it was about people and help people in a specific Venezuelan Venezuelan people so they either application development with real native inside there are some projects'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        "Here are the changes I made:Instead of saying 'front and developer, it should be 'front-end developer,' which is the correct term for someone who specializes in developing the user interface of websites or applications.I added 'a' before 'specific Venezuelan people' to make the sentence grammatically correct.Instead of saying 'either application development,' it should be 'involved application development' to convey your involvement in the development process.To describe the application as having a 'real native feel,' I modified the sentence to clarify your intention.Keep up the good work! Now, let's move on to the next question.Question 2 Tell me about a challenging project you have worked on in the past. How did you overcome the challenges you faced?"
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content:
        "working hard and with my team in sometimes the deadlines of the request and the response issues the ER limit so I'm working with my team and with the other videos"
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        "Here are the changes I made:Clarified that the challenges were related to meeting deadlines for requests and responding to issues within an Error Rate (ER) limit.Instead of saying 'working with the other videos,' I modified the sentence to clarify that you sought guidance from technical videos and resources.Expanded on how you overcame the challenges by emphasizing collaboration, efficient communication, and leveraging the expertise of your team members."
    }
  ]

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      ...messages,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: `${userResponse}`
      }
    ]
  })

  return completion.data.choices[0]?.message?.content
}
