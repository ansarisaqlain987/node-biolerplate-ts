import { addUser } from "../controllers/user.controller";

const apiConfig = {
    'v1': {
        'user': [
            {
                endpoint: 'get',
                methodType: 'GET',
                callable: addUser,
                middlewares: []
            }
        ],
        'admin': []
    },
    'v2': {
        // currently will not be used
    }
}

export default apiConfig;