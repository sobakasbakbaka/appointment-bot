import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from './telegram-config.factory';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  imports: [TelegrafModule.forRootAsync(options())],
  providers: [TelegramService, PrismaService],
})
export class TelegramModule {}
