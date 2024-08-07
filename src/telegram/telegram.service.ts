import { PrismaService } from '@/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Update, Start, Ctx, On, Message, InjectBot } from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import { TEMP_USER } from './constant';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly prisma: PrismaService,
  ) {}

  @Start()
  onStart(@Ctx() ctx: Context) {
    ctx.replyWithHTML(`<b>Привет, ${ctx.from.username}!</b>`);
  }

  async createTestUser(data: Prisma.AppointmentCreateInput): Promise<void> {
    await this.prisma.appointment.create({ data });
  }

  @On('text')
  onTestMessage(@Message('text') message: string, @Ctx() ctx: Context) {
    if (message === 'testing client') {
      this.createTestUser(TEMP_USER);
      ctx.replyWithHTML('<b>Тестовый клиент создан</b>');
    }
  }
}
