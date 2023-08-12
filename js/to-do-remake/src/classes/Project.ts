import ProjectLibrary from "./ProjectLibrary";
import Todo, { TodoPriority, TodoStatus } from "./Todo";

export default class Project {
	name: string;
	currentTodoId: number = 1;
	todos: Record<PropertyKey, Todo>;

	constructor(name: string, todos: Record<PropertyKey, Todo> = {}) {
		this.name = name;
		this.todos = todos;
	}

	edit(name: string) {
		this.name = name;
		ProjectLibrary.saveLocally();
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
		ProjectLibrary.saveLocally();
		return this.todos[this.currentTodoId];
	}
	deleteTodo(id: string | number) {
		delete this.todos[id];
		ProjectLibrary.saveLocally();
	}
}
