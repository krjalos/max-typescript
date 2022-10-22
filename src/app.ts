import {Status, ProjectCoreType, Field} from './types';

export type Listener = (project: Project, type: "add" | "toggle") => void;

function validate(fields: Field[]): boolean {
  let isValid = true;

  for (const field of fields) {
    for (const criteria in field) {
      switch (criteria) {
        case "required":
          isValid = isValid && field.value.length > 0;
          !isValid && alert(`${field.name} is required`);
          break;
        case "minLength":
          isValid = isValid && field.value.length >= field[criteria]!;
          !isValid && alert(`${field.name} should be at least ${field[criteria]} chars long`);
          break;
        case "maxLength":
          isValid = isValid && field.value.length <= field[criteria]!;
          !isValid && alert(`${field.name} should be max ${field[criteria]} chars long`);
          break;
        case "min":
          isValid = isValid && +field.value >= field[criteria]!;
          !isValid && alert(`${field.name} should be min ${field[criteria]}`);
          break;
        case "max":
          isValid = isValid && +field.value <= field[criteria]!;
          !isValid && alert(`${field.name} should be min ${field[criteria]}`);
          break;
      }
      if(!isValid) {
        return false;
      }
    }
    if(!isValid) {
      return false;
    }
  }

  return isValid;
}

function Autobind(_: any, _2: string | symbol, descriptor: PropertyDescriptor) {
  const originalDescriptor = descriptor.value;

  const updatedMethod: PropertyDescriptor = {
    enumerable: false,
    configurable: true,
    get() {
      return originalDescriptor.bind(this);
    }
  }
  return updatedMethod;
}

export class Project {
  id: number;
  title: string;
  description: string;
  people: number;
  status: Status;

  constructor(project: ProjectCoreType) {
    this.id = Math.floor(Math.random() * 1000000);
    this.title = project.title;
    this.description = project.description;
    this.people = project.people;
    this.status = Status.Active;
  }

  toggleStatus (type: string){
    this.status = type === "active" ? Status.Active : Status.Finished;
  }

  render() {
    return `<div><h2>${this.title}</h2><h3>${this.people}</h3><p>${this.description}</p></div>`;
  }
}

const DUMMY_PROJECTS = [
  new Project({title: "Test Title", description: "Lorem ipsim", people: 5}),
  new Project({title: "Dolor sit amet", description: "Test super descriptioin", people: 9}),
  new Project({title: "Nothing to see here", description: "Yep, yep", people: 2}),
]

class ProjectState {
  private projects: Project[] = DUMMY_PROJECTS.slice();
  private static instance: ProjectState;
  listeners: Listener[] = [];

  private constructor() {}

  static getInstance() {
    if(this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(project: ProjectCoreType) {
    const newProject = new Project(project);
    this.projects.push(newProject);

    for(const listenerFn of this.listeners){
      listenerFn(newProject, "add");
    }
  }

  toggleProject(id: number, type: string): void{
    const projectIndex = this.projects.findIndex(p => p.id === id);
    this.projects[projectIndex].toggleStatus(type);
  }

  getAllProjects() {
    return this.projects.slice();
  }
}

const projectState = ProjectState.getInstance();

abstract class Component<T extends HTMLElement> {
  app: HTMLElement;
  element: T;

  constructor(templateId: string, appId: string) {
    this.app = document.getElementById(appId)!;

    const template = document.getElementById(templateId)! as HTMLTemplateElement;
    const elementNode = document.importNode(template.content, true);
    this.element = elementNode.firstElementChild as T;

    this.build();
  }

  build() {
    this.app.appendChild(this.element);
  }
}

class ProjectInput extends Component<HTMLFormElement> {
  titleElement: HTMLInputElement;
  descriptionElement: HTMLInputElement;
  peopleElement: HTMLInputElement;

  constructor(templateId: string, appId: string) {
    super(templateId, appId);
    this.app = document.getElementById(appId)! as HTMLElement;

    this.element.id = "user-input";

    this.titleElement = this.element.querySelector("#title")! as HTMLInputElement;
    this.descriptionElement = this.element.querySelector("#description")! as HTMLInputElement;
    this.peopleElement = this.element.querySelector("#people")! as HTMLInputElement;

    this.initialise();
  }

  initialise() {
    this.element.addEventListener('submit', this.processForm);
  }

  getValidated(): {title: string, description: string, people: number} | void{
    const title = this.titleElement.value;

    const description = this.descriptionElement.value;

    const people = this.peopleElement.value;

    if(validate([
      {name: "Title", value: title, required: true, minLength: 2, maxLength: 10},
      {name: "Description", value: description, required: true, minLength: 5, maxLength: 100},
      {name: "People", value: people, required: true, min: 2, max: 10}
    ])){
      return {title: title, description: description, people: +people};
    }else {
      return;
    }
  }

  @Autobind
  processForm(event: SubmitEvent) {
    event.preventDefault();

    const validated = this.getValidated();

    if (validated) {
      projectState.addProject(validated);
    }
  }
}

class ProjectList extends Component<HTMLElement>{
  projectListElement: HTMLElement;
  singleProjectWrapper: HTMLElement;

  constructor (projectListId: string, appId: string, singleProjectId: string,  private type: "active" | "finished") {
    super(projectListId, appId);

    this.projectListElement = this.element.querySelector('.projects ul')! as HTMLFormElement;

    const singleProjectTemplate = document.getElementById(singleProjectId)! as HTMLTemplateElement;
    const singleProjectNode = document.importNode(singleProjectTemplate.content, true);
    this.singleProjectWrapper = singleProjectNode.firstElementChild! as HTMLElement;

    this.initialise();
    this.setupListeners();
  }

  allowDrop(e: DragEvent) {
    e.preventDefault();
  }

  @Autobind
  drop(e: DragEvent) {
    e.preventDefault();
    const data = e.dataTransfer!.getData("text");
    this.projectListElement.appendChild(document.querySelector(`[data-id="${data}"]`)!);
    projectState.toggleProject(+data, this.type);
  }

  drag(e: DragEvent) {
    const element = e.target as HTMLElement;
    const projectId = element.getAttribute('data-id')!;
    e.dataTransfer!.setData("text", projectId);
  }

  initialise() {
    this.element.id = `${this.type}-projects`;
    this.element.querySelector("h2")!.innerHTML = `${this.type.toUpperCase()} PROJECTS`;

    this.projectListElement.addEventListener("dragover", this.allowDrop);
    this.projectListElement.addEventListener("drop", this.drop);

    if(this.type === "active"){
      const initialProjects = projectState.getAllProjects();
      for(const project of initialProjects) {
        this.addProject(project);
      }
    }
  }

  addProject(project: Project) {
    const projectContent = project.render();

    const li = this.singleProjectWrapper.cloneNode(true) as HTMLElement;

    li.innerHTML = projectContent;

    li.setAttribute("data-id", project.id.toString());
    li.setAttribute("draggable", "true");
    li.addEventListener("dragstart", this.drag);

    this.projectListElement.prepend(li);
  }

  setupListeners() {
    if(this.type === "active"){
      projectState.listeners.push(
        (project: Project, type : string) => {
          if(type === "add") {
            this.addProject(project);
          }
        }
      );
    }
  }
}


new ProjectInput('project-input', 'app');
new ProjectList('project-list', 'app', "single-project", "active");
new ProjectList('project-list', 'app',"single-project", "finished");