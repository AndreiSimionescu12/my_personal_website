import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Github, Linkedin, Mail, User, Code, Briefcase, GraduationCap, Calendar, Building2, BookOpen } from 'lucide-react';

Modal.setAppElement('#root');

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  screenshots: string[];
  technologies: string[];
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Aplicație Web E-commerce",
      description: "O platformă modernă de comerț electronic construită cu React și Node.js",
      fullDescription: "Platformă completă de e-commerce cu sistem de gestionare a produselor, coș de cumpărături, procesare plăți și panou de administrare. Implementează cele mai bune practici de UI/UX și oferă o experiență de cumpărare fluidă.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"]
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interactiv pentru vizualizarea și analiza datelor",
      fullDescription: "Dashboard complex pentru analiza datelor în timp real, cu grafice interactive, rapoarte personalizabile și sistem de alertare. Oferă insights valoroase pentru decizii de business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React", "D3.js", "Firebase", "Material-UI"]
    },
    {
      id: 3,
      title: "Sistem de Management al Învățării",
      description: "Platformă educațională completă pentru cursuri online",
      fullDescription: "Sistem complex de management al învățării cu suport pentru cursuri video, teste interactive, forum de discuții și tracking al progresului. Facilitează învățarea la distanță și interacțiunea între profesori și studenți.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      screenshots: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Next.js", "PostgreSQL", "WebRTC", "Socket.io"]
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-gray-800 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="w-6 h-6 text-purple-500" />
            <span className="font-semibold text-xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Portofoliu Personal</span>
          </div>
          <div className="flex space-x-4">
            <a href="#despre" className="text-gray-400 hover:text-purple-400 transition-colors">Despre</a>
            <a href="#competente" className="text-gray-400 hover:text-purple-400 transition-colors">Competențe</a>
            <a href="#proiecte" className="text-gray-400 hover:text-purple-400 transition-colors">Proiecte</a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="block text-white">Bine ați venit pe</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Site-ul Meu Personal</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Developer Pasionat & Creator de Soluții Digitale
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="despre" className="bg-black/40 backdrop-blur-sm border-y border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Despre Mine</h2>
              <p className="text-purple-400 text-lg mb-12">Full Stack Developer & Tech Enthusiast</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/images/profile.jpg"
                    alt="Profil"
                    className="w-72 h-72 rounded-full object-cover object-top shadow-lg ring-4 ring-purple-500/50 mx-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-purple-500 p-3 rounded-full">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Sunt un dezvoltator software pasionat cu experiență în crearea de aplicații web moderne și intuitive. 
                      Cu o abordare centrată pe utilizator și atenție la detalii, transform idei complexe în soluții elegante și eficiente.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Specializat în dezvoltarea full-stack, combin tehnologiile frontend moderne cu arhitecturi backend robuste 
                      pentru a crea aplicații scalabile și performante.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                      <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                      <div className="text-gray-400">Ani de Experiență</div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                      <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                      <div className="text-gray-400">Proiecte Finalizate</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Dezvoltare Web Modernă</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Arhitectură Scalabilă</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Optimizare Performanță</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Best Practices</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contactează-mă
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competente" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-16">Competențe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">React</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[90%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">TypeScript</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[85%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Tailwind CSS</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[95%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">Backend Development</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Node.js</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[88%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Express</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[82%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">PostgreSQL</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[85%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">DevOps & Tools</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Git</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[92%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Docker</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[75%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">AWS</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[70%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">Soft Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Team Work</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[95%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Communication</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[90%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Problem Solving</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div className="w-[88%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experienta" className="bg-black/40 backdrop-blur-sm border-y border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Experiență</h2>
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Full Stack Web Developer</h3>
                        <p className="text-purple-400 font-medium">Econfaire Emmersive Design</p>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Iulie 2023 - Prezent</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Responsabilități:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea și întreținerea aplicațiilor web folosind React și Node.js</li>
                          <li>Implementarea de funcționalități complexe și optimizarea performanței</li>
                          <li>Colaborarea cu echipa de design pentru implementarea interfețelor utilizator</li>
                          <li>Dezvoltarea și integrarea API-urilor RESTful</li>
                          <li>Gestionarea bazelor de date și optimizarea interogărilor</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Reducerea timpului de încărcare al aplicației cu 40% prin optimizări</li>
                          <li>Implementarea unui sistem de caching care a îmbunătățit performanța cu 60%</li>
                          <li>Dezvoltarea unui sistem de autentificare și autorizare robust</li>
                          <li>Integrarea unui sistem de plăți online care a crescut conversia cu 25%</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Tehnologii:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">TypeScript</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PostgreSQL</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Docker</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
                        <p className="text-purple-400 font-medium">Raissis Software</p>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Aprilie 2022 - Iulie 2022</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Responsabilități:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea interfețelor utilizator responsive folosind React</li>
                          <li>Implementarea de componente reutilizabile și optimizarea codului</li>
                          <li>Colaborarea cu echipa de backend pentru integrarea API-urilor</li>
                          <li>Participarea la code reviews și îmbunătățirea practicilor de dezvoltare</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea unui sistem de componente UI care a redus timpul de dezvoltare cu 30%</li>
                          <li>Implementarea unui sistem de teme care a îmbunătățit experiența utilizatorului</li>
                          <li>Optimizarea performanței aplicației prin implementarea lazy loading</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Tehnologii:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">JavaScript</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">CSS/SASS</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Git</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="educatie" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Educație</h2>
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Master în Rețele de Calculatoare</h3>
                        <p className="text-purple-400 font-medium">Universitatea "Ștefan cel Mare" din Suceava</p>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Septembrie 2023 - Prezent</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Specializări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Arhitecturi Avansate de Rețele</li>
                          <li>Securitate în Rețele</li>
                          <li>Cloud Computing și Virtualizare</li>
                          <li>Internet of Things (IoT)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Proiecte de Cercetare:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea unui sistem de monitorizare a rețelelor IoT</li>
                          <li>Implementarea unui framework de securitate pentru rețele cloud</li>
                          <li>Optimizarea performanței rețelelor 5G</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Media generală: 9.45/10</li>
                          <li>Participare la conferințe naționale și internaționale</li>
                          <li>Publicare de articole în reviste de specialitate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Facultatea de Inginerie Electrică și Știința Calculatoarelor</h3>
                        <p className="text-purple-400 font-medium">Universitatea "Ștefan cel Mare" din Suceava</p>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Septembrie 2019 - Septembrie 2023</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Specializare:</h4>
                        <p className="text-gray-300">Calculatoare și Tehnologia Informației</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Cursuri Relevante:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Programare Avansată</li>
                          <li>Arhitectura Calculatoarelor</li>
                          <li>Baze de Date</li>
                          <li>Rețele de Calculatoare</li>
                          <li>Sisteme de Operare</li>
                          <li>Securitate Informatică</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Proiecte Semnificative:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea unui sistem de management al bibliotecii</li>
                          <li>Implementarea unui simulator de rețele</li>
                          <li>Crearea unui sistem de monitorizare a performanței</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Activitate Extracurriculară:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Membru al clubului de programare</li>
                          <li>Participare la hackathoane și competiții de programare</li>
                          <li>Voluntariat în proiecte educaționale</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări Academice:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Media generală: 9.20/10</li>
                          <li>Locul 1 în competiția de programare a facultății</li>
                          <li>Bursă de merit în toți anii de studiu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proiecte" className="bg-black/40 backdrop-blur-sm border-y border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Proiecte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => openModal(project)}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Vezi detalii →
                  </button>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Contact</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hover:text-purple-400 transition-colors">
            <p>© 2024 Site Personal. Toate drepturile rezervate.</p>
          </div>
        </footer>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="max-w-4xl mx-auto mt-20 bg-gray-900/95 backdrop-blur-sm p-8 rounded-lg border border-gray-800 shadow-xl"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm"
        >
          {selectedProject && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg"
                  />
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Tehnologii utilizate:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setModalIsOpen(false)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Închide
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default App;