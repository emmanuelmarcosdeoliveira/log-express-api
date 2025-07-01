import { Request, Response } from "express";

class DeliveryController {
  create(request: Request, response: Response) {
    response.json({
      message: "Ok ",
    });
  }
}

export { DeliveryController };
