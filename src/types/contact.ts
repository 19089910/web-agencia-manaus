export type SchedulingStep = 'date' | 'time' | 'form';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export type TimeSlots = Record<string, string[]>;
