import { Request, Response } from "express"
import RequestTransformer from "./request-transformer"

const ResponseTransformer = (Fn: Function) => {
    return async (req: Request, res: Response) => res.send(await Fn(RequestTransformer(req)))
}

export default ResponseTransformer;