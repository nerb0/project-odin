// @ts-ignore
import ellipsis from "../images/ellipsis.svg";
// @ts-ignore
import star from "../images/star.svg";
// @ts-ignore
import starHalf from "../images/star-half.svg";
// @ts-ignore
import starOutline from "../images/star-outline.svg";
import  ProjectLibrary from "../classes/ProjectLibrary";
import { format, toDate } from "date-fns";
import { ActionMenu } from "./FloatingMenu";
import { TodoPriority, TodoStatus } from "../classes/Todo";

export const EmptyTodoCard = `<div class="flex-1 text-center" id="emptyTodo">No Tasks Found</div>`;

export function TodoList(
	todos: { todo: ITodo; id: string | number; projectId: PropertyKey }[]
) {
	const todoListRef = document.getElementById("todoContainer");
	if (todos.length == 0) {
		todoListRef.innerHTML = EmptyTodoCard;
	} else {
		todoListRef.innerHTML = "";
		const todoNodes = todos.map(({ todo, id, projectId }) =>
			TodoCard(todo, id, projectId)
		);
		todoListRef.append(...todoNodes);
	}
}

export function CreateTodoForm(projectId = "1") {
	const submit = document.createElement("input");
	submit.className =
		"outline-none bg-gray-700 hover:bg-gray-800 px-1 hover:px-2 rounded-r-md cursor-pointer transition-all";
	submit.type = "submit";
	submit.value = "Add";

	const container = document.createElement("form");
	container.className = "w-full flex-1 flex-col overflow-visible";
	container.innerHTML = `
		<div class="p-2 pr-10 bg-gray-800 text-lg">Add New Todo</div>
		<div class="[&_input]:bg-gray-800/50 [&_input]:py-1 [&_input]:px-2 [&_input]:rounded-md flex flex-col gap-y-3 p-2 text-md">
			<label>
				<span class="font-bold italic">Project: </span>
				<select placeholder="Title" class="px-2 py-1 rounded-md bg-gray-800/50" name="projectId" required>
					${Object.keys(ProjectLibrary.projectList)
			.reduce((acc, currId) => {
				const project = ProjectLibrary.projectList[currId];
				acc.push(
					`<option value="${currId}" ${projectId == currId && "selected"
					}>${project.name}</option>`
				);
				return acc;
			}, [])
			.join("")}
				</select>
			</label>
			<input type="text" name="title" placeholder="Title" required></input>
			<textarea class="min-h-[30px] max-h-[200px] resize-y bg-gray-800/50 py-1 px-2 rounded-md"  placeholder="Description" name="description" required></textarea>
			<div class="flex [&>label]:flex-1 [&>label]:items-center [&>label]:gap-x-2 [&>label]:flex [&_input]:flex-1 [&_select]:flex-1 gap-x-4">
				<label>
					<span class="font-bold italic">Due Date: </span>
					<input type="date" name="dueDate" placeholder="Due Date" min="${format(
				new Date(),
				"yyyy-MM-dd"
			)}" value="${format(new Date(), "yyyy-MM-dd")}"></input>
				</label>
				<label>
					<span class="font-bold italic" required>Priority: </span>
					<select class="px-2 py-1 rounded-md bg-gray-800/50" name="priority" required>
						${["LOW", "MEDIUM", "HIGH"]
			.map((priority, idx) => {
				return `<option value="${idx}" ${idx == 0 && "selected"
					}>${priority}</option>`;
			})
			.join("")}
					</select>
				</label>
			</div>
			<div class="flex justify-end items-center gap-x-4">
				<button type="submit" class="bg-gray-800/60 hover:bg-gray-800/80 cursor-pointer p-2 rounded-md">Add Todo</button>
				<a href="#" class="bg-gray-800/60 hover:bg-gray-800/80 cursor-pointer p-2 rounded-md">Cancel</a>
			</div>
		</div>
	`;

	container.onsubmit = function(e) {
		e.preventDefault();
		const formData = new FormData(container);
		const todoList = document.getElementById("todoContainer");
		const newTodo = ProjectLibrary.projectList[
			formData.get("projectId") as string
		].createTodo(
			formData.get("title") as string,
			formData.get("description") as string,
			new Date(formData.get("dueDate") as string),
			formData.get("priority") as unknown as TodoPriority
		);

		const emptyTodo = document.getElementById("emptyTodo");
		if (emptyTodo) emptyTodo.remove();

		// todoList.append(
		// 	TodoCard(
		// 		newTodo,
		// 		ProjectController.projectList[formData.get("projectId") as string]
		// 			.currentTodoId,
		// 		formData.get("projectId") as string
		// 	)
		// );
		const showControl = document.getElementById("addTodoBtn").getAttribute("data-show-control");
		document.getElementById(showControl).click();
		container.reset();
		window.location.href = "#";
	};

	return container;
}

export default function TodoCard(
	todo: ITodo,
	id: string | number,
	projectId: PropertyKey
) {
	const title = document.createElement("div");
	title.className = `flex group relative items-center gap-x-4 flex-1
		${todo.status === TodoStatus.DONE && "line-through text-gray-500/80"}`;
	title.innerHTML = `
		<div class="text-md flex-1 cursor-pointer hover:underline" id="todoTitle">
			${todo.title}
		</div>
		<div class="text-sm italic" id="todoDueDate">${todo.formatDueDate()}</div>
		<img
			src="${todo.isImportant ? star : starOutline}"
			class="h-5 invert cursor-pointer" id="toggleImportant"
		/>
	`;

	const { container: actionMenu, deleteBtn, editBtn } = ActionMenu(id);
	const actionIcon = document.createElement("img");
	actionIcon.className =
		"cursor-pointer h-6 invert opacity-50 hover:opacity-100 hover:scale-105 transition-all ease-in-out";
	actionIcon.src = ellipsis;
	actionIcon.onclick = function(e) {
		actionMenu.classList.toggle("invisible");
	};
	const actionContainer = document.createElement("div");
	actionContainer.className = "flex items-center relative";
	actionContainer.append(actionMenu, actionIcon);

	editBtn.onclick = function(e) {
		title.children[0].dispatchEvent(new MouseEvent("click"));
		actionMenu.classList.add("invisible");

		const modal = document.getElementById("modalContent");
		modal.querySelector("#todoEdit").dispatchEvent(new MouseEvent("click"));
	};

	deleteBtn.onclick = function(e) {
		ProjectLibrary.projectList[projectId].deleteTodo(id);
		const todoList = container.parentElement;
		container.remove();
		if(!todoList.children.length) {
			todoList.innerHTML = EmptyTodoCard;
		}
	};

	title.appendChild(actionContainer);

	const titleImportantBtn =
		title.querySelector<HTMLImageElement>("#toggleImportant");
	titleImportantBtn.onmouseout = () => {
		titleImportantBtn.src = todo.isImportant ? star : starOutline;
	};
	titleImportantBtn.onmouseover = () => {
		titleImportantBtn.src = starHalf;
	};
	titleImportantBtn.onclick = (e) => {
		titleImportantBtn.src = todo.toggleImportant() ? star : starOutline;
	};
	title.children[0].addEventListener("click", function(e) {
		const modal = document.getElementById("modalContent");
		window.location.assign("#modal");
		modal.innerHTML = `
			<form class="flex flex-col gap-y-2">
				<div class="font-bold pr-10 text-lg p-2 bg-gray-800">
					<h3 id="todoTitle" name="title">
						${todo.title}
					</h3>
				</div>
				<div class="p-2 text-md flex flex-col gap-y-2 [&>div]:flex [&>div]:gap-x-2 [&>div>:last-child]:flex-1">
					<div>
						<span class="italic font-bold">Due Date: </span>
						<span id="todoDueDate" name="dueDate">${todo.formatDueDate()}</span>
					</div>
					<div class="overflow-y-scroll">
						<span class="italic font-bold">Description: </span>
						<pre id="todoDescription" class="max-h-[300px] overflow-y-auto break-words whitespace-pre-wrap" name="description">${todo.description
			}</pre>
					</div>
					<div>
						<span class="italic font-bold">Priority: </span>
						<span id="todoPriority" name="priority">${TodoPriority[todo.priority]}</span>
					</div>
				</div>
				<div class="flex gap-x-4 p-2 justify-end items-center">
					<img
						src="${todo.isImportant ? star : starOutline}"
						class="h-6 invert cursor-pointer"
						id="toggleImportant"
					/>
					<button class="p-2 bg-gray-600 hover:bg-gray-800 rounded-md text-white" id="todoEdit">Edit</button>
					<a href="#" class="p-2 bg-gray-600 hover:bg-gray-800 rounded-md text-white" id="todoCancel">Close</a>
				</div>
			</form>
		`;

		const todoTitle = modal.querySelector("#todoTitle");
		const todoDueDate = modal.querySelector("#todoDueDate");
		const todoDescription = modal.querySelector("#todoDescription");
		const todoPriority = modal.querySelector("#todoPriority");

		const todoTitleInput = document.createElement("input");
		const todoDueDateInput = document.createElement("input");
		const todoDescriptionInput = document.createElement("textarea");
		const todoPriorityInput = document.createElement("select");
		todoTitleInput.type = "text";
		todoTitleInput.placeholder = "Title";
		todoDueDateInput.type = "date";
		todoDueDateInput.placeholder = "Due Date";
		todoDescriptionInput.placeholder = "Description...";
		todoDescriptionInput.rows = 1;
		todoDescriptionInput.className = "resize-y";
		todoPriorityInput.innerHTML = `
			<option value="0">Low</option>
			<option value="1">Medium</option>
			<option value="2">High</option>
		`;

		const inputs = [
			todoTitleInput,
			todoDueDateInput,
			todoDescriptionInput,
			todoPriorityInput,
		];
		const values = [todoTitle, todoDueDate, todoDescription, todoPriority];

		const todoCancel = modal.querySelector("#todoCancel");
		const todoEdit = modal.querySelector("#todoEdit");
		const todoEditApplyBtn = document.createElement("button");
		todoEditApplyBtn.className = `${todoEdit.className} bg-green-800 hover:bg-green-900`;
		todoEditApplyBtn.textContent = "Apply";
		todoEditApplyBtn.addEventListener("click", function(e) {
			e.preventDefault();
			todo.edit({
				title: todoTitleInput.value,
				dueDate: new Date(todoDueDateInput.value),
				description: todoDescriptionInput.value,
				priority: todoPriorityInput.value as unknown as TodoPriority,
			});

			todoEditApplyBtn.replaceWith(todoEdit);
			todoCancelBtn.replaceWith(todoCancel);

			title.querySelector("#todoTitle").textContent = todo.title;
			title.querySelector("#todoDueDate").textContent = todo.formatDueDate();
			todoTitle.textContent = todo.title;
			todoDueDate.textContent = todo.formatDueDate();
			todoPriority.textContent = TodoPriority[todo.priority];
			todoDescription.textContent = todo.description;

			inputs.forEach((prop, idx) => {
				prop.replaceWith(values[idx]);
			});
		});

		const todoCancelBtn = document.createElement("button");
		todoCancelBtn.className = `${todoCancel.className} bg-red-900/40 hover:bg-red-900/60`;
		todoCancelBtn.textContent = "Cancel";
		todoCancelBtn.addEventListener("click", function(e) {
			e.preventDefault();
			todoEditApplyBtn.replaceWith(todoEdit);
			todoCancelBtn.replaceWith(todoCancel);
			inputs.forEach((prop, idx) => {
				prop.replaceWith(values[idx]);
			});
		});

		todoEdit.addEventListener("click", function(e) {
			e.preventDefault();
			todoDescriptionInput.textContent = todo.description;
			todoEdit.replaceWith(todoEditApplyBtn);
			todoCancel.replaceWith(todoCancelBtn);

			todoDueDateInput.value = todo.formatDueDate("yyyy-MM-dd");
			todoTitleInput.value = todo.title;
			todoPriorityInput.selectedIndex = todo.priority;
			todoDescriptionInput.textContent = todo.description;

			values.forEach((prop, idx) => {
				inputs[idx].className =
					"bg-gray-800/20 rounded-md animate-slide-left p-1";
				prop.replaceWith(inputs[idx]);
			});
		});

		const modalImportantBtn =
			modal.querySelector<HTMLImageElement>("#toggleImportant");
		modalImportantBtn.onmouseout = () => {
			modalImportantBtn.src = todo.isImportant ? star : starOutline;
		};
		modalImportantBtn.onmouseover = () => {
			modalImportantBtn.src = starHalf;
		};
		modalImportantBtn.onclick = (e) => {
			todo.toggleImportant();
			titleImportantBtn.src = todo.isImportant ? star : starOutline;
			modalImportantBtn.src = todo.isImportant ? star : starOutline;
		};
	});

	const statusToggle = document.createElement("input");
	statusToggle.className = "h-4 aspect-square cursor-pointer";
	statusToggle.type = "checkbox";
	statusToggle.checked = todo.status === TodoStatus.DONE;
	statusToggle.onclick = function(e) {
		todo.toggleStatus();
		if (todo.status === TodoStatus.DONE) {
			title.classList.add("line-through", "text-gray-500/80");
		} else {
			title.classList.remove("line-through", "text-gray-500/80");
		}
	};

	const container = document.createElement("div");
	container.id = `todo-${id}`;
	container.className =
		"flex relative p-2 hover:bg-gray-800/50 rounded-md group gap-x-2 items-center";
	container.append(statusToggle, title);

	return container;
}
