import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Appointment, Prisma } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  async createAppointment(data: Prisma.AppointmentCreateInput): Promise<void> {
    await this.prisma.appointment.create({ data });
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return this.prisma.appointment.findMany();
  }

  async getUnCompletedAppointments(): Promise<Appointment[]> {
    return this.prisma.appointment.findMany({
      where: {
        completed: false,
      },
    });
  }
}
