import { useCVContext } from "../../../contexts/CVContext";
import TextInput from "./Input";

export default function NameInput() {
	const { info, cvHandler: setCVInfo } = useCVContext();
	return (
		<TextInput
			id="cvName"
			type="text"
			label="Full Name"
			value={info.bio.name}
			maxLength={30}
			onChange={(e) => {
				setCVInfo({ ...info, bio: { ...info.bio, name: e.target.value } });
			}}
		/>
	);
}
