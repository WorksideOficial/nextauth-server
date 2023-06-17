import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthControler from "../controllers/AuthControler";

const router = Router();

router.post('/user/createUser', UserController.createUser);
router.post('/user/session', AuthControler.authUser);

export default router;