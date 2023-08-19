type Props = {
	children: React.ReactNode;
	href: string;
};

export default function NavLink({ children, href }: Props) {
	return (
		<a href={href} className="px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-colors">
			{children}
		</a>
	);
}
