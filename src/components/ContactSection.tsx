import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "49a90222-e709-458d-b53f-562f55836dea");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: t('contact.success'),
          description: t('contact.successDesc'),
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: t('contact.error'),
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.emailTitle'),
      value: "jelsonmahafaly@gmail.com",
      link: "mailto:jelsonmahafaly@gmail.com",
      description: t('contact.emailDesc')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      value: "+261 34 72 166 56",
      link: "tel:+2613472116656",
      description: t('contact.phoneDesc')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      link: "",
      description: t('contact.locationDesc')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')} <span className="text-[#10B981]">{t('contact.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.stayInTouch')}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {t('contact.intro')}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group glass rounded-2xl p-6 hover:border-[#10B981] card-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#10B981]/20 flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-[#10B981] hover:text-[#059669] transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-gray-300">{method.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 themed-border-t">
              <h4 className="text-lg font-semibold text-white mb-4">{t('contact.followMe')}</h4>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="lg"
                  className="flex-1 themed-border text-gray-300 hover:bg-[#10B981]/10 hover:border-[#10B981] hover:text-[#10B981] group bg-transparent btn-micro-bounce"
                >
                  <a
                    href="https://github.com/Jeanelsonmahafaly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg"
                  className="flex-1 themed-border text-gray-300 hover:bg-[#10B981]/10 hover:border-[#10B981] hover:text-[#10B981] group bg-transparent btn-micro-bounce"
                >
                  <a
                    href="https://www.linkedin.com/in/jean-elson-razafimahafaly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 themed-border themed-border-hover">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-[#10B981]" />
              <h3 className="text-xl font-bold text-white">{t('contact.sendMessage')}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#10B981]" />
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="pl-12 bg-[#030712] themed-border text-white placeholder:text-gray-500 focus:bg-[#111827] focus:border-[#10B981] transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#10B981]" />
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-12 bg-[#030712] themed-border text-white placeholder:text-gray-500 focus:bg-[#111827] focus:border-[#10B981] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#10B981]" />
                <Input
                  type="text"
                  name="subject"
                  placeholder={t('contact.subjectPlaceholder')}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="pl-12 bg-[#030712] themed-border text-white placeholder:text-gray-500 focus:bg-[#111827] focus:border-[#10B981] transition-all duration-300"
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-[#10B981]" />
                <Textarea
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="pl-12 bg-[#030712] themed-border text-white placeholder:text-gray-500 focus:bg-[#111827] focus:border-[#10B981] transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-4 btn-micro-bounce transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {t('contact.sending')}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 themed-border-t text-center">
              <p className="text-gray-400 text-sm">
                {t('contact.responseTime')} <span className="text-[#10B981] font-medium">{t('contact.responseTimeValue')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
