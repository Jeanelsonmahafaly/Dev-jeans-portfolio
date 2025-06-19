
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      period: "Sept - Nov 2023",
      institution: "CHU Andohatapenaka - (Stage - Travail en équipe)",
      degree: "Stage pratique en développement",
      description: "Stage axé sur le développement d'applications web pour les services médicaux avec travail en équipe et méthodes agiles.",
      environment: "Symfony, React, Flutter, MySQL"
    }
  ];

  const awards = [
    {
      year: "Déc 2023",
      title: "Prix de Meilleur Singleton",
      description: "Prix Meilleur Singleton organisé par ORGANISTECH (Cette activité a remporté le grand prix de développement sur le thème du développement, Jeux éducation, Jeux mobile."
    }
  ];

  const formations = [
    {
      period: "2018 - 2023",
      institution: "ESMT (Université Publique)",
      degree: "Agent Universitaire Informatique",
      specialty: "Génie de développement et logiciel informatique"
    },
    {
      period: "Novembre et décembre 2022",
      institution: "ESMT - Formation continue",
      degree: "Licence en développement et Application Web (Laravel)",
      specialty: "Développement web moderne"
    },
    {
      period: "2018",
      institution: "Lycée Enseignement",
      degree: "Baccalauréat scientifique - Série C",
      specialty: "Sciences exactes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Formation & Diplômes
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">Diplômes et Formations</h3>
              </div>
              <div className="space-y-6">
                {formations.map((formation, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">{formation.period}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">{formation.degree}</h4>
                    <p className="text-blue-600 font-medium">{formation.institution}</p>
                    <p className="text-gray-600 text-sm mt-1">{formation.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">Expérience Pratique</h3>
              </div>
              {education.map((exp, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{exp.period}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">{exp.degree}</h4>
                  <p className="text-green-600 font-medium">{exp.institution}</p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                  <div className="bg-gray-100 rounded-lg p-3 mt-3">
                    <p className="text-sm text-gray-600">
                      <strong>Technologies :</strong> {exp.environment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
                <h3 className="text-xl font-semibold text-gray-800">Prix Obtenus</h3>
              </div>
              {awards.map((award, index) => (
                <div key={index} className="border-l-4 border-yellow-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{award.year}</span>
                  </div>
                  <h4 className="font-semibold text-yellow-600 mb-2">{award.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4">Objectifs Professionnels</h3>
              <p className="text-sm leading-relaxed">
                Passionné par le développement web et mobile, je cherche à contribuer à des projets innovants 
                tout en continuant à développer mes compétences en intelligence artificielle et en architecture logicielle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
