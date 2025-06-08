import registerUser from "../controllers/registerUser.js";
import validate from "../middleware/validate.js";

import express from 'express';
const router = express.Router();


router.post('/register', validate, registerUser)
// router.post('/login', validate, loginUser)

export default router;


