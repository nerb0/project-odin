import { isThisWeek, isToday } from "date-fns";
import { ProjectController } from "../classes";
import ProjectCard, { CreateProjectForm, EmptyProjectCard } from "./Project";
import TodoCard, { TodoList } from "./Todo";

function Sidelink(
  title: string,
  filter: {
    projectFilter?: (project: IProject) => boolean;
    todoFilter?: (todo: ITodo) => boolean;
		active?: boolean
  } = {
		active: false
	},
	project: string,
) {
  const container = document.createElement("div");
	container.id = `${project}`;
  container.className =
    `font-bold text-xl mb-2 hover:translate-x-2 transition-all ease-in cursor-pointer ${filter.active && "active-link"}`;
  container.textContent = `${title}`;
  container.addEventListener("click", function (e) {
    const todoListRef = document.getElementById("todoContainer");
    const contentHeaderRef = document.getElementById("contentHeader");
		const active = document.querySelector('.active-link');
		const addTodoBtn = document.getElementById("addTodoBtn");
		if (active) active.classList.remove('active-link');
		addTodoBtn.setAttribute("data-show-control", container.id);
		addTodoBtn.removeAttribute("data-project");
		container.classList.add('active-link');
		contentHeaderRef.textContent = title;
    TodoList(ProjectController.getTodos(filter))
  });
  return container;
}


export default function Sidebar() {
  const allTask = Sidelink("All Tasks", {
		active: true
	}, "__all__");
  const today = Sidelink("Today", {
    todoFilter: (todo: ITodo) => isToday(todo.dueDate),
  }, "__today__");
  const thisWeek = Sidelink("This Week", {
    todoFilter: (todo: ITodo) => isThisWeek(todo.dueDate),
  }, "__thisWeek__");
  const important = Sidelink("Important", {
		todoFilter: (todo: ITodo) => todo.isImportant
	}, "__important__");

  const defaultContainer = document.createElement("div");
  defaultContainer.className = "flex flex-col mb-2 [&>.active-link]:translate-x-4";
	defaultContainer.append(allTask, today, thisWeek, important)

	const projectForm = CreateProjectForm();
  const projectsHeader = document.createElement("h3");
  const projectList = document.createElement("div");
  const projectAddBtn = document.createElement("button");
  projectsHeader.className = "font-extrabold text-xl mb-2 text-left w-full";
  projectsHeader.textContent = "Projects";
  projectAddBtn.className =
    "w-7 aspect-square bg-gray-700 rounded-full text-gray-200 absolute right-0 top-2 text-2xl \
		hover:text-white hover:bg-gray-800 \
		transition-all duration-200 ease-in-out";
	projectAddBtn.textContent = "+";
	projectAddBtn.addEventListener('click', function(e) {
		if (projectsContainer.contains(projectForm)) {
			projectForm.remove()
		} else {
			projectsContainer.insertBefore(projectForm, projectList)
		}
	})
  projectList.className = "overflow--scroll flex flex-col w-full gap-y-1 pl-4";
  projectList.id = "projectList";
  projectList.append(
		...Object.keys(ProjectController.projectList).map((id) =>
			ProjectCard(ProjectController.projectList[id], id)
		)
  );

  const projectsContainer = document.createElement("div");
  projectsContainer.className =
    "flex flex-col items-center border-transparent relative py-2 \
		after:absolute after:content-[''] after:h-[2px] after:bg-gray-700 after:top-0 after:left-0 after:right-0";
	projectsContainer.append(projectsHeader, projectList, projectAddBtn)

  const sidebar = document.createElement("nav");
	sidebar.append(...[defaultContainer, projectsContainer])
  sidebar.className =
    "bg-gray-600 w-[300px] h-full flex flex-col px-6 py-2 font-semibold text-gray-200";
  return sidebar;
}
