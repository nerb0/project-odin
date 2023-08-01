import { ProjectController } from "../classes";
import Sidebar from "./Sidebar";
import TodoCard, { CreateTodoForm, EmptyTodoCard, TodoList } from "./Todo";

export function ContentLayout() {
  const header = document.createElement("div");
  header.id = "contentHeader";
  header.className = "text-2xl text-white font-extrabold text-center px-10";
  header.textContent = "All Tasks";

  const todoContainer = document.createElement("div");
  todoContainer.id = "todoContainer";
  todoContainer.className = "flex-1 flex flex-col mt-6";

	const todos = ProjectController.getTodos()
	if (todos.length ) {
		const todoNodes = todos.map(({ todo, id, projectId}) => TodoCard(todo, id, projectId));
		todoContainer.append(...todoNodes);
	} else {
		todoContainer.innerHTML = EmptyTodoCard;
	}

	const addTodoBtn = document.createElement("a");
	addTodoBtn.setAttribute('data-project', 'all')
	addTodoBtn.href = "#modal"
	addTodoBtn.id = "addTodoBtn"
	addTodoBtn.className = "bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded absolute right-0";
	addTodoBtn.textContent = "Add Todo";
	addTodoBtn.onclick = () => {
		const modal = document.getElementById("modalContent");
		modal.innerHTML = ``;
		modal.append(CreateTodoForm(addTodoBtn.getAttribute('data-project')))
	}

	const headerContainer = document.createElement("div");
	headerContainer.className = "flex justify-center relative fixed top-0 w-full";
	headerContainer.append(header, addTodoBtn);

  const container = document.createElement("div");
  container.className = "flex-1 flex flex-col p-2 bg-gray-700 text-gray-300 relative";
  container.append(headerContainer, todoContainer);

  return container;
}

export function IndexLayout() {
  const container = document.createElement("div");
  container.className =
    "rounded-md w-full lg:w-[1200px] flex overflow-hidden shadow-xl h-[700px]";

  const contentContainer = ContentLayout();
  const sidebar = Sidebar();

  container.appendChild(sidebar);
  container.appendChild(contentContainer);

  return container;
}
