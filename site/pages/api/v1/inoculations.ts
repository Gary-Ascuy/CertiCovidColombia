import type { NextApiRequest, NextApiResponse } from 'next'

import { getData } from '../../../lib/services/web/colombia'
import { ApiResponse } from '../../../src/models/ApiResponse'
import { Inoculation } from '../../../src/models/Inoculation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Inoculation>>,
) {
  const url = process.env.TEST_DATA ?? ''
  const data = await getData(url)
  res.status(200).json(data)
}
