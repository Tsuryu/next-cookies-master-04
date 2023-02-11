import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  cookies: Partial<{ [key: string]: string }>;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // console.log(req.cookies);

  res.status(200).json({ name: 'John Doe', cookies: req.cookies });
}
