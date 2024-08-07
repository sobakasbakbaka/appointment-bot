import { PrismaService } from '@/prisma/prisma.service';
import { OnModuleInit } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Ctx, Message, On, Update } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';

type Context = Scenes.SceneContext;

@Update()
//@ts-ignore
export class BotService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.AppointmentCreateInput): Promise<void> {
    await this.prisma.appointment.create({ data });
  }

  @On('text')
  async onMessage(@Message('text') message: string, @Ctx() ctx: Context) {
    await this.createUser({
      name: 'abobus',
      phone: '+8888888',
      time: new Date('2024-08-07T11:00:00Z'), // Время в формате ISO 8601
      date: new Date('2024-08-07T00:00:00Z'),
      coast: 123,
      // description: 'blabla',
      // comment: 'chert',
      service: 'blbla',
    });
    ctx.replyWithHTML(`<i>${message}</i>`);
  }
}
