import { useCVContext } from "../../../contexts/CVContext";
import TextInput from "./Input";

export default function EmailInput() {
	const { info, cvHandler: setCVInfo } = useCVContext();
	return (
		<TextInput
			id="cvEmail"
			type="email"
			label="Email"
			value={info.bio.email}
			maxLength={30}
			onChange={(e) => {
				setCVInfo({ ...info, bio: { ...info.bio, email: e.target.value } });
			}}
		/>
	);
}
