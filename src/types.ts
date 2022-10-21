namespace App {
  export enum Status {Active, Finished}

  export type ProjectType = {
    id: number;
    title:string;
    description:string;
    people:number;
    status: Status;
  }

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

  export type Listener = (project: Project, type: "add" | "toggle") => void;

}