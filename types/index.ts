import { Request, Response, Express, NextFunction as TempNextFunction } from "express";

/** Generic Types */
export type Any = any;
export type String = string;
export type Number = number;
export type Object = object;
export type Attay<T> = T[];

// constant values
export type MethodTypes = 'GET' | 'POST';

/** Application Requests and Responses */
export type AppRequest = {
    body?: Any;
    query?: Any;
    params?: Any;
    headers?: Any;
    files?: Any;
}
export type AppResponse = {
    statusCode: Number;
    status: String;
    message: String;
    response?: Any;
}
export type MiddlewareResponse = {
    isReturn: Boolean;
    response?: AppResponse;
}

/** Express Related Types */
export type ExpressInstance = Express;
export type ExpressRequest = Request;
export type ExpressResponse = Response;
export type NextFunction = TempNextFunction;

/** Types related with the API Config */
export type ApiDetails = {
    endpoint: String,
    methodType: MethodTypes,
    callable: Function,
    middlewares: Array<Function>
}
export type ApiModuleDetails = {
    [key: String]: ApiDetails
}

/** Error Types */
export type AppError = Error & Any;
