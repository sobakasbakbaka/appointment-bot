import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram/telegram.service';
import { PrismaService } from './prisma/prisma.service';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [TelegramModule, ConfigModule.forRoot({ isGlobal: true }), AppointmentModule],
  providers: [TelegramService, PrismaService, AppointmentService],
})
export class AppModule {}
