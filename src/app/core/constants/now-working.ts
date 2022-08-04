import { INowWorkingItem } from "@core/interfaces/now-working.interface";

export const NOW_WORKING_PROJECTS: Array<INowWorkingItem> = [
    {
        description: 'Versión adaptada de LeafletJS en Angular que se ha creado para simplificar su uso en Angular en cuanto configuraciones y funcionalidades y ser una alternativa a librerías como AGM (Angular Google Maps)',
        title: 'Angular Leaflet Map',
        logo: 'assets/img/now-working/alm-npm.webp',
        url: 'https://www.npmjs.com/package/@mugan86/ng-leaflet'
    },
    {
        description: 'Libro que estoy escribiendo con el objetivo enseñar a trabajar con Schematics y como crear los nuestros propios para tener schemas más personalizados y adaptados a nuestras necesidades.',
        title: 'Angular Schematics: De 0 a Experto',
        logo: 'assets/img/now-working/schematics.webp',
        url: ''
    },
    {
        description: 'Proyecto que nos genera una tarjeta de contacto a partir de introducir unos datos y que esa tarjeta genera un código QR y da opción a copiar todo el HTML para pegarlo en cualquier firma de email. <b>Objetivo: Convertirlo en librería compatible para Angular, React y Vue</b>',
        title: 'Generador de tarjetas de contacto con QR + VCard',
        logo: 'assets/img/now-working/qr-vcard.webp',
        url: 'https://qr-with-vcard-app.stackblitz.io'
    }
];
export const NOW_WORKING_LEARN: Array<INowWorkingItem> = [
    {
        description: 'Fundamentos de la arquitectura y desarrollo de software.',
        title: 'Principios SOLID y Clean Code',
        logo: 'assets/img/now-working/solid.webp',
        url: 'https://www.udemy.com/course/solid-clean/'
    },
    {
        description: 'REST, TypeScript, Websockets, Autenticación, Authorización, Docker, Mongo, Postgres, TypeORM,...',
        title: 'Nest: Desarrollo backend escalable con Node',
        logo: 'assets/img/now-working/nestjs.webp',
        url: 'https://www.udemy.com/course/nest-framework/'
    },
    {
        description: 'Inicia tu carrera DevOps de manera práctica, aprende Docker, pipelines, jenkins, orquestar servicios en kubernetes y más',
        title: 'DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD',
        logo: 'assets/img/now-working/devops.webp',
        url: 'https://www.udemy.com/course/devops-con-dockers-kubernetes-jenkins-y-gitflow-cicd/'
    }
]