import { useCVContext } from "../../../contexts/CVContext";
import TextInput from "./Input";

export default function AddressInput() {
	const { info, cvHandler: setCVInfo } = useCVContext();
	return (
		<TextInput
			id="cvAddress"
			type="string"
			label="Address"
			value={info.bio.address}
			maxLength={40}
			onChange={(e) => {
				setCVInfo({ ...info, bio: { ...info.bio, address: e.target.value } });
			}}
		/>
	);
}
