import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  async createAppointment(data: Prisma.AppointmentCreateInput): Promise<void> {
    await this.prisma.appointment.create({ data });
  }
}
