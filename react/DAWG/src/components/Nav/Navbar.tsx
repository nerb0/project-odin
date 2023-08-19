import { useEffect, useState } from "react";
import {
	NavSectionOpenHandlerContext,
	SectionOpenHandler,
} from "../../contexts/NavSectionOpenHandler";
import { cn } from "../../util";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavBrowseList from "./Sections/NavBrowse";
import NavPlatformList from "./Sections/NavPlatformList";
import NavSection from "./Sections/NavSection";

type NavProps = {
	className?: string;
};

function StickyNav({ sticky }: { sticky: boolean }) {
	const [openHandlers, setOpenHandlers] = useState<SectionOpenHandler[]>([]);

	return (
		<nav
			className={cn(
				"p-4 duration-300 fixed top-0 left-0 z-50 flex flex-col h-screen min-h-full gap-y-2",
				{
					"opacity-100": sticky,
					"pointer-events-none opacity-0": !sticky,
				}
			)}
		>
			<div
				className={cn("w-fit transition-transform flex", {
					"translate-y-0": sticky,
					"-translate-y-1/2": !sticky,
				})}
			>
				<NavLogo link="/" />
			</div>
			<div
				className={cn("transition-transform flex flex-col gap-y-4", {
					"translate-x-0": sticky,
					"-translate-x-1/2": !sticky,
				})}
			>
				<a
					href="/all-games"
					className="text-3xl font-extrabold text-white hover:bg-orange-500 px-2 py-1 rounded-md transition-colors text-center"
				>
					All Games
				</a>
				<NavSectionOpenHandlerContext.Provider
					value={{
						sectionHandlers: openHandlers,
						setSectionHandlers: setOpenHandlers,
					}}
				>
					<NavSection title="Top">
						<NavLink href="/this-month">This Month</NavLink>
						<NavLink href="/this-year">This Year</NavLink>
						<NavLink href="/all-time">All Time</NavLink>
					</NavSection>
					<NavBrowseList />
					<NavPlatformList />
				</NavSectionOpenHandlerContext.Provider>
				<div className="flex flex-col"></div>
			</div>
		</nav>
	);
}

function Nav() {
	return (
		<nav className="p-4">
			<NavLogo link="/" />
		</nav>
	);
}

export default function Navbar() {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			setIsSticky(window.pageYOffset > 200);
		});
	});

	return (
		<>
			<Nav />
			<StickyNav sticky={isSticky} />
		</>
	);
}
