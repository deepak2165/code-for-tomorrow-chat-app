import { prisma } from "../config/db";

export class MessageService {

  static async sendMessage(
    chatId: string,
    senderId: string,
    text: string
  ) {

    return prisma.message.create({
      data: {
        chatId,
        senderId,
        text
      }
    });
  }

  static async getMessages(
    chatId: string,
    limit: number
  ) {

    return prisma.message.findMany({
      where: {
        chatId
      },
      include: {
        reads: true
      },
      orderBy: {
        createdAt: "asc"
      },
      take: limit
    });
  }

  static async markMessageRead(
    messageId: string,
    userId: string
  ) {

    return prisma.messageRead.upsert({
      where: {
        messageId_userId: {
          messageId,
          userId
        }
      },
      update: {},
      create: {
        messageId,
        userId
      }
    });
  }

  static async updateLastSeen(
    chatId: string,
    userId: string,
    messageId: string
  ) {

    return prisma.lastSeen.upsert({
      where: {
        chatId_userId: {
          chatId,
          userId
        }
      },
      update: {
        lastSeenMessageId: messageId
      },
      create: {
        chatId,
        userId,
        lastSeenMessageId: messageId
      }
    });
  }
}