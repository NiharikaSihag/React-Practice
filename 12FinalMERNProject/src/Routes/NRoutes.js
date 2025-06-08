import { Router } from "express";
import { registerUser } from "../controllers/registerUser.js";

const router  =  Router();
router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.put('/update', updateUser);
export default router;