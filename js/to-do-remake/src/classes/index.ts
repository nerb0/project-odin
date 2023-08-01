import { addDays, addWeeks, format } from "date-fns";

export enum TodoStatus {
  "DONE" = "DONE",
  "IN_PROGRESS" = "IN_PROGRESS",
}

export enum TodoPriority {
  "HIGH" = 2,
  "MEDIUM" = 1,
  "LOW" = 0,
}

class Project {
  name: string;
  currentTodoId: number = 1;
  todos: Record<PropertyKey, Todo>;

  constructor(name: string) {
    this.name = name;
    this.todos = {};
  }

	edit(name: string) {
		this.name = name;
		ProjectController.saveLocally();
	}
  createTodo(
    title: string,
    description: string,
    dueDate: Date,
    priority: TodoPriority,
    status: TodoStatus = TodoStatus.IN_PROGRESS
  ) {
    while (this.todos[this.currentTodoId]) {
      this.currentTodoId += 1;
    }
    this.todos[this.currentTodoId] = new Todo(
      title,
      description,
      dueDate,
      priority,
      status
    );
		ProjectController.saveLocally();
    return this.todos[this.currentTodoId];
  }
	deleteTodo(id: string | number) {
		delete this.todos[id];
		ProjectController.saveLocally();
	}
}

class Todo {
  title: string;
  description: string;
  dueDate: Date;
  priority: TodoPriority;
  status: TodoStatus;
  isImportant: boolean;

  constructor(
    title: string,
    description: string,
    dueDate: Date,
    priority: TodoPriority,
    status: TodoStatus,
    isImportant: boolean = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.isImportant = isImportant;
  }

  edit({ title, description, dueDate, priority, status }: Partial<Todo>) {
    this.title = title || this.title;
    this.description = description || this.description;
    this.dueDate = dueDate || this.dueDate;
    this.priority = priority || this.priority;
    this.status = status || this.status;
		ProjectController.saveLocally();
  }
  toggleStatus() {
    this.status =
      this.status === TodoStatus.DONE
        ? TodoStatus.IN_PROGRESS
        : TodoStatus.DONE;
		ProjectController.saveLocally();
		return this.status;
  }
  toggleImportant() {
    this.isImportant = !this.isImportant
		ProjectController.saveLocally();
		return this.isImportant;
  }
  formatDueDate(targetFormat?: string) {
    return format(this.dueDate, targetFormat || "MMMM d, yyyy");
  }
}


class ProjectController {
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

export { ProjectController, Todo, Project };
