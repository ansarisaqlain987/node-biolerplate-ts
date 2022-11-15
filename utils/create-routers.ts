import { Router } from "express";
import apiConfig from "../src/config/api.config"
import { Any, ApiDetails, ExpressInstance } from "../types";
import MiddlewareHandler from "./middleware-handler";
import ResponseTransformer from "./response-transformer";
import './load-variables';

const createRouters = (app: ExpressInstance): ExpressInstance => {
    let data = apiConfig;
    Object.keys(data).forEach(k => {
        const version = k;
        const versionData = data[k as keyof typeof data];
        const versionKeys = Object.keys(versionData);
        if (versionKeys.length > 0) {
            versionKeys.forEach(module => {
                const router = Router();
                let moduleDetails1 = data[version as keyof typeof data];
                let moduleArray: ApiDetails = moduleDetails1[module as keyof typeof moduleDetails1];
                if (Array.isArray(moduleArray) && moduleArray.length > 0) {
                    moduleArray.forEach(details => {
                        let allMiddlewares = details.middlewares.map((m: Function) => MiddlewareHandler(m));
                        switch (details.methodType) {
                            case 'GET': {
                                router.get(`/${details.endpoint}`, ...allMiddlewares, ResponseTransformer(details.callable));
                                break;
                            }
                            case 'POST': {
                                router.post(`/${details.endpoint}`, ...allMiddlewares, ResponseTransformer(details.callable));
                                break;
                            }
                        }
                    });
                    app.use(`/api/${version}/${module}`, router);
                }
            })
        }
    });
    return app;
}

export default createRouters;