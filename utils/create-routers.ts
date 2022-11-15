import { Router } from "express";
import apiConfig from "../src/config/api.config"
import { Any, ApiDetails, ExpressInstance } from "../types";
import ResponseTransformer from "./response-transformer";

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
                        switch (details.methodType) {
                            case 'GET': {
                                router.get(`/${details.endpoint}`, ResponseTransformer(details.callable));
                                break;
                            }
                            case 'POST': {
                                router.post(`/${details.endpoint}`, ResponseTransformer(details.callable));
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