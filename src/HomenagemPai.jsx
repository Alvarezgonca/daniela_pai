import { useState, useEffect } from 'react';
import { Heart, Gift, Cake, Star, X } from 'lucide-react';
import './styles.css';

const HomenagemPai = () => {
  const [showMessage, setShowMessage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowMessage(prev => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const mensagens = [
    "Pai, você é meu herói e minha inspiração!",
    "Obrigada por todos os momentos especiais que compartilhamos",
    "Seu amor e dedicação me fazem ser quem eu sou hoje",
    "Feliz Aniversário, pai querido!",
    "Com amor, sua filha Daniela ❤️"
  ];

  const cards = {
    amor: {
      title: "Amor Infinito",
      icon: <Heart className="text-red-500 mb-2" size={32} />,
      photos: [
        { src: "/foto.jpg", caption: "Nosso primeiro passeio juntos" },
        { src: "/foto.jpg", caption: "Abraço de pai" },
        { src: "/foto.jpg", caption: "Momentos de carinho" }
      ],
      message: "Pai, seu amor é minha maior força. Cada abraço seu me faz sentir segura e amada."
    },
    momentos: {
      title: "Momentos Especiais",
      icon: <Gift className="text-blue-500 mb-2" size={32} />,
      photos: [
        { src: "/foto.jpg", caption: "Nossa viagem inesquecível" },
        { src: "/foto.jpg", caption: "Aniversário especial" },
        { src: "/foto.jpg", caption: "Nossos domingos em família" }
      ],
      message: "Cada momento ao seu lado é um tesouro que guardo no coração. Nossas risadas, conversas e aventuras são memórias preciosas."
    },
    heroi: {
      title: "Meu Herói",
      icon: <Star className="text-yellow-500 mb-2" size={32} />,
      photos: [
        { src: "/foto.jpg", caption: "Meu exemplo de vida" },
        { src: "/foto.jpg", caption: "Meu protetor" },
        { src: "/foto.jpg", caption: "Meu maior herói" }
      ],
      message: "Você é meu exemplo de força, caráter e dedicação. Tenho muito orgulho de ser sua filha!"
    }
  };

  const Modal = ({ card, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{card.title}</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        
        <p className="text-gray-700 italic mb-6">{card.message}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {card.photos.map((photo, idx) => (
            <div key={idx} className="space-y-2">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-sm text-center text-gray-600">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Feliz Aniversário, Pai!
          <Cake className="inline-block ml-2 text-pink-500" />
        </h1>

        <div className="mb-8">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-pink-500">
            <img 
              src="/foto.jpg" 
              alt="Espaço para foto do pai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
            <p className="text-2xl text-gray-800 font-medium animate-fade-in">
              {mensagens[showMessage]}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {Object.entries(cards).map(([key, card]) => (
              <button
                key={key}
                onClick={() => setSelectedCard(card)}
                className="flex flex-col items-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                {card.icon}
                <p className="text-sm font-medium">{card.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button 
            onClick={() => setShowConfetti(!showConfetti)}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-red-600 transform transition-all duration-300 hover:scale-105"
          >
            Clique Aqui, Pai! 🎉
          </button>
        </div>

        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                  backgroundColor: ['#FF69B4', '#FFD700', '#87CEEB', '#98FB98'][Math.floor(Math.random() * 4)],
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {selectedCard && (
        <Modal 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
        />
      )}

    </div>
  );
};

export default HomenagemPai;