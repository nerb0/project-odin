import NavSection from "./NavSection";
import NavLink from "../NavLink";
import browseList from "../../../data/browseList";

export default function NavBrowseList() {
	return (
		<NavSection title="Browse">
			{browseList.map((link) => (
				<NavLink href={link.slug}>{link.name}</NavLink>
			))}
		</NavSection>
	);
}
