import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram/telegram.service';
import { PrismaService } from './prisma/prisma.service';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentModule } from './appointment/appointment.module';
import { ButtonsService } from './buttons/buttons.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TelegramModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AppointmentModule,
    AdminModule,
  ],
  providers: [
    TelegramService,
    PrismaService,
    AppointmentService,
    ButtonsService,
  ],
  controllers: [AdminController],
})
export class AppModule {}
