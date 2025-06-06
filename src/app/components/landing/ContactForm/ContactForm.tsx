import React, { useState } from 'react';

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  agreement: boolean;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    agreement: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!formData.agreement) return;
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Av. Almirante Gago Coutinho nº55A, 1700-027, Lisboa"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "+351 935 438 015"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "info@terracotacapital.pt"
    }
  ];

  return (
    <section id='contacto' className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/contacto.jpg" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Contact Information */}
          <div className="text-white space-y-8">
            
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold title tracking-wide">
              Contactos
            </h2>
            
            {/* Description */}
            <p className="text-base lg:text-lg font-light leading-relaxed opacity-90 max-w-lg">
              Precisa de mais informações? Ligue-nos ou preencha o formulário de 
              mensagem, e entraremos em contacto consigo entre 24 a 48h.
            </p>

            {/* Working Hours */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Horário de funcionamento:
              </h3>
              <p className="text-sm lg:text-base font-light opacity-90">
                Segunda a Sexta das 9:00h às 18:00h
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 pt-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-white">
                    {info.icon}
                  </div>
                  <span className="text-sm lg:text-base font-light">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="backdrop-blur-md rounded-2xl p-8 lg:p-10 form-container" style={{background: 'rgba(46,69,46,0.4)'}}>
            
            {/* Form Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 title tracking-wide">
              Quer saber mais?
            </h3>

            {/* Contact Form */}
            <div className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  Telefone/Whatsapp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="+351 xxx xxx xxx"
                  required
                />
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start space-x-3 pt-4">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-green-600 bg-white/10 border-white/20 rounded focus:ring-green-500 focus:ring-2"
                  required
                />
                <label htmlFor="agreement" className="text-white text-sm font-light leading-relaxed">
                  Dê acordo com a lei geral de proteção de dados, concordo em fornecer os 
                  dados acima para que o incorporador entre em contacto comigo para apresentar 
                  produtos e serviços em conformidade com a política de privacidade adotada.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.agreement}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                >
                  Reservar estadia
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;