import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from './telegram-config.factory';
import { PrismaService } from '@/prisma/prisma.service';
import { AppointmentModule } from '@/appointment/appointment.module';
import { ButtonsService } from '@/buttons/buttons.service';

@Module({
  imports: [TelegrafModule.forRootAsync(options()), AppointmentModule],
  providers: [TelegramService, PrismaService, ButtonsService],
})
export class TelegramModule {}
