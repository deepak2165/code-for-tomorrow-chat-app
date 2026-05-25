import { Request, Response } from "express";

import { ChatService } from "../service/chatService";

export class UserController {

  static async getUserChats(
    req: Request,
    res: Response
  ) {

    try {

      const { userId } = req.params;

      const chats =
        await ChatService.getUserChats(userId);

      res.json({
        success: true,
        chats
      });

    } catch (error) {

      res.status(500).json({
        error: (error as Error).message
      });
    }
  }
}