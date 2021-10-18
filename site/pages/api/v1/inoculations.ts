import type { NextApiRequest, NextApiResponse } from 'next'

import { getInoculationData } from '../../../src/services/web/crawler'
import { ApiResponse } from '../../../src/models/ApiResponse'
import { Inoculation } from '../../../src/models/Inoculation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Inoculation>>,
) {
  try {
    const { code } = req.query
    const url = Buffer.from(code as string, 'base64').toString()

    const data = await getInoculationData(url)
    res.status(200).json(data)
  } catch (error) {
    const message = 'Unable to get vaccination information from you QR Code'
    res.status(400).json({ success: false, error: message })
  }
}
