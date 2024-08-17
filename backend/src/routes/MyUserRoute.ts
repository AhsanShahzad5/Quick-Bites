import express from "express";
import { test  , createCurrentUser} from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";
const router = express.Router();

router.get('/test' , test);
router.post('/' , jwtCheck , createCurrentUser);



//export
export default router;