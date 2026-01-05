
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai bientôt.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jelsonmahafaly@gmail.com",
      link: "mailto:jelsonmahafaly@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "+261 34 71 786 95",
      link: "tel:+261347216656"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localisation",
      value: "Antananarivo, Madagascar",
      link: ""
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contactez-moi
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Parlons de votre projet
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants. 
              N'hésitez pas à me contacter pour discuter de vos besoins en développement web ou mobile.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-foreground hover:text-blue-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="lg" className="border-white text-foreground hover:bg-white hover:text-gray-900">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-white text-foreground hover:bg-white hover:text-gray-900">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
