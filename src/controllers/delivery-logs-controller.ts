import { Request, Response } from "express"

class DeliveryLogsController { 
  async create ( request: Request, response: Response ) {
    return response.json({message: "ok"})
  }
}

export { DeliveryLogsController}