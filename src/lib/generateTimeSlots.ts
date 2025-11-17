import { format } from 'date-fns';
import { TimeSlots } from '@/types/contact';

export const generateTimeSlots = (): TimeSlots => {
  const today = new Date();

  // Horários definidos por dia da semana (em inglês)
  const weeklySchedule: Record<string, string[]> = {
    Sunday: [],
    Monday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    Tuesday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    Wednesday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    Thursday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    Friday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    Saturday: ['10:00', '11:00', '12:00']
  };

  const timeSlotsByDate: TimeSlots = {};

  // Gera horários para os próximos 5 dias
  for (let i = 0; i < 5; i++) {
    const currentDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const dayName = format(currentDate, 'EEEE'); // Dia da semana em inglês
    const dateKey = format(currentDate, 'yyyy-MM-dd');

    timeSlotsByDate[dateKey] = weeklySchedule[dayName] || [];
  }

  return timeSlotsByDate;
};

