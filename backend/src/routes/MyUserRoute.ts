import express from "express";
import { test  , createCurrentUser} from "../controllers/MyUserController";
const router = express.Router();

router.get('/test' , test);
router.post('/' , createCurrentUser);



//export
export default router;