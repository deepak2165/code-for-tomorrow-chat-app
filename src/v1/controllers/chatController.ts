import { Request, Response } from "express";

import { ChatService } from "../service/chatService";
import { MessageService } from "../service/messageService";

export class ChatController {

  static async createChat(
    req: Request,
    res: Response
  ) {

    try {

      const { userAId, userBId } = req.body;

      const chat =
        await ChatService.createOrGetChat(
          userAId,
          userBId
        );

      res.json({
        success: true,
        chatId: chat.id
      });

    } catch (error) {

      res.status(500).json({
        error: (error as Error).message
      });
    }
  }

  static async sendMessage(
    req: Request,
    res: Response
  ) {

    try {

      const { chatId } = req.params;

      const { senderId, text } = req.body;

      const message =
        await MessageService.sendMessage(
          chatId,
          senderId,
          text
        );

      res.json({
        success: true,
        message
      });

    } catch (error) {

      res.status(500).json({
        error: (error as Error).message
      });
    }
  }

  static async getMessages(
    req: Request,
    res: Response
  ) {

    try {

      const { chatId } = req.params;

      const limit =
        Number(req.query.limit) || 50;

      const messages =
        await MessageService.getMessages(
          chatId,
          limit
        );

      res.json({
        success: true,
        messages
      });

    } catch (error) {

      res.status(500).json({
        error: (error as Error).message
      });
    }
  }

  static async markMessageRead(
    req: Request,
    res: Response
  ) {

    try {

      const { messageId } = req.params;

      const { userId } = req.body;

      const result =
        await MessageService.markMessageRead(
          messageId,
          userId
        );

      res.json({
        success: true,
        result
      });

    } catch (error) {

      res.status(500).json({
        error: (error as Error).message
      });
    }
  }

  static async updateLastSeen(
    req: Request,
    res: Response
  ) {

    try {

      const { chatId } = req.params;

      const { userId, messageId } = req.body;

      const result =
        await MessageService.updateLastSeen(
          chatId,
          userId,
          messageId
        );

      res.json({
        success: true,
        result
      });

    } catch (error) {

      res.status(500).json({
        error: (error as Error).message
      });
    }
  }
}