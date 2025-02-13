import NavigationBar from './NavigationBar';
import "./AboutMe.css";
import EG1 from './assets/EG 1.jpg';
import NB from './assets/Neo_Byte_logo.jpg';
import AP from './assets/apx_school_logo.jpg';
import P from './assets/platzi_inc_logo.jpg';
import U from './assets/udemy_logo.jpg';
import I from './assets/informatorio.jpg';
import UTN from './assets/UTN_logo.jpg';
import L from './assets/Leandro.jpg';
import React, { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark');
  };
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  const projects = [
    {
      id: 1,
      title: "Spa Sentirse Bien Página web",
      date: "Jul 2024 - Sep 2024",
      description: "Creé el sitio web para el Spa Sentirse Bien, el cual incluye la gestión de turnos para los clientes, anuncios, consultas, mensajes, creación de diseño front-end y back-end. El diseño está pensado para reflejar su carácter creativo y profesional, integrando una paleta moderna y una estructura interactiva. Mientras que secciones específicas destacan sus valores clave de confianza, eficiencia y profesionalidad. Además, añadí componentes personalizados para mejorar la experiencia de usuario y accesibilidad.",
      videoId: "nzA3UBT32F0",
      technologies: ["React", "TypeScript", "CSS", "Rest Framework", "Python", "Django", "PostgreSQL", "Render"]
    },
    {
      id: 2,
      title: "Spa Sentirse Bien App",
      date: "Oct 2024 - Nov 2024",
      description: "Luego de crear el sitio web para Sentirse Bien, seguí con el desarrollo de la aplicación móvil, destinada únicamente a los usuarios donde podrán obtener y gestionar sus turnos, ver los servicios y anuncios del spa.",
      videoId: "2wDRcVgegZo",
      technologies: ["React Native", "js", "Expo", "JavaScript", "Expo SDK", "React Native Elements", "Vercel"]
    },
    {
      id: 3,
      title: "Te Estoy Invitando",
      date: "Ene 2025",
      description: "Te Estoy Invitando es una plataforma web diseñada para facilitar la creación y gestión de invitaciones digitales personalizadas.",
      videoId: "SLs0Fw2Jbnk",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Zustand", "Supabase", "Vercel"]
    },
    {
      id: 4,
      title: "Diario El Gobierno",
      date: "Jul 2024 - Ene 2025",
      description: "Diario El Gobierno es un medio de comunicación digital que posee como principal objetivo proporcionar información a la esfera pública sobre la coyuntura nacional e internacional.",
      videoId: "YOUR_VIDEO_ID_2",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "TinyMCE", "React", "Django", "Vercel", "Python", "Rest Framework", "Node.js"]
    },
    {
      id: 5,
      title: "Blog estilo Reddit sobre inteligencia artificial",
      date: "Ago 2024 - Oct 2024",
      description: "Creé un blog sobre inteligencia artificial en donde los usuarios pueden postear sus inquietudes, conocimientos y demás. Para ello utilicé Spring Boot para el backend junto con React y CSS en el front. La página cuenta con barra de búsqueda para los posts, comentarios estilo Reddit utilizando hilos, sistema de moderación para los posts, personalización de usuarios",
      videoId: "YOUR_VIDEO_ID_2",
      technologies: ["Python", "TypeScript", "CSS", "Django", "HTML", "PythonAnywhere"]
    },
    {
      id: 6,
      title: "Aplicación Móvil para ver productos de tiendas basada en la ubicación del usuario",
      date: "Dic 2024 - Presente",
      description: "Aplicación con Flutter en donde dependiendo de la ubicación del usuario se mostrarán donde productos de las tiendas de su ciudad. Para eso, el usuario y las tiendas creadas deben colocar en un mapa estilo Google Maps que cree su ubicación, de esa manera los usuarios podrán ver qué productos hay en su zona y también buscar los que deseen. Se crearon filtros para colocar métodos de pago aceptados por las tiendas, categorías de las mismas, si venden servicios o solo productos y un sistema de reservas y promociones.",
      videoId: "YOUR_VIDEO_ID_2",
      technologies: ["Python", "Rest Framework", "Flutter", "Django", "Dart", "Android Studio", "Open Street Map"]
    }
  ];

  return (
    <div className={`about-me ${darkMode ? 'dark' : ''}`}>
      <div className="content">
        <div className="header-container flex items-center mb-4">
          <div className="title-wrapper">
            <h1 className="title">Hola, soy Leandro</h1>
          </div>
          <img 
            src={L} 
            alt="Leandro" 
            className="profile-image animate-fade-in"
          />
        </div>
        <p className="subtitle animate-fade-in animate-delay-1">
          Desarrollador Full Stack especializado en arquitectura y desarrollo de soluciones SaaS
        </p>
        
        <div className="container animate-fade-in animate-delay-2">
          <div className="text-section">
            <h2 className="section-title">Sobre mí</h2>
            <p className="description">
              Desarrollador y creador de soluciones tecnológicas. Con experiencia en desarrollo web, SaaS y
              aplicaciones innovadoras, me apasiona transformar ideas en productos funcionales y escalables.
              Trabajo con tecnologías modernas como TypeScript, Next.js, TailwindCSS, Spring Boot, Firebase, entre otras.
              Siempre enfocado en resolver problemas reales con herramientas prácticas. Además de mi experiencia técnica,
              valoro la conexión humana detrás de cada proyecto, asegurándome de comprender las necesidades específicas de
              mis clientes para entregar soluciones que realmente aporten valor.
            </p>
          </div>
        </div>

        <div className="experience-section animate-fade-in animate-delay-2">
          <h2 className="section-title">Experiencia Laboral</h2>
          
          <div className="job-card">
            <div className="job-header">
              <img src={EG1} alt="Diario El Gobierno" className="job-logo" />
              <div>
                <div><h3 className="job-title">Diario El Gobierno</h3></div>
                <p className="job-position">Full Stack Developer</p>
                <p className="job-dates">Junio 2024 - Presente</p>
              </div>
            </div>
            <p className="job-description">
              Mantenimiento y optimización del sitio web actual en WordPress, asegurando el correcto funcionamiento y mejora continua de la plataforma.
              Desarrollo de una nueva plataforma web utilizando React para el frontend y Django para el backend, implementando características modernas y mejorando la experiencia de usuario.
              Integración de servicios y APIs para mejorar el rendimiento y la escalabilidad del sitio.
            </p>
          </div>

          <div className="job-card">
            <div className="job-header">
              <img src={NB} alt="Neo Byte Logo" className="job-logo" />
              <div>
                <div><h3 className="job-title">Lea Tech (mi emprendimiento)</h3></div>
                <p className="job-position">Full Stack Developer</p>
                <p className="job-dates">Octubre 2024 - Presente</p>
              </div>
            </div>
            <p className="job-description">
              Neo Byte es una solución de desarrollo web diseñada para emprendedores y artesanos que buscan vender productos en línea. 
              Ofrezco una plataforma de e-commerce profesional, aplicaciones móviles y de escritorio asequible y optimizada para emprendedores con presupuestos limitados. 
              La estructura está pensada para satisfacer las necesidades digitales esenciales, ayudando a mis clientes a establecer una 
              presencia en línea con una inversión accesible.
            </p>
          </div>

          <div className="job-card">
            <div className="job-header">
              <img src={UTN} alt="Patito Media" className="job-logo" />
              <div>
                <div><h3 className="job-title">Ayudante de cátedra de Probabilidad y Estadística</h3></div>
                <p className="job-position">Ayudante de cátedra</p>
                <p className="job-dates">Mar 2022 - Dic 2024</p>
              </div>
            </div>
            <p className="job-description">
              Asistencia en la parte práctica a los alumnos junto con el profesor.
              Solución de dudas en el uso del entorno y lenguaje de programación R.
              Supervisión de ejercicios y resolución de problemas durante las clases.
            </p>
          </div>
        </div>

        <div className="education-section animate-fade-in animate-delay-2">
          <h2 className="section-title">Educación</h2>
          <div className="education-card">
            <img src={UTN} alt="APX School" className="education-logo" />
            <div>
              <h3 className="education-title">Tecnicatura Universitaria en Programación de la Universidad Tecnológica Nacional (UTN)</h3>
              <p className="education-dates">2022 - 2024</p>
              <p className="education-description">Técnico Universitario en Programación</p>
            </div>
          </div>
          <div className="education-card">
            <img src={I} alt="APX School" className="education-logo" />
            <div>
              <h3 className="education-title">Informatorio programa de formación en programación</h3>
              <p className="education-dates">2023 - 2024</p>
              <p className="education-description">Full Stack Web Developer y Análisis de datos</p>
            </div>
          </div>
          <div className="education-card">
            <img src={AP} alt="APX School" className="education-logo" />
            <div>
              <h3 className="education-title">APX School</h3>
              <p className="education-dates">2022 - 2023</p>
              <p className="education-description">Full Stack Web Developer</p>
            </div>
          </div>
          <div className="education-card">
            <img src={P} alt="Platzi" className="education-logo" />
            <div>
              <h3 className="education-title">Platzi</h3>
              <p className="education-dates">2022 - 2024</p>
              <p className="education-description">Frontend Developer React and React Native</p>
            </div>
          </div>
          <div className="education-card">
            <img src={U} alt="Udemy" className="education-logo" />
            <div>
              <h3 className="education-title">Udemy</h3>
              <p className="education-dates">2020 - 2024</p>
              <p className="education-description">Layout designer - UX/UI Designer - Frontend Developer</p>
            </div>
          </div>
        </div>
  
        <div className="skills-section animate-fade-in animate-delay-2">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-container">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="skill">JavaScript</a>
            <a href="https://www.typescriptlang.org/" target="_blank" className="skill">TypeScript</a>
            <a href="https://react.dev/" target="_blank" className="skill">React.js</a>
            <a href="https://reactnative.dev/" target="_blank" className="skill">React Native</a>
            <a href="https://nextjs.org/" target="_blank" className="skill">Next.js</a>
            <a href="https://tailwindcss.com/" target="_blank" className="skill">TailwindCSS</a>
            <a href="https://gluestack.io/" target="_blank" className="skill">Gluestack UI</a>
            <a href="https://nodejs.org/" target="_blank" className="skill">Node.js</a>
            <a href="https://www.postgresql.org/" target="_blank" className="skill">Postgres</a>
            <a href="https://www.prisma.io/" target="_blank" className="skill">Prisma</a>
            <a href="https://firebase.google.com/" target="_blank" className="skill">Firebase</a>
            <a href="https://stripe.com/" target="_blank" className="skill">Stripe</a>
            <a href="https://vercel.com/" target="_blank" className="skill">Vercel</a>
            <a href="https://www.netlify.com/" target="_blank" className="skill">Netlify</a>
            <a href="https://aws.amazon.com/" target="_blank" className="skill">AWS</a>
            <a href="https://github.com/" target="_blank" className="skill">GitHub</a>
            <a href="https://n8n.io/" target="_blank" className="skill">n8n</a>
            <a href="https://zapier.com/" target="_blank" className="skill">Zapier</a>
            <a href="https://openai.com/" target="_blank" className="skill">OpenAI</a>
            <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" className="skill">Microsoft SQL Server</a>
            <a href="https://www.php.net/" target="_blank" className="skill">PHP</a>
            <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" className="skill">C#</a>
            <a href="https://www.java.com/" target="_blank" className="skill">Java</a>
            <a href="https://spring.io/projects/spring-boot" target="_blank" className="skill">Spring Boot</a>
            <a href="https://www.djangoproject.com/" target="_blank" className="skill">Django</a>
            <a href="https://www.python.org/" target="_blank" className="skill">Python</a>
          </div>
        </div>
  
        <div className="projects-section animate-fade-in animate-delay-2">
          <span className="projects-tag">Mis Proyectos</span>
          <h2 className="projects-title">De Ideas a Realidades</h2>
          <p className="projects-subtitle">
            Descubre los proyectos que mejor representan mi trabajo. Cada uno 
            refleja un desafío superado y mi pasión por crear soluciones digitales 
            innovadoras.
          </p>
          <p className="projects-description">
            ¡Explóralos y ve cómo transformo ideas en experiencias!
          </p>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="video-container" onClick={() => setActiveVideo(project.id)}>
                  {activeVideo === project.id ? (
                    <iframe 
                      className="video-frame"
                      src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="video-placeholder">
                      <div className="play-button">
                        <svg className="play-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Ver Demo</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="contact-section animate-fade-in animate-delay-2">
          <div className="contact-tag">Contacto</div>
          <h2 className="contact-title">¿Hablamos?</h2>
          <p className="contact-description">
            Si tienes una pregunta o te interesa saber más sobre mis proyectos,{' '}
            <a href="https://linkedin.com/in/leandro-panozzo-42ba34222" target="_blank" rel="noopener noreferrer" className="contact-link">
              envíame un mensaje directo en LinkedIn
            </a>
            . Estoy aquí para responder y conversar sobre cómo podemos colaborar.
          </p>
        </div>
        
        <NavigationBar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
      </div>
    </div>
  );
};

export default AboutMe;
