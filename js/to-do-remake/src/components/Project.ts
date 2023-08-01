// @ts-ignore
import ellipsis from "../images/ellipsis.svg";
// @ts-ignore
import check from "../images/checkmark-outline.svg";
// @ts-ignore
import cross from "../images/close-outline.svg";
import { ProjectController as ProjectController } from "../classes";
import TodoCard, { TodoList } from "./Todo";
import { ActionMenu } from "./FloatingMenu";

export function CreateProjectForm() {
	const input = document.createElement("input");
	input.required = true;
	input.className =
		"outline-none bg-gray-700 hover:bg-gray-800/80 focus:bg-gray-800 rounded-l-md w-[200px] p-1";
	input.placeholder = "Project Name";

	const submit = document.createElement("input");
	submit.className =
		"outline-none bg-gray-700 hover:bg-gray-800 px-1 hover:px-2 rounded-r-md cursor-pointer transition-all";
	submit.type = "submit";
	submit.value = "Add";

	const container = document.createElement("form");
	container.className =
		"w-full flex-1 flex animate-slide-right overflow-visible";
	container.append(input, submit);

	container.onsubmit = function(e) {
		e.preventDefault();
		const projectList = document.getElementById("projectList");
		const project = ProjectController.createProject(input.value);

		projectList.append(
			ProjectCard(project, ProjectController.currentProjectId)
		);

		const emptyProject = document.getElementById("emptyProject");
		if (emptyProject) emptyProject.remove();

		container.reset();
		container.remove();
	};

	return container;
}

export const EmptyProjectCard = "<div class='text-center text-gray-400' id='emptyProject'>No Projects Found</div>";

export default function ProjectCard(project: IProject, id: string | number) {
	const actionContainer = document.createElement("div");
	actionContainer.className = "relative flex items-center";

	const { container: actionMenu, deleteBtn, editBtn } = ActionMenu(id);

	const actionIcon = document.createElement("img");
	actionIcon.className =
		"h-6 invert opacity-50 hover:opacity-100 hover:scale-105 transition-all ease-in-out cursor-pointer";
	actionIcon.src = ellipsis;

	const title = document.createElement("div");
	title.id = `project-${id}`;
	title.className =
		"text-md flex-1 cursor-pointer text-ellipsis overflow-hidden line-clamp-1";
	title.textContent = project.name;

	const container = document.createElement("div");
	container.className =
		"flex relative p-2 rounded-md group \
		before:content-['>'] before:absolute before:-left-5 before:opacity-0 \
		hover:before:opacity-70 hover:before:-left-4 \
		[&.active-link]:before:opacity-100 [&.active-link]:before:-left-2 before:transition-all before:ease-in-out";

	title.onclick = function(e) {
		const contentHeaderRef = document.getElementById("contentHeader");
		const active = document.querySelector(".active-link");
		const addTodoBtn = document.getElementById("addTodoBtn");

		if (active) active.classList.remove("active-link");
		container.classList.add("active-link");
		addTodoBtn.setAttribute("data-project", `${id}`);
		addTodoBtn.setAttribute("data-show-control", title.id);
		contentHeaderRef.textContent = project.name;
		TodoList(ProjectController.getProjectTodos(id))
	};

	actionIcon.onclick = function(e) {
		actionMenu.classList.toggle("invisible");
	};

	editBtn.onclick = function(e) {
		const editInput = document.createElement("input");
		editInput.className =
			"bg-gray-700 hover:bg-gray-800/80 focus:bg-gray-800 rounded-md w-[170px] p-1";
		editInput.placeholder = "Project Name";
		editInput.value = project.name;

		const applyEditBtn = document.createElement("img");
		applyEditBtn.className = "hover:bg-purple-400 rounded-full";
		applyEditBtn.src = check;

		const cancelEditBtn = document.createElement("img");
		cancelEditBtn.src = cross;
		cancelEditBtn.className = "hover:bg-sky-400 rounded-full";

		const actionContainer = document.createElement("div");
		actionContainer.className =
			"flex gap-x-1 items-center [&>img]:cursor-pointer [&>img]:invert [&>img]:h-5 px-1";
		actionContainer.append(applyEditBtn, cancelEditBtn);

		title.replaceWith(editInput);
		actionIcon.replaceWith(actionContainer);
		actionMenu.classList.add("invisible");

		cancelEditBtn.onclick = function(e) {
			editInput.replaceWith(title);
			actionContainer.replaceWith(actionIcon);
		};

		applyEditBtn.onclick = function(e) {
			project.edit(editInput.value);
			title.textContent = project.name;

			editInput.replaceWith(title);
			actionContainer.replaceWith(actionIcon);

			const contentProjectId = document
				.querySelector("#addTodoBtn")
				.getAttribute("data-project");
			if (contentProjectId == id) {
				document.querySelector("#contentHeader").textContent = project.name;
			}
		};
	};

	deleteBtn.onclick = function(e) {
		const project = ProjectController.deleteProject(id);

		const projectList = container.parentElement;
		if (project) {
			const newCard = ProjectCard(project, ProjectController.currentProjectId);
			projectList.append(ProjectCard(project, ProjectController.currentProjectId))
		}
		const showControl = document.getElementById("addTodoBtn").getAttribute("data-show-control");
		console.log(showControl);
		if (container.classList.contains("active-link")) {
			document.getElementById("__all__").click();
		} else if (["__all__", "__today__", "__thisWeek__", "__important__"].includes(showControl)) {
			document.getElementById(showControl).click();
		}
		container.remove();
	};

	container.append(title, actionContainer);
	actionContainer.append(actionMenu, actionIcon);

	return container;
}
