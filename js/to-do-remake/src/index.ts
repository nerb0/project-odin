import { IndexLayout } from "./components/Layout";
import Sidebar from "./components/Sidebar";
import { Project, ProjectController, Todo, TodoStatus } from "./classes";
import "./globals.css";
import { addDays, addWeeks } from "date-fns";

function Modal() {
  const container = document.createElement("div");
  container.id = "modal";
  container.className =
    "h-screen w-screen min-h-[900px] fixed top-0 left-0 opacity-0 bg-gray-950/50 z-50 invisible flex justify-center items-center \
		target:visible target:opacity-100 target:pointer-events-auto transition-opacity ease-in";
  container.innerHTML = `
		<div class="rounded-md w-[800px] bg-gray-700 shadow-md relative overflow-hidden">
			<a
				href="#"
				class="absolute top-2 right-4 text-gray-200 cursor-pointer text-2xl
					hover:text-white hover:font-bold hover:scale-110
					transition-all ease-in-out"
			>X</a>
			<div class="text-gray-200" id="modalContent">
				<div class="flex my-auto items-center justify-center text-2xl py-2">Hello</div>
			</div>
		</div>
	`;
  return container;
}


if(window.location.hash === "#modal") {
	window.location.hash = "";
	window.location.reload();
}

window.onload = () => {
	if (!localStorage.getItem("projectList")) {
		const project1 = new Project("Default Project");
		project1.todos = {
			0: new Todo(
				"First Todo",
				"This is the first todo",
				new Date(),
				1,
				TodoStatus.IN_PROGRESS,
				true
			),
			1: new Todo(
				"Second Todo",
				"This is the second todo",
				new Date(),
				1,
				TodoStatus.IN_PROGRESS
			),
			2: new Todo(
				"Third Todo",
				"This is the third todo",
				addDays(new Date(), 1),
				1,
				TodoStatus.DONE
			),
		};
		const project2 = new Project("Second Project");
		project2.todos = {
			0: new Todo(
				"Fifth Todo",
				"This is the first todo",
				addWeeks(new Date(), 2),
				1,
				TodoStatus.IN_PROGRESS
			),
			1: new Todo(
				"Fourth Todo",
				"This is the second todo",
				addWeeks(new Date(), 1),
				1,
				TodoStatus.DONE
			),
			2: new Todo(
				"Sixth Todo",
				"This is the third todo",
				addDays(new Date(), 2),
				1,
				TodoStatus.IN_PROGRESS
			),
		};
		ProjectController.projectList = {
			1: project1,
			2: project2
		};
		localStorage.setItem("projectList", JSON.stringify(ProjectController.projectList));
	} else {
		const retrievedProjects = JSON.parse(localStorage.getItem("projectList"));
		const transformedProjectList = Object.entries(retrievedProjects).reduce((acc, [projectId, retrievedProject]) => {
			const transformedProject = Object.assign(retrievedProject, Project.prototype);
			transformedProject.todos = Object.entries(transformedProject.todos).reduce((acc, [todoId, retrievedTodo]) => {
				const transformedTodo = Object.assign(retrievedTodo, Todo.prototype);
				transformedTodo.dueDate = new Date(transformedTodo.dueDate);
				return {...acc, [todoId]: transformedTodo};
			}, {} as Record<PropertyKey, Todo>);
			return {...acc, [projectId]: transformedProject};
		}, {} as Record<PropertyKey, Project>);
		ProjectController.projectList = transformedProjectList;
	}

  const root = document.getElementById("root");
  root.className =
    "flex h-screen w-screen items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800 md:min-h-[900px]";
  root.appendChild(Modal());
  root.appendChild(IndexLayout());
};
