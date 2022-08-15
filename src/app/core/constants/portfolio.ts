import { IInfoCard } from '@core/interfaces/info-card.interface';
import { ProfileTypes } from './profileTypes';
import { TAGS_ITEMS } from './tags';

export const PORTFOLIO_ITEMS: Array<IInfoCard> = [
  {
    id: 1,
    title:
      'Breaking Bad - Sistemas de votaciones en Tiempo Real - MERN + GraphQL',
    description:
      'Proyecto web que consume de una API GraphQL donde podemos realizar votaciones y consultar los resultados de manera individual y ver el global en una gráfica.',
    image: 'assets/img/portfolio/breaking-bad-react.webp',
    externalRouter: 'https://react-projects-2022.github.io/breaking-bad-app/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/React-Projects-2022/breaking-bad-app',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.REACT,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.REST,
      TAGS_ITEMS.MERN,
      TAGS_ITEMS.I18N,
      TAGS_ITEMS.CI,
      TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.TESTING,
    ],
    finish: true,
    year: '2022',
    top: true,
    profileType: ProfileTypes.FullStack,
  },
  {
    id: 2,
    title: 'Tienda Online - Gamezonia - MEAN + GraphQL',
    description:
      'Tienda Online con carrito de compra y pagos con Stripe con el stack MEAN + GraphQL.',
    image: 'assets/img/portfolio/gamezonia-meang-front.webp',
    externalRouter: 'https://gamezonia.netlify.app/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/mugan86/frontend-meang-online-shop',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.DEPLOY,
      // TAGS_ITEMS.REST,
      TAGS_ITEMS.STRIPE,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.BOOTSTRAP,
    ],
    finish: true,
    year: '2019',
    top: true,
    profileType: ProfileTypes.FullStack,
  },
  {
    id: 3,
    title: 'Anartz Mugika - Web personal',
    description:
      'Web personal para mostrar mi perfil profesional con mi CV y trabajos.',
    image: 'assets/img/portfolio/anartz.webp',
    externalRouter: 'https://anartz-mugika.com',
    internalRouter: '',
    price: '',
    git: 'https://github.com/mugan86/personal-portfolio-2022',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.DEPLOY,
      // TAGS_ITEMS.REST,
      TAGS_ITEMS.BOOTSTRAP,
      TAGS_ITEMS.MEAN,
      TAGS_ITEMS.BOOTSTRAP,
    ],
    finish: false,
    year: '2022-?',
    top: true,
  },
  {
    id: 4,
    title: 'Freelancer - Start Bootstrap - React',
    description:
      'Adaptación de la plantilla original en HTML a un proyecto React para usarlo y crear nuestra web de Freelancer con React.',
    image: 'assets/img/portfolio/freelancer-react.webp',
    externalRouter:
      'https://templates-desarrollo-web-mobile.github.io/freelancer-reactjs/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/templates-desarrollo-web-mobile/freelancer-reactjs',
    tags: [
      TAGS_ITEMS.REACT,
      TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.BOOTSTRAP,
    ],
    finish: true,
    year: '2021',
    profileType: ProfileTypes.Frontend,
  },
  {
    id: 5,
    title: 'React-Shop-UI - Librería React para proyectos Ecommerce - NPM',
    description:
      'Librería basada en la librería Angular "ng-shop-ui" para poder utilizarla en proyectos de React de tipo Ecommerce.',
    image: 'assets/img/portfolio/react-shop-ui.webp',
    externalRouter: 'https://anartz-mugika.gitbook.io/react-shop-ui-library/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/React-Projects-2022/react-shop-ui',
    tags: [
      TAGS_ITEMS.REACT,
      TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.BOOTSTRAP,
      TAGS_ITEMS.NPM,
    ],
    finish: false,
    year: '2021-?',
    top: true,
    profileType: ProfileTypes.Frontend,
  },
  {
    id: 6,
    title: 'Bootcamp Python 3: Aprende desde cero paso a paso al detalle',
    description:
      '¡Aprende  Python paso a paso con temas como Clases, Objetos, Ficheros, Bases de datos, Paquetes en PyPi y mucho más!',
    image: 'https://img-b.udemycdn.com/course/750x422/3665210_43aa_4.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/bootcamp-python-3',
    price: 0,
    tags: [TAGS_ITEMS.PYTHON_3, TAGS_ITEMS.PYPI, TAGS_ITEMS.ALL_LEVELS],
    year: '2021-?',
    git: 'https://github.com/mugan86/bootcamp-basic-to-expert-from-scratch',
    profileType: ProfileTypes.FullStack,
    finish: true,
  },
  {
    id: 7,
    title: 'Introducción a GraphQL desde las bases hasta crear APIs',
    description:
      'Primeros pasos con GraphQL: Lenguaje de manipulación y consulta de datos Open Source para API. Desarrollado por Facebook',
    image: 'https://img-c.udemycdn.com/course/750x422/2719748_924d.jpg',
    externalRouter:
      'https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/',
    plusInfo: '10h35min',
    price: 0,
    tags: [TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.DEPLOY, TAGS_ITEMS.POSTMAN],
    finish: true,
    year: 2020,
    git: '',
    profileType: ProfileTypes.Backend,
  },
  {
    id: 8,
    title: 'Curso Completo de Leaflet - De 0 a Experto',
    description:
      'Aprende a trabajar con mapas interactivos desde 0 hasta un nivel experto. Uso de diferentes capas, marcadores por defecto y personalizados, capas vectoriales y mucho más!',
    image: '/assets/img/courses/leaflet.webp',
    externalRouter: 'https://cursos.anartz-mugika.com/leaflet-from-scratch',
    price: 0,
    tags: [TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.ALL_LEVELS],
    year: '2021-? (Trabajando en la 2ª parte del curso)',
    git: 'https://github.com/leaflet-maps-course/course-projects-from-scratch',
    top: true,
    profileType: ProfileTypes.Frontend,
    finish: false,
  },
  {
    id: 9,
    title: 'NPM Desarrollar y publicar librerias JS,TS, Angular, ReactJS',
    description:
      '¡Aprende desde 0 las nociones de NPM y a crear librerías Node en JS, Typescript ReactJS Angular con ejemplos prácticos!',
    image: 'https://img-c.udemycdn.com/course/750x422/1992318_a8ef_3.jpg',
    externalRouter:
      'https://cursos.anartz-mugika.com/librerias-js-ts-angular-npm',
    price: '9.99-19.99 $',
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.JS_TS,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.DEPLOY,
    ],
    year: '2019',
    git: 'https://github.com/npm-js-ts-angular-modules-course',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 10,
    title: 'Tienda Online: NodeJS + MongoDB + Stripe + GraphQL - MEAN+G',
    description:
      'Desarrollo de un ecommerce con el stack MEAN+G - MongoDB, NodeMailer, GraphQL, Carrito de Compra, Stripe, Deploy',
    image: 'https://img-c.udemycdn.com/course/750x422/2767652_1962_3.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/meang-gamezonia-full',
    price: '9.99-199.99 $',
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.MEAN,
    ],
    year: '2020',
    git: '',
    top: true,
    profileType: ProfileTypes.FullStack,
    finish: true,
  },
  {
    id: 11,
    title: 'Guía completa de GraphQL con Angular de 0 a Experto',
    description:
      'GraphQL con Angular desde 0 a Experto paso a paso. Testing,Apollo Client, JWT,Apps en tiempo real,MongoDB,Hasura,Heroku',
    image: 'https://img-c.udemycdn.com/course/750x422/2338870_2107_3.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/graphql-de-0-a-deploy',
    price: '9.99-19.99 $',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING,
    ],
    year: '2019-2022',
    git: '',
    profileType: ProfileTypes.FullStack,
  },
  {
    id: 12,
    title: 'Compodoc: Crea documentación en proyectos Angular/Ionic/TS',
    description:
      'Crear documentación de calidad y MUY fácil de mantener con Compodoc para proyectos de Angular 2+ / Ionic 2+ / Typescript',
    image: 'https://img-c.udemycdn.com/course/750x422/1777518_b681_6.jpg',
    externalRouter:
      'https://www.udemy.com/course/compodoc-crea-documentacion-en-angular-ionic/',
    price: 0,
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.IONIC,
      TAGS_ITEMS.TYPESCRIPT,
      TAGS_ITEMS.GITHUB_PAGES,
    ],
    git: '',
    year: 2018,
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 13,
    title: 'Masterclass #3 Unity 2021: Programación de un Videojuego PONG',
    description:
      'Aprende DESDE CERO a programar TODAS LAS MECÁNICAS de un videojuego PONG para 2 jugadores con Unity y Visual Code C#',
    image:
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/6LJ8DuGfSqC29VxfGWoS',
    externalRouter: 'https://cursos.anartz-mugika.com/pong-2d-unity',
    price: '7.99-11.99 $',
    tags: [
      {
        label: 'Básico',
        color: '#55d442',
      },
      {
        label: '2D',
        color: '#4B8BBE',
      },
      {
        label: 'Unity',
        color: '#b89e0f',
      },
    ],
    year: '2021',
    git: '',
    profileType: ProfileTypes.VideoGames,
    finish: true,
  },
  {
    id: 14,
    title: 'Programación C# con Visual Studio Code 2021 de 0 a EXPERTO',
    description:
      'Aprende DESDE CERO programación C# hasta convertirte en EXPERTO DESARROLLADOR PROFESIONAL en el entorno .NET visual code',
    image: 'https://img-c.udemycdn.com/course/750x422/3472134_648a.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/master-c-sharp-vsc',
    price: '9.99-99.99 $',
    tags: [
      {
        label: 'Todos los niveles',
        color: '#55d442',
      },
      {
        label: 'C#',
        color: '#4B8BBE',
      },
      {
        label: 'POO',
        color: '#b89e0f',
      },
      {
        label: 'Proyecto final',
        color: '#b89e0f',
      },
    ],
    year: '2020-2021',
    git: '',
    profileType: ProfileTypes.FullStack,
    finish: true,
  },
  {
    id: 16,
    externalRouter: 'https://youtu.be/PoKDbcLSrr4',
    git: 'https://github.com/mugan86/pro-cycling-stats-scrapping-node-js',
    title:
      'Extraer datos de una página web SUPER FÁCIL - Web Scraping desde 0 con NodeJS',
    description:
      'En este taller os muestro como crear extraer datos de una web, con los trucos necesarios para terminar almacenándolos en un fichero CSV que usaremos para introducirlos en una Base de datos MongoDB.',
    image: 'assets/img/portfolio/scrapping-node-cycling.webp',
    price: 0,
    tags: [
      {
        label: 'GraphQL',
        color: '#bd199c',
      },
      {
        label: 'Angular',
        color: '#d6153c',
      },
      {
        label: 'Deploy',
        color: '#5d9b9c',
      },
    ],
    year: '2021',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 17,
    externalRouter: 'https://youtu.be/8AdaeduTwUo',
    git: 'https://github.com/mugan86/web-scrapping-world-flags',
    title:
      'Extracción de datos de los países con Web Scraping usando Typescript para juego de tipo QUIZ',
    description:
      'En este taller, en el que vamos a dar varias clases, vamos a conseguir descargar la información de todos los países con los datos más relevantes que nos va a ser útil a la hora de crear las preguntas del juego.',
    image: 'assets/img/portfolio/scrapping-quiz-flags.webp',
    price: 0,
    tags: [TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.NPM],
    year: '2021',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 18,
    externalRouter: 'https://qr-code-generator-react.vercel.app/',
    git: 'https://github.com/React-Projects-2022/qr-code-generator',
    title: 'Generador de códigos QR sencillo con React',
    description:
      'Mini proyecto en el que he querido crear mediante un sencillo formulario con una entrada de texto y algunas opciones de configuración como tamaño y color, un generador de códigos QR que nos permite generar y descargar la imagen de código generado.',
    image: 'assets/img/portfolio/qr-code-react.webp',
    price: 0,
    tags: [TAGS_ITEMS.REACT, TAGS_ITEMS.JAVASCRIPT, TAGS_ITEMS.DEPLOY],
    year: '2022',
    top: true,
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 19,
    externalRouter:
      'https://mugan86.medium.com/pasos-a-seguir-para-crear-y-publicar-un-componente-de-librer%C3%ADa-vue-3f2fc20ca764',
    git: 'https://github.com/mugan86/vue-hello-btn-library',
    title: 'Librería componentes con Vue en NPM',
    description:
      'Artículo en el que explico paso a paso como crear una librería de componentes, como probarla y como publicarla de manera sencilla en NPM para poder compartirla y usarla en futuros proyectos.',
    image: 'assets/img/portfolio/vue-npm.webp',
    price: 0,
    tags: [TAGS_ITEMS.VUE, TAGS_ITEMS.NPM, TAGS_ITEMS.DEPLOY],
    year: '2020',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 20,
    externalRouter:
      'https://www.palabraderunner.com/servirace-app-buscador-carreras/',
    title: 'Servirace: La app del corredor popular',
    description:
      'Proyecto Fullstack en el que estuve trabajando durante 5 años que era un proyecto que era una app Android que tenía información de carreras y todo lo relacionado con ellas como opiniones, meteorología, fotos cercanas,... Se desarrollo la parte cliente con Android y el backend con PHP con una Base de datos MySQL combinando de manera automatizada información de muchas APIs como Panoramio, Google Places API,...',
    image: 'assets/img/portfolio/servirace.webp',
    price: 0,
    tags: [
      TAGS_ITEMS.ANDROID,
      TAGS_ITEMS.PHP,
      TAGS_ITEMS.MYSQL,
      TAGS_ITEMS.JAVA,
      TAGS_ITEMS.JAVASCRIPT,
    ],
    year: '2013-2018',
    top: true,
    profileType: ProfileTypes.FullStack,
    finish: true,
  },
  {
    id: 21,
    externalRouter: 'https://rawg.herokuapp.com/',
    title: 'API Rawg - GraphQL',
    git: 'https://github.com/mugan86/rawg-api',
    description:
      'Consumir la API REST original de Rawg que contiene información de videojuegos adaptándola a GraphQL',
    image: 'assets/img/portfolio/rawg-api-graphql.webp',
    price: 0,
    tags: [TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.DEPLOY],
    year: '2021-2022',
    top: true,
    profileType: ProfileTypes.Backend,
    finish: false,
  },
  {
    id: 22,
    externalRouter: 'https://the-moviedb-graphql.herokuapp.com/',
    title: 'API The Movie DB - GraphQL',
    git: 'https://github.com/mugan86/the-movie-db-graphql',
    description:
      'Consumir la API REST original de The Movie que contiene información de películas y series adaptándola a GraphQL',
    image: 'assets/img/portfolio/rawg-api-graphql.webp',
    price: 0,
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.TYPESCRIPT,
    ],
    year: '2020-2022',
    profileType: ProfileTypes.Backend,
    finish: false,
  },
  {
    id: 23,
    externalRouter: 'https://mugan86.github.io/angular-github-widget/',
    title: 'Angular - Github Widget - NPM',
    git: 'https://github.com/mugan86/angular-github-widget',
    description:
      'Widget sencillo con Angular publicado en NPM para mostrar la información principal de cuentas de Github que vayamos seleccionando',
    image: 'assets/img/portfolio/github-angular-npm.webp',
    price: 0,
    tags: [
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.TYPESCRIPT,
    ],
    year: '2019',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 24,
    externalRouter: 'https://mugan86.itch.io/pong-2d',
    title: 'Pong - Unity - C#',
    git: 'https://github.com/mugan86/master-class-pong-2d',
    description:
      'Proyecto de la Master Class Pong 2D en Unity que podemos encontrarlo <a href="https://formacion.masterdevs.es/p/unity-2021-programacion-videojuego-pong/?product_id=2922691" target="_blank">en este enlace</a>',
    image: 'assets/img/portfolio/pong-2d-unity.webp',
    price: 0,
    tags: [TAGS_ITEMS.C_SHARP, TAGS_ITEMS.UNITY],
    year: '2021',
    profileType: ProfileTypes.VideoGames,
    finish: true,
  },
  {
    id: 25,
    externalRouter:
      'https://play.google.com/store/apps/details?id=com.anartz.korrikakonbertidorea&hl=es_ES',
    title: 'Run Calculator - Android',
    description: `Calculadora sencilla para corredores donde se realizan las conversiones más habituales.
      <ol>
        <li>Obtener ritmo min/km con distancia y tiempo.</li>
        <li>Obtener distancia con ritmo min/km y tiempo.</li>
        <li>Obtener tiempo con distancia y ritmo min/km.</li>
      </ol>`,
    image: 'assets/img/portfolio/run-calculator.webp',
    price: 0,
    tags: [TAGS_ITEMS.ANDROID, TAGS_ITEMS.JAVA],
    year: '2012',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 26,
    externalRouter: 'https://www.npmjs.com/package/@mugan86/openweather-api',
    title: 'OpenweatherAPI NPM',
    description: `<p>Paquete NPM creado con Typescript haciendo uso de la API de Openweather para obtener el tiempo actual y la previsión de los próximos días. Podremos obtenerlas dependiendo de la ubicación mediante coordenadas geográficas o nombre de lugar.
      </p><p>
      Compatible para proyectos en Javascript, Typescript, React, Angular y similares.
      </p>`,
    image: 'assets/img/portfolio/openweather_ts_npm.webp',
    price: 0,
    tags: [TAGS_ITEMS.NPM, TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.DEPLOY],
    year: '2019',
    git: 'https://github.com/npm-js-ts-angular-modules-course/training-node-ts-openweather-api',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 27,
    externalRouter: 'https://www.youtube.com/watch?v=jjCmNzonQVA',
    title:
      'Masterclass - GraphQL desde 0 a la práctica con sincronización en tiempo real',
    description: `Directo en el que fuí invitado en el canal de <a href="https://www.youtube.com/watch?v=jjCmNzonQVA" target="_blank">DominiCode</a> para explicar GraphQL desde la base hasta aplicar un proyecto real con sincronización de información en tiempo real de un pequeño almacen para el control del stock`,
    image: 'assets/img/portfolio/domini_graphql.webp',
    price: 0,
    git: 'https://github.com/graphql-course/domini-code-live-graphql',
    tags: [TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.MASTERCLASS],
    year: '2020',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 28,
    externalRouter: 'https://pypi.org/project/owm-api-mugan86/',
    title: 'OpenweatherAPI PyPi - Python 3',
    description: `<p>Paquete Pypi creado con Python haciendo uso de la API de Openweather para obtener el tiempo actual y la previsión de los próximos días. Podremos obtenerlas dependiendo de la ubicación mediante coordenadas geográficas o nombre de lugar.
      </p><p>
      Compatible para todos los proyectos que trabajen con Python 3.
      </p>`,
    image: 'assets/img/portfolio/openweather_pypi.webp',
    price: 0,
    git: 'https://github.com/mugan86/bootcamp-basic-to-expert-from-scratch/tree/master/section-21-pypi',
    tags: [TAGS_ITEMS.PYPI, TAGS_ITEMS.PYTHON_3],
    year: '2021',
    profileType: ProfileTypes.FullStack,
    finish: true,
  },
  {
    id: 29,
    externalRouter: 'https://mugan86.github.io/ng-leaflet/',
    title: 'Angular Leaflet Map - NPM',
    description: `<p>Librería Leaflet adaptada a Angular para su uso en el framework de una manera sencilla y rápida</p><p>
      Compatible para versiones de Angular 12+.
      </p>
      <p>En el proyecto implemento el uso de diferentes herramientas para aplicar buenas prácticas y documentar el proyecto</p>
      <ul>
        <li>Angular ESLint</li>
        <li>Husky: Uso de los hooks con commitizen (commit-msg) y lint (pre-commit)</li>
        <li>Documentación con <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> que está construido con React</li>
        <li><a href="https://crowdin.com/" target="_blank">Crowdin</a>: Para gestionar de manera sencilla los textos i18n</li>
      </ul>
      El proyecto publicado en NPM lo encontramos en el <a href="https://www.npmjs.com/package/@mugan86/ng-leaflet" target="_blank">siguiente enlace.</a>`,
    image: 'assets/img/portfolio/ng-leaflet-map.webp',
    price: 0,
    git: 'https://github.com/mugan86/ng-leaflet',
    tags: [TAGS_ITEMS.ANGULAR, TAGS_ITEMS.NPM, TAGS_ITEMS.TYPESCRIPT],
    year: '2022 - ?',
    profileType: ProfileTypes.Frontend,
    finish: false,
  }, //
  {
    id: 30,
    externalRouter: 'https://world-db-graphql.herokuapp.com/graphql',
    title: 'World Database - API GraphQL',
    description: `<p>API GraphQL para poder gestionar la información de países y las ciudades que pertenecen a estos</p>
      <p>Las características del proyecto son las siguientes:</p>
      <ul>
        <li>Desarrollado con Node Express + Typescript</li>
        <li>Base de datos: MongoDB</li>
        <li>Desplegado en Heroku</li>
        <li>Creado para poder ser consumida desde cualquier proyecto cliente que queramos usar para trabajar con GraphQL</li>
        <li>Número de paises: 250 - Número de ciudades: 149449</li>
        <li>Opción a descargar la Base de datos desde el repositorio</li>
      </ul>`,
    image: 'assets/img/portfolio/rawg-api-graphql.webp',
    price: 0,
    git: 'https://github.com/graphql-course/world-db-graphql',
    tags: [TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.MONGO_DB, TAGS_ITEMS.TYPESCRIPT],
    year: '2022',
    profileType: ProfileTypes.Backend,
    finish: true,
  }, //
  {
    id: 31,
    externalRouter: 'https://world-database.vercel.app/',
    title: 'World Database - React',
    description: `<p>Proyecto React para poder gestionar la información de países y las ciudades que pertenecen a estos consumiendo desde una API GraphQL</p>
      <p>Las características del proyecto son las siguientes:</p>
      <ul>
        <li>React versión 16</li>
        <li>Consume una <a href="">API GraphQL</a></li>
        <li>Desplegado en Vercel</li>
        <li>Número de paises: 250 - Número de ciudades: 149449</li>
      </ul>`,
    image: 'assets/img/portfolio/rawg-api-graphql.webp',
    price: 0,
    git: 'https://github.com/React-Projects-2022/world-database',
    tags: [TAGS_ITEMS.REACT, TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.JAVASCRIPT],
    year: '2022',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 32,
    externalRouter:
      'https://www.codesyntax.com/es/proyectos/tribual?set_language=es',
    title: 'Tribual App - Android / Ionic (iOS)',
    description: `<p>Aplicación de preguntas y respuestas, de estilo trivial, que hemos desarrollado en CodeSyntax. Se trata de un juego, gratuito, en español, inglés y euskera. Se juega individualmente contestando 5 preguntas aleatorias. Cada partida se envía a 2 personas, por lo que existe competición entre ambas.

    Lanzado en junio de 2015 con más de 130.000 preguntas. Ya se han jugado 280.000 partidas.
    </p>
    <p>    Más información <a href="https://www.codesyntax.com/es/blog/presentamos-tribual-una-aplicacion-movil-estilo-trivial-con-mas-de-130-000-preguntas-y-multilingue" target="_blank">en el blog.</a></p>`,
    image: 'https://www.spri.eus/archivos/2017/11/TribualCodeSyntax.png',
    price: 0,
    git: '',
    tags: [
      TAGS_ITEMS.ANDROID,
      TAGS_ITEMS.IONIC,
      TAGS_ITEMS.JAVASCRIPT,
      TAGS_ITEMS.TYPESCRIPT,
    ],
    year: '2014-2015',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 33,
    title: 'Crazy Words - Generador de preguntas',
    description: `<p>Proyecto que sirve para generar preguntas de manera automática de una manera rápida y sin errores en unos pocos segundos, para poder generar muchas preguntas para juegos de tipo Quiz, Ahorcado,...</p>

    <p> Se han generado más de 200000 preguntas de muchos temas como deportes, historia, sobre números romanos, contar cuantos caracteres hay y mucho más.
    </p>
    <p>El proyecto nunca ha sido publico, se usó para aprender a automatizar procesos para generar muchas preguntas sin tener que hacerlo a mano</p>`,
    image: 'assets/img/portfolio/nothing.webp',
    price: 0,
    git: '',
    tags: [TAGS_ITEMS.KOTLIN, TAGS_ITEMS.MYSQL],
    year: '2017-2018',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 34,
    title: 'Android Network Change Receiver',
    description: `<p>Proyecto librería de Android que sirve para tener en todo momento sincronizada nuestra app con el estado de la red.</p>

    <p> En el momento que detecta una conexión nos dirá el tipo que es. WIFI, 3G, 4G,...
    </p>`,
    image: 'assets/img/portfolio/nothing.webp',
    price: 0,
    git: 'https://github.com/mugan86/android-network-change-receiver',
    tags: [TAGS_ITEMS.KOTLIN],
    year: '2017',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 35,
    title: 'Conversor de divisas - Currency converter',
    externalRouter:
      'https://play.google.com/store/apps/details?id=amldev.currency&hl=es',
    description: `<p>Aplicación donde ponemos en práctica los conocimientos de Kotlin aplicando el patrón de arquitectura MVP mientras desarrollo una app para convertir divisas en 11 monedas diferentes</p>`,
    image: 'assets/img/portfolio/nothing.webp',
    price: 0,
    git: 'https://play.google.com/store/apps/details?id=amldev.currency&hl=es',
    tags: [TAGS_ITEMS.KOTLIN, TAGS_ITEMS.REST],
    year: '2017',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 36,
    title: 'Android - Kotlin - Scanner QR Codes',
    description:
      'Proyecto en el que implemento la solución para poder tener disponible un escaner para leer códigos QR',
    image: 'assets/img/portfolio/qr.webp',
    price: 0,
    git: 'https://github.com/mugan86/android-kotlin-qr-scanner',
    tags: [TAGS_ITEMS.ANDROID, TAGS_ITEMS.KOTLIN],
    year: '2019',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 37,
    title: 'Blog - Anartz Mugika Ledo - Artículos Técnicos',
    externalRouter: 'https://mugan86.medium.com/',
    description: `<p>Artículos técnicos sobre tecnologías Javascript, GraphQL y mucho más</p>`,
    price: 0,
    git: 'https://github.com/mugan86',
    tags: [
      TAGS_ITEMS.JAVASCRIPT,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.PYTHON_3,
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
    ],
    year: '2019-?',
    profileType: ProfileTypes.FullStack,
    finish: false,
  },
  {
    id: 38,
    title: 'API GraphQL - Control de Almacen en Tiempo Real',
    externalRouter: 'https://stock-management-graphql.herokuapp.com/',
    description: `<p>Proyecto de API donde se gestiona un almacen en tiempo real mediante una conexión de Web sockets mediante el uso de los Subscriptions.</p>`,
    price: 0,
    image: 'assets/img/portfolio/warehouse.webp',
    git: 'https://github.com/graphql-course/warehouse-stock-manage-graphql',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.JAVASCRIPT,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.TYPESCRIPT,
    ],
    year: '2021',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 39,
    title: 'CLI Generador de Proyectos GraphQL 2020',
    externalRouter: 'https://github.com/mugan86/graphql-project-cli#readme',
    description: `
    <p>CLI para generar proyectos de manera rápida y sencilla para empezar a trabajar con el desarrollo de APIs GraphQL.</p>
    <p>Los proyectos tipo que podemos encontrar son los siguientes:</p>
    <ul>
      <li>Básico sin variables de entorno ni Base de datos</li>
      <li>Básico con variables de entorno y sin Base de datos</li>
      <li>Básico con variables de entorno y Base de datos</li>
      <li>Sistema de autenticación con Tokens JWT</li>
      <li>Proyecto base para convertir APIs REST en GraphQL</li>
    </ul>
    `,
    price: 0,
    git: 'https://github.com/mugan86/graphql-project-cli',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.JAVASCRIPT,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.TYPESCRIPT,
    ],
    year: '2019-2020',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 40,
    title: 'Consumir APIs GraphQL desde Javascript',
    description:
      'Proyecto sencillo en el que muestro como consumir APIs GraphQL mediante diferentes librerías de Javascript como forma ilustrativa',
    price: 0,
    git: 'https://github.com/graphql-course/consume-graphql-api-with-js',
    tags: [TAGS_ITEMS.JAVASCRIPT, TAGS_ITEMS.GRAPHQL],
    year: '2022',
    profileType: ProfileTypes.Backend,
    finish: true,
  },
  {
    id: 41,
    title: 'Consumir APIs GraphQL desde Vue',
    description:
      'Proyecto sencillo en el que muestro como consumir una API GraphQL con Vue',
    price: 0,
    git: 'https://github.com/graphql-course/vue-graphql',
    tags: [TAGS_ITEMS.JAVASCRIPT, TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.VUE],
    year: '2022',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 42,
    title: 'Testing APIs GraphQL',
    description:
      'Proyecto ilustrativo para aprender como testear APIs GraphQL con Mocha, Jest y la librería Easy GraphQL Tester con Integración Contínua mediante Travis',
    price: 0,
    git: 'https://github.com/graphql-course/intro-to-graphql-testing',
    tags: [TAGS_ITEMS.JAVASCRIPT, TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.CI],
    year: '2020',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 43,
    title: 'Control de acceso a restaurante y gestión de Picnics',
    description: `<p>Aplicación Android nativa creada con Kotlin y aplicando buenas prácticas con el patrón MVP. Lo que contiene el proyecto es lo siguiente:</p>
      <ul>
        <li>Control de restaurante con un escaner de códigos QR. Controla dependiendo de la reserva y el regimen alimenticio la opción de poder acceder o no.</li>
        <li>Gestión de Picnics para comprobar su estado y modificar cuando se recoge o cancela.</li>
      </ul>
      `,
    image: 'assets/img/portfolio/app_gesti_hotels.webp',
    price: 0,
    git: 'https://bitbucket.org/amldevs/gesti-hotels-app/',
    tags: [TAGS_ITEMS.ANDROID, TAGS_ITEMS.KOTLIN],
    year: '2019',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 44,
    title: 'Ahorcado - Android (Euskera)',
    description: `<p>Aplicación Android con casi 5000 palabras para acertar entre muchos temas como deporte, geografía,...El juego actualmente no está publicado aunque se estima el poder relanzarlo en React ó Angular en versión Web. Dispone de las siguientes opciones:</p>
      <ul>
        <li>Dos modalidades: Una partida rápida y reto de ronda de palabras a acertar (5, 10, 15 y 20).</li>
        <li>Multijugador offline. Un jugador añade a mano un tema y palabra a acertar y el otro jugador debe de acertarlo.</li>
      </ul>
      `,
    image: 'assets/img/portfolio/strangle_android.webp',
    price: 0,
    tags: [TAGS_ITEMS.ANDROID, TAGS_ITEMS.JAVA],
    year: '2014',
    profileType: ProfileTypes.Mobile,
    finish: true,
  },
  {
    id: 45,
    title: 'Ahorcado - Proyecto Final Curso C#',
    externalRouter: 'https://cursos.anartz-mugika.com/master-c-sharp-vsc',
    description: `<p>Proyecto final del curso <a href="https://cursos.anartz-mugika.com/master-c-sharp-vsc" target="_blank">Programación C# con Visual Studio Code 2021 de 0 a EXPERTO</a> que consiste en realizar una aplicación de consola del popular juego Ahorcado. Dispone de lo siguiente:</p>
      <ul>
        <li>Carga información desde fichero haciendo referencia a mano (se podría añadir para cargar de manera aleatoria temas y más opciones).</li>
        <li>6 intentos y por cada fallo va a dibujando el estado del muñeco.</li>
        <li>Uso de diferentes colores en consola.</li>
      </ul>
      `,
    image: 'assets/img/portfolio/strangle-c-sharp.webp',
    git: 'https://github.com/mugan86/strangle-game-c-sharp-net-core',
    price: 0,
    tags: [TAGS_ITEMS.C_SHARP, TAGS_ITEMS.ALL_LEVELS],
    year: '2021',
    profileType: ProfileTypes.FullStack,
    finish: true,
  },
  {
    id: 46,
    title: 'Ahorcado - Angular',
    externalRouter: 'https://mugan86.github.io/strangle-game-angular-widget/',
    description: `
      <p>Juego adaptado al framework Angular para poder jugar a el en navegador. El proyecto consiste en crear la estructura principal para el juego que contiene lo siguiente:</p>
      <p>Se hace uso de la <a href="https://github.com/mugan86/chrono-countdown-count" target="_blank">librería Typescript creado del contador / descontador</a></p>
      <ul>
        <li>Teclado con letras y números.</li>
        <li>Contador de tiempo general para saber duración de la partida.</li>
        <li>Descontador con tiempo limitado para jugada.</li>
        <li>Preparado para hacer uso de una API</li>
      </ul>
      `,
    image: 'assets/img/portfolio/strangle_angular.webp',
    git: 'https://github.com/mugan86/strangle-game-angular-widget',
    price: 0,
    tags: [TAGS_ITEMS.ANGULAR, TAGS_ITEMS.GITHUB_PAGES],
    year: '2019',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 47,
    title: 'Angular - Unit Testing + E2E con CI Travis CI',
    description: `<p>Proyecto Angular sencillo que trabajada con una base de datos local con información de países cuyo objetivo es trabajar con el testing</p>
    <ul><li>Unit Testing</li><li>E2E con Cypress</li><li>Integración Contínua con Travis CI</li></ul>
      `,
    git: 'https://github.com/mugan86/angular-countries-app-with-testing',
    price: 0,
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.TRAVIS_CI,
      TAGS_ITEMS.CI,
    ],
    year: '2022',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 48,
    title: 'Angular Schematics - Proyecto librería',
    // externalRouter: 'https://nitayneeman.com/posts/making-an-addable-angular-package-using-schematics/',
    description: `<p>Proyecto Angular sencillo que trata de implementar el desarrollo de varias colecciones de Schematics con varios objetivos</p>
    <ul>
      <li>Schematics para añadir un componente con sus estilos y servicio personalizado</li>
      <li>Schematics que sirve para instalar una librería alojada en NPM de manera sencilla junto con otras configuraciones</li>
      <li>Schematics para añadir la configuración completa de Apollo Client para trabajar con APIs GraphQL con control de errores y opción a añadir configuración de Web Sockets mejorando el schematics original</li>
    </ul>
      `,
    image: 'assets/img/now-working/schematics.webp',
    git: 'https://github.com/mugan86/ng-schematics-made-with-love-lib',
    price: 0,
    tags: [TAGS_ITEMS.ANGULAR, TAGS_ITEMS.NPM, TAGS_ITEMS.GRAPHQL],
    year: '2022',
    profileType: ProfileTypes.Frontend,
    finish: false,
  },
  {
    id: 49,
    title: 'Librería Typescript - Cronómetro - Contador / Descontador',
    externalRouter: 'https://mugan86-chronometer.firebaseapp.com/',
    description: `<p>Cronómetro - Librería Typescript - NPM</p>
    <p>Funciones que contiene:</p>
    <ul>
      <li>Contador</li>
      <li>Descontador</li>
    </ul>
      `,
    image: 'assets/img/portfolio/nothing.webp',
    git: 'https://github.com/mugan86/chrono-countdown-count',
    price: 0,
    tags: [TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.NPM, TAGS_ITEMS.COMPODOC],
    year: '2019',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 50,
    title: 'Angular - Stripe',
    externalRouter: 'https://anartz-mugika.gitbook.io/angular-stripe-pay-form/',
    description: `<p>Integración de librería Stripe en Angular para realizar pagos de tarjeta usando la librería original.</p>
    <p>Funciones que contiene:</p>
    <ul>
      <li>Crear token tarjeta.</li>
      <li>Realizar pagos con tarjeta de crédito.</li>
    </ul>
      `,
    image: 'assets/img/portfolio/nothing.webp',
    git: 'https://github.com/mugan86/ng-stripe-pay-form/tree/master/projects/stripe-payment-form',
    price: 0,
    tags: [TAGS_ITEMS.ANGULAR, TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.NPM],
    year: '2020',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
  {
    id: 51,
    title: 'Angular - Shop UI Library',
    externalRouter: 'https://anartz-mugika.gitbook.io/angular-shop-ui-library/',
    description: `<p>Librería de componente para trabajar con los elementos de una tienda Online.</p>
    <p>Funciones que contiene:</p>
    <ul>
      <li>Carousel.</li>
      <li>Información del producto.</li>
      <li>Rating: valoraciones con estrellas.</li>
      <li>Selector de cantidades.</li>
    </ul>
      `,
    image: 'assets/img/portfolio/nothing.webp',
    git: 'https://github.com/mugan86/frontend-meang-online-shop/tree/shop-ui-library/projects/shop-ui',
    price: 0,
    tags: [TAGS_ITEMS.ANGULAR, TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.NPM],
    year: '2020',
    profileType: ProfileTypes.Frontend,
    finish: true,
  },
];
