// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import { OK } from 'http-status'

export default async function handler(req, res) {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      'User-Agent': 'dad-jokes (repo)',
      'Accept': 'application/json'
    }
  })
  const joke = response.data

  return res.status(OK).json({ id: joke.id, text: joke.joke })
}
