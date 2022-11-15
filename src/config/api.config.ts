import { addUser } from "../controllers/user.controller";
import { authenticateUser } from "../middlewares/auth.middleware";

const apiConfig = {
    'v1': {
        'user': [
            {
                endpoint: 'get',
                methodType: 'GET',
                callable: addUser,
                middlewares: [authenticateUser]
            }
        ],
        'admin': []
    },
    'v2': {
        // currently will not be used
    }
}

export default apiConfig;