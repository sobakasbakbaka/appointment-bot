import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TelegramModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
