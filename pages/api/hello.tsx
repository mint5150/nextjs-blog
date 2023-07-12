/*　jsの場合の記述
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}*/

import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}