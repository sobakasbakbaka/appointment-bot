import { Appointment } from '@prisma/client';

export const compareMessage = (appointments: Appointment[]): string => {
  return appointments
    .map(
      (appointment) => `
<b>ID: ${appointment.id}</b>
<b>Completed: ${appointment.completed}</b>
<b>Name: ${appointment.name}</b>
<b>Date: ${appointment.date}</b>
<b>Time: ${appointment.time}</b>
<b>Phone: ${appointment.phone}</b>
<b>Cost: ${appointment.coast}</b>
${appointment.description ? `<b>Description: ${appointment.description}</b>` : ''}
${appointment.comment ? `<b>Comment: ${appointment.comment}</b>` : ''}
      `,
    )
    .join('\n');
};
