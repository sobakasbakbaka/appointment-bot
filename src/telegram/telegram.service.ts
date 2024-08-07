import {
  Update,
  Start,
  Ctx,
  // On,
  Message,
  InjectBot,
  Hears,
} from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import { TEMP_USER, WELOCME_BUTTON } from '@/shared/constants';
import { AppointmentService } from '@/appointment/appointment.service';
import { ButtonsService } from '@/buttons/buttons.service';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appointmentService: AppointmentService,
    private readonly buttonsService: ButtonsService,
  ) {}

  @Start()
  onStart(@Ctx() ctx: Context) {
    ctx.replyWithHTML(
      `<b>Привет, ${ctx.from.username}!</b>`,
      this.buttonsService.createWelcomeButtons(),
    );
  }

  @Hears(WELOCME_BUTTON.CREATE_TEST_APPOINTMENT.label)
  async onTestMessage(@Ctx() ctx: Context) {
    await this.appointmentService.createAppointment(TEMP_USER);
    ctx.replyWithHTML('<b>Тестовый клиент создан</b>');
  }
}
