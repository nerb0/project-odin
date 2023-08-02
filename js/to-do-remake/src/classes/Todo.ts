import { format } from "date-fns";
import ProjectLibrary from "./ProjectLibrary";

export enum TodoStatus {
  "DONE" = "DONE",
  "IN_PROGRESS" = "IN_PROGRESS",
}

export enum TodoPriority {
  "HIGH" = 2,
  "MEDIUM" = 1,
  "LOW" = 0,
}

export default class Todo {
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
		ProjectLibrary.saveLocally();
  }
  toggleStatus() {
    this.status =
      this.status === TodoStatus.DONE
        ? TodoStatus.IN_PROGRESS
        : TodoStatus.DONE;
		ProjectLibrary.saveLocally();
		return this.status;
  }
  toggleImportant() {
    this.isImportant = !this.isImportant
		ProjectLibrary.saveLocally();
		return this.isImportant;
  }
  formatDueDate(targetFormat?: string) {
    return format(this.dueDate, targetFormat || "MMMM d, yyyy");
  }
}
