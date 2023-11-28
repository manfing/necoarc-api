import { Request, Response } from "express"

class HomeConteroller {
    public Home(req: Request, res: Response) {
        res.send(
            "Serviço para envio de mensagens via WhatsApp da Manfing!",
        )
    }
}

export const home_controller = new HomeConteroller();