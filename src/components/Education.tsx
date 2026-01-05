
import React from 'react';
import { GraduationCap, Award, Calendar, Trophy } from 'lucide-react';

const Education = () => {
  const awards = [
    {
      year: "Déc 2023",
      title: "Hackathon Master FTE – Fianarantsoa (2ᵉ place l'équipe SUPERNOVA)",
      position: "Développeur Back-end Symfony",
      description: "Pour l'événement hackathon, organisé par ORGAMITECH, notre équipe a remporté la 2ᵉ place en se concentrant sur le thème du développement d'une application pour une ville intelligente.",
      stack: "Symfony, Flutter, GitHub"
    }
  ];

  const formations = [
    {
      period: "2024",
      institution: "EMIT Université Fianarantsoa",
      degree: "Ingénierie en informatique",
      specialty: "Master II en modélisation et ingénierie informatique"
    },
    {
      period: "2022",
      institution: "EMIT Université Fianarantsoa",
      degree: "Licencier en informatique",
      specialty: "Licence professionnelle en développement d'application Internet et Intranet"
    },
    {
      period: "2018",
      institution: "Lycée Manandriana",
      degree: "Baccalauréat",
      specialty: "Baccalauréat scientifique \"Série C\""
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Formation & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Diplômes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Diplômes et Formations</h3>
              </div>
              <div className="space-y-8">
                {formations.map((formation, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={16} className="text-muted-foreground" />
                          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{formation.period}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{formation.degree}</h4>
                        <p className="text-blue-600 font-semibold mb-2">{formation.institution}</p>
                        <p className="text-gray-600">{formation.specialty}</p>
                      </div>
                    </div>
                    {index < formations.length - 1 && (
                      <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-blue-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Prix Obtenus</h3>
              </div>
              {awards.map((award, index) => (
                <div key={index} className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={16} className="text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-700 bg-yellow-200 px-2 py-1 rounded">{award.year}</span>
                    </div>
                    <h4 className="font-bold text-yellow-800 mb-2">{award.title}</h4>
                    <p className="text-green-700 font-medium mb-2">{award.position}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">{award.description}</p>
                    <div className="bg-white/80 rounded-lg p-3">
                      <p className="text-sm text-gray-600">
                        <strong className="text-gray-800">Stack :</strong> {award.stack}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-foreground rounded-xl p-8 mt-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6" />
                <h3 className="text-lg font-bold">Objectifs Professionnels</h3>
              </div>
              <p className="text-sm leading-relaxed text-blue-50">
                Développeur .NET passionné, je cherche à contribuer à des projets innovants 
                tout en continuant à développer mes compétences en architecture microservices 
                et en technologies cloud Microsoft Azure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
