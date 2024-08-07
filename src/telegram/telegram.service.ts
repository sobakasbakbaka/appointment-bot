import { Update, Start, Ctx, On, Message, InjectBot } from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import { TEMP_USER } from './constant';
import { AppointmentService } from '@/appointment/appointment.service';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appointmentService: AppointmentService,
  ) {}

  @Start()
  onStart(@Ctx() ctx: Context) {
    ctx.replyWithHTML(`<b>Привет, ${ctx.from.username}!</b>`);
  }

  @On('text')
  async onTestMessage(@Message('text') message: string, @Ctx() ctx: Context) {
    if (message === 'testing client') {
      await this.appointmentService.createAppointment(TEMP_USER);
      ctx.replyWithHTML('<b>Тестовый клиент создан</b>');
    }
  }
}
