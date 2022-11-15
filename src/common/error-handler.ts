import { Any, ExpressRequest, ExpressResponse, NextFunction } from "../../types";

export const GlobalErrorHandler = (error: Error | Any, req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
    return res.status(500).send({
        statusCode: 500,
        status: 'FAILURE',
        message: 'INTERNAL SERVER ERROR'
    })
}