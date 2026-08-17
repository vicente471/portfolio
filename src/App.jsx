import React, { useState } from 'react';
import { Github, ExternalLink, Download, Layout, Server, Database, Container, X, Phone } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = {
    sectionPadding: "py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto",
    heading: "text-2xl md:text-4xl font-extrabold text-slate-800 mb-8 flex items-center gap-3 tracking-tight",
    subHeading: "text-blue-600 font-bold tracking-widest text-sm mb-2 uppercase",
    buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-all duration-300 shadow-lg hover:shadow-blue-500/25",
    buttonOutline: "border border-blue-600/50 hover:border-blue-600 text-blue-600 py-3 px-6 rounded transition-all duration-300 flex items-center gap-2 hover:bg-blue-50",
    badge: "text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200",
  };

  const experience = [
    {
      role: "AI Engineer",
      company: "Proyecto FIU - USACH",
      period: "Abril 2026 - Actualidad",
      points: [
        "Diseño e implementación de flujos de trabajo para la generación de datos sintéticos, incluyendo imágenes y videos orientados a la simulación de escenarios críticos en entornos de cuidado, reduciendo la dependencia de datos sensibles reales.",
        "Desarrollo de pipelines en Python utilizando modelos multimodales para la inspección, clasificación y filtrado automatizado de contenido sintético, evaluando características visuales, contexto espacial y calidad de generación.",
        "Optimización de procesos de inferencia de modelos de Inteligencia Artificial para hardware de recursos limitados, aplicando técnicas de gestión de memoria y optimización de ejecución.",
        "Investigación y diseño de componentes de Edge AI, evaluando arquitecturas de procesamiento local y tecnologías de generación sintética de imágenes y video."
      ]
    },
    {
      role: "Desarrollador Full-Stack / Analista TI",
      company: "Gestión en Transportes y Maquinarias S.A. (GETRAM)",
      period: "Enero 2025 - Mayo 2026",
      points: [
        "Desarrollo de soluciones internas para procesos comerciales, operativos y administrativos, desde el levantamiento de requerimientos hasta su implementación y despliegue.",
        "Desarrollo de dashboards comerciales y de facturación integrados con ERP Defontana, utilizando React, Node.js y PostgreSQL para consolidación y análisis de información operativa y financiera.",
        "Implementación de procesos ETL desde planillas Excel y fuentes empresariales, centralizando información para reportes e indicadores de gestión.",
        "Participación en la integración entre GLOBAL y Defontana, incluyendo levantamiento de procesos, mapeo de tablas maestras, definición de campos críticos y flujos de sincronización.",
        "Desarrollo de aplicaciones multiplataforma en Flutter para digitalización de procesos de entrega, recepción y control de maquinaria.",
        "Despliegue y administración de servicios en VPS Linux utilizando Docker, Nginx y PM2."
      ]
    }
  ];

  const mainProjects = [
    {
      title: "Análisis Multimodal & Generación Sintética - Proyecto FIU",
      category: "AI & Edge Computing",
      image: "images/usach.png",
      desc: "Investigación y desarrollo aplicados a la generación de datos sintéticos y modelos de visión computacional para entornos con recursos limitados.",
      problem: "Necesidad de simular escenarios críticos para entornos de cuidado sin depender de datos sensibles reales, y optimizar modelos para hardware con restricciones.",
      built: [
        "Pipelines en Python utilizando modelos multimodales para inspección y clasificación",
        "Flujos de trabajo para generación de datos sintéticos (imágenes y videos)",
        "Optimización de procesos de inferencia (gestión de memoria)",
        "Investigación y diseño de componentes de Edge AI"
      ],
      stack: ["Python", "PyTorch", "Modelos Multimodales", "IA Generativa", "Edge AI"]
    },
    {
      title: "Plataforma Modular DScience -- Tesis",
      category: "Infra & Backend",
      image: "images/dscience.png",
      desc: "Plataforma modular de ciencia de datos orientada a investigación colaborativa, integrando herramientas analíticas avanzadas.",
      problem: "Entornos de investigación fragmentados que dificultan la reproducibilidad, experimentación y escalabilidad de los modelos.",
      built: [
        "Arquitectura basada en microservicios integrando Node.js, React y Python",
        "Entornos reproducibles mediante Docker para facilitar el despliegue",
        "Integración de un asistente conversacional basado en el manual de usuario",
        "Persistencia políglota para el almacenamiento y gestión de datos"
      ],
      stack: ["React", "Node.js", "Python", "Docker", "Microservicios"],
      doc: "Tesis_DScience.pdf"
    },
    {
      title: "Gestión Maquinaria GETRAM",
      category: "Mobile & Backend",
      image: "images/getram-mobile.png",
      desc: "Aplicación multiplataforma para la digitalización de procesos de entrega, recepción y control de maquinaria.",
      problem: "Procesos manuales ineficientes que dificultan el seguimiento y control en tiempo real de los equipos arrendados.",
      built: [
        "Aplicaciones multiplataforma en Flutter para control operativo",
        "Soluciones internas para procesos operativos y administrativos",
        "Despliegue y administración de servicios en VPS Linux (Docker, Nginx, PM2)",
        "Automatización de reportes e indicadores de gestión"
      ],
      stack: ["Flutter", "Node.js", "PostgreSQL", "Docker", "Linux"],
    },
    {
      title: "Suite de Gestión & ERP Defontana",
      category: "Web & Enterprise Integration",
      image: "images/erp-backend.png",
      desc: "Desarrollo de dashboards comerciales y de facturación integrados bidireccionalmente con el ERP corporativo Defontana.",
      problem: "Silos de información entre la operación diaria y el sistema contable corporativo.",
      built: [
        "Dashboards en React, Node.js y PostgreSQL para análisis operativo",
        "Implementación de procesos ETL desde planillas Excel",
        "Integración profunda entre sistemas (GLOBAL y Defontana)",
        "Mapeo de tablas maestras y flujos de sincronización"
      ],
      stack: ["React", "Node.js", "PostgreSQL", "REST API", "ERP Defontana"]
    }
  ];

  const capabilities = [
    {
      title: "AI / Machine Learning",
      icon: <Database className="text-blue-600" size={24} />,
      items: ["Python", "PyTorch", "IA Generativa", "Modelos Multimodales", "Edge AI"]
    },
    {
      title: "Software Engineering",
      icon: <Layout className="text-blue-600" size={24} />,
      items: ["JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Flutter"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="text-blue-600" size={24} />,
      items: ["Node.js", "Express", "FastAPI", "REST APIs"]
    },
    {
      title: "Infraestructura & Data",
      icon: <Container className="text-blue-600" size={24} />,
      items: ["SQL", "Data Science", "ETL", "Docker", "Linux", "Nginx", "VPS", "PM2"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-600 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      <style>{`
        html { scroll-behavior: smooth; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Modal de Imagen (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-5 right-5 text-slate-300 hover:text-white transition-colors p-2 bg-slate-800 border border-slate-700 rounded-full shadow-lg"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoom" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 sticky top-0 bg-slate-50/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="font-extrabold text-blue-600 text-xl tracking-tighter hover:text-blue-700 transition-colors cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          V.S.
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
          <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#experiencia" className="hover:text-blue-600 transition-colors">Experiencia</a>
          <a href="#stack" className="hover:text-blue-600 transition-colors">Tecnologías</a>
          <a href="#sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</a>
        </div>
        <a href="mailto:vsantosvaras@gmail.com" className="px-4 py-2 bg-transparent border border-blue-600/50 text-blue-600 text-sm font-semibold rounded hover:bg-blue-50 transition-colors">
          Contactar
        </a>
      </nav>

      {/* Hero Section */}
      <section className={`${styles.sectionPadding} pt-12 md:pt-24 flex flex-col-reverse md:flex-row items-center gap-12`}>
        <div className="flex-1 space-y-6">
          <div className="text-blue-600 font-mono text-sm tracking-wide font-bold">Hola, soy</div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight tracking-tight">
            Vicente Santos Varas.
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-500 leading-tight">
            AI Engineer · Software Engineer
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-slate-600 font-semibold text-sm md:text-lg mt-2 mb-6">
            <span>Inteligencia Artificial</span>
            <span className="text-blue-400">•</span>
            <span>Software</span>
            <span className="text-blue-400">•</span>
            <span>Scientific Computing</span>
          </div>
          
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Desarrollo soluciones end-to-end integrando investigación en inteligencia artificial, generación de datos sintéticos, modelos multimodales y plataformas de software escalables.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#proyectos" className={styles.buttonPrimary}>Ver proyectos</a>
            <a href="CV_VicenteSantos.pdf" download="CV_Vicente_Santos.pdf" className={styles.buttonOutline}>
              <Download size={18}/> Descargar CV
            </a>
            <a href="https://github.com/vicente471" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-200 rounded hover:border-blue-300 hover:text-blue-600 text-slate-600 transition-all flex items-center justify-center shadow-sm">
               <Github size={20} />
            </a>
          </div>
        </div>
        
        {/* Avatar */}
        <div className="w-48 h-48 md:w-80 md:h-80 relative flex-shrink-0 mb-8 md:mb-0">
          <div className="absolute inset-0 border-2 border-blue-600 rounded-lg translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10 transition-transform duration-300 hover:translate-x-2 hover:translate-y-2"></div>
          <img 
            src="images/perfil.png" 
            alt="Vicente Santos" 
            className="object-cover w-full h-full rounded-lg bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
            onError={(e) => {e.target.src = "/api/placeholder/400/400"}} 
          />
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className={`${styles.sectionPadding}`}>
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <h2 className={styles.heading} style={{marginBottom: 0}}>Proyectos Destacados</h2>
          <div className="h-px bg-slate-200 flex-1 ml-4 hidden md:block"></div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {mainProjects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
              
              {/* Imagen del proyecto */}
              <div 
                className="w-full md:w-7/12 relative group cursor-zoom-in rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-auto object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ${project.title.includes('FIU') ? 'p-12 object-contain bg-slate-50' : ''}`}
                />
              </div>

              {/* Contenido del proyecto */}
              <div className={`w-full md:w-5/12 flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'} z-20`}>
                <h3 className="text-blue-600 font-mono text-xs font-bold mb-2 uppercase">{project.category}</h3>
                <h4 className={`text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 ${idx % 2 !== 0 ? 'text-left' : 'md:text-right text-left'}`}>{project.title}</h4>
                
                <div className="bg-white p-6 rounded-lg border border-slate-200 text-slate-600 text-sm leading-relaxed mb-6 shadow-md w-full">
                  <p className="mb-4">{project.desc}</p>
                  
                  <div className="mb-4">
                    <strong className="text-slate-800 block mb-1 font-semibold">Problema:</strong>
                    <p className="text-slate-600">{project.problem}</p>
                  </div>
                  
                  <div>
                    <strong className="text-slate-800 block mb-2 font-semibold">Qué construí:</strong>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 marker:text-blue-500">
                      {project.built.map((item, i) => (
                        <li key={i} className="pl-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`flex flex-wrap gap-2 mb-6 ${idx % 2 !== 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200">{tech}</span>
                  ))}
                </div>

                <div className={`flex gap-4 items-center mt-auto ${idx % 2 !== 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                  {project.doc && (
                    <a href={project.doc} download target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                      <Download size={16} className="group-hover:-translate-y-0.5 transition-transform"/> Documentación
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section id="experiencia" className={`${styles.sectionPadding}`}>
        <div className="flex items-center gap-4 mb-12">
          <h2 className={styles.heading} style={{marginBottom: 0}}>Experiencia Profesional</h2>
          <div className="h-px bg-slate-200 flex-1 ml-4 hidden md:block"></div>
        </div>

        <div className="space-y-10 md:pl-4">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative group pl-6 md:pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors duration-300">
              <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-slate-50 border-2 border-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                <h3 className="text-xl font-extrabold text-slate-800">{exp.role}</h3>
                <span className="font-mono text-sm font-bold text-blue-600 mt-1 md:mt-0">{exp.period}</span>
              </div>
              
              <h4 className="text-md text-slate-600 font-bold mb-4">{exp.company}</h4>
              
              <ul className="list-disc list-outside ml-4 space-y-2 marker:text-blue-500 text-slate-600 text-sm md:text-base font-medium">
                {exp.points.map((point, i) => (
                  <li key={i} className="pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Capacidades / Stack */}
      <section id="stack" className={`${styles.sectionPadding}`}>
        <div className="flex items-center gap-4 mb-10">
          <h2 className={styles.heading} style={{marginBottom: 0}}>Tecnologías</h2>
          <div className="h-px bg-slate-200 flex-1 ml-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="shrink-0 mt-1">{cap.icon}</div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-800 mb-3">{cap.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item, i) => (
                    <span key={i} className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded border border-slate-200">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className={`${styles.sectionPadding} pb-24`}>
        <div className="flex items-center gap-4 mb-8">
          <h2 className={styles.heading} style={{marginBottom: 0}}>Perfil Profesional</h2>
          <div className="h-px bg-slate-200 flex-1 ml-4 hidden md:block"></div>
        </div>

        <div className="max-w-4xl text-slate-600 text-lg leading-relaxed space-y-4 font-medium bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <p>
            Analista en Computación Científica titulado en la Universidad de Santiago de Chile (USACH), con experiencia en Inteligencia Artificial, desarrollo de software y procesamiento de datos. He trabajado en generación de datos sintéticos, Vision-Language Models, optimización de inferencia y arquitecturas Edge AI, además de desarrollar sistemas empresariales, APIs, dashboards y aplicaciones multiplataforma.
          </p>
          <p>
            Actualmente trabajo como AI Engineer (I+D) en un proyecto de investigación aplicado, desarrollando soluciones relacionadas con IA generativa, generación de datos sintéticos, modelos multimodales y Edge AI. Mi trabajo incluye el diseño de pipelines para generación y evaluación de contenido sintético, automatización de procesos y desarrollo de soluciones de inteligencia artificial para entornos con recursos computacionales limitados.
          </p>
          <p>
            Mi experiencia combina investigación aplicada y desarrollo de soluciones end-to-end, integrando Python, Machine Learning, backend, bases de datos, infraestructura y herramientas de IA generativa.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Construyamos algo juntos.</h2>
            <p className="text-slate-600 font-medium">Siempre abierto a discutir sobre IA, arquitectura de software o nuevos desafíos técnicos.</p>
            
            <div className="pt-4">
              <a href="mailto:vsantosvaras@gmail.com" className={styles.buttonOutline + " inline-flex !px-8 font-bold"}>
                  ¡Hablemos!
              </a>
            </div>

            <div className="flex justify-center gap-8 pt-8 text-sm font-bold text-slate-500">
                <a href="https://github.com/vicente471" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Github size={18}/> <span>GitHub</span>
                </a>
                <div className="flex items-center gap-2">
                    <Phone size={18}/> <span>+56 9 7378 0501</span>
                </div>
            </div>

            <div className="pt-12 text-xs text-slate-400 font-mono font-semibold">
                <p>Diseñado y construido por Vicente Santos Varas</p>
                <p className="mt-1">© 2026</p>
            </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Portfolio;