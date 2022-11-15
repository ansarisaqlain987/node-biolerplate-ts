import { AppRequest, MiddlewareResponse } from "../../types";

/**
 * 
 * @param request 
 * @returns object of type MiddlewareResponse
 * @desciption - if the next middleware is to be executed then set the value of isReturn to false otherwise true.
 * 
 */
export const authenticateUser = (request: AppRequest): MiddlewareResponse => {
    return { isReturn: false, response: { statusCode: 200, status: 'SUCCESS', message: 'RETURN FROM MIDDLEWARE', response: [] } }
}