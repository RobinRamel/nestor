import type { NextApiHandler } from 'next'
import apartmentList from '@/database.json'

const ApartmentsHandler: NextApiHandler = async (request, response) => {
  response.status(200).json(apartmentList)
}

export default ApartmentsHandler
