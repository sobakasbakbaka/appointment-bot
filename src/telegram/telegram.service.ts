import {
  Update,
  Start,
  Ctx,
  // On,
  // Message,
  InjectBot,
  Hears,
} from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import {
  TEMP_COMPLETED_USER,
  TEMP_USER,
  WELOCME_BUTTON,
} from '@/shared/constants';
import { AppointmentService } from '@/appointment/appointment.service';
import { ButtonsService } from '@/buttons/buttons.service';
import { compareMessage } from '@/shared/lib/compareMessage';

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

  @Hears(WELOCME_BUTTON.CREATE_TEST_UNCOMPLETED_APPOINTMENT.label)
  async onTestMessage(@Ctx() ctx: Context) {
    await this.appointmentService.createAppointment(TEMP_USER);
    ctx.replyWithHTML('<b>UNCOMPLETED created</b>');
  }

  @Hears(WELOCME_BUTTON.CREATE_TEST_COMPLETED_APPOINTMENT.label)
  async onCreateCompletedTest(@Ctx() ctx: Context) {
    await this.appointmentService.createAppointment(TEMP_COMPLETED_USER);
    ctx.replyWithHTML('<b>COMPLETED created</b>');
  }

  @Hears(WELOCME_BUTTON.SHOW_ALL_APPOINTMENTS.label)
  async onShowAllAppointments(@Ctx() ctx: Context) {
    const appointments = await this.appointmentService.getAllAppointments();
    if (!appointments) {
      ctx.reply('Ничего нет((((');
    }
    ctx.replyWithHTML(compareMessage(appointments));
  }

  @Hears(WELOCME_BUTTON.SHOW_FEATURE_APPOINTMENTS.label)
  async onShowFeatureAppointments(@Ctx() ctx: Context) {
    const appointments =
      await this.appointmentService.getUnCompletedAppointments();

    if (!appointments) {
      ctx.reply('Ничего нет((((');
    }
    ctx.replyWithHTML(compareMessage(appointments));
  }
}
