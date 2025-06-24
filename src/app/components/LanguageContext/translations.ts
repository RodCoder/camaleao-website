import { Language } from './LanguageContext';

export interface Translations {
  // Navigation
  nav: {
    units: string;
    amenities: string;
    evolution: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    description: string;
  };
  
  // Markers
  markers: {
    beach: string;
    highway: string;
    airport: string;
    restaurants: string;
  };
  
  // Features
  features: {
    essence: {
      title: string;
      description: string;
    };
    experience: {
      title: string;
      description: string;
    };
    nature: {
      title: string;
      description: string;
    };
  };
  
  // Discover Section
  discover: {
    title: string;
    subtitle: string;
  };
  
  // Units Section
  units: {
    title: string;
    moreInfo: string;
    viewMore: string;
    specs: {
      construction: string;
      interior: string;
      total: string;
      value: string;
    };
  };
  
  // Amenities
  amenities: {
    title: string;
    subtitle: string;
    beach: {
      title: string;
      description: string;
    };
    restaurants: {
      title: string;
      description: string;
    };
    parking: {
      title: string;
      description: string;
    };
    viewpoint: {
      title: string;
      description: string;
    };
    trails: {
      title: string;
      description: string;
    };
    cycling: {
      title: string;
      description: string;
    };
    habitat: {
      title: string;
      description: string;
    };
    park: {
      title: string;
      description: string;
    };
  };
  
  // Location
  location: {
    title: string;
    description: string;
    environment: string;
    distances: {
      beach: string;
      restaurants: string;
      supermarkets: string;
      highways: string;
      border: string;
      airport: string;
    };
  };
  
  // Living Section
  living: {
    architect: {
      title: string;
      description: string;
    };
    seafood: {
      title: string;
      description: string;
    };
    nature: {
      title: string;
      description: string;
    };
  };
  
  // Project Evolution
  evolution: {
    title: string;
    lastUpdate: string;
    salesPhase: string;
    developmentPhase: string;
    apartments: string;
    houses: string;
    infrastructure: string;
    projects: string;
    construction: string;
    completion: string;
    deeds: string;
    status: {
      completed: string;
      inProgress: string;
      started: string;
      toAnnounce: string;
    };
  };
  
  // Contact
  contact: {
    title: string;
    description: string;
    workingHours: string;
    schedule: string;
    wantToKnow: string;
    form: {
      name: string;
      email: string;
      phone: string;
      agreement: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  PT: {
    nav: {
      units: "Unidades",
      amenities: "Comodidades",
      evolution: "Evolução",
      contact: "Contacto"
    },
    hero: {
      title: "A dois passos do mar",
      description: "A harmonia entre arquitetura consciente e a envolvência natural de Castro Marim, dá origem a um conceito pensado para quem valoriza tempo, liberdade e autenticidade. Para viver, desfrutar ou investir, este é o seu espaço, ao seu ritmo."
    },
    markers: {
      beach: "A 750m da praia",
      highway: "A 3 km da autoestrada",
      airport: "A 58 km do Aeroporto Internacional de Faro",
      restaurants: "A 450 m dos restaurantes na praia"
    },
    features: {
      essence: {
        title: "Essência Algarvia",
        description: "Inspirado nas raízes históricas, e culturais do Algarve e ecologicamente consciente, este projeto combina arquitetura funcional e cativante, refletindo a alma única da região."
      },
      experience: {
        title: "Vivência Inesquecível",
        description: "Desenhado para criar uma vivência e momentos de partilha com a família e amigos, daqueles que ficam gravados na memória e perduram no tempo."
      },
      nature: {
        title: "Envolvência com a Natureza",
        description: "As áreas de preservação ecológica envolventes serão cuidadosamente mantidas para garantir a proteção de espécies nativas da fauna e flora."
      }
    },
    discover: {
      title: "DESCOBRIR",
      subtitle: "Viver em harmonia"
    },
    units: {
      title: "Unidades Residenciais",
      moreInfo: "Mais informações",
      viewMore: "Ver mais unidades",
      specs: {
        construction: "INÍCIO DAS OBRAS:",
        interior: "ÁREA INTERIOR:",
        total: "ÁREA INTERIOR + EXTERIOR:",
        value: "VALOR DO IMÓVEL:"
      }
    },
    amenities: {
      title: "Comodidades",
      subtitle: "Abrace o ritmo da vida",
      beach: {
        title: "Praia",
        description: "A poucos minutos a pé, desfrute de uma das praias mais exclusivas da região. Um cenário natural ideal para relaxar, contemplar a paisagem e sentir a brisa do mar."
      },
      restaurants: {
        title: "Restaurantes",
        description: "Experiências autênticas e sabores irresistíveis. Descubra restaurantes típicos, com um frescor contemporâneo, que celebram a essência algarvia."
      },
      parking: {
        title: "Estacionamento",
        description: "Estacionamento privativo, pensado para oferecer comodidade aos residentes."
      },
      viewpoint: {
        title: "Miradouro",
        description: "Locais de plena tranquilidade, perfeitos para contemplar a vista desafogada sobre o mar e o ecossistema natural envolvente."
      },
      trails: {
        title: "Percursos Pedonais",
        description: "Trilhos imersos na natureza, ideais para caminhadas tranquilas, em contacto direto com a flora e fauna locais."
      },
      cycling: {
        title: "Ciclovias",
        description: "Ciclovias seguras e modernas, para quem valoriza mobilidade sustentável e deseja explorar a região sobre duas rodas."
      },
      habitat: {
        title: "Habitat Camealeão",
        description: "Zona de proteção ecológica dedicada à preservação do camaleão-do-Algarve, símbolo da biodiversidade regional e do compromisso ambiental do empreendimento."
      },
      park: {
        title: "Parque de Velocípedes",
        description: "Espaço concebido para circuitos de bicicletas, trotinetes e outros velocípedes, promovendo lazer ao ar livre, com segurança e diversão."
      }
    },
    location: {
      title: "Localização",
      description: "Castro Marim combina, de forma única, a história, a natureza e o charme costeiro, numa região com cerca de 300 dias de sol por ano, a 6 minutos a pé da praia e onde se encontra a mais antiga reserva natural de sapal em Portugal. O Camaleão nasce como um empreendimento único, entre o sal, o sol e a serenidade, lugar onde a natureza dita o compasso dos dias e a vida se orienta pelo equilíbrio e pela autenticidade.",
      environment: "Envolvente",
      distances: {
        beach: "600m da praia",
        restaurants: "600m dos restaurantes mais próximos",
        supermarkets: "2km dos supermercados",
        highways: "3km das autoestradas",
        border: "8km da fronteira com Espanha, da Ponte Internacional do Guadiana",
        airport: "58km do Aeroporto Internacional de Faro"
      }
    },
    living: {
      architect: {
        title: "Arquitetura de autor",
        description: "Luis Rebelo de Andrade é um dos arquitectos mais premiados de Portugal, e o seu trabalho é uma referência em projetos que combinam o luxo com o bem estar e a sustentabilidade. A identidade singular e distintiva dos seus projetos é baseada num profundo conhecimento e respeito pela história e tradição dos locais onde se situam."
      },
      seafood: {
        title: "Sabor a mar",
        description: "Frescura que vem do mar, num cenário onde o oceano nunca se ausenta. Peixe grelhado à beira-mar, aromas que se confundem com a brisa, e uma cultura gastronómica enraizada na tradição costeira."
      },
      nature: {
        title: "A calma da natureza",
        description: "Onde o verde das reservas naturais se funde ao azul do céu algarvio, encontra-se o equilíbrio perfeito entre conforto e tranquilidade. Um refúgio onde a natureza guia o compasso dos dias e revela a essência de uma vida mais simples e plena."
      }
    },
    evolution: {
      title: "Evolução do Camaleão",
      lastUpdate: "Última atualização: abril 2025",
      salesPhase: "Fase de vendas",
      developmentPhase: "Fase de desenvolvimento",
      apartments: "Apartamentos",
      houses: "Moradias",
      infrastructure: "Infraestrutura",
      projects: "Projetos",
      construction: "Construção",
      completion: "Fim da construção",
      deeds: "Escrituras",
      status: {
        completed: "Concluído",
        inProgress: "Em curso",
        started: "Iniciado",
        toAnnounce: "Por anunciar"
      }
    },
    contact: {
      title: "Contactos",
      description: "Precisa de mais informações? Ligue-nos ou preencha o formulário de mensagem, e entraremos em contacto consigo entre 24 a 48h.",
      workingHours: "Horário de funcionamento:",
      schedule: "Segunda a Sexta das 9:00h às 18:00h",
      wantToKnow: "Quer saber mais?",
      form: {
        name: "Nome",
        email: "E-mail",
        phone: "Telefone/Whatsapp",
        agreement: "Dê acordo com a lei geral de proteção de dados, concordo em fornecer os dados acima para que o incorporador entre em contacto comigo para apresentar produtos e serviços em conformidade com a política de privacidade adotada.",
        submit: "Entre em contacto",
        sending: "Enviando...",
        success: "✓ Mensagem enviada com sucesso! Entraremos em contacto em breve.",
        error: "✗ Erro ao enviar mensagem. Tente novamente ou contacte-nos diretamente."
      }
    },
    footer: {
      copyright: "© 2025 Camaleão. All Rights Reserved."
    }
  },
  EN: {
    nav: {
      units: "Units",
      amenities: "Commodities",
      evolution: "Evolution",
      contact: "Contact"
    },
    hero: {
      title: "Two steps from the sea",
      description: "The harmony between conscious architecture and the natural environment of Castro Marim gives rise to a concept designed for those who value time, freedom and authenticity. To live, enjoy or invest, this is your space, at your pace."
    },
    markers: {
      beach: "750m from the beach",
      highway: "3 km from the highway",
      airport: "58 km from Faro International Airport",
      restaurants: "450 m from beach restaurants"
    },
    features: {
      essence: {
        title: "Algarve Essence",
        description: "Inspired by the historical and cultural roots of the Algarve and ecologically conscious, this project combines functional and captivating architecture, reflecting the unique soul of the region."
      },
      experience: {
        title: "Unforgettable Experience",
        description: "Designed to create an experience and moments of sharing with family and friends, those that are engraved in memory and endure over time."
      },
      nature: {
        title: "Connection with Nature",
        description: "The surrounding ecological preservation areas will be carefully maintained to ensure the protection of native fauna and flora species."
      }
    },
    discover: {
      title: "DISCOVER",
      subtitle: "Living in harmony"
    },
    units: {
      title: "Residential Units",
      moreInfo: "More information",
      viewMore: "View more units",
      specs: {
        construction: "CONSTRUCTION START:",
        interior: "INTERIOR AREA:",
        total: "INTERIOR + EXTERIOR AREA:",
        value: "PROPERTY VALUE:"
      }
    },
    amenities: {
      title: "Commodities",
      subtitle: "Embrace the rhythm of life",
      beach: {
        title: "Beach",
        description: "Just a few minutes walk away, enjoy one of the most exclusive beaches in the region. A natural setting ideal for relaxing, contemplating the landscape and feeling the sea breeze."
      },
      restaurants: {
        title: "Restaurants",
        description: "Authentic experiences and irresistible flavors. Discover traditional restaurants, with a contemporary freshness, that celebrate the Algarve essence."
      },
      parking: {
        title: "Parking",
        description: "Private parking, designed to offer convenience to residents."
      },
      viewpoint: {
        title: "Viewpoint",
        description: "Places of complete tranquility, perfect for contemplating the unobstructed view over the sea and the surrounding natural ecosystem."
      },
      trails: {
        title: "Walking Trails",
        description: "Trails immersed in nature, ideal for peaceful walks, in direct contact with local flora and fauna."
      },
      cycling: {
        title: "Cycle Paths",
        description: "Safe and modern cycle paths, for those who value sustainable mobility and want to explore the region on two wheels."
      },
      habitat: {
        title: "Chameleon Habitat",
        description: "Ecological protection zone dedicated to preserving the Algarve chameleon, symbol of regional biodiversity and the environmental commitment of the development."
      },
      park: {
        title: "Bike Park",
        description: "Space designed for bicycle, scooter and other vehicle circuits, promoting outdoor leisure, with safety and fun."
      }
    },
    location: {
      title: "Location",
      description: "Castro Marim uniquely combines history, nature and coastal charm, in a region with about 300 days of sunshine per year, 6 minutes walk from the beach and where the oldest salt marsh nature reserve in Portugal is located. Camaleão is born as a unique development, between salt, sun and serenity, a place where nature dictates the pace of days and life is oriented by balance and authenticity.",
      environment: "Surroundings",
      distances: {
        beach: "600m from the beach",
        restaurants: "600m from the nearest restaurants",
        supermarkets: "2km from supermarkets",
        highways: "3km from highways",
        border: "8km from the Spanish border, from the Guadiana International Bridge",
        airport: "58km from Faro International Airport"
      }
    },
    living: {
      architect: {
        title: "Signature Architecture",
        description: "Luis Rebelo de Andrade is one of Portugal's most awarded architects, and his work is a reference in projects that combine luxury with well-being and sustainability. The singular and distinctive identity of his projects is based on deep knowledge and respect for the history and tradition of the places where they are located."
      },
      seafood: {
        title: "Taste of the sea",
        description: "Freshness that comes from the sea, in a setting where the ocean is never absent. Fish grilled by the sea, aromas that blend with the breeze, and a gastronomic culture rooted in coastal tradition."
      },
      nature: {
        title: "The calm of nature",
        description: "Where the green of nature reserves merges with the blue of the Algarve sky, the perfect balance between comfort and tranquility is found. A refuge where nature guides the pace of days and reveals the essence of a simpler and fuller life."
      }
    },
    evolution: {
      title: "Camaleão Evolution",
      lastUpdate: "Last update: April 2025",
      salesPhase: "Sales Phase",
      developmentPhase: "Development Phase",
      apartments: "Apartments",
      houses: "Houses",
      infrastructure: "Infrastructure",
      projects: "Projects",
      construction: "Construction",
      completion: "Construction completion",
      deeds: "Deeds",
      status: {
        completed: "Completed",
        inProgress: "In progress",
        started: "Started",
        toAnnounce: "To be announced"
      }
    },
    contact: {
      title: "Contact",
      description: "Need more information? Call us or fill out the message form, and we will contact you within 24 to 48 hours.",
      workingHours: "Working hours:",
      schedule: "Monday to Friday from 9:00am to 6:00pm",
      wantToKnow: "Want to know more?",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone/Whatsapp",
        agreement: "In accordance with the general data protection law, I agree to provide the above data so that the developer can contact me to present products and services in accordance with the adopted privacy policy.",
        submit: "Get in touch",
        sending: "Sending...",
        success: "✓ Message sent successfully! We will contact you soon.",
        error: "✗ Error sending message. Please try again or contact us directly."
      }
    },
    footer: {
      copyright: "© 2025 Camaleão. All Rights Reserved."
    }
  }
};

// Hook to get translations for current language
export const useTranslations = (language: Language): Translations => {
  return translations[language];
};