import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé avec succès ! 🎉",
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jelsonmahafaly@gmail.com",
      link: "mailto:jelsonmahafaly@gmail.com",
      description: "Écrivez-moi pour toute question"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+261 34 72 166 56",
      link: "tel:+2613472116656",
      description: "Appelons-nous directement"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Antananarivo, Madagascar",
      link: "",
      description: "Rencontrons-nous en personne"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travaillons <span className="text-[#10B981]">ensemble</span>
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins et transformer vos idées en réalité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Restons en contact
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants.
                Que vous ayez besoin d'un développeur full-stack, d'expertise en IA, ou simplement
                d'un conseil technique, n'hésitez pas à me contacter.
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
              <h4 className="text-lg font-semibold text-white mb-4">Suivez-moi</h4>
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
              <h3 className="text-xl font-bold text-white">Envoyez-moi un message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#10B981]" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
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
                    placeholder="Votre email"
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
                  placeholder="Sujet de votre message"
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
                  placeholder="Votre message détaillé..."
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
                    Envoi en cours...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 themed-border-t text-center">
              <p className="text-gray-400 text-sm">
                Temps de réponse moyen : <span className="text-[#10B981] font-medium">24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
