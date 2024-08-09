import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AppointmentService } from '@/appointment/appointment.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('appointments')
  getAll() {
    return this.appointmentService.getAllAppointments();
  }

  @Get('uncompleted')
  getAllUncompleted() {
    return this.appointmentService.getUnCompletedAppointments();
  }

  @Delete('appointments/:id')
  deleteAppointment(@Param('id') id: number) {
    return this.appointmentService.deleteAppointment(id);
  }
}
