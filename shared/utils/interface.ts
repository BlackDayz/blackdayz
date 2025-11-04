export interface ClientShowcaseInterface {
    name: string;
    image: string;
}

export interface ProjectInterface {
    projectId: number;
    name: string;
    teaser: string;
    images: ProjectImageInterface[];
}

export interface ProjectImageInterface {
    alt: string;
    src: string;
}
