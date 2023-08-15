import { format } from "date-fns";
import { useState } from "react";
import { useEducationDataContext } from "../../../contexts/EducationDataContext";
import VisibilityToggle from "../../VisibilityToggle";

export default function FormCard() {
	const {
		data,
		updateCVHandler: updateCV,
		editabilityHandler: setEditable,
	} = useEducationDataContext();
	const [newData, setNewData] = useState(data);

	function handleChange(editData: Omit<Partial<CVEducation>, "id">) {
		setNewData({ ...newData, ...editData });
	}
	function handleVisibility(visibility: boolean) {
		setNewData({ ...newData, visible: visibility });
		updateCV(newData);
	}
	function saveData() {
		updateCV(newData);
		setEditable(false);
	}

	return (
		<div className="px-2 py-3 flex flex-col gap-y-3 [&_input]:px-2 [&_input]:rounded-md [&_input]:border-gray-400 [&_input]:border animate-dropdown">
			<input
				type="text"
				className="text-lg font-bold"
				defaultValue={data.university}
				onChange={(e) => {
					handleChange({ university: e.target.value });
				}}
			/>
			<div className="flex items-center gap-x-4">
				<input
					type="date"
					className="text-center flex-1"
					defaultValue={format(data.start, "yyyy-MM-dd")}
					onChange={(e) => handleChange({ degree: e.target.value })}
				/>
				<span>-</span>
				{typeof data.end == "string" ? (
					<input
						type="text"
						className="text-center flex-1"
						value={data.end}
						readOnly
					/>
				) : (
					<input
						type="Date"
						className="text-center flex-1"
						defaultValue={format(data.end, "yyyy-MM-dd")}
						onChange={(e) => handleChange({ start: new Date(e.target.value) })}
					/>
				)}
			</div>
			<input
				defaultValue={data.degree}
				onChange={(e) => handleChange({ degree: e.target.value })}
			/>
			<input
				defaultValue={data.address}
				onChange={(e) => {
					newData.address = e.target.value;
					setNewData(newData);
				}}
			/>
			<div className="flex justify-end gap-x-4 [&>button]:rounded-md [&>button]:px-4 [&>button]:py-1 font-bold">
				<button
					className="mr-auto"
					onClick={() => {
						handleVisibility(!newData.visible);
					}}
				>
					<div className="flex gap-x-2 items-center">
						<VisibilityToggle
							className="h-4 fill-gray-800"
							visible={newData.visible}
						/>
						{newData.visible ? "Hide" : "Show"}
					</div>
				</button>
				<button
					className="bg-green-500 hover:bg-green-600 text-white"
					onClick={saveData}
				>
					Save
				</button>
				<button
					className="bg-gray-500 hover:bg-gray-600 text-white"
					onClick={() => setEditable(false)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
