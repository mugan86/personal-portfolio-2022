import { IWorkExperienceItem } from '@core/interfaces/work-experience-item.interface';

export const workExperienceDetails: Array<IWorkExperienceItem> = [
  {
    companyName: 'AT Sistemas - Desarrollador Frontend Senior',
    workingData: {
      start: '03/2022',
      finish: '?',
    },
    collapseMoreDetailsId: 'atSistemas',
    logotype:
      'https://pbs.twimg.com/profile_images/1450711986023514113/3nCSCuY7_400x400.jpg',
    isCurrentWork: true,
    principalFunctionsDetails: `
        <p>
            Trabajo 100% remoto. Trabajando para cliente como externo haciendo las labores de Desarrollador Frontend Senior en Angular y también con React.
        </p>
        
        `,
    moreDetails: `
        Funciones que realizo:
        <ul>
            <li>Desarrollo de nuevas funcionalidades y correctivos de funciones desarrolladas anteriormente en Angular.</li>
            <li>Análisis de requisitos y necesidades y su posterior redacción para poder abordar las tareas</li>
            <li>Testing sobre nuevas funcionalidades y anteriores</li>
            <li>Análisis para mejorar rendimiento y la forma de trabajar del proyecto.</li>
        </ul>
        <br/>Herramientas y metodologías usadas:
        <ul>
            <li>Husky con commitlint para aplicar correctamente los commit con Gitflow.</li>
            <li>Sonarqube para evaluar la calidad del código.</li>
            <li>Jira. Seguimiento del proyecto con gestión de incidencias, documentación,...</li>
            <li>Metodología SCRUM para trabajar en equipo.</li>
        </ul>
        `,
  },
  {
    companyName: 'Formación Online y Proyectos propios',
    workingData: {
      start: '09/2008',
      finish: '?',
    },
    collapseMoreDetailsId: 'onlineCoursesOurProjects',
    logotype:
      'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/logotypes/am.png',
    isCurrentWork: true,
    principalFunctionsDetails: `
        <p>
            Proyectos personales como creación de cursos online (PREMIUM y gratis), crear proyectos sobre necesidades que he detectado y más, por mi cuenta.
        </p>
        `,
    moreDetails: `
            Tipo de proyectos que he creado:
            <ul>
                <li>Proyectos Fullstack: Servirace, Gesti Hotels.</li>
                <li>Cursos Online: GraphQL (en diferentes niveles), Desarrollo de librerías, Trabajar con Mapas con Leaflet y cursos para lenguajes desde su bases como C# y Python, entre otros.</li>
                <li>APIs: REST y GraphQL usando diferentes tipos de Bases de Datos tanto relacionales (MySQL y PostgreSQL) y no relacionales (MongoDB).</li>
                <li>Generadores de datos masivos con scripts: Para crear preguntas de juegos de tipo Quiz y similares, tratar información masiva y adaptarla a necesidades de un proyecto desde fuentes de datos abiertos,...</li>
                <li>Trabajo con datos de diferentes fuentes, como datos abiertos, API públicas y privadas (REST y GraphQL), ficheros de diferentes extensiones como CSV, Excel, JSON,...</li>
            </ul>
            <br/>
            Herramientas y lenguajes que he usado:
            <ul>
                <li>Lenguajes: PHP, Java, Kotlin, C#, Python, Javascript</li>
                <li>Frameworks / Librerías: Symfony, Django, Angular, React, NestJS, Android, Ionic</li>
                <li>APIs: REST y GraphQL.</li>
                <li>Bases de datos: MySQL, PostgreSQL, MongoDB</li>
                <li>Hospedaje de proyectos: Github Pages, Vercel, Netlify, Heroku, CPanel, Google Play</li>
                <li>Repositorios de proyectos: NPM, PyPi, Bintray, Maven, GitHub Packages</li>
                <li>IDEs / Editores de código: Notepad+++, Android Studio, Intellij Jet Brains, Sublime Text,  Visual Studio Code, NetBeans</li>
                <li>Documentación: Google Drive, Compodoc (proyectos que trabajan con Typescript), Docusaurus, Wiki Github,...</li>
            </ul>
        `,
  },
  {
    companyName: 'Fagor Automation (CodeSyntax)',
    workingData: {
      start: '03/2017',
      finish: '02/2019',
    },
    collapseMoreDetailsId: 'fagorAutomation',
    logotype: 'assets/img/work-companies/fagor_automation.webp',
    isCurrentWork: false,
    principalFunctionsDetails:
      '<p>Como trabajador externo de CodeSyntax. Trabajando en un proyecto para la Industria 4.0, donde el objetivo es comunicar las máquinas para poder visualizar la información desde nuevas tecnologías en diferentes dispositivos modernos como móviles, tablets,...que permiten ver el rendimiento de las máquinas en tiempo real. </p>',
    moreDetails: '',
  },
  {
    companyName: 'CodeSyntax',
    workingData: {
      start: '06/2014',
      finish: '03/2017',
    },
    collapseMoreDetailsId: 'codeSyntax',
    logotype:
      'https://pbs.twimg.com/profile_images/1104998186551336960/ikZKw5k4_400x400.png',
    isCurrentWork: false,
    principalFunctionsDetails: `
        <p>
            Desarrollo de aplicaciones nativas en Android y también con Ionic para Android / iOS
        </p>
        `,
    moreDetails: ``,
  },
  {
    companyName: 'CodeSyntax - Formación de Centros de Trabajo (FCT)',
    workingData: {
      start: '03/2014',
      finish: '06/2014',
    },
    collapseMoreDetailsId: 'codeSyntaxFCT',
    logotype:
      'https://pbs.twimg.com/profile_images/1104998186551336960/ikZKw5k4_400x400.png',
    isCurrentWork: false,
    principalFunctionsDetails: `
        <p>
            Prácticas relacionados al <b>Ciclo Superior de Técnico en Desarrollo de Aplicaciones Multiplataforma</b> para cumplimentar las horas requeridas para obtener el título
        </p>
        `,
    moreDetails: `
        Las tareas que se me asignó, en cuanto a investigación y desarrollo:
        <ul>
            <li>Consumir APIs REST y pintar la información.</li>
            <li>Desarrollo de interfaces para mostrar la información de una manera más elegante y presentable.</li>
            <li>Notificaciones Push</li>
            <li>Optimizar y mejorar el rendimiento con contenido como imágenes que se cargan desde la red.</li>
            <li>Persistencia de datos: SQLite</li>
        </ul><br/>
        <p> Estos eran objetivos para las prácticas, pero como finalicé todo en menos de un mes empecé a desarrollar la app de un juego de tipo Quiz llamado <b><a href="https://www.codesyntax.com/es/proyectos/tribual?set_language=es" target="_blank"></a>Tribual</a></b> hasta finalizar las prácticas.</p>
        <p>Herramientas utilizadas:</p>
        <ul>
            <li>Android Studio.</li>
            <li>Basecamp: Para gestionar las incidencias y TODOs del proyecto.</li>
            <li>Bitbucket para alojar el código y control de versiones.</li>
        </ul>

        `,
  },
];
