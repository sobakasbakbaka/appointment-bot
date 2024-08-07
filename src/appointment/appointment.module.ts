import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Module({
  providers: [PrismaService, AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
