import { INowWorkingItem } from "@core/interfaces/now-working.interface";

export const NOW_WORKING_PROJECTS: Array<INowWorkingItem> = [
    {
        description: 'nowWorkingProjects.content.angular.description',
        title: 'nowWorkingProjects.content.angular.title',
        logo: 'assets/img/now-working/alm-npm.webp',
        url: 'https://www.npmjs.com/package/@mugan86/ng-leaflet'
    },
    {
        description: 'nowWorkingProjects.content.schematics.description',
        title: 'nowWorkingProjects.content.schematics.title',
        logo: 'assets/img/now-working/schematics.webp',
        url: ''
    },
    {
        description: 'nowWorkingProjects.content.vCard.description',
        title: 'nowWorkingProjects.content.vCard.title',
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