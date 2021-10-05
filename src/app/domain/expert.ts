export interface Country {
    name?: string;
    code?: string;
}

export interface Experts {
    id?: number;
    name?: string;
    country?: Country;
    qualifications?: Array<string>;
    researchStartYear?:number;
    hitScore?: number;
    qualscore?: number;
    influenceScore?: number;
    status?: Array<string>;
}

