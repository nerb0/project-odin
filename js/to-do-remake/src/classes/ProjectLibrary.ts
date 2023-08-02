import { addDays, addWeeks, format } from "date-fns";
import Project from "./Project";
import Todo from "./Todo";

export default class ProjectLibrary {
  static projectList: Record<PropertyKey, Project>;
	static currentProjectId: number = 1;

  static getTodos({
    projectFilter,
    todoFilter,
  }: {
    projectFilter?: (project: Project) => boolean;
    todoFilter?: (todo: Todo) => boolean;
  } = {}) {
    return Object.keys(this.projectList).reduce((acc, projectId) => {
      const project = this.projectList[projectId];
      if (!projectFilter || projectFilter(project)) {
        for (const todoId in project.todos) {
          if (!todoFilter || todoFilter(project.todos[todoId])) {
            acc.push({ todo: project.todos[todoId], id: todoId, projectId })
          }
        }
      }
      return acc;
    }, [] as { todo: Todo; id: string, projectId: PropertyKey }[]);
  }

  static getProjectTodos(projectId: PropertyKey) {
    const project = this.projectList[projectId];
    return Object.keys(project.todos).reduce((acc, todoId) => {
      const todo = project.todos[todoId];
      acc.push({ todo, id: todoId, projectId });
      return acc;
    }, [] as { todo: Todo; id: string; projectId: PropertyKey }[]);
  }

	static saveLocally() {
		localStorage.setItem("projectList", JSON.stringify(this.projectList));
	}

	static createProject(name: string) {
    while (this.projectList[this.currentProjectId]) {
      this.currentProjectId += 1;
    }
		this.projectList[this.currentProjectId] = new Project(name);
		this.saveLocally();
		return this.projectList[this.currentProjectId];
	}

	static deleteProject(id: PropertyKey) {
		delete this.projectList[id];
		if (!Object.keys(this.projectList).length) {
			this.currentProjectId = 1
			return this.createProject("Default Project");
		}
		this.saveLocally();
		return false;
	}
}
