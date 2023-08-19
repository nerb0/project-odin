import Navbar from "./Nav/Navbar";

type Props = {
	active?: string;
	children: React.ReactNode;
};

export default function Layout({ active, children }: Props) {
	return (
		<main className="bg-gradient-to-tr from-slate-800 to-slate-700 flex-1 flex flex-col min-h-screen">
			<Navbar />
			<div className="py-6 px-56 text-white flex flex-col gap-y-6">{children}</div>
		</main>
	);
}
