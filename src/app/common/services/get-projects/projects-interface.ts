export interface ProjectInfo {
    [key: number]: {};
    lang: {
        id: number,
        title: string,
        subtitle: string,
        description: string,
        info: string
    }
}

export interface ProjectImages {
    id: number,
    imgSrc: string
}

export interface Project {
    lang: ProjectInfo,
    img: ProjectImages[]
}