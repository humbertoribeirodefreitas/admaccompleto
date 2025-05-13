import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const services = [
  {
    day: 'Domingo',
    times: [
      { time: '09:00', name: 'Escola Bíblica Dominical' },
      { time: '19:00', name: 'Culto de Celebração' }
    ]
  },
  {
    day: 'Terça-feira',
    times: [
      { time: '19:30', name: 'Culto de Oração' }
    ]
  },
  {
    day: 'Quinta-feira',
    times: [
      { time: '19:30', name: 'Culto de Ensino' }
    ]
  },
  {
    day: 'Sábado',
    times: [
      { time: '19:30', name: 'Culto de Jovens' }
    ]
  }
];

const ServiceSchedule: React.FC = () => {
  return (
    <section id="horarios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Horários de Culto</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Venha nos visitar e participar de nossos cultos. Temos programação para toda a família.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-indigo-800 text-white p-4">
                <div className="flex items-center justify-center">
                  <Calendar className="mr-2" size={20} />
                  <h3 className="text-xl font-semibold">{service.day}</h3>
                </div>
              </div>
              <div className="p-6">
                {service.times.map((timeSlot, timeIndex) => (
                  <div 
                    key={timeIndex} 
                    className={`${timeIndex > 0 ? 'mt-4 pt-4 border-t border-indigo-100' : ''}`}
                  >
                    <div className="flex items-center text-indigo-900 mb-1">
                      <Clock size={16} className="mr-2" />
                      <span className="font-semibold">{timeSlot.time}</span>
                    </div>
                    <p className="text-gray-700">{timeSlot.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 italic">
            "Não deixemos de congregar-nos, como é costume de alguns, mas encorajemo-nos uns aos outros."
          </p>
          <p className="text-gray-500 text-sm mt-2">Hebreus 10:25</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSchedule;