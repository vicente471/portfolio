import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Code, Layout, Server, Terminal, X } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = {
    sectionPadding: "py-20 px-6 md:px-20 max-w-7xl mx-auto",
    card: "bg-[#112240] p-6 rounded-xl border border-[#233554] hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]",
    heading: "text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-3",
    subHeading: "text-cyan-400 font-mono text-sm mb-2",
    badge: "bg-[#1d2d50] text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-900",
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",
    buttonPrimary: "bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    buttonOutline: "border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 py-3 px-6 rounded-lg transition-colors bg-transparent flex items-center gap-2",
  };

  const skills = [
    { title: "Lenguajes", icon: <Code />, items: ["Dart", "JavaScript", "Python", "SQL", "C/C++"] },
    { title: "Frameworks", icon: <Layout />, items: ["Flutter", "Node.js", "Express", "React", "Electron", "Bootstrap"] },
    { title: "DevOps & DB", icon: <Server />, items: ["PostgreSQL", "Docker", "Nginx", "Git", "VPS"] },
    { title: "Herramientas", icon: <Terminal />, items: ["Powershell", "Excel ETL", "VS Code", "Linux", "Cron"] }
  ];

  const experience = [
    {
      role: "Desarrollador Full-Stack & Soporte IT",
      company: "Gestión en Transportes y Maquinarias S.A. (GETRAM)",
      period: "Ene 2024 - Presente",
      desc: "Lideré la transformación digital de la empresa, modernizando procesos críticos mediante el desarrollo de ecosistemas de software a medida y la implementación de tecnologías escalables.",
      points: [
        "Desarrollo integral de 2 aplicaciones multiplataforma (Móvil/Escritorio) con Flutter.",
        "Arquitectura Backend robusta con Node.js & PostgreSQL desplegada en VPS Linux.",
        "Desarrollo de aplicación de escritorio con Electron y React para gestión de facturación, integrada bidireccionalmente con ERP Defontana.",
        "Implementación de Dashboard GPS en React para monitoreo de flota en tiempo real."
      ]
    },
    {
      role: "Proyecto Ciencia de Datos",
      company: "CEDETEC - USACH",
      period: "2024",
      desc: "Investigación aplicada y desarrollo de software científico.",
      points: [
        "Levantamiento de entornos Docker para experimentación reproducible.",
        "Pruebas, benchmarking y optimización de algoritmos de Inteligencia Artificial."
      ]
    }
  ];

  const projects = [
    {
      title: "Gestión Maquinaria GETRAM",
      category: "Mobile",
      image: "images/getram-mobile.png", 
      desc: "App móvil para la entrega y recepción de equipos de minería. Incluye listas de chequeo digitales, firma electrónica y reportabilidad diaria del estado de los equipos.",
      stack: ["Flutter", "PostgreSQL", "PDF Gen"]
    },
    {
      title: "Dashboard GPS Flota",
      category: "Web / Desktop", 
      image: "images/dashboard-gps.png",
      desc: "Panel de control web para monitoreo en tiempo real de camiones. Visualización de rutas, alertas georreferenciadas y análisis de movimiento de flota.",
      stack: ["React", "Node.js", "Maps API"]
    },
    {
      title: "Suite de Gestión & ERP Defontana",
      category: "Web / Desktop",
      image: "images/erp-backend.png",
      desc: "Aplicación integral de escritorio (Electron) y Web para la automatización contable. Sincroniza inventario, facturación y clientes bidireccionalmente con el ERP corporativo Defontana.",
      stack: ["Electron", "React", "Node.js", "REST API"]
    },
    {
      title: "Backend Central de Datos Unificado",
      category: "Backend",
      image: "images/backend.png", 
      desc: "Infraestructura centralizada que orquesta todas las bases de datos de la empresa. Incluye un motor ETL automatizado para extraer datos críticos de planillas Excel y consolidarlos en una base de datos maestra en VPS.",
      stack: ["Node.js", "PostgreSQL", "VPS Linux", "Excel ETL"]
    }
  ];

  const filteredProjects = activeTab === 'Todos' ? projects : projects.filter(p => p.category.includes(activeTab));

  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-400 font-sans selection:bg-cyan-300 selection:text-cyan-900 relative">
      
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Modal de Imagen (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-2 bg-black/50 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoom" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:px-12 sticky top-0 bg-[#0a192f]/90 backdrop-blur-md z-50 border-b border-[#1d2d50]">
        <div className="font-bold text-cyan-400 text-xl">V.S.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre Mí</a>
          <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyectos</a>
        </div>
        <a href="mailto:vsantosvaras@gmail.com" className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors">
          Contactar
        </a>
      </nav>

      {/* Hero Section */}
      <section id="about" className={`${styles.sectionPadding} flex flex-col md:flex-row items-center gap-12 pt-32`}>
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-mono border border-cyan-900">
            ● Disponible
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
            Hola, soy <br />
            <span className={styles.gradientText}>Vicente Santos</span>
          </h1>
          <h2 className="text-2xl text-slate-300">
            Full-Stack Developer | <span className="text-cyan-400 font-mono">Scientific Computing Student</span>
          </h2>
          <p className="max-w-xl text-lg leading-relaxed">
            Estudiante de Computación Científica (USACH) y Desarrollador Full-Stack. Transformo datos complejos en aplicaciones escalables y experiencias de usuario fluidas.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href="#projects" className={styles.buttonPrimary}>Ver Proyectos</a>
            <a 
              href="CV_VicenteSantos.pdf" 
              download="CV_Vicente_Santos.pdf" 
              className={styles.buttonOutline}
            >
              <Download size={20}/> Descargar CV
            </a>
            <a 
              href="https://github.com/vicente471" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 border border-slate-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
               <Github size={24} />
            </a>
          </div>
        </div>
        
        {/* Avatar Image */}
        <div className="flex-1 flex justify-center relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-cyan-500/20 to-transparent flex items-center justify-center border border-cyan-500/30 relative overflow-hidden">
             <img 
                src="images/perfil.png" 
                alt="Vicente Santos" 
                className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-500"
                onError={(e) => {e.target.src = "/api/placeholder/400/400"}} 
             />
            </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className={styles.sectionPadding}>
        <h3 className={styles.subHeading}>01. HABILIDADES</h3>
        <h2 className={styles.heading}>Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.card}>
              <div className="text-cyan-400 mb-4 bg-cyan-900/20 w-fit p-3 rounded-lg">{skill.icon}</div>
              <h4 className="text-xl font-bold text-slate-100 mb-4">{skill.title}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className={styles.badge}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={styles.sectionPadding}>
        <h3 className={styles.subHeading}>02. TRAYECTORIA</h3>
        <h2 className={styles.heading}>Experiencia Laboral</h2>
        <div className="space-y-12 border-l-2 border-[#233554] ml-3 pl-8 md:pl-12 relative">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[43px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-[#0a192f] bg-cyan-500"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                <span className="font-mono text-xs text-cyan-400 border border-cyan-900 bg-cyan-900/10 px-2 py-1 rounded mt-2 md:mt-0 w-fit">{exp.period}</span>
              </div>
              <h4 className="text-lg text-cyan-400 mb-4 font-medium">{exp.company}</h4>
              <p className="mb-4">{exp.desc}</p>
              <ul className="list-disc list-outside ml-4 space-y-2 marker:text-cyan-400">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

       {/* Projects */}
       <section id="projects" className={styles.sectionPadding}>
        <h3 className={styles.subHeading}>03. PORTAFOLIO</h3>
        <h2 className={styles.heading}>Proyectos Destacados</h2>
        
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['Todos', 'Mobile', 'Web / Desktop', 'Backend'].map(tab => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500' : 'bg-[#112240] hover:bg-[#1d2d50]'}`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
                <div key={idx} className={`${styles.card} p-0 overflow-hidden group flex flex-col`}>
                    <div 
                        className="h-48 overflow-hidden relative cursor-zoom-in"
                        onClick={() => setSelectedImage(project.image)}
                    >
                        <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {e.target.src = "/api/placeholder/400/250"}}
                        />
                        <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            Ver imagen
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                        </div>
                        {/* ✅ CAMBIO: Se eliminó 'line-clamp-3' para mostrar TODO el texto siempre */}
                        <p className="text-sm text-slate-400 mb-6">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="text-xs font-mono text-cyan-400 mr-2">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Education */}
      <section className={styles.sectionPadding}>
        <h3 className={styles.subHeading}>04. ACADÉMICO</h3>
        <h2 className={styles.heading}>Educación</h2>
        <div className="bg-[#112240] p-8 rounded-xl border border-[#233554] flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 text-orange-600">
                <span className="font-bold text-2xl">U</span> 
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-100">Universidad de Santiago de Chile (USACH)</h3>
                <p className="text-cyan-400 font-medium">Analista en Computación Científica / Licenciatura en Ciencia de la Computación</p>
                <p className="text-sm mt-2 font-mono text-slate-500">2021 - Presente (Último Año)</p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-20 px-6 bg-[#0a192f] relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-slate-100">¿Tienes un proyecto en mente?</h2>
            <p>Siempre estoy buscando nuevas oportunidades.</p>
            
            <a href="mailto:vsantosvaras@gmail.com" className="inline-block border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-mono text-lg hover:bg-cyan-400/10 transition-all">
                vsantosvaras@gmail.com
            </a>

            <div className="flex justify-center gap-8 pt-8 text-sm font-mono">
                <a href="https://github.com/vicente471" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Github size={18}/> <span>vicente471</span>
                </a>
                <div className="flex items-center gap-2">
                    <Phone size={18}/> <span>+56 9 7378 0501</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={18}/> <span>Santiago, Chile</span>
                </div>
            </div>

            <div className="pt-20 text-xs text-slate-500 font-mono">
                <p>Designed & Built by Vicente Santos Varas</p>
                <p>© 2025 All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;