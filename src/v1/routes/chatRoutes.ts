import { Router } from "express";

import { ChatController } from "../controllers/chatController";

const router = Router();

router.post(
  "/create",
  ChatController.createChat
);

router.post(
  "/:chatId/message/send",
  ChatController.sendMessage
);

router.get(
  "/:chatId/messages",
  ChatController.getMessages
);

router.post(
  "/:chatId/message/:messageId/read",
  ChatController.markMessageRead
);

router.post(
  "/:chatId/lastseen",
  ChatController.updateLastSeen
);

export default router;