import type { ProjectTags } from './enum';

export interface ClientShowcaseInterface {
    name: string;
    image: string;
    link: string;
}

export interface ProjectInterface {
    name: string;
    teaser: string;
    images: ProjectImageInterface[];
    tags: ProjectTags[];
    link: string;
    description: string;
}

export interface ProjectImageInterface {
    alt: string;
    src: string;
}
