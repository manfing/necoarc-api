import { Request, Response } from "express"

class HomeConteroller {
    public Home(req: Request, res: Response) {
        res.json({
            message: "Home!",
        })
    }
}
export const home_controller = new HomeConteroller();