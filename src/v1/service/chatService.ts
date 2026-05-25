import { prisma } from "../config/db";

export class ChatService {

  static async createOrGetChat(
    userAId: string,
    userBId: string
  ) {

    const existingChat = await prisma.chat.findFirst({
      where: {
        isGroup: false,
        members: {
          every: {
            userId: {
              in: [userAId, userBId]
            }
          }
        }
      },
      include: {
        members: true
      }
    });

    if (
      existingChat &&
      existingChat.members.length === 2
    ) {
      return existingChat;
    }

    return prisma.chat.create({
      data: {
        isGroup: false,
        members: {
          create: [
            {
              userId: userAId
            },
            {
              userId: userBId
            }
          ]
        }
      },
      include: {
        members: true
      }
    });
  }

  static async getUserChats(userId: string) {

    return prisma.chat.findMany({
      where: {
        members: {
          some: {
            userId
          }
        }
      },
      include: {
        members: true
      }
    });
  }
}