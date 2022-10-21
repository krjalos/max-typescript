"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    let Status;
    (function (Status) {
        Status[Status["Active"] = 0] = "Active";
        Status[Status["Finished"] = 1] = "Finished";
    })(Status = App.Status || (App.Status = {}));
})(App || (App = {}));
var App;
(function (App) {
    function validate(fields) {
        let isValid = true;
        for (const field of fields) {
            for (const criteria in field) {
                switch (criteria) {
                    case "required":
                        isValid = isValid && field.value.length > 0;
                        !isValid && alert(`${field.name} is required`);
                        break;
                    case "minLength":
                        isValid = isValid && field.value.length >= field[criteria];
                        !isValid && alert(`${field.name} should be at least ${field[criteria]} chars long`);
                        break;
                    case "maxLength":
                        isValid = isValid && field.value.length <= field[criteria];
                        !isValid && alert(`${field.name} should be max ${field[criteria]} chars long`);
                        break;
                    case "min":
                        isValid = isValid && +field.value >= field[criteria];
                        !isValid && alert(`${field.name} should be min ${field[criteria]}`);
                        break;
                    case "max":
                        isValid = isValid && +field.value <= field[criteria];
                        !isValid && alert(`${field.name} should be min ${field[criteria]}`);
                        break;
                }
                if (!isValid) {
                    return false;
                }
            }
            if (!isValid) {
                return false;
            }
        }
        return isValid;
    }
    function Autobind(_, _2, descriptor) {
        const originalDescriptor = descriptor.value;
        const updatedMethod = {
            enumerable: false,
            configurable: true,
            get() {
                return originalDescriptor.bind(this);
            }
        };
        return updatedMethod;
    }
    class Project {
        constructor(project) {
            this.id = Math.floor(Math.random() * 1000000);
            this.title = project.title;
            this.description = project.description;
            this.people = project.people;
            this.status = App.Status.Active;
        }
        toggleStatus(type) {
            this.status = type === "active" ? App.Status.Active : App.Status.Finished;
        }
        render() {
            return `<div><h2>${this.title}</h2><h3>${this.people}</h3><p>${this.description}</p></div>`;
        }
    }
    App.Project = Project;
    const DUMMY_PROJECTS = [
        new Project({ title: "Test Title", description: "Lorem ipsim", people: 5 }),
        new Project({ title: "Dolor sit amet", description: "Test super descriptioin", people: 9 }),
        new Project({ title: "Nothing to see here", description: "Yep, yep", people: 2 }),
    ];
    class ProjectState {
        constructor() {
            this.projects = DUMMY_PROJECTS.slice();
            this.listeners = [];
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(project) {
            const newProject = new Project(project);
            this.projects.push(newProject);
            for (const listenerFn of this.listeners) {
                listenerFn(newProject, "add");
            }
        }
        toggleProject(id, type) {
            const projectIndex = this.projects.findIndex(p => p.id === id);
            this.projects[projectIndex].toggleStatus(type);
        }
        getAllProjects() {
            return this.projects.slice();
        }
    }
    const projectState = ProjectState.getInstance();
    class Component {
        constructor(templateId, appId) {
            this.app = document.getElementById(appId);
            const template = document.getElementById(templateId);
            const elementNode = document.importNode(template.content, true);
            this.element = elementNode.firstElementChild;
            this.build();
        }
        build() {
            this.app.appendChild(this.element);
        }
    }
    class ProjectInput extends Component {
        constructor(templateId, appId) {
            super(templateId, appId);
            this.app = document.getElementById(appId);
            this.element.id = "user-input";
            this.titleElement = this.element.querySelector("#title");
            this.descriptionElement = this.element.querySelector("#description");
            this.peopleElement = this.element.querySelector("#people");
            this.initialise();
        }
        initialise() {
            this.element.addEventListener('submit', this.processForm);
        }
        getValidated() {
            const title = this.titleElement.value;
            const description = this.descriptionElement.value;
            const people = this.peopleElement.value;
            if (validate([
                { name: "Title", value: title, required: true, minLength: 2, maxLength: 10 },
                { name: "Description", value: description, required: true, minLength: 5, maxLength: 100 },
                { name: "People", value: people, required: true, min: 2, max: 10 }
            ])) {
                return { title: title, description: description, people: +people };
            }
            else {
                return;
            }
        }
        processForm(event) {
            event.preventDefault();
            const validated = this.getValidated();
            if (validated) {
                projectState.addProject(validated);
            }
        }
    }
    __decorate([
        Autobind
    ], ProjectInput.prototype, "processForm", null);
    class ProjectList extends Component {
        constructor(projectListId, appId, singleProjectId, type) {
            super(projectListId, appId);
            this.type = type;
            this.projectListElement = this.element.querySelector('.projects ul');
            const singleProjectTemplate = document.getElementById(singleProjectId);
            const singleProjectNode = document.importNode(singleProjectTemplate.content, true);
            this.singleProjectWrapper = singleProjectNode.firstElementChild;
            this.initialise();
            this.setupListeners();
        }
        allowDrop(e) {
            e.preventDefault();
        }
        drop(e) {
            e.preventDefault();
            const data = e.dataTransfer.getData("text");
            this.projectListElement.appendChild(document.querySelector(`[data-id="${data}"]`));
            projectState.toggleProject(+data, this.type);
        }
        drag(e) {
            const element = e.target;
            const projectId = element.getAttribute('data-id');
            e.dataTransfer.setData("text", projectId);
        }
        initialise() {
            this.element.id = `${this.type}-projects`;
            this.element.querySelector("h2").innerHTML = `${this.type.toUpperCase()} PROJECTS`;
            this.projectListElement.addEventListener("dragover", this.allowDrop);
            this.projectListElement.addEventListener("drop", this.drop);
            if (this.type === "active") {
                const initialProjects = projectState.getAllProjects();
                for (const project of initialProjects) {
                    this.addProject(project);
                }
            }
        }
        addProject(project) {
            const projectContent = project.render();
            const li = this.singleProjectWrapper.cloneNode(true);
            li.innerHTML = projectContent;
            li.setAttribute("data-id", project.id.toString());
            li.setAttribute("draggable", "true");
            li.addEventListener("dragstart", this.drag);
            this.projectListElement.prepend(li);
        }
        setupListeners() {
            if (this.type === "active") {
                projectState.listeners.push((project, type) => {
                    if (type === "add") {
                        this.addProject(project);
                    }
                });
            }
        }
    }
    __decorate([
        Autobind
    ], ProjectList.prototype, "drop", null);
    new ProjectInput('project-input', 'app');
    new ProjectList('project-list', 'app', "single-project", "active");
    new ProjectList('project-list', 'app', "single-project", "finished");
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map