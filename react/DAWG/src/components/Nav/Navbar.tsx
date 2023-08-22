import { useEffect, useState } from "react";
import {
	NavSectionOpenHandlerContext,
	SectionOpenHandler,
} from "../../contexts/NavSectionOpenHandler";
import { cn } from "../../util";
import { CartButton, CartItemList } from "../Cart";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavPlatformList from "./Sections/NavPlatformList";
import NavSection from "./Sections/NavSection";
import NavGenreList from "./Sections/NavGenres";
import { CartVisibilityContext } from "../../contexts/CartVisibilityContext";

type NavProps = {
	className?: string;
};

function SideNav({ sticky }: { sticky: boolean }) {
	const [openHandlers, setOpenHandlers] = useState<SectionOpenHandler[]>([]);

	return (
		<nav
			className={cn(
				"p-2 py-4 duration-300 fixed top-16 left-0 z-50 flex flex-col h-full gap-y-2 overflow-scroll",
				{
					"opacity-100": sticky,
					"pointer-events-none opacity-0": !sticky,
				}
			)}
		>
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
					<NavPlatformList />
					<NavGenreList />
				</NavSectionOpenHandlerContext.Provider>
				<div className="flex flex-col"></div>
			</div>
		</nav>
	);
}

function Nav({ sticky }: { sticky: boolean }) {
	const [isOpen, setOpened] = useState(false);

	return (
		<CartVisibilityContext.Provider value={{ isOpen, setOpened }}>
			<nav
				className={cn(
					"px-4 py-2 flex justify-between items-center transition-transform",
					{
						"translate-y-1/2 fixed -top-4 left-0 right-0": sticky,
						"translate-y-0": !sticky,
					}
				)}
			>
				<div className="w-36">
					<NavLogo link="/" />
				</div>
				<CartButton onClick={() => setOpened(true)} />
			</nav>
			<CartItemList />
		</CartVisibilityContext.Provider>
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
			<Nav sticky={isSticky} />
			<SideNav sticky={isSticky} />
		</>
	);
}
