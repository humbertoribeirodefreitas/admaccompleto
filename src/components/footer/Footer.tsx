import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Map, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ADMAC</h3>
            <p className="mb-4">
              Igreja comprometida com a palavra de Deus e o crescimento espiritual de seus membros.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Map size={18} className="mr-2" />
                <span>Rua Principal, 123 - Cidade</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contato@admac.org" className="hover:text-yellow-300 transition-colors">
                  contato@admac.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+551234567890" className="hover:text-yellow-300 transition-colors">
                  (12) 3456-7890
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ministerios/oracao" className="hover:text-yellow-300 transition-colors">
                  Pedidos de Oração
                </Link>
              </li>
              <li>
                <Link to="/ministerios/eventos" className="hover:text-yellow-300 transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/ministerios/pastor" className="hover:text-yellow-300 transition-colors">
                  Mensagens do Pastor
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center">
          <p>&copy; {new Date().getFullYear()} ADMAC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;