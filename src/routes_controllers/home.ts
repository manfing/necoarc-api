import { Request, Response } from "express"

class HomeConteroller {
    public Home(req: Request, res: Response) {
        res.send(
            "Serviço para envio de mensagens da Manfing!",
        )
    }
}

export const home_controller = new HomeConteroller();