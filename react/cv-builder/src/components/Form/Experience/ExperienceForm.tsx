import { format } from "date-fns";
import { useState } from "react";
import { useExperienceDataContext } from "../../../contexts/ExperienceDataContext";
import FormInput from "../Input";

export default function FormCard() {
	const {
		data,
		updateCVHandler: updateCV,
		editabilityHandler: setEditable,
	} = useExperienceDataContext();
	const [newData, setNewData] = useState(data);

	function handleChange(editData: Omit<Partial<CVExperience>, "id">) {
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
		<div className="px-2 py-3 flex flex-col gap-y-2 [&_input]:px-2 [&_input]:rounded-md [&_input]:border-gray-400 [&_input]:border [&_input]:text-sm animate-dropdown">
			<FormInput
				id="inputCompany"
				label="Company"
				type="text"
				defaultValue={data.company}
				onChange={(e) => {
					handleChange({ company: e.target.value });
				}}
			/>
			<FormInput
				label="Job Position"
				type="text"
				defaultValue={data.position}
				onChange={(e) => {
					handleChange({ position: e.target.value });
				}}
			/>
			<div>
				<h6 className="text-sm">Job Duration:</h6>
				<div className="flex items-center gap-x-4">
					<input
						type="date"
						className="text-center flex-1"
						defaultValue={format(data.start, "yyyy-MM-dd")}
						onChange={(e) => handleChange({ start: new Date(e.target.value) })}
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
							onChange={(e) => handleChange({ end: new Date(e.target.value) })}
						/>
					)}
				</div>
			</div>
			<FormInput
				label="Address"
				defaultValue={data.address}
				onChange={(e) => {
					newData.address = e.target.value;
					setNewData(newData);
				}}
			/>
			<div>
				<h6 className="text-sm">Summary:</h6>
				<div className="flex flex-col gap-y-2">
					{data.summary.map((description, index) => (
						<textarea
							className="rounded-md border-gray-400 border rounded-md resize-none px-1 text-sm"
							key={index}
							onChange={(e) => {
								setNewData({
									...newData,
									summary: newData.summary.map((summary, i) =>
										i == index ? e.target.value : summary
									),
								});
							}}
						>
							{description}
						</textarea>
					))}
				</div>
			</div>
			<div className="flex justify-end gap-x-4 [&>button]:rounded-md [&>button]:px-4 [&>button]:py-1 font-bold">
				<button
					className="mr-auto rounded-md border-gray-600 border-2 hover:bg-gray-600 hover:text-white transition-colors"
					onClick={() => {
						handleVisibility(!newData.visible);
					}}
				>
					{newData.visible ? "Hide" : "Show"}
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
