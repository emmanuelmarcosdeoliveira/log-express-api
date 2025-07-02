import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
class DeliveryController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      // id do usuário para quem o pedido foi entregue
      user_id: z.string().uuid(),
      // Descrição do envio do pedido
      description: z.string(),
    });

    const { user_id, description } = bodySchema.parse(request.body);

    await prisma.delivery.create({
      data: {
        userId: user_id,
        description: description,
      },
    });
    response.status(201).json();
  }
  async index(request: Request, response: Response) {
    const deliveries = await prisma.delivery.findMany({
      include: {
        user: { select: { name: true, email: true } },
      },
    });
    return response.json(deliveries);
  }
}
export { DeliveryController };
