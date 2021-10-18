import type { NextApiRequest, NextApiResponse } from 'next'

import { getData } from '../../../src/services/web/colombia'
import { ApiResponse } from '../../../src/models/ApiResponse'
import { Inoculation } from '../../../src/models/Inoculation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Inoculation>>,
) {
  try {
    const url = process.env.TEST_DATA ?? ''
    const data = await getData(url)
    res.status(200).json(data)
  } catch (error) {
    const message = 'unable to get vaccination information from you QR Code'
    res.status(400).json({ success: false, error: message })
  }
}
