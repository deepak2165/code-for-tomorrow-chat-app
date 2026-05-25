import { Router } from "express";

import { UserController } from "../controllers/userController";

const router = Router();

router.get(
  "/:userId/chats",
  UserController.getUserChats
);

export default router;