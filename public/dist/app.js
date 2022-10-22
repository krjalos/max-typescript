/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Finished"] = 1] = "Finished";
})(Status || (Status = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function validate(fields) {
    var isValid = true;
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var field = fields_1[_i];
        for (var criteria in field) {
            switch (criteria) {
                case "required":
                    isValid = isValid && field.value.length > 0;
                    !isValid && alert("".concat(field.name, " is required"));
                    break;
                case "minLength":
                    isValid = isValid && field.value.length >= field[criteria];
                    !isValid && alert("".concat(field.name, " should be at least ").concat(field[criteria], " chars long"));
                    break;
                case "maxLength":
                    isValid = isValid && field.value.length <= field[criteria];
                    !isValid && alert("".concat(field.name, " should be max ").concat(field[criteria], " chars long"));
                    break;
                case "min":
                    isValid = isValid && +field.value >= field[criteria];
                    !isValid && alert("".concat(field.name, " should be min ").concat(field[criteria]));
                    break;
                case "max":
                    isValid = isValid && +field.value <= field[criteria];
                    !isValid && alert("".concat(field.name, " should be min ").concat(field[criteria]));
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
    var originalDescriptor = descriptor.value;
    var updatedMethod = {
        enumerable: false,
        configurable: true,
        get: function () {
            return originalDescriptor.bind(this);
        }
    };
    return updatedMethod;
}
var Project = (function () {
    function Project(project) {
        this.id = Math.floor(Math.random() * 1000000);
        this.title = project.title;
        this.description = project.description;
        this.people = project.people;
        this.status = _types__WEBPACK_IMPORTED_MODULE_0__.Status.Active;
    }
    Project.prototype.toggleStatus = function (type) {
        this.status = type === "active" ? _types__WEBPACK_IMPORTED_MODULE_0__.Status.Active : _types__WEBPACK_IMPORTED_MODULE_0__.Status.Finished;
    };
    Project.prototype.render = function () {
        return "<div><h2>".concat(this.title, "</h2><h3>").concat(this.people, "</h3><p>").concat(this.description, "</p></div>");
    };
    return Project;
}());

var DUMMY_PROJECTS = [
    new Project({ title: "Test Title", description: "Lorem ipsim", people: 5 }),
    new Project({ title: "Dolor sit amet", description: "Test super descriptioin", people: 9 }),
    new Project({ title: "Nothing to see here", description: "Yep, yep", people: 2 }),
];
var ProjectState = (function () {
    function ProjectState() {
        this.projects = DUMMY_PROJECTS.slice();
        this.listeners = [];
    }
    ProjectState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    };
    ProjectState.prototype.addProject = function (project) {
        var newProject = new Project(project);
        this.projects.push(newProject);
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFn = _a[_i];
            listenerFn(newProject, "add");
        }
    };
    ProjectState.prototype.toggleProject = function (id, type) {
        var projectIndex = this.projects.findIndex(function (p) { return p.id === id; });
        this.projects[projectIndex].toggleStatus(type);
    };
    ProjectState.prototype.getAllProjects = function () {
        return this.projects.slice();
    };
    return ProjectState;
}());
var projectState = ProjectState.getInstance();
var Component = (function () {
    function Component(templateId, appId) {
        this.app = document.getElementById(appId);
        var template = document.getElementById(templateId);
        var elementNode = document.importNode(template.content, true);
        this.element = elementNode.firstElementChild;
        this.build();
    }
    Component.prototype.build = function () {
        this.app.appendChild(this.element);
    };
    return Component;
}());
var ProjectInput = (function (_super) {
    __extends(ProjectInput, _super);
    function ProjectInput(templateId, appId) {
        var _this = _super.call(this, templateId, appId) || this;
        _this.app = document.getElementById(appId);
        _this.element.id = "user-input";
        _this.titleElement = _this.element.querySelector("#title");
        _this.descriptionElement = _this.element.querySelector("#description");
        _this.peopleElement = _this.element.querySelector("#people");
        _this.initialise();
        return _this;
    }
    ProjectInput.prototype.initialise = function () {
        this.element.addEventListener('submit', this.processForm);
    };
    ProjectInput.prototype.getValidated = function () {
        var title = this.titleElement.value;
        var description = this.descriptionElement.value;
        var people = this.peopleElement.value;
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
    };
    ProjectInput.prototype.processForm = function (event) {
        event.preventDefault();
        var validated = this.getValidated();
        if (validated) {
            projectState.addProject(validated);
        }
    };
    __decorate([
        Autobind
    ], ProjectInput.prototype, "processForm", null);
    return ProjectInput;
}(Component));
var ProjectList = (function (_super) {
    __extends(ProjectList, _super);
    function ProjectList(projectListId, appId, singleProjectId, type) {
        var _this = _super.call(this, projectListId, appId) || this;
        _this.type = type;
        _this.projectListElement = _this.element.querySelector('.projects ul');
        var singleProjectTemplate = document.getElementById(singleProjectId);
        var singleProjectNode = document.importNode(singleProjectTemplate.content, true);
        _this.singleProjectWrapper = singleProjectNode.firstElementChild;
        _this.initialise();
        _this.setupListeners();
        return _this;
    }
    ProjectList.prototype.allowDrop = function (e) {
        e.preventDefault();
    };
    ProjectList.prototype.drop = function (e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        this.projectListElement.appendChild(document.querySelector("[data-id=\"".concat(data, "\"]")));
        projectState.toggleProject(+data, this.type);
    };
    ProjectList.prototype.drag = function (e) {
        var element = e.target;
        var projectId = element.getAttribute('data-id');
        e.dataTransfer.setData("text", projectId);
    };
    ProjectList.prototype.initialise = function () {
        this.element.id = "".concat(this.type, "-projects");
        this.element.querySelector("h2").innerHTML = "".concat(this.type.toUpperCase(), " PROJECTS");
        this.projectListElement.addEventListener("dragover", this.allowDrop);
        this.projectListElement.addEventListener("drop", this.drop);
        if (this.type === "active") {
            var initialProjects = projectState.getAllProjects();
            for (var _i = 0, initialProjects_1 = initialProjects; _i < initialProjects_1.length; _i++) {
                var project = initialProjects_1[_i];
                this.addProject(project);
            }
        }
    };
    ProjectList.prototype.addProject = function (project) {
        var projectContent = project.render();
        var li = this.singleProjectWrapper.cloneNode(true);
        li.innerHTML = projectContent;
        li.setAttribute("data-id", project.id.toString());
        li.setAttribute("draggable", "true");
        li.addEventListener("dragstart", this.drag);
        this.projectListElement.prepend(li);
    };
    ProjectList.prototype.setupListeners = function () {
        var _this = this;
        if (this.type === "active") {
            projectState.listeners.push(function (project, type) {
                if (type === "add") {
                    _this.addProject(project);
                }
            });
        }
    };
    __decorate([
        Autobind
    ], ProjectList.prototype, "drop", null);
    return ProjectList;
}(Component));
new ProjectInput('project-input', 'app');
new ProjectList('project-list', 'app', "single-project", "active");
new ProjectList('project-list', 'app', "single-project", "finished");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZXhwb3J0IGVudW0gU3RhdHVzIHtBY3RpdmUsIEZpbmlzaGVkfVxuXG4gIGV4cG9ydCB0eXBlIFByb2plY3RDb3JlVHlwZSA9IHtcbiAgICB0aXRsZTpzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246c3RyaW5nO1xuICAgIHBlb3BsZTpudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XG4gICAgbWluTGVuZ3RoPzogbnVtYmVyO1xuICAgIG1heExlbmd0aD86IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgbWF4PzogbnVtYmVyO1xuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1N0YXR1cywgUHJvamVjdENvcmVUeXBlLCBGaWVsZH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIExpc3RlbmVyID0gKHByb2plY3Q6IFByb2plY3QsIHR5cGU6IFwiYWRkXCIgfCBcInRvZ2dsZVwiKSA9PiB2b2lkO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZShmaWVsZHM6IEZpZWxkW10pOiBib29sZWFuIHtcbiAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgZm9yIChjb25zdCBjcml0ZXJpYSBpbiBmaWVsZCkge1xuICAgICAgc3dpdGNoIChjcml0ZXJpYSkge1xuICAgICAgICBjYXNlIFwicmVxdWlyZWRcIjpcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBmaWVsZC52YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICAgICFpc1ZhbGlkICYmIGFsZXJ0KGAke2ZpZWxkLm5hbWV9IGlzIHJlcXVpcmVkYCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtaW5MZW5ndGhcIjpcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBmaWVsZC52YWx1ZS5sZW5ndGggPj0gZmllbGRbY3JpdGVyaWFdITtcbiAgICAgICAgICAhaXNWYWxpZCAmJiBhbGVydChgJHtmaWVsZC5uYW1lfSBzaG91bGQgYmUgYXQgbGVhc3QgJHtmaWVsZFtjcml0ZXJpYV19IGNoYXJzIGxvbmdgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1heExlbmd0aFwiOlxuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIGZpZWxkLnZhbHVlLmxlbmd0aCA8PSBmaWVsZFtjcml0ZXJpYV0hO1xuICAgICAgICAgICFpc1ZhbGlkICYmIGFsZXJ0KGAke2ZpZWxkLm5hbWV9IHNob3VsZCBiZSBtYXggJHtmaWVsZFtjcml0ZXJpYV19IGNoYXJzIGxvbmdgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1pblwiOlxuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmICtmaWVsZC52YWx1ZSA+PSBmaWVsZFtjcml0ZXJpYV0hO1xuICAgICAgICAgICFpc1ZhbGlkICYmIGFsZXJ0KGAke2ZpZWxkLm5hbWV9IHNob3VsZCBiZSBtaW4gJHtmaWVsZFtjcml0ZXJpYV19YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiArZmllbGQudmFsdWUgPD0gZmllbGRbY3JpdGVyaWFdITtcbiAgICAgICAgICAhaXNWYWxpZCAmJiBhbGVydChgJHtmaWVsZC5uYW1lfSBzaG91bGQgYmUgbWluICR7ZmllbGRbY3JpdGVyaWFdfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYoIWlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBBdXRvYmluZChfOiBhbnksIF8yOiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICBjb25zdCBvcmlnaW5hbERlc2NyaXB0b3IgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGNvbnN0IHVwZGF0ZWRNZXRob2Q6IFByb3BlcnR5RGVzY3JpcHRvciA9IHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsRGVzY3JpcHRvci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXBkYXRlZE1ldGhvZDtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwZW9wbGU6IG51bWJlcjtcbiAgc3RhdHVzOiBTdGF0dXM7XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdENvcmVUeXBlKSB7XG4gICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICAgIHRoaXMudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIHRoaXMucGVvcGxlID0gcHJvamVjdC5wZW9wbGU7XG4gICAgdGhpcy5zdGF0dXMgPSBTdGF0dXMuQWN0aXZlO1xuICB9XG5cbiAgdG9nZ2xlU3RhdHVzICh0eXBlOiBzdHJpbmcpe1xuICAgIHRoaXMuc3RhdHVzID0gdHlwZSA9PT0gXCJhY3RpdmVcIiA/IFN0YXR1cy5BY3RpdmUgOiBTdGF0dXMuRmluaXNoZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8ZGl2PjxoMj4ke3RoaXMudGl0bGV9PC9oMj48aDM+JHt0aGlzLnBlb3BsZX08L2gzPjxwPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+PC9kaXY+YDtcbiAgfVxufVxuXG5jb25zdCBEVU1NWV9QUk9KRUNUUyA9IFtcbiAgbmV3IFByb2plY3Qoe3RpdGxlOiBcIlRlc3QgVGl0bGVcIiwgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzaW1cIiwgcGVvcGxlOiA1fSksXG4gIG5ldyBQcm9qZWN0KHt0aXRsZTogXCJEb2xvciBzaXQgYW1ldFwiLCBkZXNjcmlwdGlvbjogXCJUZXN0IHN1cGVyIGRlc2NyaXB0aW9pblwiLCBwZW9wbGU6IDl9KSxcbiAgbmV3IFByb2plY3Qoe3RpdGxlOiBcIk5vdGhpbmcgdG8gc2VlIGhlcmVcIiwgZGVzY3JpcHRpb246IFwiWWVwLCB5ZXBcIiwgcGVvcGxlOiAyfSksXG5dXG5cbmNsYXNzIFByb2plY3RTdGF0ZSB7XG4gIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IERVTU1ZX1BST0pFQ1RTLnNsaWNlKCk7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9qZWN0U3RhdGU7XG4gIGxpc3RlbmVyczogTGlzdGVuZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZih0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdDogUHJvamVjdENvcmVUeXBlKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgIGZvcihjb25zdCBsaXN0ZW5lckZuIG9mIHRoaXMubGlzdGVuZXJzKXtcbiAgICAgIGxpc3RlbmVyRm4obmV3UHJvamVjdCwgXCJhZGRcIik7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUHJvamVjdChpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpOiB2b2lke1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gaWQpO1xuICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2dnbGVTdGF0dXModHlwZSk7XG4gIH1cblxuICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zbGljZSgpO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RTdGF0ZSA9IFByb2plY3RTdGF0ZS5nZXRJbnN0YW5jZSgpO1xuXG5hYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50PiB7XG4gIGFwcDogSFRNTEVsZW1lbnQ7XG4gIGVsZW1lbnQ6IFQ7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVJZDogc3RyaW5nLCBhcHBJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBJZCkhO1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKSEgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICBjb25zdCBlbGVtZW50Tm9kZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgVDtcblxuICAgIHRoaXMuYnVpbGQoKTtcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuYXBwLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdElucHV0IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxGb3JtRWxlbWVudD4ge1xuICB0aXRsZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGRlc2NyaXB0aW9uRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgcGVvcGxlRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZUlkOiBzdHJpbmcsIGFwcElkOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZUlkLCBhcHBJZCk7XG4gICAgdGhpcy5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBJZCkhIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5lbGVtZW50LmlkID0gXCJ1c2VyLWlucHV0XCI7XG5cbiAgICB0aGlzLnRpdGxlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuZGVzY3JpcHRpb25FbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5wZW9wbGVFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVvcGxlXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnByb2Nlc3NGb3JtKTtcbiAgfVxuXG4gIGdldFZhbGlkYXRlZCgpOiB7dGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgcGVvcGxlOiBudW1iZXJ9IHwgdm9pZHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMudGl0bGVFbGVtZW50LnZhbHVlO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZTtcblxuICAgIGNvbnN0IHBlb3BsZSA9IHRoaXMucGVvcGxlRWxlbWVudC52YWx1ZTtcblxuICAgIGlmKHZhbGlkYXRlKFtcbiAgICAgIHtuYW1lOiBcIlRpdGxlXCIsIHZhbHVlOiB0aXRsZSwgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogMiwgbWF4TGVuZ3RoOiAxMH0sXG4gICAgICB7bmFtZTogXCJEZXNjcmlwdGlvblwiLCB2YWx1ZTogZGVzY3JpcHRpb24sIHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDUsIG1heExlbmd0aDogMTAwfSxcbiAgICAgIHtuYW1lOiBcIlBlb3BsZVwiLCB2YWx1ZTogcGVvcGxlLCByZXF1aXJlZDogdHJ1ZSwgbWluOiAyLCBtYXg6IDEwfVxuICAgIF0pKXtcbiAgICAgIHJldHVybiB7dGl0bGU6IHRpdGxlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIHBlb3BsZTogK3Blb3BsZX07XG4gICAgfWVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIEBBdXRvYmluZFxuICBwcm9jZXNzRm9ybShldmVudDogU3VibWl0RXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkID0gdGhpcy5nZXRWYWxpZGF0ZWQoKTtcblxuICAgIGlmICh2YWxpZGF0ZWQpIHtcbiAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHZhbGlkYXRlZCk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFByb2plY3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxFbGVtZW50PntcbiAgcHJvamVjdExpc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgc2luZ2xlUHJvamVjdFdyYXBwZXI6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9qZWN0TGlzdElkOiBzdHJpbmcsIGFwcElkOiBzdHJpbmcsIHNpbmdsZVByb2plY3RJZDogc3RyaW5nLCAgcHJpdmF0ZSB0eXBlOiBcImFjdGl2ZVwiIHwgXCJmaW5pc2hlZFwiKSB7XG4gICAgc3VwZXIocHJvamVjdExpc3RJZCwgYXBwSWQpO1xuXG4gICAgdGhpcy5wcm9qZWN0TGlzdEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzIHVsJykhIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgIGNvbnN0IHNpbmdsZVByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpbmdsZVByb2plY3RJZCkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc2luZ2xlUHJvamVjdE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHNpbmdsZVByb2plY3RUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICB0aGlzLnNpbmdsZVByb2plY3RXcmFwcGVyID0gc2luZ2xlUHJvamVjdE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgdGhpcy5zZXR1cExpc3RlbmVycygpO1xuICB9XG5cbiAgYWxsb3dEcm9wKGU6IERyYWdFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBBdXRvYmluZFxuICBkcm9wKGU6IERyYWdFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIhLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgIHRoaXMucHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtkYXRhfVwiXWApISk7XG4gICAgcHJvamVjdFN0YXRlLnRvZ2dsZVByb2plY3QoK2RhdGEsIHRoaXMudHlwZSk7XG4gIH1cblxuICBkcmFnKGU6IERyYWdFdmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpITtcbiAgICBlLmRhdGFUcmFuc2ZlciEuc2V0RGF0YShcInRleHRcIiwgcHJvamVjdElkKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0c2A7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKSEuaW5uZXJIVE1MID0gYCR7dGhpcy50eXBlLnRvVXBwZXJDYXNlKCl9IFBST0pFQ1RTYDtcblxuICAgIHRoaXMucHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmFsbG93RHJvcCk7XG4gICAgdGhpcy5wcm9qZWN0TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy5kcm9wKTtcblxuICAgIGlmKHRoaXMudHlwZSA9PT0gXCJhY3RpdmVcIil7XG4gICAgICBjb25zdCBpbml0aWFsUHJvamVjdHMgPSBwcm9qZWN0U3RhdGUuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICAgIGZvcihjb25zdCBwcm9qZWN0IG9mIGluaXRpYWxQcm9qZWN0cykge1xuICAgICAgICB0aGlzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBwcm9qZWN0LnJlbmRlcigpO1xuXG4gICAgY29uc3QgbGkgPSB0aGlzLnNpbmdsZVByb2plY3RXcmFwcGVyLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGxpLmlubmVySFRNTCA9IHByb2plY3RDb250ZW50O1xuXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmlkLnRvU3RyaW5nKCkpO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmRyYWcpO1xuXG4gICAgdGhpcy5wcm9qZWN0TGlzdEVsZW1lbnQucHJlcGVuZChsaSk7XG4gIH1cblxuICBzZXR1cExpc3RlbmVycygpIHtcbiAgICBpZih0aGlzLnR5cGUgPT09IFwiYWN0aXZlXCIpe1xuICAgICAgcHJvamVjdFN0YXRlLmxpc3RlbmVycy5wdXNoKFxuICAgICAgICAocHJvamVjdDogUHJvamVjdCwgdHlwZSA6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmKHR5cGUgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cblxubmV3IFByb2plY3RJbnB1dCgncHJvamVjdC1pbnB1dCcsICdhcHAnKTtcbm5ldyBQcm9qZWN0TGlzdCgncHJvamVjdC1saXN0JywgJ2FwcCcsIFwic2luZ2xlLXByb2plY3RcIiwgXCJhY3RpdmVcIik7XG5uZXcgUHJvamVjdExpc3QoJ3Byb2plY3QtbGlzdCcsICdhcHAnLFwic2luZ2xlLXByb2plY3RcIiwgXCJmaW5pc2hlZFwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=