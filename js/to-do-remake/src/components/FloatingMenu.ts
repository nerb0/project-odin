export function ActionMenu(id: PropertyKey) {
	const container = document.createElement("div");
	container.className =
		"rounded-md bg-gray-700/80 p-2 flex gap-x-2 invisible absolute left-[-135px] [&:not(.invisible)]:animate-slide-right";

	const deleteBtn = document.createElement("button");
	deleteBtn.className =
		"bg-red-500 hover:bg-red-600 rounded-md px-2 py-1 text-sm text-white";
	deleteBtn.textContent = "Delete";

	const editBtn = document.createElement("button");
	editBtn.className =
		"bg-gray-500 hover:bg-gray-600 rounded-md px-2 py-1 text-sm text-white";
	editBtn.textContent = "Edit";

	container.append(deleteBtn, editBtn);

	return { container, deleteBtn, editBtn }
}
