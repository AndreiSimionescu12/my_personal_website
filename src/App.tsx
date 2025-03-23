import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Github, Linkedin, Mail, User, Code, Briefcase, GraduationCap, Calendar, Building2, BookOpen, Send } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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
      title: "Platformă de gestiune a unei clinici stomatologice",
      description: "O aplicație web pentru programarea consultațiilor în cabinetul stomatologic",
      fullDescription: "Platforma digitalizează complet procesul de programare la medici stomatologi, oferind o gestionare eficientă a medicilor, pacienților și programărilor. Pacienții pot rezerva online consultații în funcție de disponibilitatea medicilor, iar clinica poate administra ușor orarul, notificările și istoricul pacienților. Totul este intuitiv, rapid și optimizat pentru nevoile cabinetelor stomatologice moderne.",
      image: "/images/personal-projects/project_1.2.jpg",
      screenshots: [
        "/images/personal-projects/project_1.2.jpg",
        "/images/personal-projects/project_1.1.jpg",
        "/images/personal-projects/project_1.3.jpg"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MySQL", "Material UI"],
    },
    {
      id: 2,
      title: "Aplicație de gestiune a taskurilor",
      description: "Un dashboard interactiv pentru vizualizarea și analiza datelor, cu funcționalități de filtrare și export.",
      fullDescription: "Aplicația de gestiune a taskurilor oferă organizare eficientă și claritate în activități. Permite atribuirea, monitorizarea și prioritizarea sarcinilor într-un mod intuitiv. Ideală pentru echipe sau utilizatori individuali care vor productivitate maximă.",
      image: "/images/personal-projects/project_2_preview.jpg",
      screenshots: [
        "/images/personal-projects/project_2.1.jpeg",
        "/images/personal-projects/project_2.2.jpeg",
        "/images/personal-projects/project_2.3.jpeg"
      ],
      technologies: ["React", "Chart.js", "Material-UI"],
    },
    {
      id: 3,
      title: "Aplicație de management a proiectelor",
      description: "O platformă completă pentru gestionarea rezervărilor, cu autentificare și rol-uri de utilizator.",
      fullDescription: "Această aplicație este un manager de proiecte simplu și eficient. Te ajută să organizezi și să urmărești toate proiectele tale într-un singur loc. Poți adăuga proiecte noi, să le atribui echipe, să setezi deadline-uri și să vezi progresul fiecăruia, toate într-o interfață prietenoasă și ușor de folosit.",
      image: "/images/personal-projects/project_3.1.jpg",
      screenshots: [
        "/images/personal-projects/project_3.1.jpg",
        "/images/personal-projects/project_3.2.jpg"
      ],
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd1f59434-5536-4e91-8b64-31c7026dc75d',
          ...formData,
          subject: `Mesaj nou de la ${formData.name}`,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Mesajul a fost trimis cu succes! Vă voi contacta în curând.'
        });
        form.reset();
      } else {
        throw new Error('Eroare la trimitere');
      }
    } catch (error) {
      console.error('Eroare:', error);
      setSubmitStatus({
        type: 'error',
        message: 'A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="font-semibold text-xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Andrei Simionescu</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-purple-400 transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('despre')} className="text-gray-400 hover:text-purple-400 transition-colors">Despre</button>
            <button onClick={() => scrollToSection('competente')} className="text-gray-400 hover:text-purple-400 transition-colors">Competențe</button>
            <button onClick={() => scrollToSection('proiecte')} className="text-gray-400 hover:text-purple-400 transition-colors">Proiecte</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-purple-400 transition-colors">Contact</button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900/95 backdrop-blur-sm border-b border-gray-800`}>
          <div className="px-4 py-3 space-y-2">
            <button 
              onClick={() => {
                scrollToSection('despre');
                setIsMenuOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              Despre
            </button>
            <button 
              onClick={() => {
                scrollToSection('competente');
                setIsMenuOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              Competențe
            </button>
            <button 
              onClick={() => {
                scrollToSection('proiecte');
                setIsMenuOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              Proiecte
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="block text-white">Salut, sunt</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Andrei</span>
              <span className="block text-gray-300 mt-2">Dezvoltator software</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Construiesc aplicații moderne și performante
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="despre" className="bg-black/40 backdrop-blur-sm border-y border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Despre mine</h2>
              <p className="text-purple-400 text-lg mb-12">Full Stack Developer & RPA Developer</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <img 
                    src="/images/profile.jpg" 
                    alt="Andrei Simionescu" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-gray-900 object-top"
                  />
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Sunt un dezvoltator software pasionat cu experiență în crearea de aplicații complexe pentru multiple platforme. 
                      Cu o abordare centrată pe utilizator și atenție la detalii, transform idei complexe în soluții elegante și eficiente.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Specializat în dezvoltarea de aplicații web, mobile și desktop, combin tehnologiile moderne cu arhitecturi robuste 
                      pentru a crea soluții scalabile și performante care răspund nevoilor diverse ale clienților.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                      <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                      <div className="text-gray-400">Ani de experiență</div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                      <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                      <div className="text-gray-400">Proiecte finalizate</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Dezvoltare web</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Automatizare procese</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Cloud & DevOps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">Baze de date</span>
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
                <h3 className="text-xl font-semibold mb-4 text-white">Frontend development</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">React</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Bootstrap</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">SCSS</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">Backend development</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Node.js & Express</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">API</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">MySQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">C#</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">PHP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">YII2 Framework</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">DevOps</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Git & GitHub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Docker</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Bash</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-white">Alte competențe</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">RPA Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Automated Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Redmine</span>
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
                          <li>Dezvoltarea și întreținerea aplicațiilor web folosind YII2 framework</li>
                          <li>Implementarea de funcționalități complexe și optimizarea performanței</li>
                          <li>Colaborarea cu echipa de design pentru implementarea interfețelor utilizator</li>
                          <li>Dezvoltarea și integrarea API-urilor</li>
                          <li>Gestionarea bazelor de date și optimizarea interogărilor</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Implementarea unui sistem de adminstrare a proiectelor aflate in executie.</li>
                          <li>Implementarea unui sistem de gestiune a activităților realizate de către echipa de suport.</li>
                          <li>Dezvoltarea si implementarea unui proces de automatizare a activităților de suport folosind Robotics Power Automate.</li>
                          <li>Imbunătățirea aplicațiilor web existente în cadrul ERP-ului.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Tehnologii:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Yii2 Framework</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PHP</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">JavaScript</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">MySQL</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">MariaDB</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Robotics Power Automate</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">HTML</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">CSS</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Bootstrap</span>
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
                          <li>Realizarea unei aplicații de management a proiectelor dezvoltate in cadrul companiei</li>
                          <li>Dezvoltarea interfețelor utilizator responsive folosind React</li>
                          <li>Implementarea de componente reutilizabile</li>
                          <li>Colaborarea cu echipa de backend pentru integrarea API-urilor</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Realizarea frontend-ului pentru aplicația de management a proiectelor din cadrul companiei</li>
                          <li>Realizarea unui frontend responsive pentru aplicația de management a proiectelor</li>
                          <li>Optimizarea performanței aplicației prin implementarea lazy loading</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Tehnologii:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">JavaScript</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">HTML/CSS/SASS</span>
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
                        <h3 className="text-xl font-semibold text-white">Master în rețele de calculatoare</h3>
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
                          <li>Rețele de comunicații și calculatoare</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Realizări:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea unui sistem de monitorizare a rețelelor IoT</li>
                          <li>Sistem de detectare a mișcării cu control Wireless</li>
                          <li>Configurarea rețelelor de telefonie VoIP cu telefoane IP</li>
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
                        <h3 className="text-xl font-semibold text-white">Facultatea de inginerie electrică și știința calculatoarelor</h3>
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
                        <p className="text-gray-300">Calculatoare și tehnologia informației</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Cursuri relevante:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Programare orientată pe obiect</li>
                          <li>Arhitectura calculatoarelor</li>
                          <li>Baze de date</li>
                          <li>Rețele de calculatoare</li>
                          <li>Sisteme de operare</li>
                          <li>Securitate informatică</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Proiecte semnificative:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li>Dezvoltarea unui sistem de management al bibliotecii</li>
                          <li>Implementarea unei aplicații de gestiune a angajaților</li>
                          <li>Realizarea unui cartier 3D</li>
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
                  className={`w-full h-48 ${project.id === 2 ? 'object-contain bg-gray-800' : 'object-cover'}`}
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
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg mb-4">
                Ai nevoie de o aplicație modernă și performantă pentru afacerea ta?
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Sunt disponibil pentru dezvoltarea de aplicații personalizate, sisteme de management și soluții software la comandă.
                Contactează-mă pentru o discuție despre proiectul tău!
              </p>
              <div className="flex flex-col items-center space-y-4 mb-8">
                <a href="tel:+40751234567" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg">+40 755 526 038</span>
                </a>
                <a href="mailto:andrei.simionescu@example.com" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">andreisimionescu2000@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/AndreiSimionescu12" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/gavril-andrei-simionescu-75a348285/" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer with Contact Form */}
        <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Trimite-mi un mesaj</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nume
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Scrie mesajul tău aici..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Se trimite...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Trimite mesajul
                      </>
                    )}
                  </button>
                  {submitStatus.type && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>

              {/* Copyright and Social Links */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">Contact direct</h3>
                  <div className="space-y-4">
                    <a href="tel:+40755526038" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg">+40 755 526 038</span>
                    </a>
                    <a href="mailto:andreisimionescu2000@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                      <Mail className="w-6 h-6" />
                      <span className="text-lg">andreisimionescu2000@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center md:justify-start space-x-8">
                    <a href="https://github.com/AndreiSimionescu12" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/gavril-andrei-simionescu-75a348285/" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Linkedin className="w-8 h-8" />
                    </a>
                  </div>
                  <p className="text-center md:text-left text-gray-400 hover:text-purple-400 transition-colors">
                    © 2024 Andrei Simionescu. Toate drepturile rezervate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-gray-900/95 backdrop-blur-sm p-8 rounded-lg border border-gray-800 shadow-xl"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm"
          style={{
            content: {
              maxHeight: 'calc(100vh - 180px)',
              marginTop: '60px',
              overflow: 'auto'
            },
            overlay: {
              zIndex: 40,
              overflow: 'hidden'
            }
          }}
        >
          {selectedProject && (
            <div>
              <button
                onClick={() => setModalIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative group cursor-pointer aspect-video" onClick={() => openImageModal(screenshot)}>
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                      className={`rounded-lg shadow-lg w-full h-full ${selectedProject.id === 2 ? 'object-contain bg-gray-800' : 'object-cover'}`}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="font-medium">Vezi imaginea</span>
                      </div>
                    </div>
                  </div>
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
            </div>
          )}
        </Modal>

        {/* Image Modal */}
        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={closeImageModal}
          className="fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-gray-900/95 backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-xl"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm"
          style={{
            content: {
              maxHeight: 'calc(100vh - 180px)',
              marginTop: '60px',
              overflow: 'auto'
            },
            overlay: {
              zIndex: 40,
              overflow: 'hidden'
            }
          }}
        >
          {selectedImage && (
            <div className="relative">
              <button
                onClick={closeImageModal}
                className="absolute -top-3 -right-3 bg-gray-900 rounded-full p-1 text-white hover:text-gray-300 transition-colors z-10 border border-gray-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Imagine mărită"
                className={`w-full h-auto max-h-[calc(100vh-180px)] ${selectedImage.includes('project_2') ? 'object-contain bg-gray-800' : 'object-cover'} rounded-lg shadow-lg`}
              />
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default App;