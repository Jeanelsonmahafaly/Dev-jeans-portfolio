
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
    
    // Simuler l'envoi
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
      value: "razafimahafaly@gmail.com",
      link: "mailto:razafimahafaly@gmail.com",
      color: "from-glacier-500 to-glacier-600",
      description: "Écrivez-moi pour toute question"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+261 34 71 786 95",
      link: "tel:+261347178695",
      color: "from-glacier-600 to-glacier-700",
      description: "Appelons-nous directement"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Antananarivo, Madagascar",
      link: "",
      color: "from-glacier-500 to-glacier-600",
      description: "Rencontrons-nous en personne"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-glacier-900 via-glacier-800 to-glacier-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-glacier-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-glacier-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-glacier-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travaillons <span className="bg-gradient-to-r from-glacier-400 to-glacier-300 bg-clip-text text-transparent">ensemble</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glacier-400 to-glacier-300 mx-auto rounded-full mb-6"></div>
          <p className="text-glacier-200 max-w-2xl mx-auto text-lg">
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
              <p className="text-glacier-200 leading-relaxed mb-8">
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
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-glacier-400/30"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-glacier-300 text-sm mb-2">{method.description}</p>
                      {method.link ? (
                        <a 
                          href={method.link}
                          className="text-glacier-400 hover:text-glacier-300 transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-glacier-200">{method.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-glacier-400/20 text-white hover:bg-glacier-400/10 hover:border-glacier-400 group bg-transparent"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-glacier-400/20 text-white hover:bg-glacier-400/10 hover:border-glacier-400 group bg-transparent"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-glacier-400" />
              <h3 className="text-xl font-bold text-white">Envoyez-moi un message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-glacier-400" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="pl-12 bg-white/10 border-glacier-400/20 text-white placeholder:text-glacier-300 focus:bg-white/20 focus:border-glacier-400 transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-glacier-400" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-12 bg-white/10 border-glacier-400/20 text-white placeholder:text-glacier-300 focus:bg-white/20 focus:border-glacier-400 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-glacier-400" />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="pl-12 bg-white/10 border-glacier-400/20 text-white placeholder:text-glacier-300 focus:bg-white/20 focus:border-glacier-400 transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-glacier-400" />
                <Textarea
                  name="message"
                  placeholder="Votre message détaillé..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="pl-12 bg-white/10 border-glacier-400/20 text-white placeholder:text-glacier-300 focus:bg-white/20 focus:border-glacier-400 transition-all duration-300 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-glacier-600 to-glacier-500 hover:from-glacier-700 hover:to-glacier-600 text-white font-semibold py-4 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-glacier-300 text-sm">
                Temps de réponse moyen : <span className="text-glacier-400 font-medium">24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
