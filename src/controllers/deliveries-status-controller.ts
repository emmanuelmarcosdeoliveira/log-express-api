import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma";

class DeliveriesStatusController {
  async update(request: Request, response: Response) {
    // Abaixo vamos definir a validação para os parâmetros
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const bodySchema = z.object({
      // Abaixo estamos definindo uma enum com os tipos de status
      status: z.enum(["processing", "shipped", "delivered"]),
    });
    const { id } = paramsSchema.parse(request.params);
    const { status } = bodySchema.parse(request.body);

    await prisma.delivery.update({
      data: {
        status,
      },
      where: {
        id,
      },
    });
    response.json();
  }
}
export { DeliveriesStatusController };
