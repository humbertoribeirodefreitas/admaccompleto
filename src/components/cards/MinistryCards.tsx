import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ministryCards = [
  {
    title: 'Ministério de Louvor',
    description: 'Conheça nossa equipe de adoração e como participar deste ministério que alegra o coração de Deus.',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    link: '/ministerios/louvor'
  },
  {
    title: 'Ministério Infantil',
    description: 'As crianças são especiais para nós. Conheça o trabalho que desenvolvemos com as crianças da comunidade.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    link: '/ministerios/kids'
  }
];

const MinistryCards: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Nossos Ministérios</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conheça alguns dos nossos ministérios e como eles impactam vidas na nossa comunidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ministryCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                <Link 
                  to={card.link}
                  className="inline-block bg-indigo-600 text-white font-medium py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                >
                  Saiba Mais
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistryCards;