import { PrismaService } from '@/prisma/prisma.service';
import { Update, Start, Ctx, On, Message } from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService extends Telegraf<Context> {
  // constructor(private prisma: PrismaService) {}

  @Start()
  onStart(@Ctx() ctx: Context) {
    ctx.replyWithHTML(`<b>Привет, ${ctx.from.username}!</b>`);
  }

  // @On('text')
  // onMessage(@Message('text') message: string, @Ctx() ctx: Context) {
  //   // this.prisma.appointment.create();

  //   ctx.replyWithHTML(`<i>${message}</i>`);
  // }
}
