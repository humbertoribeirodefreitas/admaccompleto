import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MinistryContent {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    content: React.ReactNode;
  };
}

const MinistryPage: React.FC = () => {
  const { ministry } = useParams<{ ministry: string }>();
  
  const ministryContent: MinistryContent = {
    intercessao: {
      title: 'Ministério de Intercessão',
      description: 'Equipe dedicada à oração e intercessão pela igreja e comunidade.',
      image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg',
      content: (
        <div>
          <p className="mb-4">
            Nosso ministério de intercessão é composto por pessoas comprometidas com a oração. 
            Nos reunimos regularmente para interceder pela igreja, pelas famílias e por toda a comunidade.
          </p>
          <p className="mb-4">
            Acreditamos no poder da oração e no impacto que ela tem na vida das pessoas e na sociedade.
          </p>
          <h3 className="text-xl font-semibold mb-2">Horários de Intercessão</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Segunda-feira: 19h às 20h</li>
            <li>Quarta-feira: 6h às 7h</li>
            <li>Sábado: 8h às 9h</li>
          </ul>
        </div>
      )
    },
    mulheres: {
      title: 'Ministério de Mulheres',
      description: 'Grupo dedicado ao crescimento espiritual e comunhão entre as mulheres da igreja.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      content: (
        <div>
          <p className="mb-4">
            O Ministério de Mulheres da ADMAC tem como objetivo promover o crescimento espiritual, 
            a comunhão e o discipulado entre as mulheres da nossa igreja.
          </p>
          <p className="mb-4">
            Realizamos encontros mensais, estudos bíblicos, retiros espirituais e ações sociais.
          </p>
          <h3 className="text-xl font-semibold mb-2">Próximos Eventos</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Chá de Mulheres: 15 de maio</li>
            <li>Estudo Bíblico: Todas as terças, 15h</li>
            <li>Retiro Anual: 20-22 de agosto</li>
          </ul>
        </div>
      )
    },
    jovens: {
      title: 'Ministério de Jovens',
      description: 'Grupo dedicado ao desenvolvimento espiritual dos jovens através de atividades e estudos.',
      image: 'https://images.pexels.com/photos/1206059/pexels-photo-1206059.jpeg',
      content: (
        <div>
          <p className="mb-4">
            O Ministério de Jovens da ADMAC é um espaço dinâmico onde os jovens podem crescer na fé, 
            desenvolver relacionamentos saudáveis e descobrir o propósito de Deus para suas vidas.
          </p>
          <p className="mb-4">
            Oferecemos cultos específicos para jovens, retiros, atividades de evangelismo e projetos sociais.
          </p>
          <h3 className="text-xl font-semibold mb-2">Atividades Regulares</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Culto de Jovens: Sábados, 19h30</li>
            <li>Grupos Pequenos: Quartas, 20h</li>
            <li>Esportes: Domingos, 15h</li>
          </ul>
        </div>
      )
    },
    // Additional ministries would be defined here
    kids: {
      title: 'Ministério Infantil',
      description: 'Dedicado ao ensino da Palavra de Deus para crianças de forma didática e divertida.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      content: (
        <div>
          <p className="mb-4">
            O Ministério Infantil da ADMAC é dedicado a ensinar as crianças sobre o amor de Deus 
            de uma forma que elas possam entender e aplicar em suas vidas.
          </p>
          <p className="mb-4">
            Utilizamos histórias bíblicas, músicas, jogos e atividades criativas para tornar 
            o aprendizado bíblico divertido e significativo.
          </p>
          <h3 className="text-xl font-semibold mb-2">Nossas Classes</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Berçário (0-2 anos)</li>
            <li>Maternal (3-5 anos)</li>
            <li>Crianças (6-8 anos)</li>
            <li>Pré-adolescentes (9-11 anos)</li>
          </ul>
        </div>
      )
    },
    lares: {
      title: 'Ministério de Lares',
      description: 'Grupos pequenos que se reúnem nas casas para estudo da Bíblia e comunhão.',
      image: 'https://images.pexels.com/photos/7115193/pexels-photo-7115193.jpeg',
      content: (
        <div>
          <p className="mb-4">
            O Ministério de Lares da ADMAC é formado por pequenos grupos que se reúnem nas casas 
            dos membros da igreja para comunhão, oração e estudo da Palavra de Deus.
          </p>
          <p className="mb-4">
            Estes grupos proporcionam um ambiente mais íntimo onde os membros podem compartilhar 
            suas vidas, apoiar uns aos outros e crescer juntos na fé.
          </p>
          <h3 className="text-xl font-semibold mb-2">Como Participar</h3>
          <p>
            Para participar de um grupo ou oferecer sua casa para sediar um encontro, 
            entre em contato com o ministério através do e-mail lares@admac.org.
          </p>
        </div>
      )
    },
    louvor: {
      title: 'Ministério de Louvor',
      description: 'Equipe dedicada à adoração e condução musical nos cultos da igreja.',
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      content: (
        <div>
          <p className="mb-4">
            O Ministério de Louvor da ADMAC é responsável por conduzir a congregação em adoração 
            durante os cultos e eventos da igreja.
          </p>
          <p className="mb-4">
            Nossa equipe é composta por músicos, cantores e técnicos comprometidos com a excelência 
            na adoração e o serviço à comunidade.
          </p>
          <h3 className="text-xl font-semibold mb-2">Como Participar</h3>
          <p className="mb-4">
            Para participar do Ministério de Louvor, é necessário:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Ser membro da igreja</li>
            <li>Ter habilidade musical ou técnica</li>
            <li>Participar do processo de seleção</li>
            <li>Comprometer-se com os ensaios semanais</li>
          </ul>
        </div>
      )
    },
    pastor: {
      title: 'Pastoral',
      description: 'Conheça nosso pastor e sua visão para a igreja.',
      image: 'https://images.pexels.com/photos/7415060/pexels-photo-7415060.jpeg',
      content: (
        <div>
          <p className="mb-4">
            A liderança pastoral da Igreja ADMAC é composta por pessoas dedicadas ao serviço de Deus 
            e ao cuidado da congregação.
          </p>
          <h3 className="text-xl font-semibold mb-2">Pastor Presidente</h3>
          <p className="mb-4">
            Pastor João Silva tem servido como pastor principal da ADMAC desde 2010. Formado em Teologia 
            pelo Seminário Teológico Batista, ele tem mais de 20 anos de experiência ministerial.
          </p>
          <h3 className="text-xl font-semibold mb-2">Visão Pastoral</h3>
          <p className="mb-4">
            Nossa visão é ser uma igreja que honra a Deus, desenvolve discípulos e transforma a comunidade 
            através do amor de Cristo.
          </p>
          <h3 className="text-xl font-semibold mb-2">Atendimento Pastoral</h3>
          <p>
            Para agendar um aconselhamento pastoral, entre em contato pelo telefone (12) 3456-7890 
            ou pelo e-mail pastor@admac.org.
          </p>
        </div>
      )
    },
  };

  const defaultContent = {
    title: 'Ministério',
    description: 'Informações sobre este ministério estarão disponíveis em breve.',
    image: 'https://images.pexels.com/photos/7115187/pexels-photo-7115187.jpeg',
    content: (
      <div>
        <p>Este conteúdo está em desenvolvimento. Por favor, volte em breve para mais informações.</p>
      </div>
    )
  };

  const currentMinistry = ministry && ministryContent[ministry] ? ministryContent[ministry] : defaultContent;

  return (
    <div className="pt-16">
      <div 
        className="relative h-80 bg-center bg-cover"
        style={{ backgroundImage: `url(${currentMinistry.image})` }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-70"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentMinistry.title}</h1>
            <p className="text-xl max-w-2xl">{currentMinistry.description}</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            {currentMinistry.content}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MinistryPage;