"use client"
import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const residentialUnits = [
    {
      id: 1,
      name: 'Mirador',
      price: '1.200.000 €',
      image: '/mirador.jpg',
      details: '3 beds | 2 baths'
    },
    {
      id: 2,
      name: 'Oceano',
      price: '850.000 €',
      image: '/oceano.jpg',
      details: '2 beds | 2 baths'
    },
    {
      id: 3,
      name: 'Apartamentos',
      price: '600.000 €',
      image: '/apartamentos.jpg',
      details: '1 bed | 1 bath'
    }
  ];

  const amenities = [
    { id: 1, icon: '🌊', title: 'Acesso à Praia', description: 'Acesso exclusivo à praia' },
    { id: 2, icon: '🏊', title: 'Piscinas', description: 'Piscinas interiores e exteriores' },
    { id: 3, icon: '🍽️', title: 'Restaurantes', description: 'Gastronomia local e internacional' },
    { id: 4, icon: '🧘', title: 'Spa', description: 'Tratamentos de bem-estar' },
    { id: 5, icon: '🏋️', title: 'Fitness', description: 'Academia completa' },
    { id: 6, icon: '🛌', title: 'Serviço de Quarto', description: 'Disponível 24 horas' },
    { id: 7, icon: '🚗', title: 'Estacionamento', description: 'Vagas cobertas' },
    { id: 8, icon: '👮', title: 'Segurança', description: 'Monitoramento 24h' }
  ];

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
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-800">CAMALEÃO</div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-amber-900 hover:text-amber-700">Início</a>
            <a href="#discover" className="text-amber-900 hover:text-amber-700">Descobrir</a>
            <a href="#units" className="text-amber-900 hover:text-amber-700">Unidades</a>
            <a href="#location" className="text-amber-900 hover:text-amber-700">Localização</a>
            <a href="#evolution" className="text-amber-900 hover:text-amber-700">Evolução</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-700">Contactos</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center pt-16" style={{ backgroundImage: "url('/hero-beach.jpg')" }}>
        <div className="absolute inset-0 bg-brown bg-opacity-40"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg">
              <h1 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-4">
                A dois passos do mar
              </h1>
              <p className="text-gray-700 mb-6">
                Descubra o equilíbrio perfeito entre luxo e natureza neste exclusivo empreendimento à beira-mar. 
                Camaleão oferece residências de alta qualidade com vistas deslumbrantes para o oceano Atlântico.
              </p>
              <div className="flex gap-4">
                <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition">
                  Ver catálogo
                </button>
                <button className="border border-amber-800 text-amber-800 px-6 py-2 rounded-md hover:bg-amber-800 hover:text-white transition">
                  Contactar
                </button>
              </div>
            </div>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-4">
                Quer saber mais?
              </h2>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Nome" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="tel" 
                    placeholder="Telefone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Mensagem" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Exclusivo design</h3>
              <p className="text-gray-600">
                Arquitetura contemporânea que se integra harmoniosamente com a paisagem natural, 
                criando espaços únicos e sofisticados para viver.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Ambiente excepcional</h3>
              <p className="text-gray-600">
                Rodeado pela beleza natural da costa portuguesa, oferecendo tranquilidade e 
                privacidade em um ambiente exclusivo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Investimento com a diferença</h3>
              <p className="text-gray-600">
                Uma oportunidade única de investimento em uma localização privilegiada, 
                combinando luxo e valorização imobiliária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">DESCOBRIR</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                <div className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Image 
                        src="/discover1.jpg" 
                        alt="Vista exterior" 
                        width={600} 
                        height={400} 
                        className="rounded-lg object-cover h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-4">Luxo à beira-mar</h3>
                      <p className="mb-6">
                        Camaleão representa o melhor do luxo costeiro português, com residências 
                        exclusivas que oferecem vistas panorâmicas para o oceano Atlântico e acesso 
                        direto à praia.
                      </p>
                      <p>
                        Cada unidade foi projetada pensando no conforto e na sofisticação, 
                        utilizando materiais da mais alta qualidade e acabamentos premium.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Image 
                        src="/discover2.jpg" 
                        alt="Interior da unidade" 
                        width={600} 
                        height={400} 
                        className="rounded-lg object-cover h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-4">Interiores sofisticados</h3>
                      <p className="mb-6">
                        Espaços amplos e luminosos com grandes janelas que enquadram vistas 
                        espetaculares. O design interior combina elegância contemporânea com 
                        elementos tradicionais portugueses.
                      </p>
                      <p>
                        Cozinhas equipadas com eletrodomésticos de alta gama e banheiros com 
                        acabamentos luxuosos completam a experiência de conforto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setActiveSlide(prev => (prev > 0 ? prev - 1 : 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 text-amber-800 hover:bg-opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setActiveSlide(prev => (prev < 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 text-amber-800 hover:bg-opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {[0, 1].map(index => (
              <button 
                key={index}
                onClick={() => setActiveSlide(index)} 
                className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Units */}
      <section id="units" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-900">Unidades Residenciais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {residentialUnits.map(unit => (
              <div key={unit.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src={unit.image} 
                    alt={unit.name} 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{unit.name}</h3>
                  <p className="text-gray-500 mb-4">{unit.details}</p>
                  <p className="text-amber-900 font-bold text-lg mb-4">{unit.price}</p>
                  <button className="w-full bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2 text-center text-amber-900">Comodidades</h2>
          <p className="text-center text-gray-600 mb-12">Serviços e áreas de lazer</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map(item => (
              <div key={item.id} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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