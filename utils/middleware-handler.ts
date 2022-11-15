import { ExpressRequest, ExpressResponse, MiddlewareResponse, NextFunction } from "../types"
import RequestTransformer from "./request-transformer";

const MiddlewareHandler = (Fn: Function) => {
    return async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
        let mResp: MiddlewareResponse = await Fn(RequestTransformer(req));
        if (mResp.isReturn) return res.send(mResp.response);
        next();
    }
}

export default MiddlewareHandler;