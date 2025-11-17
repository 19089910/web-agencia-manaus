import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { generateTimeSlots } from '@/lib/generateTimeSlots';
import { SchedulingStep, FormData } from '@/types/contact';

const ContactInterface: React.FC = () => {
  const { toast } = useToast();
  const timeSlotsByDate = generateTimeSlots();

  const [currentFlow, setCurrentFlow] = useState<'scheduling' | 'contact'>('scheduling');
  const [schedulingStep, setSchedulingStep] = useState<SchedulingStep>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const slots = timeSlotsByDate[formattedDate] || [];

      setSelectedDate(date);
      setAvailableTimeSlots(slots);
      setSchedulingStep('time');
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setSchedulingStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentFlow === 'scheduling') {
      toast({
        title: 'Agendamento solicitado!',
        description: `Consulta para ${format(selectedDate!, 'dd/MM/yyyy')} às ${selectedTime}.`,
      });
      resetForm();
    } else {
      toast({
        title: 'Mensagem enviada!',
        description: `Responderemos no email: ${formData.email}`,
      });
      resetForm();
    }
  };

  const resetForm = () => {
    setSchedulingStep('date');
    setSelectedDate(null);
    setSelectedTime('');
    setFormData({ name: '', email: '', message: '' });
    setCurrentFlow(null);
  };

  const renderSelection = () => (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div
          onClick={() => setCurrentFlow('scheduling')}
          className={`flex-1 cursor-pointer border-b-2 ${
            currentFlow === 'scheduling'
              ? 'border-agency-red'
              : 'border-agency-dark-light'
          }`}
        >
          <p
            className={`text-center py-3 font-medium ${
              currentFlow === 'scheduling' ? 'text-white' : 'text-gray-400'
            }`}
          >
            📅 Agendar Consulta
          </p>
        </div>

        <div
          onClick={() => setCurrentFlow('contact')}
          className={`flex-1 cursor-pointer border-b-2 ${
            currentFlow === 'contact'
              ? 'border-agency-red'
              : 'border-agency-dark-light'
          }`}
        >
          <p
            className={`text-center py-3 font-medium ${
              currentFlow === 'contact' ? 'text-white' : 'text-gray-400'
            }`}
          >
            ✉️ Enviar Mensagem
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-agency-dark p-8 rounded-lg border border-agency-dark-light min-h-[600px] w-full max-w-xl">
      {renderSelection()}

      {currentFlow === 'scheduling' && (
        <>
          {schedulingStep === 'date' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Selecione uma Data</h3>
              <div className="flex justify-center">
                <div className="bg-agency-dark-lighter p-6 rounded-lg border border-agency-dark-light">
                  <Calendar
                    mode="single"
                    selected={selectedDate || undefined}
                    onSelect={handleDateSelect}
                  />
                </div>
              </div>
            </div>
          )}

          {schedulingStep === 'time' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Escolha um horário</h3>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedDate(null);
                    setSchedulingStep('date');
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ← Voltar
                </Button>
              </div>
              <div className="text-center">
                <p className="text-white mb-4">
                  Data selecionada: <strong>{format(selectedDate!, 'dd/MM/yyyy')}</strong>
                </p>
                {availableTimeSlots.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-md mx-auto">
                    {availableTimeSlots.map((slot) => (
                      <Button
                        key={slot}
                        onClick={() => handleTimeSelect(slot)}
                        variant="outline"
                        className="bg-agency-dark-lighter border-agency-dark-light hover:bg-agency-red/20 hover:border-agency-red"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">Não há horários disponíveis nesta data.</p>
                )}
              </div>
            </div>
          )}

          {schedulingStep === 'form' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Finalizar Agendamento</h3>
                <Button
                  variant="ghost"
                    onClick={() => {
                    setSelectedDate(null);
                    setSchedulingStep('date');
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ← Voltar
                </Button>
              </div>
              <div className="bg-agency-red/10 p-4 rounded-lg border border-agency-red/20">
                <p className="text-white text-center">
                  <strong>Data:</strong> {format(selectedDate!, 'dd/MM/yyyy')} às{' '}
                  <strong>{selectedTime}</strong>
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Seu nome completo"
                    required
                    className="bg-agency-dark-lighter border-agency-dark-light focus:border-agency-red"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="seu@email.com"
                    required
                    className="bg-agency-dark-lighter border-agency-dark-light focus:border-agency-red"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    className="bg-agency-dark-lighter border-agency-dark-light focus:border-agency-red"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-agency-red hover:bg-agency-red-dark text-white"
                >
                  Confirmar Agendamento
                </Button>
              </form>
            </div>
          )}
        </>
      )}

      {currentFlow === 'contact' && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Enviar Mensagem</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Nome
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Seu nome completo"
                required
                className="bg-agency-dark-lighter border-agency-dark-light focus:border-agency-red"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="seu@email.com"
                required
                className="bg-agency-dark-lighter border-agency-dark-light focus:border-agency-red"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Mensagem
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Descreva seu projeto, dúvida ou necessidade..."
                rows={6}
                className="bg-agency-dark-lighter border-agency-dark-light focus:border-agency-red"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-agency-red hover:bg-agency-red-dark text-white"
            >
              Enviar Mensagem
            </Button>
          </form>

        </div>
      )}
    </div>
  );
};

export default ContactInterface;
