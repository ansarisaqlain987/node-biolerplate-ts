import { AppRequest, ExpressRequest, Any } from "../types";

const RequestTransformer = (req: ExpressRequest | Any): AppRequest => {
    return {
        body: req.body ?? {},
        query: req.query ?? {},
        params: req.params ?? {},
        headers: req.headers ?? {},
        files: req.files ?? {}
    }
}

export default RequestTransformer;