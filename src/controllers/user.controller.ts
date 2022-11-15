import { AppRequest, AppResponse } from "../../types";

export const addUser = (request: AppRequest): AppResponse => {
    try {
        return { statusCode: 200, status: 'SUCCESS', message: 'DONE', response: [] }
    } catch (error) {
        return { statusCode: 500, status: 'FAILURE', message: 'NOT DONE', response: [] }
    }
}