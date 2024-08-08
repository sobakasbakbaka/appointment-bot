import { Controller, Get } from '@nestjs/common';
import { AppointmentService } from '@/appointment/appointment.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('appointments')
  getAll() {
    return this.appointmentService.getAllAppointments();
  }

  @Get('/uncompleted')
  getAllUncompleted() {
    return this.appointmentService.getUnCompletedAppointments();
  }
}
