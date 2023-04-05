// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(  req: NextApiRequest, res: NextApiResponse<Data>) {

  //const cookies = req.cookies;
 // TODO: OBTENEMOS LAS COOKIES QUE VIAJAN CON LAS REQUEST
  console.log(req.cookies)

  res.status(200).json({ name: 'John Doe'})
}
