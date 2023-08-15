import EyeIcon from "../icons/Eye";
import { SVGProps } from "react";
import EyeSlashIcon from "../icons/EyeSlash";

interface Props extends SVGProps<SVGSVGElement> {
	visible: boolean;
}

export default function VisibilityToggle({ visible, ...props }: Props) {
	return visible ? <EyeIcon {...props} /> : <EyeSlashIcon {...props} />;
}
