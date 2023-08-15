import { useCVContext } from "../../../contexts/CVContext";
import TextInput from "./Input";

export default function PhoneInput() {
	const { info, cvHandler: setCVInfo } = useCVContext();
	return (
		<TextInput
			id="cvPhone"
			type="tel"
			label="Phone Number"
			value={info.bio.phone_number}
			maxLength={30}
			onChange={(e) => {
				setCVInfo({ ...info, bio: { ...info.bio, phone_number: e.target.value } });
			}}
		/>
	);
}
