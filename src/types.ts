
  export enum Status {Active, Finished}

  export type ProjectCoreType = {
    title:string;
    description:string;
    people:number;
  }

  export interface Field {
    value: string;
    name: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }