import React, { useState } from 'react';
import { motion } from "motion/react";
import emailjs from 'emailjs-com';
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

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
  const { language } = useLanguage();
  const t = useTranslations(language);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.agreement || !formData.name || !formData.email || !formData.phone) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceID = 'service_sdfgxkp'; // Replace with your EmailJS service ID
      const templateID = 'template_xw0xtiq'; // Replace with your EmailJS template ID
      const userID = 'J1iAEIbQtO3vuszLY'; // Replace with your EmailJS user ID

      const templateParams = {
        to_email: 'info@terracotacapital.pt',
        subject: 'Site enquiry',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: `Nova consulta do website:
        
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Esta pessoa concordou com os termos de proteção de dados.`,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        agreement: false
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      text: "+351 916 882 364"
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const leftContentVariants = {
    hidden: { 
      opacity: 0, 
      y: -60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const rightContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  };

  const workingHoursVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4
      }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const formFieldsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fieldVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id='contacto' className="relative min-h-screen flex items-center py-20 lg:py-32">
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
      <div className="relative z-10 w-full max-w-[1634px] mx-auto lg:px-8">

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Left Side - Contact Information */}
          <motion.div 
            className="text-white space-y-8 px-8 lg:px-0"
            variants={leftContentVariants}
          >

            {/* Title */}
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold title tracking-wide"
              variants={titleVariants}
            >
              {t.contact.title}
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-base lg:text-lg font-light leading-relaxed opacity-90 max-w-lg"
              variants={descriptionVariants}
            >
              {t.contact.description}
            </motion.p>

            {/* Working Hours */}
            <motion.div 
              className="space-y-2"
              variants={workingHoursVariants}
            >
              <h3 className="text-lg font-semibold">
                {t.contact.workingHours}
              </h3>
              <p className="text-sm lg:text-base font-light opacity-90">
                {t.contact.schedule}
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-6 pt-8"
              variants={contactInfoVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-4"
                  variants={contactItemVariants}
                >
                  <div className="flex-shrink-0 text-white">
                    {info.icon}
                  </div>
                  <span className="text-sm lg:text-base font-light">
                    {info.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="backdrop-blur-md rounded-2xl p-8 lg:p-10 form-container" 
            style={{ background: 'rgba(46,69,46,0.4)' }}
            variants={rightContentVariants}
          >

            {/* Form Title */}
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold text-white mb-8 title tracking-wide"
              variants={formVariants}
            >
              {t.contact.wantToKnow}
            </motion.h3>

            {/* Contact Form */}
            <motion.div 
              className="space-y-6"
              variants={formFieldsVariants}
            >

              {/* Name Field */}
              <motion.div variants={fieldVariants}>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  {t.contact.form.name}
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={language === 'PT' ? "Seu nome completo" : "Your full name"}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={fieldVariants}>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  {t.contact.form.email}
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={language === 'PT' ? "seu.email@exemplo.com" : "your.email@example.com"}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={fieldVariants}>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  {t.contact.form.phone}
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="+351 xxx xxx xxx"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Agreement Checkbox */}
              <motion.div 
                className="flex items-start space-x-3 pt-4"
                variants={fieldVariants}
              >
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
                  {t.contact.form.agreement}
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                className="pt-6"
                variants={fieldVariants}
              >
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.agreement || !formData.name || !formData.email || !formData.phone || isSubmitting}
                  className="w-full py-4 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: (formData.agreement && formData.name && formData.email && formData.phone && !isSubmitting) ? 'var(--dark-green)' : 'transparent',
                    border: (formData.agreement && formData.name && formData.email && formData.phone && !isSubmitting) ? 'none' : '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                  whileHover={(formData.agreement && formData.name && formData.email && formData.phone && !isSubmitting) ? { scale: 1.05 } : {}}
                  whileTap={(formData.agreement && formData.name && formData.email && formData.phone && !isSubmitting) ? { scale: 0.95 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-600/20 border border-green-600/30 rounded-lg text-green-100 text-sm text-center"
                  >
                    {t.contact.form.success}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-600/20 border border-red-600/30 rounded-lg text-red-100 text-sm text-center"
                  >
                    {t.contact.form.error}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;