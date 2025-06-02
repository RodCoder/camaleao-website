"use client"
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Markers from '../components/Markers/Markers';
import Features from '../components/Features/Features';
import Discover from '../components/Discover/Discover';
import Units from '../components/Units/Units';
import Comodities from '../components/Comodities/Comodities';

const Home = () => {
  const timelineData = [
    { phase: 'Lançamento', date: 'Março 2023', progress: 100 },
    { phase: 'Início de Desenvolvimento', date: 'Julho 2023', progress: 75 },
    { phase: 'Infraestrutura', date: 'Dezembro 2023', progress: 50 },
    { phase: 'Conclusão', date: 'Junho 2025', progress: 0 }
  ];

  const galleryImages = [
    { id: 1, src: '/gallery1.jpg', alt: 'Vista da praia' },
    { id: 2, src: '/gallery2.jpg', alt: 'Interior moderno' },
    { id: 3, src: '/gallery3.jpg', alt: 'Área da piscina' },
    { id: 4, src: '/gallery4.jpg', alt: 'Terraço com vista para o mar' }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Markers */}
      <Markers />

      {/* Features Grid */}
      <Features />

      {/* Discover Section */}
      <Discover />

      {/* Residential Units */}
      <Units/>

      {/* Comodities */}
      <Comodities />

      {/* Location */}
      <section id="location" className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/location.jpg" 
                alt="Localização" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Localização</h2>
              <p className="mb-6">
                Situado na deslumbrante costa portuguesa, Camaleão oferece fácil acesso às mais belas 
                praias da região. A localização privilegiada proporciona tranquilidade sem abrir mão da 
                proximidade com centros urbanos e todas as comodidades.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="mr-2" size={18} />
                  <span>5 minutos a pé da praia</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" size={18} />
                  <span>15 minutos de carro até o centro da cidade</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" size={18} />
                  <span>30 minutos do aeroporto internacional</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" size={18} />
                  <span>Próximo a restaurantes, lojas e serviços</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Castro Marim */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-amber-900">Castro Marim</h2>
              <p className="text-gray-700 mb-6">
                Castro Marim é uma encantadora vila histórica no Algarve, conhecida por suas salinas, 
                reserva natural e impressionante castelo medieval. Com uma rica herança cultural e 
                natural, a região oferece o equilíbrio perfeito entre tranquilidade e autenticidade.
              </p>
              <p className="text-gray-700">
                Os residentes de Camaleão desfrutarão da proximidade com este tesouro português, 
                tendo acesso a praias intocadas, gastronomia local excepcional e atividades ao ar livre 
                durante todo o ano.
              </p>
            </div>
            <div className="relative h-80">
              <Image 
                src="/flamingos.jpg" 
                alt="Flamingos em Castro Marim" 
                layout="fill" 
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Evolution */}
      <section id="evolution" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-900">Evolução do Camaleão</h2>
          
          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-amber-900">Fases do Projeto</h3>
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-2">
                    <div className="font-semibold text-amber-900 w-32">{item.phase}</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 h-3 rounded-full">
                        <div 
                          className="bg-amber-800 h-3 rounded-full" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-gray-600 w-32 text-right">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gallery */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-900">Documentação</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map(img => (
                <div key={img.id} className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Contactos</h2>
              <p className="mb-8">
                Entre em contacto com nossa equipe de vendas para obter mais informações 
                sobre as unidades disponíveis no Camaleão ou para agendar uma visita ao local.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <span>+351 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3" size={20} />
                  <span>info@camaleao-residences.pt</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3" size={20} />
                  <span>Rua da Praia, Castro Marim, Algarve, Portugal</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Quer saber mais?</h2>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Nome" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Mensagem" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-amber-800 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">CAMALEÃO</div>
            <div className="text-sm text-amber-200">
              © {new Date().getFullYear()} Camaleão Residences. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;