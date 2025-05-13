import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg" 
          alt="Igreja ADMAC" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Igreja ADMAC
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.p
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [0, 0, 0, -20]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              times: [0, 0.3, 0.7, 1]
            }}
            className="text-xl md:text-2xl mb-8"
          >
            "A fé vem pelo ouvir, e o ouvir pela palavra de Deus."
          </motion.p>
          
          <motion.p
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              delay: 6,
              times: [0, 0.3, 0.7, 1]
            }}
            className="text-xl md:text-2xl mb-8"
          >
            "Adorai ao Senhor na beleza da sua santidade."
          </motion.p>
          
          <motion.p
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              delay: 12,
              times: [0, 0.3, 0.7, 1]
            }}
            className="text-xl md:text-2xl mb-8"
          >
            "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso."
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a 
            href="#horarios" 
            className="inline-block bg-yellow-500 text-indigo-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
          >
            Nossos Horários
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;